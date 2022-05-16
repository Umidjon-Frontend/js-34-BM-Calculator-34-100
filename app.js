const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const calculatorBtnCalculate = document.querySelector(
    ".calculator__btn-calculate"
);
const resultBox = document.querySelector(".result__box");
const reset = document.querySelector(".reset");

calculatorBtnCalculate.addEventListener("click", () => calculateBMI());

function calculateBMI() {
    let h = height.value;
    let w = weight.value;
    let cm = Number(h) / 100;
    let kg = Number(w);
    let bmi = kg / (cm * cm);
    let result = Math.round(bmi * 100) / 100;
    if (h === "" || isNaN(h)) {
        alert("Provide a valid Height!");
    } else if (w === "" || isNaN(w)) {
        alert("Provide a valid Weight!");
    } else {
        if (result < 16) {
            // #BC2020
            resultStyle(`Underweight: ${result}`, "#BC2020", "block");
        } else if (result > 16 && result < 17) {
            // #D38888
            resultStyle(`Underweight: ${result}`, "#D38888", "block");
        } else if (result > 17 && result < 18.5) {
            // #FFE400
            resultStyle(`Underweight: ${result}`, "#FFE400", "block");
        } else if (result > 18.5 && result < 25) {
            // #008137
            resultStyle(`Normal: ${result}`, "#008137", "block");
        } else if (result > 25 && result < 30) {
            // #FFE400
            resultStyle(`Overweight: ${result}`, "#FFE400", "block");
        } else if (result > 30 && result < 35) {
            // #D38888
            resultStyle(`Obesity: ${result}`, "#D38888", "block");
        } else if (result > 35 && result < 40) {
            // #BC2020
            resultStyle(`Obesity: ${result}`, "#BC2020", "block");
        } else {
            // #8A0101
            resultStyle(`Obesity: ${result}`, "#8A0101", "block");
        }
        reset.style.display = "block";
    }
}

function resultStyle(title, color, display) {
    resultBox.innerHTML = title;
    resultBox.style.backgroundColor = color;
    resultBox.style.display = display;
}

reset.addEventListener("click", () => {
    resultBox.style.display = "none";
    height.value = "";
    weight.value = "";
    reset.style.display = "none";
});
