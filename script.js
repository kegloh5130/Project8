/**
 * This takes a page Name and loads a file 
 * with that name in pages folder, it will loaded in main in index.html
 * @param {String} page 
 */
function switchPage(page){
    $("main").load(`pages/${page.toLowerCase()}.html`);
}
/**
 * This will excute when the document is fulley loaded
 */
$(document).ready(()=>{
    // By default the Home page will be loaded first 
    switchPage("home");
    // This adds a click event to the nav button; which calls switchPage with the button text
    $(".links button").click((e)=>{
        // E is a event, target is the button, innerText is the inside of button
        let pageName = e.target.innerText;
        // This calls Switchpage
        switchPage(pageName);
    })
})