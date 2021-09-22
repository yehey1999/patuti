# Patuti Game

## Game Instructions

Up Arrow Key:       Jump
Down Arrow Key:     Dock
Left Arrow Key:     Move Left
Right Arrow Key:    Move Right

## File Details

bullet-movement.js - contains the logic behind the bullets, movement
patuti-movement.js - contains the logic behind patuti's movement
functions.js - contains helper functions
variables.js - contains all variables needed for the game
game-over.js - contains the logic behind the gameover setting
collision-detection.js - contains the logic for detecting collision

## Resource/s

1. jquery game tutorial - Catch the eggs - <https://www.youtube.com/watch?v=TdR5-_0k6pc>
2. Catch the egss repo - <https://github.com/arshadasgar/arshadasgar.github.io/tree/master/eggs>
3. Official Documentation for requestAnimationFrame - <https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame>
4. requestAnimationFrame article#1 - <https://css-tricks.com/using-requestanimationframe/>
5. requestAnimationFrame article#2 - <https://medium.com/geekculture/requestanimationframe-in-javascript-82a913cf8c46>

## Constraint/s

1. Multiple clicks in jump button will double the jump of patuti (Done Improvement, temporary solution, right now it will not double jump)
2. Moving to the left or right will still continue when it exceeds on the designated area (Done Improvement, right now, it will not exceed)
3. Only one bullet per bullet groups (top/bullet_v, right/bullet_h) will move in every initializatio and when it its the patuti, wall or floor
