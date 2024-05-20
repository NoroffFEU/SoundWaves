export function initLoader(){
    const headerButtonsContainer = document.querySelector(".header-content")
    window.addEventListener("DOMContentLoaded", ()=> {
        const loader = document.querySelector(".main-loader")
        headerButtonsContainer.classList.add("first-load")
        document.body.classList.add("no-scroll")
        window.addEventListener("load", ()=> {
            setTimeout(()=> {
                loader.style.visibility = "hidden"
                loader.style.opacity = "0"
                document.body.classList.remove("no-scroll")
            }, 1000)
        })
    })
}