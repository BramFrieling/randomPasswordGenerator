let inputA = 0
let InputB = 0
let isValid = false
function getRandomLetter () {
    if (Math.randomBoolean()) {
        return String.fromCharCode(randint(65, 90))
    } else {
        return String.fromCharCode(randint(97, 122))
    }
}
input.onButtonPressed(Button.A, function () {
    inputA += 1
    basic.showNumber(inputA)
})
function getRandomNumber () {
    return String.fromCharCode(randint(48, 57))
}
input.onGesture(Gesture.Shake, function () {
    inputA = 0
    InputB = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    if (inputValid(inputA, InputB)) {
        for (let index = 0; index < inputA; index++) {
            basic.showString("" + (getRandomLetter()))
        }
        for (let index = 0; index < InputB; index++) {
            basic.showString("" + (getRandomNumber()))
        }
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        music.playTone(131, music.beat(BeatFraction.Double))
    }
})
input.onButtonPressed(Button.B, function () {
    InputB += 1
    basic.showNumber(InputB)
})
function inputValid (inputA: number, inputB: number) {
    isValid = true
    if (inputA < 4 || (inputB < 2 || inputA + inputB < 8)) {
        isValid = false
    }
    return isValid
}
