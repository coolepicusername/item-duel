let joe = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . 2 2 2 2 . . . . . .
    . . . . . 2 . . . . 2 . . . . .
    . . . . . 2 . 2 . 2 2 . . . . .
    . . . . . 2 . . . . 2 . . . . .
    . . . . . 2 . . . . 2 . . . . .
    . . . . . . 2 2 2 2 . . . . . .
    . . . . . . . 2 2 . . . . . . .
    . . . . . 2 2 2 2 2 2 . . . . .
    . . . . 2 2 . 2 2 . 2 2 . . . .
    . . . . 2 . . 2 2 . . 2 . . . .
    . . . . . . 2 2 2 2 . . . . . .
    . . . . . . 2 2 2 2 . . . . . .
    . . . . . . 2 . . 2 . . . . . .
    . . . . . . 2 . . 2 . . . . . .
    . . . . . . 2 . . 2 . . . . . .
`,SpriteKind.Player)
controller.moveSprite(joe,100,0)
scene.cameraFollowSprite(joe)
let jumps = 0
let facing = 2

game.onUpdate(function() {
    joe.vy += 4
    if (joe.isHittingTile(CollisionDirection.Bottom)) {
     jumps = 2   
    }
    if (joe.vx > 0) {
        joe.setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . . 2 2 2 2 . . . . . .
            . . . . . 2 . . . . 2 . . . . .
            . . . . . 2 . 2 . 2 2 . . . . .
            . . . . . 2 . . . . 2 . . . . .
            . . . . . 2 . . . . 2 . . . . .
            . . . . . . 2 2 2 2 . . . . . .
            . . . . . . . 2 2 . . . . . . .
            . . . . . 2 2 2 2 2 2 . . . . .
            . . . . 2 2 . 2 2 . 2 2 . . . .
            . . . . 2 . . 2 2 . . 2 . . . .
            . . . . . . 2 2 2 2 . . . . . .
            . . . . . . 2 2 2 2 . . . . . .
            . . . . . . 2 . . 2 . . . . . .
            . . . . . . 2 . . 2 . . . . . .
            . . . . . . 2 . . 2 . . . . . .
        `)
        facing = 1
    }
    if (joe.vx < 0) {
        joe.setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . . 2 2 2 2 . . . . . .
            . . . . . 2 . . . . 2 . . . . .
            . . . . . 2 2 . 2 . 2 . . . . .
            . . . . . 2 . . . . 2 . . . . .
            . . . . . 2 . . . . 2 . . . . .
            . . . . . . 2 2 2 2 . . . . . .
            . . . . . . . 2 2 . . . . . . .
            . . . . . 2 2 2 2 2 2 . . . . .
            . . . . 2 2 . 2 2 . 2 2 . . . .
            . . . . 2 . . 2 2 . . 2 . . . .
            . . . . . . 2 2 2 2 . . . . . .
            . . . . . . 2 2 2 2 . . . . . .
            . . . . . . 2 . . 2 . . . . . .
            . . . . . . 2 . . 2 . . . . . .
            . . . . . . 2 . . 2 . . . . . .
        `)
        facing = 2
    }
})

//controller events
controller.up.onEvent(ControllerButtonEvent.Pressed,function() {
  if (jumps > 0) {
    joe.vy = -100
    jumps -= 1
  }
})
controller.A.onEvent(ControllerButtonEvent.Pressed,function() {
let slash = sprites.create(img`
    . . . . . . 1 . . . . . . . . .
    . . . . . . . 1 1 . . . . . . .
    . . . . . . . . . 1 . . . . . .
    . . . . . . . . . . 1 . . . . .
    . . . . . . . . . . 1 . . . . .
    . . . . . . . . . . . 1 . . . .
    . . . . . . . . . . . . 1 . . .
    . . . . . . . . . . . . 1 . . .
    . . . . . . . . . . . . 1 . . .
    . . . . . . . . . . . . 1 . . .
    . . . . . . . . . . . . 1 . . .
    . . . . . . . . . . . . 1 . . .
    . . . . . . . . . . . . 1 . . .
    . . . . . . . . . . . . 1 . . .
    . . . . . . . . . . . . 1 . . .
    . . . . . . . . . . . . 1 . . .
`,SpriteKind.Projectile)
})

//tilemaps and scene
tiles.setCurrentTilemap(tilemap`level1`)
animation.runImageAnimation(null, [], 500, false)
