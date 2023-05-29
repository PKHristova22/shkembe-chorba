let arrow = document.querySelectorAll(".arrow-1");
let answers = document.querySelectorAll(".space-top-2");
let expandAll = document.querySelector(".expand");
let collapseAll = document.querySelector(".collapse");

arrow.forEach((arrow) => {
    arrow.addEventListener("click", () => {
        arrow.style.transform = arrow.style.transform == "rotate(90deg)" ? "rotate(0deg)" : "rotate(90deg)";
        let answer = arrow.nextElementSibling;

        answer.style.display = answer.style.display == "block" ? "none" : "block";
    });
    }
);

expandAll.addEventListener("click", () => {
    for (let i = 0; i < arrow.length; i++) {
        arrow[i].style.transform = "rotate(90deg)";
        answers[i].style.display = "block";
    }
});

collapseAll.addEventListener("click", () => {
    for (let i = 0; i < arrow.length; i++) {
        arrow[i].style.transform = "rotate(0deg)";
        answers[i].style.display = "none";
    }
});

