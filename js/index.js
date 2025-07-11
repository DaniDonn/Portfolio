const toggle = document.querySelectorAll(".infoToggle");
const toggleInfo = document.querySelector("#projectInformation").children;

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

const nextProjectButton = document.querySelector("#nextProject");
const previousProjectButton = document.querySelector("#previousProject");
const htmlLinkObjects = document.querySelectorAll('.hiddenLink');

let currentPageString = '';
const htmlLinks = [];

document.addEventListener("DOMContentLoaded", (event) => {
    main();
})

function main(){
    let currentPageHTML = '';
    let currentPageIndex = 0;

    // Splitting the url to only get the non HTML info.
    const urlSplit = window.location.href.split('/');

    // Looping through all parts of the split url string.
    urlSplit.forEach(link => {

        // Adding to the link string unless the split contains 'html'.
        if (!link.includes('html')){
            currentPageString += link + '/';
        }
        // Storting the html link.
        else {
            currentPageHTML = link;
        }
    });

    // Adding the HTML linkes for each page.
    htmlLinkObjects.forEach(link => {
        htmlLinks.push(link.getAttribute('href'));
    });

    // Checking through each link to see what page we're on.
    htmlLinks.forEach(link => {
        // Comparing the current page HTML string to all the stored HTML link strings to determine what page this is.
        if (currentPageHTML.toString() === link.toString()) {
            // Set the current page index to know which page is next and which is previous.
            currentPageIndex = htmlLinks.indexOf(link);
        }
    })

    // Adding a click event to the next page button. 
    nextProjectButton.addEventListener('click', () => {
        ChangePage(currentPageIndex + 1)
    })

    // // Setting the next project title for the next project text object.
    // let tempText = htmlLinks[currentPageIndex + 1 > htmlLinks.length - 1 ? 0 : currentPageIndex + 1].split(".")[0];
    // nextProjectText.textContent += ": " + tempText;

    // Adding a click event to the previous page button. 
    previousProjectButton.addEventListener('click', () => {
        ChangePage(currentPageIndex - 1)
    })

    // // Setting the previous project title for the previous project text object.
    // tempText = htmlLinks[currentPageIndex - 1 < 0 ? htmlLinks.length - 1 : currentPageIndex - 1].split(".")[0];
    // previousProjectText.textContent += ": " + tempText;
    
    toggle.forEach(toggleObj => {
    
        // toggle the appropriate text when a button is clicked
        toggleObj.addEventListener("click", () => {
    
            HandleInfoToggle(toggleObj);
            toggleObj.style.border = "solid";
            
            let currentIndex = Array.from(toggle).indexOf(toggleObj);
            
            // Getting the next element (the UL in this case)
            const nextElement = toggleInfo[currentIndex];
    
            // Check if the content is hidden or not and toggle visibility
            if (nextElement.style.display === "none" || nextElement.style.display === "") {
                nextElement.style.display = "block"; // Show content
            } else {
                nextElement.style.display = "none"; // Hide content
            }
        })
    });
}

function ChangePage(newIndex) {
    // Preventing the index from being out of bounds.
    if (newIndex > htmlLinks.length - 1) {
        newIndex = 0;
    }
    else if (newIndex < 0) {
        newIndex = htmlLinks.length - 1;
    }

    // Setting the current link address to the new page.
    window.location.href = currentPageString + htmlLinks[newIndex];
}

function HandleInfoToggle(toggleObject) {
    // Loop through each toggle object in the toggle array.
    toggle.forEach(toggleObj => {

        let currentIndex = Array.from(toggle).indexOf(toggleObj);
            
        // Getting the next element (the UL in this case)
        const nextElement = toggleInfo[currentIndex];

        // If it's not the one that was clicked, hide it.
        if (toggleObject != toggleObj) {
            nextElement.style.display = "none";
            toggleObj.style.border = "none";
        }
    })
}