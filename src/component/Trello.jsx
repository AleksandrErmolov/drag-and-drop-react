import React, { useState } from 'react';

export default function Trello() {


    const [boards, setBoards] = useState([

        { id: 1, title: 'Cделать', items: [{ id: 1, title: 'Пойти в магазнин' }, { id: 2, title: 'Выкинуть мусор' }, { id: 3, title: 'Покушать' }] },
        { id: 2, title: 'Проверить', items: [{ id: 4, title: 'Код ревью' }, { id: 5, title: 'Задача на Анимацию' }, { id: 6, title: 'Задача на Drag and Drop' }] },
        { id: 3, title: 'Сделано', items: [{ id: 7, title: 'Снять видео' }, { id: 8, title: 'Смонтировать' }, { id: 9, title: 'Отрендерить' }] },

    ])


    return (
        <div className='trello'>
            {boards.map(board =>

                <div className='board'>
                    <div className='board__title'> {board.title} </div>
                    {board.items.map(item =>
                        <div className='item'> {item.title} </div>
                    )}
                </div>

            )}

        </div>)
}
