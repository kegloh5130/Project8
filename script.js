/**
 * This takes a page Name and loads a file 
 * with that name in pages folder, it will loaded in main in index.html
 * @param {String} page 
 */
function switchPage(page) {
    const isPageDes = page.includes("des");
    const existPage = pagesData.findIndex((item) => {
        return Object.keys(item)[0].includes(page);
    });
    // If a page already exist in pagesData then it will not request for that page
    if (existPage !== -1) {
        $("main").html(pagesData[existPage][page]);
        history.pushState(null, '', `/pages/${page}.html`);
        $("title").text(titleCase(page));
        localStorage.setItem("lastPage", page);
        $(".link-btn").click((e) => switchPageClickEffect(e.target.getAttribute("routes")))
        return;
    }
    console.log()
    try {
        $.ajax({
            url: `/pages/${isPageDes ? "destinations" : page}.html`,
            method: "GET",
            dataType: "html",
            success: (data) => {
                $("main").html(data);
                localStorage.setItem("lastPage", page);
                $("title").text(titleCase(isPageDes ? "destinations" : page));
                if (isPageDes) {
                    let cityName = page.slice(4, page.length);
                    const itemD = cities.find((val) => val.cityName.includes(cityName));
                    // For When the city does not exist 
                    if (itemD === undefined) {
                        let error = $("<h1>");
                        error.text("This destiniations does not exist!")
                        $("main").html(error)
                        throw new Error("City does not exist");
                    }

                    desCityBuilder(cityName)
                    history.pushState({ page: 'destinations', id: cityName }, '', `/pages/destinations.html`);
                } else {
                    history.pushState(null, '', `/pages/${page}.html`);
                    pagesData.push({ [page]: data });
                    // In case, when having other buttons that switches pages(other than the nav buttons)
                    $(".link-btn").click((e) => switchPageClickEffect(e.target.getAttribute("routes")))
                }
            },
            error: function () {
                let message = "Sorry! The Page did not load!";
                $("main").text(message);
            }
        })
    }
    catch (err) {
        console.log(err)
    }
}
/**
 * Return a title case item
 * @param {String} item 
 * @returns 
 */
function titleCase(item) {
    return item[0].toUpperCase() + item.slice(1, item.length);
}
const pagesData = [];
let cities = [];
/**
 * This fills the destinations page with a item also fills the wonder
 * @param {Object} item 
 */
function desCityBuilder(item) {
    const itemD = cities.find((val) => val.cityName.includes(item)),
        crumbs = $("<h5/>").text(itemD.cityName).addClass("text-accent underline bold");
    let index = cities.indexOf(itemD);
    //$(".des-banner").attr("src", itemD.cityBannerImg);
    $(".des-head").text(itemD.cityName);
    $(".des-description").text(itemD.cityDescription)
    $(".des-loc").text(itemD.cityLoc)
    $(".des-attr").text(itemD.cityAttribute)
    $(".des-crumbs").append(crumbs);
    $(".city-Name").text(itemD.cityName)
    $(".des-large").attr("src", itemD.cityLargeImg)
    // Builds Wonders
    const wonders = itemD.cityWonders;
    const wondersEle = wonders.map((item) => {
        let container = $("<div>").addClass("rounded-xl p-3 text-white flex flex-col items-center space-y-2 size-full mx-auto shadow-sm bg-primary/50 xl:px-2 xl:py-5 xl:mx-0"),
            textContainer = $("<div>").addClass("p-2 flex flex-col space-y-2"),
            name = $("<h4/>").addClass("text-lx font-bold xl:text-2xl").text(item.wonderName),
            img = $("<img/>").addClass("rounded-xl object-cover size-full aspect-square shadow-sm").attr("src", item.wonderImg),
            description = $("<p>").addClass("text-sm xl:text-lg xl:w-[20rem] xl:h-[10rem]").text(item.wonderDescription);
        textContainer.append(name, description)
        container.append(img, textContainer);
        return container
    });
    for (var item of wondersEle) {
        $(".des-wonder").append(item)
    }
    // Builds tops stuff based on cityTop Keys
    Object.keys(itemD.cityTop).forEach((item, index) => {
        $("." + item).text(Object.values(itemD.cityTop)[index]).addClass(" p-2 xl:p-3")
    })
    // For random Items
    // const numbers = new Set(); // Use a Set to ensure unique numbers

    // while (numbers.size < 3) {
    //     const randomNumber = Math.floor(Math.random() * cities.length) + 1; // Generate random number between 1 and x

    //     numbers.add(randomNumber); // Add to Set if it's not the excluded number

    // }
    index = (index + 3) >= cities.length ? 0 : index
    desCardBuilder(cities.slice((index) + 1, index + 1 + 3))
}
/**
 * Creates the destinations buttons 
 */
function desLinkBuilder(data, place) {
    data.forEach((item, index) => {
        let container = $("<div/>").addClass(`flex items-center space-x-2 space-y-1 p-2 ${index + 1 === data.length ? "hover:rounded-b-xl" : "hover:rounded-none"}`),
            img = $("<img/>").attr("src", item.cityBannerImg).addClass("rounded size-10 "),
            btn = $("<h5/>").text(item.cityName).addClass("inline hover:cursor-pointer capitalize link-btn ").attr("routes", "des-" + item.cityName);
        container.append(img, btn);
        $(place).append(container);
    })
}
function desCardBuilder(dataArr) {
    dataArr.forEach((item) => {
        let container = $("<div/>")
            .attr("routes", "des-" + item.cityName).on("click",(e) => switchPageClickEffect(e.target.getAttribute("routes")))
            .addClass("flex flex-col items-center space-y-4 rounded hover:cursor-pointer shadow-sm bg-secondary/50 xl:px-2 xl:py-5 ease-in-out hover:scale-90 transition-all"),
            seal = $("<img/>").attr("src", item.cityBannerImg).addClass("size-20").attr("routes", "des-" + item.cityName),
            cityName = $("<h3/>").text(item.cityName).addClass("capitalize text-white text-2xl").attr("routes", "des-" + item.cityName);
        container.append(seal, cityName)
        $(".des-other").append(container);
    })
}
/**
 * This fetches cities.json and performace a optional
 * callback inside of the fetch
 * @param {Function} callback 
 */
function setUpCities(callback) {
    $.getJSON("data/cities.json", (data) => {
        cities = data.data;
        desLinkBuilder(cities, ".des-cont");
        if (callback) {
            callback();
        }
    });
}
/**
 * This handles click effect for switching pages, also hides the
 * destinations container 
 * @param {Text} ele 
 */
function switchPageClickEffect(ele) {
    let route = String(ele);
    switchPage(route);
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    $(".des-cont").slideUp("linear");
}
/**
 * This will excute when the document is fulley loaded
 */
$(document).ready(() => {
    // By default the Home page will be loaded first 
    if (localStorage.getItem("lastPage") === null) {
        localStorage.setItem("lastPage", "home");
        switchPage("home");
    } else {
        setUpCities(() => {
            switchPage(localStorage.getItem("lastPage"));
            $(".link-btn").click((e) => switchPageClickEffect(e.target.getAttribute("routes")));
        })
    }
    $(".des-cont").hide();
    $("#des-btn").click(() => {
        $(".des-cont").slideToggle("linear");
    })
})