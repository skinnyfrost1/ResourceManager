import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ResourceHeader.css'

export default function ResourceHeader({ setSelectResource, setExport }) {
    const[toggleList, setToggleList] = useState(false);

    const listDropdownRef = useRef(null); //use useRef create listDropdownRef
    
    useEffect(() => {
        const handleClick =  event => {
            if(
                toggleList && 
                listDropdownRef.current &&
                !listDropdownRef.current.contains(event.target)
            ) {
                setToggleList(false);
            }
        };
        document.addEventListener('mousedown', handleClick)
        return ()=> {
            document.removeEventListener('mousedown',handleClick)
        }

    }, [toggleList]);

    return (
        <header className='header'>
            <p>Resource Catalog</p>
            <div ref={listDropdownRef} className='dropdown'>
                <FontAwesomeIcon icon="list" onClick={() => setToggleList(!toggleList)} />
                <ul
                    style={{
                        display: toggleList? 'inherit' : 'none',
                        height: toggleList? 'auto' : 0
                    }}
                >
                    <li onClick={() => {
                        setToggleList(false);
                        setSelectResource('all');
                    }}>
                        <FontAwesomeIcon icon="check-square" />Select all
                    </li>
                    <li onClick={() => {
                        setToggleList(false);
                        setSelectResource('none');
                    }}>
                        <FontAwesomeIcon icon="square" />Clear selection
                    </li>
                </ul>
            </div>

            <FontAwesomeIcon icon="share"  
            onClick={() => setExport({ start: true })}/>
         </header>
    );
    
}

