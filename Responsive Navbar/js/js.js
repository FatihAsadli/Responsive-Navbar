const toggleButton = document.querySelector(".toggle-button");
const list = document.querySelector(".list");

toggleButton.addEventListener("click", () => {
    if (list.classList.contains("show")) {
        list.classList.remove("show");
    } else {
        list.classList.add("show");
    }
});
