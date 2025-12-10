function generateVideo() {
    let text = document.getElementById("story").value;

    if (!text) {
        alert("Please enter a story");
        return;
    }

    document.getElementById("output").innerHTML = 
        "<p><b>Processing video...</b></p>" +
        "<p>Story: " + text + "</p>" +
        "<p>(Real video AI connect karne ka step next me batata hoon)</p>";
}
