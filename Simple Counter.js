let CounterNumber = 0;
document.getElementById("AddOne").onclick = function () {
    CounterNumber++;
    document.getElementById("CounterText").textContent = CounterNumber.toString()
}

document.getElementById("MinusOne").onclick = function () {
    CounterNumber--;
    document.getElementById("CounterText").textContent = CounterNumber.toString()
}