function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    let currStyle = document.getElementById("mainStyleSheet").getAttribute('href')
    let newStyle = currStyle
    if (currStyle == "style1.css") {
        newStyle = "style2.css"
    }
    else {
        newStyle = "style1.css"
    }

    document.getElementById("mainStyleSheet").setAttribute('href', newStyle)

    localStorage.setItem('styleSheet', newStyle)
  
}


window.onload = function(){

    
    let style = localStorage.getItem('styleSheet')

    let mainStyleSheet = document.getElementById("mainStyleSheet")

    mainStyleSheet.setAttribute('href', style)
}


