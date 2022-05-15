// @flow
function addInputField() {
    let parent = document.getElementById("book").parentNode;

    for (let i = 0; i < 4; i++) {
        parent.appendChild(document.createElement("br"));
        parent.appendChild(document.createTextNode("書名: "));
        parent.appendChild(document.createElement("input"));
    }
}
/////////////////////////////////////////////////////////////////////
function addBook() {
    let inputs = document.getElementsByTagName("input");
    let len = inputs.length;
    let list = document.getElementById("list");
    let counter = 0;

    if (list.children.length < 5) {
        for (let i = 0; i < len; i++) {
            if (inputs[i].value !== "") {
                let txtNode = document.createTextNode(inputs[i].value);
                let li = document.createElement("li");
                li.appendChild(txtNode);

                if (list.children.length < 5) {
                    list.appendChild(li);
                } else {
                    alert('單次新增書本數已超過總數五本')
                }

                counter++;
                inputs[i].value = "";
            }
        }

        if (counter === 0) {
            alert("請先輸入書名");
        } else if (list.children.length) {
            document.getElementById("bookCount").innerHTML = list.children.length;
        }
    } else {
        alert("最多新增5本書");
    }
}