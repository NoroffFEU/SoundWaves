export function initLoader(){
    window.addEventListener("DOMContentLoaded", ()=> {
        const loader = document.querySelector(".main-loader")
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