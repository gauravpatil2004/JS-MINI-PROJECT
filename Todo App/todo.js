let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delb = document.createElement("button");
    delb.innerText = "delete";
    delb.classList.add("del");
    item.appendChild(delb);

    ul.appendChild(item);
    inp.value = "";
})

// let delbtns = document.querySelectorAll(".del");

// for(delbtn of delbtns) {
//     delbtn.addEventListener("click", function() {
//         let par = this.parentElement;
//         par.remove();
//     })
// }

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        let lis = event.target.parentElement;
        lis.remove();
    }
})