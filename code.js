const tabs = ["about", "ed", "exp", "skills", "awards", "links"];
const contents = ["about-content","ed-content", "exp-content", "skills-content", "awards-content", "links-content"];

function select(index){
    var content = document.getElementById(contents[index]);
    var tab = document.getElementById(tabs[index]);
    //add hide class for all tabs
    for(let i = 0;i < tabs.length; i++)
    {
        let cont = document.getElementById(contents[i]);
        cont.classList.add("hide");

        let tab = document.getElementById(tabs[i]);
        tab.classList.remove("active-tab");
    }
    //activate proper content
    content.classList.remove("hide");
    tab.classList.add("active-tab");

}