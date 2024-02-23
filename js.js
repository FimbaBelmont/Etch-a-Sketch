const cubeSize = document.querySelector("#cubeSize");
const num= document.createElement("input");
const but=document.createElement("button");
num.classList.add("num");
but.classList.add("but");
cubeSize.appendChild(num);
cubeSize.appendChild(but);
but.textContent = "Create";
num.setAttribute("placeholder","Enter a cube size");
num.setAttribute("type", "number");
but.addEventListener("click", () =>{
    if (num.value > 0) {
        c = num.value;
        r = num.value;
    let container = document.querySelector("#container");
    for (i=0; i<c; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    container.appendChild(column);
        for (x=0; x<r; x++) {
        const row = document.createElement("div");
        row.classList.add("row");
        column.appendChild(row);
        
}}
let element = document.querySelector(".row");
let hover = document.querySelectorAll(".row");
hover.forEach((element)=> { 
    element.setAttribute("style", "background-color: rgb(100%,100%,100%)")
    element.addEventListener("mouseover", () => {
        element.classList.add("hover")
    })
    element.addEventListener("mouseout", () => { 
        element.classList.remove("hover")
    })
    element.addEventListener("click", () => {
        colorPerc= element.getAttribute("style", "background-color")
        console.log(colorPerc);
        console.log(getRGB(colorPerc))
        console.log(darken(getRGB(colorPerc)))
        element.setAttribute("style", `background-color: rgb(${darken(getRGB(colorPerc))}%,${darken(getRGB(colorPerc))}%,${darken(getRGB(colorPerc))}%)`);
        })
}) 
   } else { prompt("please enter a positive integer")}
}
)





function getRGB(str) {
    if ((str.at(25)) === "%") { 
    R = str.slice(22,25)
    G = str.slice(28,32)
    B = str.slice(34,37)}
    else if ((str.at(24)) === "%") { 
        R = str.slice(22,24)
        G = str.slice(28,32)
        B = str.slice(34,37)}
     else  { 
            R = str.slice(24,24)
            G = str.slice(28,32)
            B = str.slice(34,37)}
return R
}

function darken(R) {
 if (R>0) { 
 i = R - 10}
 else {i = 100}
 return i
}

