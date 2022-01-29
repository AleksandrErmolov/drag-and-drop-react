import React, { useState } from 'react';

export default function Trello() {


    const [boards, setBoards] = useState([

        { id: 1, title: 'Cделать', items: [{ id: 1, title: 'Пойти в магазнин' }, { id: 2, title: 'Выкинуть мусор' }, { id: 3, title: 'Покушать' }] },
        { id: 2, title: 'Проверить', items: [{ id: 4, title: 'Код ревью' }, { id: 5, title: 'Задача на Анимацию' }, { id: 6, title: 'Задача на Drag and Drop' }] },
        { id: 3, title: 'Сделано', items: [{ id: 7, title: 'Снять видео' }, { id: 8, title: 'Смонтировать' }, { id: 9, title: 'Отрендерить' }] },

    ])

    const [currentBoard, setCurrentBoard] = useState(null)
    const [currentItem, setCurrentItem] = useState(null)


    function dragOverHandler(e) {
        e.preventDefault()
        if (e.target.className == 'item') {
            e.target.style.boxShadow = '0 4px 3px gray'
        }

    }


    function dragStartHandler(e, board, item) {
        setCurrentBoard(board)
        setCurrentItem(item)
    }

    function dragLeaveHandler(e) {
        e.target.style.boxShadow = 'none'
    }

    function dragEndHandler(e) {
        e.target.style.boxShadow = 'none'
    }



    function dropHandler(e, item, board) {
        e.preventDefault()
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        const dropIndex = board.items.indexOf(item)
        board.items.splice(dropIndex+1, 0, currentItem)

        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }

            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }


    return (
        <div className='trello'>
            {boards.map((board, i) =>
                <div
                    key={i}
                    className='board'>
                    <div className='board__title'> {board.title} </div>
                    {board.items.map((item, i) =>
                        <div
                            key={i}
                            className='item'
                            draggable
                            onDragStart={(e) => dragStartHandler(e, board, item)}
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDrop={(e) => dropHandler(e, board, item)}

                        >
                            {item.title}

                        </div>
                    )}
                </div>

            )}

        </div>)
}
