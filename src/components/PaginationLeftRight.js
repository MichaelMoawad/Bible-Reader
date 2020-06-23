import React from 'react'
import '../styling/Pagination.css'

function PaginationLeftRight(props){
    return(
        <div className="ui buttons LR" id="uis">
            <button className="ui button" id="ui" onClick={props.previousChapter}>
                <i class="angle left icon"></i>
            </button>
            <button className="ui button" id="ui" onClick={props.nextChapter}>      
                <i class="angle right icon"></i>
            </button>
        </div>
    )
}

export default PaginationLeftRight