const linkRegExp = /http(?:s)?:\/\/(?:www\.)?x\.com\/([a-zA-Z0-9_]+)/;
let url;

function getUrl(e) {
    if(e.keyCode == 13) {
        e.preventDefault();

        url = document.getElementById("text-input").value;

        // if link doesn't fit the RegExp throw an error
        if(!linkRegExp.test(url)) {
            showErrorMessage(); // displaying to user
            throw {name : "RegExpError", message : "this link doesn't fit the given template"}
        }
    }
}

function showErrorMessage() {
    var errorDiv = document.getElementById("errorDiv");
    errorDiv.style.display = "block"; // Display the error message
};