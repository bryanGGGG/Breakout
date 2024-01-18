controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
	
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
	
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let Pyra = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f e e e e e e f . . . . 
    . . . f e e e e e e e e f . . . 
    . . . f e d d d d d d e f . . . 
    . . f e d d d d d d d d e f . . 
    . . f d d 1 1 d d 1 1 d d f . . 
    . . f d d 1 f d d 1 f d d f . . 
    . . f d d d d d d d d d d f . . 
    . . . f d d d f f d d d f . . . 
    . . e 4 f 4 4 4 4 4 4 f 4 e . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . d d f 4 4 5 5 4 4 f d d . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
info.setLife(3)
tiles.setCurrentTilemap(tilemap`level1`)
Render.setViewMode(ViewMode.tilemapView)
controller.moveSprite(Pyra)
Pyra.setPosition(250, 250)
scene.cameraFollowSprite(Pyra)
