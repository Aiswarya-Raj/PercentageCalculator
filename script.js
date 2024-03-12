function percentage_1() {
    let percent = document.getElementById("percent").value;
    let num = document.getElementById("num").value;
    document.getElementById("value1")
        .value = (num / 100) * percent;
}
function percentage_2() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("value2")
            .value = (num1 * 100) / num2 + "%";
}