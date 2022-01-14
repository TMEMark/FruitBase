//Variables for function
var tableEl = document.getElementById("table");
var p = document.getElementsByClassName("paragraph")
var btn = document.getElementsByClassName("button");

//Hidden table
tableEl.style.display = "none";

function toggle() {
    if(tableEl.style.display === "none"){
        tableEl.style.display = "block";
        p[0].style.display = "none"
        btn[0].innerHTML = "Hide table";
    }else {
        tableEl.style.display = "none";
        p[0].style.display = "block"
        btn[0].innerHTML = "Show table";
    };
};

