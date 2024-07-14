window.addEventListener("load", (event) => {
    // Default Tab
    document.getElementById("defaultOpen").click();
});

// Making the function for switching content tabs
function openTab(evt, tabName){
    // Get all the charts by the class
    let tabContent = document.getElementsByClassName('tabcontent');

    // Iterate through them
    for(let i=0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }

    // Get all the tab links
    let tablinks = document.getElementsByClassName('tablinks');

    // Iterate through them and reset the active class to be nothing
    for (i=0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Make the selected tab conten display
    document.getElementById(tabName).style.display = "flex";

    // Make the selected tab have the active class
    evt.currentTarget.className += " active";
}