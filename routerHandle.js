/**
 * This forces the browser to go to index when loading to something other than index
 * Must reference it to work; 
 */
function goToIndex() {
    if (document.querySelector("title") === null) {
        window.location.href = "../index.html";
    }
}
window.onload = goToIndex()
