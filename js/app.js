// creating the empty central table

const table = document.getElementById("table");

for (let i = 0; i < 6; i++) {
    const tr = document.createElement("tr");
    for (let n = 0; n < 5; n++) {
        const td = document.createElement("td");
        td.classList.add("field");
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

// creating the keyboard layout with buttons

const keyboard = document.getElementById("keyboard");
const keyboardButtons = [["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
                        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
                        ["Z", "X", "C", "V", "B", "N", "M"]];

for (let i = 0; i < 3; i++) {
    const tr = document.createElement("div");
    tr.classList.add("keyboard-row");

    for (element of keyboardButtons[i]) {
        const td = document.createElement("div");
        td.classList.add("key");
        td.textContent = element;
        tr.appendChild(td);
    }

    if (i === 2) {
        const enter = document.createElement("div")
        enter.classList.add("key");
        enter.classList.add("big");
        enter.textContent = "ENTER";
        const backspace = document.createElement("div");
        backspace.classList.add("key");
        backspace.classList.add("big");
        const backspaceImage = document.createElement("img");
        backspaceImage.src = "img/backspace.svg";
        backspace.appendChild(backspaceImage);
        tr.appendChild(backspace);
        tr.insertBefore(enter, tr.firstChild);
    };

    keyboard.appendChild(tr);
}