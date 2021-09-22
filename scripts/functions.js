// * Contains all the helper functions needed for the bullets movement 
// * and game settings and logic
// *
// * some of these functions are based on this tutorial: https://www.youtube.com/watch?v=TdR5-_0k6pc
// * if you want to know the why's, you may watch these video

function bullet_down(bullet) {
    bullet_current_position = parseInt(bullet.css("top"));
    bullet.css("top", bullet_current_position + bullet_v_speed);
}

function bullet_move_left(bullet) {
    bullet_current_position = parseInt(bullet.css("right"));
    bullet.css("right", bullet_current_position + bullet_h_speed);
}

function check_bullet_hits_floor(bullet) {
    if(collision(bullet, floor))
        return true;
    return false;
}

function check_bullet_hits_wall(bullet) {
    if(collision(bullet, wall))
        return true;
    return false;
}

function set_bullet_v_initial_position(bullet_v){
    bullet_v.css("top", bullet_v_initial_position);
}

function set_bullet_h_initial_position(bullet_h){
    bullet_h.css("right", bullet_h_initial_position);
}

function check_if_patuti_position_exceeds_area(patuti_current_position){
    const area_start_position = 0
    const area_end_position = area.width();
    if (patuti_current_position >= Number(area_start_position) && patuti_current_position <= Number(area_end_position))
        return false;
    return true;
}

function check_bullet_hits_patuti(bullet) {
    if(collision(bullet, patuti))
        return true;
    return false;
}

function decrement_life() {
    life--;
    decrement_score_bar();
}

function decrement_score_bar() {
    $(`#score-bar .bar:eq(${life})`).hide();
}

function stop_the_game() {
    cancelAnimationFrame(anim_id);
}

function check_if_bullets_has_down(bullets){
    for (let i = 0; i < bullets.length; i++) {
        if(bullets[i].isDown === true){
            return true;
        }
    }
    return false;
}


function game_over_display() {
    game.hide();
    game_over.show();
}

function game_restart() {
    location.reload();
}