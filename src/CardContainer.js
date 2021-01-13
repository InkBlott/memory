import React, {useState} from 'react'
import Card from './Card'
import {allCards} from './cardInfo';
import './style.css'

function CardContainer() {
    const [score, setScore] = useState(0);
    const [cards, setCards] = useState(allCards);
    const [checkClicked, setCheckClicked] = useState(Array(cards.length).fill(false));

    const mappedCards = cards.map(item => {
        return(
            <Card onClick = {checkScore} image = {item.image} key={item.key} id={item.key} />
        )
    })

    let shuffledCards = shuffle(mappedCards);

    function shuffle(arr) {
        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;    
    };

    function checkScore (e){
        let clkArr = checkClicked;
        if (clkArr[e.target.id] === false) {    
            setScore(score + 1);
            shuffle(shuffledCards);
            clkArr[e.target.id] = true;
            setCheckClicked(clkArr);
        } else {
            setScore(0);
            clkArr.fill(false);
            setCheckClicked(clkArr);
        }
    }
 
    return (
        <div className='main'>
            <div className='textCont'> 
                <div> Memory game</div>
                <div> Score: {score}</div>
            </div>

            <div className='cardCont'>{shuffledCards}</div>   
        </div>
    )
}

export default CardContainer