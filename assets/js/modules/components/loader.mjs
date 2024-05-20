export function initLoader(){
    const headerButtonsContainer = document.querySelector(".header-content")
    window.addEventListener("DOMContentLoaded", ()=> {
        const loader = document.querySelector(".main-loader")
        headerButtonsContainer.classList.add("first-load")
        window.addEventListener("load", ()=> {
            setTimeout(()=> {
                loader.style.visibility = "hidden"
                loader.style.opacity = "0"
            }, 1000)
        })
    })
}