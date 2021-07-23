// Event listeners
// tiles

$(document).ready(function() {
    $(".tile").click(function(event) {
        updatePixelColor(event);
    });
});

//clear button

$("#clearCanvas").click(function() {
    clearCanvas();
})

// updates the color of the current tile based on the value of the color picker

let updatePixelColor = (event) => {
    let color = $("#color-picker").val();
    $(event.target).css("background-color", `${color}`);
};

// generates all pixles and adds them to the canvas

let createPixels = () => {
    let pixels = "";

    for(let i=0; i<64; i++) {
        pixels = pixels + '<div class="tile"></div>';
    }

    $(".canvas").append(pixels);
};

// clear canvas

let clearCanvas = () => {
    console.log("hi")
    $(".canvas").children().css("background-color", "#f3f3f3");
}

createPixels();
