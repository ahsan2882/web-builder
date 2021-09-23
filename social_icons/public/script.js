let elements = document.querySelectorAll("[data-menu]");
for (let i = 0; i < elements.length; i++) {
    let main = elements[i];
    main.addEventListener("click", function () {
        let element = main.parentElement.parentElement;
        let andicators = main.querySelectorAll("svg");
        let child = element.querySelector("p");
        child.classList.toggle("hidden");
        if (child.classList.contains("hidden")) {
            andicators[0].style.display = "block";
            andicators[1].style.display = "none";
        } else {
            andicators[0].style.display = "none";
            andicators[1].style.display = "block";
        }
    });
}

function showActive(flag) {
    var active = document.getElementById("active");
    switch (flag) {
        case 1:
            active.style.left = "0";
            active.style.width = "4rem";
            break;
        case 2:
            active.style.left = "10%";
            active.style.width = "5rem";
            break;
        case 3:
            active.style.left = "20.5%";
            active.style.width = "4rem";
            break;
        case 4:
            active.style.left = "30%";
            active.style.width = "4rem";
            break;
        case 5:
            active.style.left = "40%";
            active.style.width = "9rem";
            break;
    }
}
