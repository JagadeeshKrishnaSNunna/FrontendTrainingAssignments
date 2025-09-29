function displaymap() {
    document.getElementById("mapBg").style.visibility = "visible";
}
document.addEventListener("DOMContentLoaded", () => {
    var closeBut = document.getElementById("close")
    closeBut.addEventListener("click", () => {
        document.getElementById("mapBg").style.visibility = "hidden"; 
    });
});