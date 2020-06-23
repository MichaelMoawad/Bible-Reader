import React from 'react';
import {Link} from 'react-router-dom';
import '../styling/NavBar.css';
import { findAllByTestId } from '@testing-library/react';


function NavBar(props){

    // const onClick = (props, bookName, numOfChapters) => {
    //     props.setTheBook(bookName)
    //     props.setTheCurrentChapter(numOfChapters)
    // }


    // NEXT STEP, DO ENTIRE BIBLE SPLIT INTO SECTIONS

    return(
        <div className="NavBar">
            <h1 onClick={() => props.setBookandChapters(['Matthew', 28, 1])}><Link to="/Matthew" className="bible__book" style={{ textDecoration: 'none' }}>Matthew</Link></h1> 
            <h1 onClick={() => props.setBookandChapters(['Mark', 16, 1])}><Link to="/Mark" className="bible__book" style={{ textDecoration: 'none' }}>Mark</Link></h1> 
            <h1 onClick={() => props.setBookandChapters(['Luke', 24, 1])}><Link to="/Luke" className="bible__book" style={{ textDecoration: 'none' }}>Luke</Link></h1> 
            <h1 onClick={() => props.setBookandChapters(['John', 21, 1])}><Link to="/John" className="bible__book" style={{ textDecoration: 'none' }}>John</Link></h1> 
        </div>
        // <div className="NavBar">
        //     <h1 onClick={() => console.log('Matthew')}><Link to="/Matthew" className="bible__book" style={{ textDecoration: 'none' }}>Matthew</Link></h1> 
        //     <h1 onClick={() => console.log('Mark')}><Link to="/Mark" className="bible__book" style={{ textDecoration: 'none' }}>Mark</Link></h1> 
        //     <h1 onClick={() => console.log('Luke')}><Link to="/Luke" className="bible__book" style={{ textDecoration: 'none' }}>Luke</Link></h1> 
        //     <h1 onClick={() => console.log('John')}><Link to="/John" className="bible__book" style={{ textDecoration: 'none' }}>John</Link></h1> 
        // </div>
    );

}

export default NavBar