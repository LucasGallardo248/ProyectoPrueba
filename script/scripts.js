const btn_nav = document.querySelector("#btn_nav")

btn_nav.addEventListener("click", (e) => {

    let stylenav = document.querySelector("#navbar-mbl").style.display 
    if (  stylenav === 'none'){
        document.querySelector("#navbar-mbl").style.display = 'block'

    } else {
        
        document.querySelector("#navbar-mbl").style.display  = 'none'
    }
})