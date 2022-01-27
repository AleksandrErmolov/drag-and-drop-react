import React from 'react';
import { NavLink } from "react-router-dom";


export default function Menu() {

    const menu = [
        { title: 'Главная', to: '/' },
        { title: 'Drag and drop Easy', to: 'easy' },
        { title: ' Drag and drop Trello', to: 'trello' },
        { title: ' Drag and drop File', to: 'file' }
    ]

    return (
        <div className='main_menu'>
            <ul className='menu'>
                {menu.map(el =>

                    <li><NavLink className={({ isActive }) => isActive ? "red" : "blue"} to={el.to}>{el.title}</NavLink></li>

                )}
            </ul>
        </div>
    )
}
