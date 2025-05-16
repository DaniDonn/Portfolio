const toggle = document.querySelectorAll(".infoToggle")

console.log('JavaScript is loaded!');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener ('click', () => {
        document.body.classList.remove('nav-open');
    })
});

toggle.forEach(toggleObj => {

    // toggle the appropriate text when a button is clicked
    toggleObj.addEventListener("click", () => {
        
        // Getting the next element (the UL in this case)
        nextElement = toggleObj.nextElementSibling;

        // Check if the content is hidden or not and toggle visibility
        if (nextElement.style.display === "none" || nextElement.style.display === "") {
            nextElement.style.display = "block"; // Show content
        } else {
            nextElement.style.display = "none"; // Hide content
        }
    })
});
