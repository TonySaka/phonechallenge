var mainMenu = document.getElementById("mainMenu");
mainMenu.style.display ="none";

function togglemenu(){
    if(mainMenu.style.display == "none")
    {
        mainMenu.style.display = "block";
    }
    else{
        mainMenu.style.display = "none";
    }
}
