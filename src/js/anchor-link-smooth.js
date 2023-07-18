const smoothScroolAnchor = document.querySelectorAll("a[href^='#']");

for (let index = 0; index < smoothScroolAnchor.length; index++) {
    const element = smoothScroolAnchor[index];

    element.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(this.getAttribute("href"))
        if (document.getElementById(this.getAttribute("href").replace("#", "")))
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            })
    })

}