// * contains all the variables needed for the game logic

let patuti = $("#patuti");
let bullet_h = $(".bullet-h");
let bullet_v = $(".bullet-v");
let bullet_h1 = $("#bullet-h-1");
let bullet_h2 = $("#bullet-h-2");
let bullet_h3 = $("#bullet-h-3");
let bullet_v1 = $("#bullet-v-1");
let bullet_v2 = $("#bullet-v-2");
let bullet_v3 = $("#bullet-v-3");
let floor = $("#floor");
let wall = $("#wall");
let score_bars = $(".bar");
let area = $("#area");
let game = $("#game");
let game_over = $("#game-over");
let restart = $("#restart");
let container = $(".container");
let patuti_height = patuti.height();
let patuti_speed = 45;
let patuti_jump_height = 60;
let bullet_v_speed = 6;
let bullet_h_speed = 15;
let bullet_v_initial_position = parseInt(bullet_v.css("top"));
let bullet_h_initial_position = parseInt(bullet_h.css("right"));
let life = 10;
let anim_id = null;
let bullets_v = [
    {
        type: bullet_v1,
        isDown: false,
    },
    {
        type: bullet_v2,
        isDown: false,
    },
    {
        type: bullet_v3,
        isDown: false,
    },
]
let bullets_h = [
    {
        type: bullet_h1,
        isMoving: false,
    },
    {
        type: bullet_h2,
        isMoving: false,
    },
    {
        type: bullet_h3,
        isMoving: false,
    },
]