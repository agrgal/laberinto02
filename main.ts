basic.pause(2000)
let detecta = 0
let vRot = 15
let fAVA = 30
basic.showIcon(IconNames.Heart)
basic.pause(500)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 5) {
        detecta = 1
    }
    if (detecta == 1 && maqueen.Ultrasonic(PingUnit.Centimeters) <= 8) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, vRot)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, vRot)
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
    if (detecta == 0 || maqueen.Ultrasonic(PingUnit.Centimeters) >= 8) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, fAVA)
    }
    basic.pause(100)
})
