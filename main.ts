sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(Math.randomRange(10, 160), Math.randomRange(10, 120))
    info.startCountdown(3)
})
let pizza: Sprite = null
scene.setBackgroundColor(2)
let mySprite = sprites.create(img`
. . . . . . . . . . . 5 . . . . 
. . . . 5 5 . 5 . . 5 5 5 . 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . d d d d d d d d d d d d . . 
. . d d f f d d d d f f d d . . 
. . f f 1 1 f f f f 1 1 f f . . 
. . d f 1 6 f d d f 6 1 f d . . 
. . d d f f d d d d f f d d . . 
. . d d d d d d d d d d d d . . 
. . d d d d d d d d 3 d d d . . 
. . d d d 3 3 3 3 3 d d d d . . 
. . d d d d d d d d d d d d . . 
. . . d d d d d d d d d d . . . 
. . . . d d d d d d d d . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
. e e . . . . . . . . . . . e e 
e e e e . . . . . . . . e e e e 
e e e e . . . . . . e e e e e e 
. e e e . . . e . e e e e e e e 
. . e e e . e e . e e e e e e . 
. f 2 1 2 1 2 1 2 1 2 1 2 1 2 f 
. f 2 f 2 1 f 1 f f 2 f f f 2 f 
. f 2 f 2 f 2 1 f 1 2 f 2 1 2 f 
. f 2 f f 1 2 1 f f 2 f 2 1 2 f 
. f 2 f f 1 2 1 f 1 2 f 2 1 2 f 
. f 2 f 2 f 2 1 f 1 2 f 2 1 2 f 
. f 2 f 2 1 f 1 f 1 2 f f f 2 f 
. f 2 1 2 1 2 1 2 1 2 1 2 1 2 f 
. . f f f f f f f f f f f f f . 
. . . . f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
