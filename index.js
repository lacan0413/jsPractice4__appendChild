function addInputField() {
    var parent = document.getElementById("book").parentNode;

    for (var i = 0; i < 4; i++) {
        parent.appendChild(document.createElement("br"));
        parent.appendChild(document.createTextNode("書名: "));
        parent.appendChild(document.createElement("input"));
    }
}

function addBook() {
    var inputs = document.getElementsByTagName("input");
    var len = inputs.length;
    var list = document.getElementById("list");
    var counter = 0;

    for (var i = 0; i < len; i++) {
        if (inputs[i].value != "") {
            var txtNode = document.createTextNode(inputs[i].value);
            var li = document.createElement("li");
            li.appendChild(txtNode);
            list.appendChild(li);

            counter++;
            inputs[i].value = "";
        }
    }

    if (counter == 0) {
        alert("請先輸入書名");
    }

    if (list.children.length < 6) {
        document.getElementById("bookCount").innerHTML = list.children.length;
    }
    else {
        alert("最多新增5本書");
    }

    //4個li之後，再input 2個，總數會固定在4

    // if (list.children.length > 5) {
    //     var mlist = document.getElementById("list")
    //     var dlist = mlist.querySelectorAll("mlist[4] ~ li");
    //     dlist.innerHTML = "";

}