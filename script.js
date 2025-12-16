// Select all buttons with class "books" (Book Now buttons)
document.querySelectorAll(".books").forEach(btn => {

    // Add click event to each Book Now button
    btn.addEventListener("click", function () {

        // Get the URL stored inside data-link attribute
        let link = this.getAttribute("data-link");

        // Open the booking link in a new browser tab
        window.open(link, "_blank");
    });
});


// Select all buttons with class "read" (Read More buttons)
document.querySelectorAll(".read").forEach(btn => {

    // Add click event to each Read More button
    btn.addEventListener("click", function () {

        // Get the URL stored inside data-link attribute
        let link = this.getAttribute("data-link");

        // Open the details page in a new browser tab
        window.open(link, "_blank");
    });
});



