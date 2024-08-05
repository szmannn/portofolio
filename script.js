function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === 'szmannn' || password === 'aaku') {
        window.location.href = 'homescreen.html';
    } 
}
function download(file, url) {
    // creating an invisible element
    let element = document.createElement('a');
    element.setAttribute('href', url);
    element.setAttribute('download', file);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Start file download.
document.getElementById("btn").addEventListener("click", function () {
    let filename = "Suman Adhikari CV.pdf";
    let fileUrl = "Suman Adhikari CV-2.pdf"; // Replace with the actual URL or path to the PDF file

    download(filename, fileUrl);
}, false);