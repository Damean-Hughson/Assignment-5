let number = 0
let number2 = 0
let diameter = 0

document.getElementById("report").addEventListener("click",calculate)

function calculate () {
  diameter = document.getElementById("input").value
  diameter = parseInt(diameter)
  diameter = diameter / 2
  number = 3.1415926535 * diameter ** 2
  number2 = 3.1415926535 * diameter * 2
//innerHTML refused to work!
alert(number)
alert(number2)
}