import React, { useState } from 'react';



export default function DrugAndDropEasy() {

    const [cardList, setCardList] = useState([
        { id: 1, order: 3, text: "Карточка 3" },
        { id: 2, order: 1, text: "Карточка 1" },
        { id: 3, order: 2, text: "Карточка 2" },
        { id: 4, order: 4, text: "Карточка 4" }
    ])


    const [currentCard, setCurrentCard] = useState(null)


    function dragStartHandler(e, card) { 
        console.log('drag', card)
        setCurrentCard(card)
    }


    function dragLeaveHandler(e) {
        e.target.style.background = 'white'
    }


    function dragEndHandler(e) {
       
    }

    function dragOverHandler(e) {
        e.preventDefault()
       e.target.style.background = 'lightgray'
    }

    function dropHandler(e, card) {
        console.log('drop', card)
        e.preventDefault()
        setCardList(cardList.map(c => { 
            if (c.id === card.id) { 
                return {...c, order:currentCard.order}
            }
            if (c.id === currentCard.id) {
                return { ...c, order: card.order }
            }
            return c
        }))
        e.target.style.background = 'white'

    }

    const sortCards = (a,b) => { 
        if (a.order > b.order) {
            return 1
        } else { 
            return -1
        }
    }

    return (
        <div className="cards">
            {cardList.sort(sortCards).map(card =>
                <div
                    key={card.id}
                    draggable
                    onDragStart={(e) => dragStartHandler(e, card)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e) }
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropHandler(e, card)}
                    className="card">
                    {card.text}
                </div>
            )}
        </div>
    );
}

