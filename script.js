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
                if (isPageDes) {
                    let cityName = page.slice(4, page.length);
                    const itemD = cities.find((val) => val.cityName.includes(cityName));
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
                }
            },
            error: function (error) {
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
$.getJSON("data/cities.json", (data) => {
    cities = data.data;
})
/**
 * This fills the destinations page with a item also fills the wonder
 * @param {Object} item 
 */
function desCityBuilder(item) {
    const itemD = cities.find((val) => val.cityName.includes(item)),
        crumbs = $("<h5/>").text(itemD.cityName);
    $(".des-head img").attr("src", itemD.cityBannerImg);
    $(".des-head h1").text(itemD.cityName);
    $(".des-description").text(itemD.cityDescription)
    $(".des-loc").text(itemD.cityLoc)
    $(".des-attr").text(itemD.cityAttribute)
    $(".des-crumbs").append(crumbs);
    // Builds Wonders
    const wonders = itemD.cityWonders;
    /**
     * div
     *      img -> wonderImg
     *      h4 -> wonderName
     *      p -> wonderDescription
    */
    const wondersEle = wonders.map((item) => {
        let container = $("<div>").addClass("rounded p-2 text-white flex flex-col space-y-2 size-full mx-auto md:mx-0"),
            name = $("<h4/>").addClass("text-xl").text(item.wonderName),
            img = $("<img/>").addClass("rounded object-cover size-[20rem] md:size-[40rem] shadow-sm").attr("src", item.wonderImg),
            description = $("<p>").addClass("text-sm w-full").text(item.wonderDescription);
        container.append(img, name, description);
        return container
    });
    for (var item of wondersEle) {
        $(".des-wonder").append(item)
    }
}
/**
 * Creates the destinations buttons 
 */
function desLinkBuilder() {
    cities.forEach((item) => {
        let container = $("<div/>").addClass("flex items-center space-x-2 space-y-1 link-btn p-2 hover:bg-accent "),
            img = $("<img/>").attr("src", item.cityBannerImg).addClass("rounded size-10 "),
            btn = $("<h5/>").text(item.cityName).addClass("inline hover:cursor-pointer capitalize").attr("routes", "des-" + item.cityName);
        container.append(img, btn);
        $(".des-cont").append(container);
    })
}
/**
 * This will excute when the document is fulley loaded
 */
$(document).ready(() => {
    // By default the Home page will be loaded first 
    if (localStorage.getItem("lastPage") === null) {
        localStorage.setItem("lastPage", "home");
        switchPage("home", "Home");
    } else {
        switchPage(localStorage.getItem("lastPage"), titleCase(localStorage.getItem("lastPage")))
    }
    desLinkBuilder();
    // This adds a click event to the nav button; which calls switchPage with the button text
    $(".link-btn").click((e) => {
        // E is a event, target is the button, page is in attribute route
        let route = e.target.getAttribute("routes");
        switchPage(route);
        if (String(route).includes("des")) {
            $(".des-cont").fadeToggle("slow");
        }

    })
    $(".des-cont").hide();
    $(".des-btn").click(() => {
        $(".des-cont").fadeToggle("slow");
    })
})