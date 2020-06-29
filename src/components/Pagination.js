import React from "react";
import "../styling/Pagination.css";

const Pagination = ({ numberOfChapters, setTheCurrentChapter }) => {
    const pageNumbers = [];

    for (let i = 1; i <= numberOfChapters; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="ui buttons" id="uis">
            {pageNumbers.map((number, key) => (
                <button
                    className="ui button"
                    key={key}
                    id="ui"
                    value={number}
                    onClick={() => setTheCurrentChapter(number)}
                >
                    {number}
                </button>
                // <button className="ui button" key={key} id="ui" value={number} onClick={() => setTheCurrentChapter(number)}>{number}</button>
            ))}
        </div>
    );
};

export default Pagination;

// const Pagination = React.memo(({numberOfChapters, paginate}) => {

//     const pageNumbers = []

//     for(let i = 1; i<= numberOfChapters; i++){
//         pageNumbers.push(i);
//     }

//     return(
//         <div className="ui buttons" id="uis">
//             {pageNumbers.map((number, key) => (
//                 <button className="ui button" key={key} id="ui" value={number} onClick={() => paginate(number)}>{number}</button>
//                 ))}
//         </div>
//     )
// })
