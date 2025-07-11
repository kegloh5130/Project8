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
    $(".des-banner").attr("src", itemD.cityBannerImg);
    $(".des-head h1").text(itemD.cityName);
    $(".des-description").text(itemD.cityDescription)
    $(".des-loc").text(itemD.cityLoc)
    $(".des-attr").text(itemD.cityAttribute)
    $(".des-crumbs").append(crumbs);
    $(".city-Name").text(itemD.cityName)
    $(".des-large").attr("src", itemD.cityLargeImg)
    // Builds Wonders
    const wonders = itemD.cityWonders;
    const wondersEle = wonders.map((item) => {
        let container = $("<div>").addClass("rounded-xl p-2 text-white flex flex-col items-center space-y-2 size-full mx-auto bg-primary/50 lg:mx-0"),
            textContainer = $("<div>").addClass("p-2 flex flex-col space-y-2"),
            name = $("<h4/>").addClass("lg:text-2xl").text(item.wonderName),
            img = $("<img/>").addClass("rounded-xl object-cover size-[20rem] lg:size-[35rem] shadow-sm").attr("src", item.wonderImg),
            description = $("<p>").addClass("text-sm lg:text-lg lg:w-[25rem] lg:h-[10rem]").text(item.wonderDescription);
        textContainer.append(name, description)
        container.append(img, textContainer);
        return container
    });
    for (var item of wondersEle) {
        $(".des-wonder").append(item)
    }
    // Builds tops stuff based on cityTop Keys
    Object.keys(itemD.cityTop).forEach((item, index) => {
        $("." + item).text(Object.values(itemD.cityTop)[index]).addClass("p-5")
    })
}
/**
 * Creates the destinations buttons 
 */
function desLinkBuilder(data, place) {
    data.forEach((item,index) => {
        let container = $("<div/>").addClass(`flex items-center space-x-2 space-y-1 p-2 ${index+1 === data.length? "hover:rounded-b-xl" : "hover:rounded-none"}`),
            img = $("<img/>").attr("src", item.cityBannerImg).addClass("rounded size-10 "),
            btn = $("<h5/>").text(item.cityName).addClass("inline hover:cursor-pointer capitalize link-btn ").attr("routes", "des-" + item.cityName);
        container.append(img, btn);
        $(place).append(container);
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
    $(".des-cont").slideUp("slow");
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
        $(".des-cont").slideToggle("slow");
    })
})