basic.pause(2000)
let distSTOP = 5
let distGO = 12
let detecta = 0
let vRot = 15
let fAVA = 30
basic.showIcon(IconNames.Angry)
basic.pause(500)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= distSTOP) {
        detecta = 1
    }
    if (detecta == 1 && maqueen.Ultrasonic(PingUnit.Centimeters) <= distGO) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, vRot)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, vRot)
        basic.pause(1000)
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
    if (detecta == 0 || maqueen.Ultrasonic(PingUnit.Centimeters) >= distGO) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, fAVA)
        detecta = 0
    }
    basic.pause(100)
})
