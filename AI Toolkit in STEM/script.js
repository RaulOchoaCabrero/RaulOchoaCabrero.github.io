function generateOutput(inputId, outputId) {
    const input = document.getElementById(inputId).value;
    const output = document.getElementById(outputId);
    // For now, we'll just echo the input. You can replace this with actual AI tool integration.
    output.textContent = `Output: ${input}`;
}
function toggleBox(boxId) {
    // Get the element by the dynamic ID passed in from the button
    const box = document.getElementById(boxId);
    
    // If the element exists, toggle its display style
    if (box) {
        box.style.display = box.style.display === "block" ? "none" : "block";
    }
}


