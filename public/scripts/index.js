let reasons = []
let usedReasons = []

$(document).ready(() => {

    $.get("./reasons-api/", (data) => {
        reasons = data.split("\r\n")
    })
})

function newReason() {
    if (reasons.length < 1) {
        reasons = usedReasons
        usedReasons = []
    }
    
    usedReasons.push(reasons.splice(getRandomInt(0, reasons.length), 1))

    $("#reason").text(usedReasons[usedReasons.length - 1])
    $("#reasonButton").text("Give me another reason!")
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  