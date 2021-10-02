// start setting 
let settingOpen = document.querySelector(".setting-box .togle-icon")
    setting =     document.querySelector(".setting-box")
    toggleIcon = document.querySelector(".setting-box .togle-icon .icon")

settingOpen.onclick = function() {
    setting.classList.toggle("open");
    toggleIcon.classList.toggle("fa-spin");
}
// end setting 
// start color option 
let colorOption = document.querySelectorAll(".option-color ul li");
colorOption.forEach(element =>  {
    element.addEventListener("click",(e) => {
        document.documentElement.style.setProperty("--min-color", e.target.dataset.color);
    });
    // console.log(element)
});
// end color option 

// start option background
let optionBackground = document.querySelectorAll(".imag-option .imag-box img")
    imgesChang = document.querySelector('.landing-peag');
optionBackground.forEach(element => {
    element.addEventListener("click",(e) => {
        // console.log(e.target.dataset.imag)
        document.documentElement.style.setProperty("--min-imag", 'url("../image/imge2/'+  e.target.dataset.imag + '")');
    });
});
// end option background

// start background randm imag 

let backgroundOption = true ;
let  backgroundIntrvel;

let areyImage = [
"public-domain-images-free-stock-photos-beach-sun-cliff-sea-sand-1000x666.jpg",
"dolphin-203875_960_720.webp", 
"drink-84533_960_720.webp",
"free-stock-photos-public-domain-images-013-1000x667.jpg", 
"204908-800x530r1-cruiseship.jpg",
"public-domain-images-free-stock-photos-high-quality-resolution-downloads-unsplash0075-1000x664.jpg",
"public-domain-images-free-stock-photos008-1000x625.jpg",
"bc195849-eb8b-4218-9be7-d94e92a1af1c.jpeg"]

let backgroundfalsetrue = document.querySelectorAll(".random-background span").forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.dataset.bacgground == "run") {
            backgroundOption = true;

            randomaizbackground()

        } else {
            backgroundOption = false

            clearInterval(backgroundIntrvel)
        }
    })
})



function randomaizbackground() {
    if (backgroundOption === true) {
        backgroundIntrvel = setInterval(() => {

            let randmImage = Math.floor(Math.random() * areyImage.length)
    
            document.documentElement.style.setProperty("--min-imag", 'url("../image/imge2/'+  areyImage[randmImage] + '")');
    
        },5000)
    }
}

randomaizbackground()




// end background randm imag
// start add class active your image 
let optionImage = document.querySelectorAll(".imag-option img");
optionImage.forEach(imges => {
    imges.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active")
        })
        e.target.classList.add("active")
    })
})
// end add class active your image 
// start stop setInterval
let randomStop = document.querySelectorAll(".random-background .option-box span");
randomStop.forEach(span => {
    span.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".activ").forEach(element => {
            element.classList.remove("activ")
        })
        e.target.classList.add("activ")
    })
})
// end stop setInterval

// start mauno 
let headManyo = document.getElementById("manu")
let headUl = document.querySelector("button")
headUl.onclick = function () {
    headManyo.classList.toggle("open")
    headUl.classList.toggle("manio-activ")
}
// end mauno 
// start scroll apeg
let scrollPage = document.querySelectorAll(".link ul li ");
scrollPage.forEach(elemant => {
    elemant.addEventListener("click", (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior : "smooth"
        })
    })
});
// end scroll apeg