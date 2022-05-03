import React,{useState} from "react";
import style from "./Board.module.css"

const Board = () => {
    const [turn, setTurn] = useState("X");
    const [cells, setCells] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState();
    const checkForWinner= (squares) =>{
        let combinations = {
            row : [
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            column : [
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diagonal : [
                [0,4,8],
                [2,4,6]
            ]
        }

        for(let combination in combinations){
            combinations[combination].forEach((pattern)=>{
                if(squares[pattern[0]]==="" || squares[pattern[1]]==="" || squares[pattern[2]]===""){
                    // not a winner
                }
                else if(squares[pattern[0]]===squares[pattern[1]] && squares[pattern[1]]===squares[pattern[2]]){
                   return setWinner(squares[pattern[0]]);
                }
            })
        }
    }

    const handleClick = (num) => {
        if(winner){
            return ;
        }
        let squares = [...cells];
        if(cells[num]!==""){
            return;
        }
        if(turn === 'X'){
            squares[num] = "X";
            setTurn('O');
        }
        else{
            squares[num] = "O";
            setTurn('X');
        }
        checkForWinner(squares);
        setCells(squares);
    }
    const Cell = ({num}) =>{
        return <td onClick={()=>handleClick(num)}>{cells[num]}</td>
    }

    const handleRestart = () => {
        setWinner(null);
        setCells(Array(9).fill(""));
    }
    return (
        <>
        <div>
           <h3>Play tic-tac-toe Game</h3>
           <h4>Turn : {turn}</h4>
        </div>
        <div className={style.container}>
            <table>
                <tbody>
                    <tr>
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </tr>
                    <tr>
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr>
                    <tr>
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            { winner && (
                <>
                    <p>{winner} is winner😊</p>
                    <button onClick={handleRestart}>Play again</button>
                </>
            )}
        </div>
        </>
    )
}
export default Board;