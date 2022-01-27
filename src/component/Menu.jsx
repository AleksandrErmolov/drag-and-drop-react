import React from 'react';
import { Link } from "react-router-dom";


export default function Menu() {



    return (
      <div className='main_menu'>
            <ul className='menu'>
            <li>
                <Link to="/">
                    Главная
                </Link>
            </li>

                <li>
                    <Link to="easy">
                    Drag and drop Easy
                    </Link>
                    </li>
                
                <li>
                    Drag and drop Trello
                </li>
                <li>
                    Drag and drop File
                </li>
            </ul>
        </div>
    )
}
