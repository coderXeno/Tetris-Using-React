import {useCallback, useState} from 'react'
import {randomTetromino, TETROMINOS} from "../tetrominos"

export const usePlayer=()=>{
    const [player, setPlayer]=useState({
        pos: {x: 0, y: 0},
        tetromino: randomTetromino().shape,
        collided: false,
    })
    /* Above line is equivalent to
    const playerState=useState()
    const player=playerState[0]
    const setPlayer=playerState[1]
    */
    const rotate=(matrix, dir)=>{
        //Make the rows to become cols(transpose)
        const rotatedTetro=matrix.map((_, index)=>
        matrix.map(col=>col[index])
        )
        //Reverse Each row to get the rotated matrix
        if(dir>0) return rotatedTetro.map(row=>row.reverse())
        return rotatedTetro.reverse()
    }

    const playerRotate=(stage, dir)=>{
        const clonedPlayer=JSON.parse(JSON.stringify(player))
        clonedPlayer.tetromino=rotate(cloned.tetromino, dir)
        const pos=clonedPlayer.pos.x
        let offset=1
        while(checkCollision(clonedPlayer, stage, {x: 0, y: 0})){
            clonedPlayer.pos.x=offset
            offset=-(offset + (offset > 0 ? 1 :-1))
            if(offset > clonedPlayer.tetromino[0].length){
                rotate(clonedPlayer.tetromino, -dir)
                clonedPlayer.pos.x=pos
                return
            }
        }
        setPlayer(clonedPlayer)
    }

    const updatePlayerPos = ({ x, y, collided }) => {
        setPlayer(prev => ({
          ...prev,
          pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
          collided,
        }))
      }

    const resetPlayer=useCallback(()=>{
        setPlayer({
            pos: { x: STAGE_WIDTH/2-2, y: 0},
            tetromino: TETROMINOS.shape,
            collided,
        })
    },[])
    return [player, updatePlayerPos, resetPlayer, rotatePlayer]
}