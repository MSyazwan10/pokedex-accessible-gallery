/**
 * Coursera: Interactivity with JavaScript
 * Peer-Graded Assignment: JavaScript Interactive Photo Gallery
 */

/**
 * Handles mouseover and focus events on thumbnail images.
 * @param {HTMLElement} previewPic - The image element being hovered/focused.
 */
function upDate(previewPic) {
    // 1. Console confirmation that the event has triggered
    console.log("upDate event triggered successfully!");

    // 2. Print information about previewPic (alt text and source URL)
    console.log("Image Alt Text:", previewPic.alt);
    console.log("Image Source URL:", previewPic.src);

    // Grab reference to the target element with id of 'image'
    var imageDiv = document.getElementById('image');

    // 3. Update the text content of the #image div
    imageDiv.innerHTML = previewPic.alt;

    // 4. Update the background-image of the #image div
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/**
 * Handles mouseout and blur events on thumbnail images.
 * Reverts the gallery frame back to its original Poké-Dex state.
 */
function undo() {
    // Grab reference to the target element with id of 'image'
    var imageDiv = document.getElementById('image');

    // 1. Reset background-image back to original empty state (pokedex2.jpg)
    imageDiv.style.backgroundImage = "url('../images/pokedex2.jpg')";

    // 2. Reset text content back to original prompt
    imageDiv.innerHTML = "Hover or TAB over a Pokémon below to display data.";

    console.log("undo event triggered: display restored to default.");
}

/**
 * Runs automatically onload to dynamically assign tab-indices to all previews.
 */
function initializeGallery() {
    console.log("initializeGallery triggered: Loading Poké-Dex Elements...");

    // Find all elements with the 'preview' class
    var previewImages = document.querySelectorAll('.preview');

    // Loop through each image using a standard for loop
    for (var i = 0; i < previewImages.length; i++) {
        // Assign tabindex="0" to make the image keyboard focusable
        previewImages[i].setAttribute('tabindex', '0');
        console.log("Successfully assigned tabindex to image " + (i + 1) + ": " + previewImages[i].alt);
    }

    console.log("All " + previewImages.length + " thumbnails are now keyboard accessible!");
}
