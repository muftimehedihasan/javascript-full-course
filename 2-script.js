// // document.body.childNodes[3].innerText = "Priya Hello";
// // let heading = document.getElementById("topic");
// // console.dir(heading);
// // let topics = document.getElementsByClassName("topic");
// // let button = document.getElementById("btn");
// // console.dir(button);

// // let parahs = document.getElementsByTagName("p");
// // // console.log(parahs);
// // console.dir(parahs);

// // let firstEl = document.querySelector("p");
// // let allEl = document.querySelectorAll("p");
// // // console.log(firstEl);
// // console.log(allEl);

// // let div = document.querySelector("div");
// // console.dir(div);

// // let heading = document.querySelector("h1");
// // heading.innerText = "H";

// // let div = document.querySelector("div");

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// console.log(newBtn);

// // let div = document.querySelector("div");
// // div.append(newBtn);
// // div.prepend(newBtn);
// // div.before(newBtn);

// let p = document.querySelector("p");
// p.append(newBtn);

// newBtn.addEventListener("click", function(){
//     p.style.backgroundColor = "blue";
// })

// p.style.backgroundColor = "green";
// p.addEventListener("click", function(){
//     p.style.backgroundColor = "red";
// })


// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";

// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";

// document.querySelector("body").prepend(newBtn);

// let para = document.querySelector("p");


// let btn = document.querySelector("#btn1");

// btn.onclick =  () => {
//     console.log("clicked");
// }

// let dev = document.querySelector(".box");

// dev.onclick =  () => {
//     console.log("clicked dev");
// // }
// dev.onmouseover = (e) => {
//     console.log(e.type);
// }


// btn1.addEventListener("click", () => {
//     console.log("clicked - hadler1");
// })

// let handler3 = () => {
//     console.log("clicked - handler3");
// }

// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", ()=> {
//     console.log("clicked - handler2");
// })

// btn1.removeEventListener("click", handler3);


// let modeBtn = document.querySelector("#mode");

// let currMode = "light"; // dark


// modeBtn.addEventListener("click", () => {
//     if(currMode === "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     } else {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }

//     console.log(currMode);
// })



let modeBtnB = document.querySelector("#modeB");
let currMode = "light"; // dark


modeBtnB.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("#modeB").style.backgroundColor = "black";
    } else {
        currMode = "light";
        document.querySelector("#modeB").style.backgroundColor = "white";
    }
})