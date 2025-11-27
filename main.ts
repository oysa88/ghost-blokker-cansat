// basis blokker
basic.showNumber(0)
basic.showLeds(`
. . . . .
. . . . .
. . # . .
. . . . .
. . . . .
`)
basic.showIcon(IconNames.Heart)
basic.showString("Hello!")
basic.clearScreen()
basic.forever(function () {

})
basic.pause(100)
basic.showArrow(ArrowNames.North)

// inndata blokker
input.onButtonPressed(Button.A, function () {

})
input.onGesture(Gesture.Shake, function () {

})
input.onPinPressed(TouchPin.P0, function () {

})
input.buttonIsPressed(Button.A)
input.acceleration(Dimension.X)
input.pinIsPressed(TouchPin.P0)
input.lightLevel()
input.compassHeading()
input.temperature()
input.isGesture(Gesture.Shake)
input.onSound(DetectedSound.Loud, function () {

})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {

})
input.logoIsPressed()
input.soundLevel()
input.calibrateCompass()
input.magneticForce(Dimension.X)
input.rotation(Rotation.Pitch)
input.runningTime()
input.runningTimeMicros()
input.onPinReleased(TouchPin.P0, function () {

})
input.setAccelerometerRange(AcceleratorRange.OneG)
input.setSoundThreshold(SoundThreshold.Loud, 128)

//musikk blokker
music.play(music.stringPlayable("", 120), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(Note.C, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
music.ringTone(Note.C)
music.rest(music.beat(BeatFraction.Whole))
music.setVolume(127)
music.volume()
music.stopAllSounds()
music.changeTempoBy(20)
music.setTempo(120)
music.beat(BeatFraction.Whole)
music.tempo()
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
music.stopMelody(MelodyStopOptions.All)
music.onEvent(MusicEvent.MelodyNotePlayed, function () {

})
music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear)
music.isSoundPlaying()
music.setBuiltInSpeakerEnabled(false)

//skjerm blokker
led.plot(0, 0)
led.toggle(0, 0)
led.unplot(0, 0)
led.point(0, 0)
led.plotBarGraph(0, 0)
led.plotBrightness(0, 0, 255)
led.pointBrightness(0, 0)
led.brightness()
led.setBrightness(255)
led.enable(false)
led.stopAnimation()
led.setDisplayMode(DisplayMode.BlackAndWhite)

//radio blokker
radio.setGroup(1)
radio.sendNumber(0)
radio.sendValue("name", 0)
radio.sendString("")
radio.onReceivedNumber(function (receivedNumber: number) {

})
radio.onReceivedValue(function (name: string, value: number) {

})
radio.onReceivedString(function (receivedString: string) {

})
radio.receivedPacket(RadioPacketProperty.SignalStrength)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
radio.setFrequencyBand(0)
radio.raiseEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_EVT_ANY)

//løkker blokker
while (true) {

}
let tabell: number[] = []
for (let verdi of tabell) {

}
for (let i = 0; i < 5; i++) {

}
for (let index = 0; index < 4; index++) {
    continue;
    break;
}
loops.everyInterval(500, function () {

})

//Logikk blokker
if (true) {

}
if (true) {

} else {

}
true && true
true || false
!true
0 == 0
1 != 1
0 < 1
0 <= 1
0 > 1
0 >= 1
"" == ""

//variabler blokker


//matematikk blokker
1 + 1
1 - 1
1 * 1
1 / 1
1 % 2
Math.max(1, 2)
Math.min(1, 2)
Math.abs(-1)
Math.sqrt(4)
Math.sin(0)
Math.cos(0)
Math.tan(0)
Math.asin(0)
Math.acos(0)
Math.atan2(0, 0)
Math.round(1.2)
Math.ceil(1.2)
Math.floor(1.2)
Math.trunc(1.2)
Math.randomBoolean()
randint(0, 10)
Math.constrain(0, 0, 0)
Math.map(0, 0, 1023, 0, 4)
Math.PI

//funksjoner blokker
doSomething()
function doSomething() {

}

//tabeller blokker
let tabell2 = [1, 2, 3]
let teksttabell = ["ei / en / ett", "b", "c"]
tabell.length
tabell[0]
tabell[0] = 1
tabell.push(1)
tabell.pop()

