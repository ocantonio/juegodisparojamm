namespace SpriteKind {
    export const lStart = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`lsart`, function (sprite, location) {
    sprites.destroy(sprite, effects.starField, 500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd5, function (sprite, location) {
    info.changeLifeBy(-1)
    Neron.setPosition(8, 64)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Neron.vy = -150
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    bala = sprites.createProjectileFromSprite(assets.image`proyectil`, Neron, 200, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`lfinish`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
let enemigo: Sprite = null
let bala: Sprite = null
let Neron: Sprite = null
scene.setBackgroundColor(9)
Neron = sprites.create(assets.image`Neron`, SpriteKind.Player)
controller.moveSprite(Neron, 100, 0)
tiles.setCurrentTilemap(tilemap`nivel1`)
Neron.ay = 300
scene.cameraFollowSprite(Neron)
Neron.setPosition(8, 64)
info.setLife(3)
info.setScore(0)
game.onUpdateInterval(1000, function () {
    enemigo = sprites.create(assets.image`bola`, SpriteKind.Enemy)
    enemigo.setVelocity(-80, 0)
    enemigo.setPosition(164, randint(0, 120))
})
