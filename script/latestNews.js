let leftButton = document.querySelector(".left");
let rightButton = document.querySelector(".right");

let section = document.querySelectorAll(".trio");

let currentSection = 0;

leftButton.addEventListener("click", function () {
        if(currentSection > 0){
            section[currentSection].style.display = "none";
            section[currentSection - 1].style.display = "flex";
            currentSection--;
        }
    }
);
    
rightButton.addEventListener("click", function () {
        if(currentSection < section.length - 1){
            section[currentSection].style.display = "none";
            section[currentSection + 1].style.display = "flex";
            currentSection++;
        }
    }
);
