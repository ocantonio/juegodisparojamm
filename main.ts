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
