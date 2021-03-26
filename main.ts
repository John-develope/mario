controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Chell = sprites.createProjectileFromSprite(img`
        . . . . . f f f f f f . . . . . 
        . . . . f f 7 7 7 7 f f . . . . 
        . . . f 7 7 f f f f 7 7 f . . . 
        . . f 7 7 f 7 7 7 7 f 7 7 f . . 
        . . f 7 f 7 7 7 7 7 7 f 7 f . . 
        . f 7 f 7 7 7 7 7 7 7 7 f 7 f . 
        . f f 7 f 7 7 7 7 7 7 f 7 f f . 
        f f 7 7 7 f 7 7 7 7 f 7 7 7 f f 
        f 7 7 7 7 7 f f f f 7 7 7 7 7 f 
        f f f 7 7 f 7 7 7 7 f 7 7 f f f 
        1 1 f f f 7 7 7 7 7 7 f f f 1 1 
        f 1 1 1 f 7 7 7 7 7 7 f 1 1 1 f 
        . f f 1 1 f f f f f f 1 1 f f . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . . . . f f f f . . . . . . 
        `, Super_mario, 100, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Super_mario.vy = -200
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Super_mario.setImage(img`
        . . . . 2 2 2 2 2 . . . 
        2 2 2 2 2 2 2 2 2 2 . . 
        . . . d f d d e e e . . 
        . d d d f d d d e d e . 
        d d d e d d d e e d e . 
        . e e e e d d d d e e . 
        . . d d d d d d d . . . 
        . . . . e e e 2 e e . . 
        . e e e 2 e e 2 e e e . 
        e e e e 2 2 2 2 e e e e 
        d d e 2 d 2 2 d 2 e d d 
        d d d 2 2 2 2 2 2 d d d 
        d d 2 2 2 . . 2 2 2 d d 
        . . 2 2 2 . . 2 2 2 . . 
        . e e e . . . . e e e . 
        e e e e . . . . e e e e 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Super_mario.setImage(img`
        . . . 2 2 2 2 2 . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 
        . . e e e d d f d . . . 
        . e d e d d d f d d d . 
        . e d e e d d d e d d d 
        . e e d d d d e e e e . 
        . . . d d d d d d d . . 
        . . e e 2 e e e . . . . 
        . e e e 2 e e 2 e e e . 
        e e e e 2 2 2 2 e e e e 
        d d e 2 d 2 2 d 2 e d d 
        d d d 2 2 2 2 2 2 d d d 
        d d 2 2 2 . . 2 2 2 d d 
        . . 2 2 2 . . 2 2 2 . . 
        . e e e . . . . e e e . 
        e e e e . . . . e e e e 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile20`, function (sprite, location) {
    info.changeScoreBy(1)
    Super_mario.x += -20
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    if (controller.down.isPressed()) {
        scene.setBackgroundColor(15)
        tiles.setTilemap(tilemap`level2`)
        Bowser = sprites.create(img`
            ............111.................
            ........771114..................
            .......7771144..................
            .....117777447..................
            .4..7117777777..................
            4.477117777777..................
            444111777477777.................
            444417774447777.................
            144477441747777117771...........
            .1.44447774777711771147.........
            .1.117177147777117111447111.....
            ....1...7447771117714477114.....
            ........144771117777777774471...
            ........447711177777777777771...
            ......14447711177777711177777...
            .......44..7711111177114777111..
            .............77444117744777114..
            .........444..4444411777777744..
            ........441.4444444717777777771.
            ........44..14444477177711177741
            ........41.4444444771177114777..
            ........4..14444777711777447711.
            .........1.444447777117777777111
            ...........1444.777771777711744.
            ................777771177747747.
            ................777777117777777.
            .................77777711177777.
            ..................7777771111777.
            ..................47777777111111
            .................114477444441111
            .................11444444444441.
            ....................1144114444..
            ...................111411144444.
            `, SpriteKind.Enemy)
        Bowser.setPosition(121, 62)
        Bowser.ay = 500
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (info.score() == 100) {
        otherSprite.destroy()
        if (true) {
            game.over(true)
        }
    } else if (info.score() == 10) {
        sprite.destroy()
        if (true) {
            game.over(false)
        }
    }
})
let Bowser: Sprite = null
let Chell: Sprite = null
let Super_mario: Sprite = null
Super_mario = sprites.create(img`
    . . . 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 
    . . e e e d d f d . . . 
    . e d e d d d f d d d . 
    . e d e e d d d e d d d 
    . e e d d d d e e e e . 
    . . . d d d d d d d . . 
    . . e e 2 e e e . . . . 
    . e e e 2 e e 2 e e e . 
    e e e e 2 2 2 2 e e e e 
    d d e 2 d 2 2 d 2 e d d 
    d d d 2 2 2 2 2 2 d d d 
    d d 2 2 2 . . 2 2 2 d d 
    . . 2 2 2 . . 2 2 2 . . 
    . e e e . . . . e e e . 
    e e e e . . . . e e e e 
    `, SpriteKind.Player)
controller.moveSprite(Super_mario, 100, 0)
Super_mario.ay = 500
scene.cameraFollowSprite(Super_mario)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level3`)
tiles.placeOnRandomTile(Super_mario, assets.tile`tile11`)
forever(function () {
	
})
