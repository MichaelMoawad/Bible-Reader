import React from 'react';
import Pagination from './Pagination'
import "../styling/App.css";


function Chapter(props){
    return (
        <div className="body">
            <div className="chapter-heading">
                    {props.theBook}
                </div>
            <div className="chapter-text" dangerouslySetInnerHTML={{__html: props.theChapterText}}/>
        </div>
    );
}

export default Chapter
