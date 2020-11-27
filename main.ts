let ring = neopixel.create(DigitalPin.P16, 8, NeoPixelMode.RGB)
basic.forever(function () {
    for (let index = 0; index <= 23; index++) {
        ring.setPixelColor(index, randint(0, 255))
        ring.show()
        basic.pause(10)
        ring.setPixelColor(index, neopixel.rgb(16, 16, 16))
        ring.show()
    }
})
