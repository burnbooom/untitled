let height = 0
input.onButtonPressed(Button.A, function () {
    height += -1
})
input.onGesture(Gesture.TiltLeft, function () {
    height += -1
})
input.onButtonPressed(Button.B, function () {
    height += 1
})
input.onGesture(Gesture.TiltRight, function () {
    height += 1
})
