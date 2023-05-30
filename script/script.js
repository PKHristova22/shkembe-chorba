let arrow = document.querySelectorAll(".select");
let answers = document.querySelectorAll(".space-top-2");
let expandAll = document.querySelector(".expand");
let collapseAll = document.querySelector(".collapse");

arrow.forEach((arrow) => {
    arrow.addEventListener("click", () => {
        arrow.firstElementChild.style.transform = arrow.firstElementChild.style.transform == "rotate(90deg)" ? "rotate(0deg)" : "rotate(90deg)";
        let answer = arrow.nextElementSibling;

        answer.style.display = answer.className.includes("show") ? answer.classList.remove("show") : answer.classList.add("show");
    });
    }
);

expandAll.addEventListener("click", () => {
    for (let i = 0; i < arrow.length; i++) {
        arrow[i].firstElementChild.style.transform = "rotate(90deg)";
        let answer = arrow[i].nextElementSibling;
        answer.style.display = answer.classList.add("show");
    }
});

collapseAll.addEventListener("click", () => {
    for (let i = 0; i < arrow.length; i++) {
        arrow[i].firstElementChild.style.transform = "rotate(0deg)";
        let answer = arrow[i].nextElementSibling;
        answer.style.display = answer.classList.remove("show");
    }
});