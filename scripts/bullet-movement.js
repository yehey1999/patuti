// * Contains the logic behind the bullets movement
// *  
// * Each bullet groups (top/bullet-v, right/bullet-h) has one bullet that will randomly move
// * during first initialization and when they hit the wall or floor

let bullet_v_chosen_random = null;
let bullet_h_chosen_random = null;

$(function () {
    the_game = function () {
        // * Choose random bullet in the top bullet group to move
        // *----start
        if (bullet_v_chosen_random === null || bullet_v_chosen_random.isDown == false)
            bullet_v_chosen_random = bullets_v[Math.floor(Math.random() * bullets_v.length)];
        if (check_bullet_hits_floor(bullet_v_chosen_random.type) || check_bullet_hits_patuti(bullet_v_chosen_random.type)){
            if (check_bullet_hits_patuti(bullet_v_chosen_random.type))
                decrement_life();
            bullet_v_chosen_random.isDown = false;
            set_bullet_v_initial_position(bullet_v_chosen_random.type);
        }
        else {
            bullet_v_chosen_random.isDown = true;
            bullet_down(bullet_v_chosen_random.type);
        }
        // *----end

        // * Choose random bullet in the right bullet group to move
        // *----start
        if (bullet_h_chosen_random === null || bullet_h_chosen_random.isMoving == false)
            bullet_h_chosen_random = bullets_h[Math.floor(Math.random() * bullets_h.length)];
        if (check_bullet_hits_wall(bullet_h_chosen_random.type) || check_bullet_hits_patuti(bullet_h_chosen_random.type)){
            if (check_bullet_hits_patuti(bullet_h_chosen_random.type))
                decrement_life();
            bullet_h_chosen_random.isMoving = false;
            set_bullet_h_initial_position(bullet_h_chosen_random.type);
        }
        else {
            bullet_h_chosen_random.isMoving = true;
            bullet_move_left(bullet_h_chosen_random.type);
        }
        // *---end
        
        if (life > 0) {
            anim_id = requestAnimationFrame(the_game);
        } else {
            stop_the_game();
            game_over_display();
        }
    };

    // * requestAnimationFrame does 60 frame per second (fps) to appear smooth animation
    // * this means that the_game function will be called when it’s time to update your animation for the next repaint.
    anim_id = requestAnimationFrame(the_game);
});