//tekst blokker
"".charAt(0)
"".substr(0, 0)
parseInt("5")
"".compare("")
"" + 5
"".length

//spill blokker
game.createSprite(2, 2)
sprite.delete()
mySprite.isDeleted()
mySprite.move(1)
mySprite.turn(Direction.Right, 45)
mySprite.change(LedSpriteProperty.X, 1)
mySprite.set(LedSpriteProperty.X, 0)
mySprite.get(LedSpriteProperty.X)
mySprite.isTouching(null)
mySprite.isTouchingEdge()
mySprite.ifOnEdgeBounce()
game.removeLife(0)
game.addLife(0)
game.setLife(0)
game.setScore(0)
game.addScore(1)
game.startCountdown(10000)
game.score()
game.gameOver()
game.isGameOver()
game.isPaused()
game.isRunning()
game.resume()
game.pause()

//bilder blokker
myImage.showImage(0)
myImage.scrollImage(1, 200)
images.createImage(`
. . . . .
. . . . .
. . # . .
. . . . .
. . . . .
`)
images.createBigImage(`
. . . . .
. . . . .
. . # . .
. . . . .
. . . . .
`)
images.iconImage(IconNames.Heart)


//tikobling blokker
pins.setAudioPinEnabled(false)
pins.digitalReadPin(DigitalPin.P0)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.analogWritePin(AnalogPin.P0, 1023)
pins.analogReadPin(AnalogPin.P0)
pins.map(0, 0, 1023, 0, 4)
pins.analogSetPeriod(AnalogPin.P0, 20000)
pins.setAudioPin(DigitalPin.P0)
pins.servoWritePin(AnalogPin.P0, 180)
pins.servoSetPulse(AnalogPin.P0, 1500)
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.analogPitch(0, 0)
pins.setEvents(DigitalPin.P0, PinEventType.Edge)
pins.analogSetPitchPin(AnalogPin.P0)
pins.setMatrixWidth(DigitalPin.P0, 5)
pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {

})
pins.pulseDuration()
pins.pulseIn(DigitalPin.P0, PulseValue.High)
pins.i2cReadNumber(0, NumberFormat.Int8LE, false)
pins.i2cWriteNumber(0, 0, NumberFormat.Int8LE, false)
pins.spiFrequency(1000000)
pins.spiFormat(8, 3)
pins.spiWrite(0)
pins.spiPins(DigitalPin.P0, DigitalPin.P0, DigitalPin.P0)
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Capacitive)

//serieport blokker
serial.writeLine("")
serial.writeNumber(0)
serial.writeValue("x", 0)
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {

})
serial.writeString("")
serial.writeNumbers([])
serial.readLine()
serial.readUntil(serial.delimiters(Delimiters.NewLine))
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {

})
serial.readString()
serial.redirect(SerialPin.P0, SerialPin.P1, 115200)
serial.redirectToUSB()
serial.setTxBufferSize(32)
serial.setRxBufferSize(32)
serial.writeBuffer(serial.readBuffer(0))
serial.readBuffer(0)
serial.setWriteLinePadding(0)
serial.setBaudRate(BaudRate.BaudRate115200)

//styring blokker
control.waitForEvent(0, 0)
control.inBackground(function () {

})
control.millis()
control.reset()
control.waitMicros(4)
control.raiseEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_EVT_ANY)
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_EVT_ANY, function () {

})
control.eventTimestamp()
control.eventValue()
control.deviceName()
control.deviceSerialNumber()

//BMP280 blokker
BMP280.temperature()
BMP280.pressure()
BMP280.PowerOn()
BMP280.PowerOff()
BMP280.Address(BMP280_I2C_ADDRESS.ADDR_0x76)

//128x64 Display blokker
kitronik_VIEW128x64.controlDisplayOnOff(false)
kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Normal)
kitronik_VIEW128x64.refresh()
kitronik_VIEW128x64.invert(false)
kitronik_VIEW128x64.show(null)
kitronik_VIEW128x64.setPixel(0, 0)
kitronik_VIEW128x64.plot(0)
kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.horizontal, 10, 0, 0)
kitronik_VIEW128x64.drawRect(60, 30, 0, 0)
kitronik_VIEW128x64.clearLine(1)
kitronik_VIEW128x64.clearPixel(0, 0)
kitronik_VIEW128x64.clear()