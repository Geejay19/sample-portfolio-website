console.log("start")

const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
console.log(tablinks);
console.log(tabcontents);

function opentab(tabName){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

/*side menu operation*/
const sideMenu = document.getElementById("side-menu");

function openMenu(){
    sideMenu.style.right="0";
}

function closeMenu(){
    sideMenu.style.right="-200px";
    sideMenu.style.transition="right 0.5s"
}


console.log("End");
