export const STAGE_WIDTH=12;
export const STAGE_HEIGHT=20;

export const CREATE_STAGE=()=>{
    Array.from(Array (STAGE_HEIGHT),()=>
        new Array (STAGE_WIDTH).fill[0,'clear']
    )
}

export const checkollision=(player, stage, {x: moveX, y: moveY})=>{
    for(let y=0;y<player.tetromino.length;y+=1){
        for(let x=0; x.tetromino[y].length;x+=1){
            //1. Check that we are on an actual tetromino cell
            if(player.tetromino[y][x]!==0){
                if(
                //2. Check that the move inside game areas height(y)
                // Shouldnt go through bottom of play area
                !stage[y+player.pos.y+moveY] || 
                //3. Check that the move is inside the game areas width(x)
                !stage[y+player.pos.y+moveY][x+player.pos.x+moveX]||
                //4. Check that the cell we are moving to isnt set to clear
                stage[y+player.pos.y+moveY][x+player.pos.x+moveX][1]!=='clear')
            }
        }
    }
}