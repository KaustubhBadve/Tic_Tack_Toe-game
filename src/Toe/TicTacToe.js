import React, { useState } from 'react'
import "./TicTacToe.css"

const TicTacToe = () => {

    const[ turn, setTurn]=useState('X')
    const [cells, setCells]=useState(['','','','','','','','',''])
    const [winner,setWinner]=useState()

    const checkWinner=(box)=>{
        let allSame = {
            horizontal:[
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],
                vertical:[
                    [0,3,6],
                    [2,5,8],
                    [1,4,7]
            ],
                digonal:[
                    [0,4,8],
                    [2,4,6]
                ]
 
        };

        for(let i in allSame){
            allSame[i].forEach((el)=>{
                
                if( 
                    box[el[0]]==='' ||
                    box[el[1]]==='' ||
                    box[el[2]]==='' 
                )
            {

            }else if(
                    box[el[0]]===box[el[1]] &&
                    box[el[1]]===box[el[2]] 
                ){
                    setWinner(box[el[0]])
                    console.log(box[el[0]])
            }
            })
            
        }

    }
    const handleReset=()=>{
        setCells(['','','','','','','','',''])
        setWinner('')
    }

    const handleOnClick=(num)=>{
        if(cells[num] !==''){
            return null;
        }


        let box = [...cells]

        if(turn==='X'){
            box[num]='X'
            setTurn('O')

        }else{
            box[num]='O'
            setTurn('X')
        }
        checkWinner(box)
        setCells(box)
        console.log(box)
    }

    const Cell=({num})=>{
        return <td onClick={()=>handleOnClick(num)}>{cells[num]}</td>
    }

   

  return (
    <div className='container'>
        <h1>Start Your TicTacToe</h1>
            Player :{turn}
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
            {winner &&

                <>
                    <p>{winner} is the winner</p> 
                    
             </>
            }
            <button onClick={()=>handleReset()}>Play Again</button>
                
            

    </div>
  )
}

export default TicTacToe