scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd5, function (sprite, location) {
    info.changeLifeBy(-1)
    Neron.setPosition(8, 64)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Neron.vy = -150
})
let Neron: Sprite = null
scene.setBackgroundColor(13)
Neron = sprites.create(assets.image`Neron`, SpriteKind.Player)
controller.moveSprite(Neron, 100, 0)
tiles.setCurrentTilemap(tilemap`nivel1`)
Neron.ay = 300
scene.cameraFollowSprite(Neron)
Neron.setPosition(8, 64)
info.setLife(3)
let enemigo = sprites.create(assets.image`bola`, SpriteKind.Enemy)
enemigo.setPosition(164, randint(0, 120))
