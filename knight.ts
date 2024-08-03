const getColumn = (colNumber: number)=>{
    switch (colNumber) { 
        case 1: 
        return 'A';
        case 2: 
        return 'B';
        case 3: 
        return 'C';
        case 4: 
        return 'D';
        case 5: 
        return 'E';
        case 6: 
        return 'F';
        case 7: 
        return 'G';
        case 8: 
        return 'H';
        default:
            return null;
        
    }
}

class Position { 
    row: number;
    column: number;
    constructor (row: number, column: number){
        this.row = row;
        this.column = column;
    }

    
    

    getBoardPosition(){
        return `${getColumn(this.column)}${this.row}`
    }
}
type Color = 'w' | 'b';

interface Piece { 
    color: Color;
    currentPosn: Position;
    calculateMoves(): Array<string>
}

class KnightPeice implements Piece{ 
    color: Color;
    currentPosn: Position;
    constructor(currentPostion: Position, color: Color){
        this.currentPosn = currentPostion;
        this.color = color;
    }


     possibleMoveOnX = [2, 2, -2, -2, 1, -1, 1, -1 ];
     possibleMoveOnY = [1, -1, 1, -1, 2, 2, -2, -2];

    calculateMoves(): Array<string> {
        let possibleMoves: Array<string> = []; 
        for(let i=0; i < this.possibleMoveOnX.length; i++){
            let possibleMoveRow = this.currentPosn.row + this.possibleMoveOnX[i];
            let possibleMoveCol = this.currentPosn.column + this.possibleMoveOnY[i];
           
           let formattedCol = getColumn(possibleMoveCol);
           if (!formattedCol || possibleMoveRow <= 0 || possibleMoveCol <= 0){
            continue;
           }
           possibleMoves.push(`${formattedCol}${possibleMoveRow}`)
        }
        return possibleMoves; 
    }
     

}


let dummyKnight = new KnightPeice(new Position(1,2), "w");
console.log(dummyKnight.calculateMoves());
