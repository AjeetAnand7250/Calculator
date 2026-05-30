const result = document.getElementById("result");

function append(value) {
    if (result.value === "0" || result.value === "Error") {
        result.value = value;
    } else {
        result.value += value;
    }
}

function clearDisplay() {
    result.value = "0";
}

function deleteLast() {
    if (result.value.length > 1) {
        result.value = result.value.slice(0, -1);
    } else {
        result.value = "0";
    }
}

function calculate() {
    try {
        let expression = result.value.replace(/\^/g, "**");
        result.value = eval(expression);
    } catch {
        result.value = "Error";
    }
}