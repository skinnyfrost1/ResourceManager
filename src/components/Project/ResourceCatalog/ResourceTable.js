import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ResourceTable=(props) => {
    const datas = props.datas;

    return (
        <div id="left-table">
            {/* top bar */}
            <div>
                {/* title */}
                <div>
                    <span>{props.header}</span>
                </div>
                {/* dropdown */}
                <div>
                    <button onClick={}>
                        <FontAwesomeIcon color="#e16e37" icon="align-left" />
                    </button>
                    {props.showOption && <div id="myDropdown" > 
                        <div onClick={props.selectLeftAllHandler}><FontAwesomeIcon icon="check-square">Select all</FontAwesomeIcon></div>
                        <div onClick={props.claerLeftAllHandler}><FontAwesomeIcon icon="square">Clear selection</FontAwesomeIcon> </div>
                    </div>}
                </div>
                {/* add to right */}
                <div>
                    <button onClick={}>
                        <FontAwesomeIcon color="#e16e37" icon="share"></FontAwesomeIcon>
                    </button>
                </div>
                {/* table cell */}
                <div></div>
            </div>

        </div>
    )
}

export default ResourceTable