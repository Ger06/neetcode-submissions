class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let col = {}
        let fila = {}
        let square = {}
        const point = '.'
        
        

        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++){
                let sqRef = Math.floor(i/3).toString() + Math.floor(j/3).toString()
                if(!col[i]){col[i] = []}
                if(!fila[j]){fila[j] = []}
                if(!square[sqRef]){square[sqRef] = []}

                if(col[i].find(c=> c === board[i][j])) return false
                if(fila[j].find(f=> f === board[i][j])) return false
                if(square[sqRef].find(s=> s === board[i][j])) return false

                if(board[i][j] !==point){ 
                    col[i].push(board[i][j])
                    fila[j].push(board[i][j])
                    square[sqRef].push(board[i][j])
                    }
            }
        }
        return true
    }
}
