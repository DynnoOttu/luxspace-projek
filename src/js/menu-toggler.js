import { addClass, removeClass } from "./utils-class";

const menuToglerId = document.getElementById("menu-toggler");
menuToglerId.addEventListener("click", function () {
    const menuId = document.getElementById("menu");
    if (menuId.className.indexOf("opacity-0") > -1) {
        addClass(menuToglerId, "fixed top-0 right-0");
        removeClass(menuToglerId, "relative");
        addClass(menuId, "opacity-100 z-30");
        removeClass(menuId, "opacity-0 invisible")
    } else {
        removeClass(menuToglerId, "fixed right-0 top-0");
        addClass(menuToglerId, "relative");
        addClass(menuId, "opacity-0 invisible");
        removeClass(menuId, "opacity-100 z-30");
    }
})