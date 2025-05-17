

let titlePage = document.getElementById("title-page")
let containerDiv = document.getElementById("container-div")
let containerDivClass = document.getElementsByClassName("container-div")
let headingOnebyTag = document.getElementsByTagName("h4")
let anotherHeacding = document.querySelector("#title-page")
let anotherDiv = document.querySelector(".container-div")
let containerTry = document.getElementsByClassName("container-try")

let getHeadingTwo = document.getElementsByTagName("h2")

// titlePage.innerHTML = "halo <b>Wondr</b>"
containerDivClass[0].innerHTML = "<h3>Hahahihi</h3>";

// getHeadingTwo[0].setAttribute("id", "heading-two")

getHeadingTwo[0].className = "heading-two"

// getHeadingTwo[0].style.color = "red"

let getBodyTag = document.getElementsByTagName("body")

// let addContainerTryFirst = containerTry[0]
// let newText = document.createElement("h1")
// newText.innerText = "Dhika"
let tagBody = getBodyTag[0]


function createElementHeadingTwo(innerHtml) {
    let createrizkyName = document.createElement("h2")
    createrizkyName.innerText = innerHtml

    tagBody.append(createrizkyName)
}

createElementHeadingTwo("rizky")
createElementHeadingTwo("akmal")


for (let index = 0; index < 4; index++) {
    createElementHeadingTwo("fawaz")
}


// getHeadingTwo[0].remove()
// console.log(getHeadingTwo, "==> APAA INI");
getHeadingTwo[0].remove()



// addContainerTryFirst.append(newText)



// let createrizkyName = document.createElement("h2")
// createrizkyName.innerText = "Rizky"

// tagBody.append(createrizkyName)
// tagBody.append(createrizkyName)

// console.log(tagBody, "==> INI APA");


let getManipulate = document.getElementsByClassName("manipulateCenter")
let divManipulateCenter = getManipulate[0]



divManipulateCenter.children[0].style.textAlign = "center"



for (let index = 0; index < divManipulateCenter.children.length; index++) {
    divManipulateCenter.children[index].style.textAlign = "center"
    
}

// divManipulateCenter.children.forEach(element => {
//     console.log(element, "==> APA SIH");
    
// });
// console.log(divManipulateCenter.children, "==> hahaha");

// 

let getContent = document.getElementById("content-weka")
let getButton = document.getElementById("button-cek")
getButton.addEventListener("click", () => {
    getContent.style.display = "none"
})







