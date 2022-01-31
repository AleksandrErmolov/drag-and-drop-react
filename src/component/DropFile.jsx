import React, {useState} from 'react';
import axios from "axios";

function DropFile() {

    const [drag, setDrag] = useState(false)

    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)

    }

    function drugLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }

    function onDropHandler(e) {
        e.preventDefault()
        let files =[...e.dataTransfer.files]
        setDrag(false)
    }

    return (
        <div className='drop-file'>
            {drag
                ? <div className='drop-area'
                       onDragStart={e => dragStartHandler(e)}
                       onDragLeave={e => drugLeaveHandler(e)}
                       onDragOver={e => dragStartHandler(e)}
                       onDrop={e => onDropHandler(e)}
                > Отпустите файлы, чтобы загрузить их </div>
                : <div className='drop-area'
                       onDragStart={e => dragStartHandler(e)}
                       onDragLeave={e => drugLeaveHandler(e)}
                       onDragOver={e => dragStartHandler(e)}

                > Перетащите файлы, чтобы загрузить их </div>
            }

        </div>
    );
}

export default DropFile;