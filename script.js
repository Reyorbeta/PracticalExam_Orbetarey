// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Select the heading and paragraph elements
    const heading = document.querySelector("h1");
    const paragraph = document.querySelector("p");

    // Change the text content of the heading on page load
    heading.textContent = "Welcome to My Dynamic Nature Gallery";

    // Add a click event listener to the paragraph
    paragraph.addEventListener("click", () => {
        alert("You clicked on the paragraph!");
        paragraph.style.color = "#4a90e2"; // Change the paragraph color when clicked
    });
});
