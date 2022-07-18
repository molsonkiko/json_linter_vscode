/*
Allows a drop-down view of JSON
*/
document.getElementById('json-text').innerText = "";
document.getElementById('json-file').value = "";

function fillJsonSection() {
    let jsonTextArea = document.getElementById('json-text');
    jsonTextArea.innerText = "";
    let [file] = document.getElementById('json-file').files;
    // console.log("filename = " + file.name);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        // this will then display a text file
        let jsonStr = reader.result;;
        let highlightedLine = 0;
        // console.log("jsonStr = " + jsonStr);
        try {
            json = JSON.parse(jsonStr);
        }
        catch (e) {
            console.log(e);
            alert("The submitted file is not a valid JSON document");
        }
        let jsonPretty = JSON.stringify(json, null, 4).replace(/\r?\n/, "&#013;");
        jsonTextArea.innerText = jsonPretty;
    }, false);

    if (file) {
        reader.readAsText(file);
    }
}

function fillJsonTree(jsonStr) {

}