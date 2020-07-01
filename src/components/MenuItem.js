import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "./Pagination";
import "../styling/NewNavBar.css";

function MenuItem(props) {
    const [subMenu, setSubMenu] = useState(false);
    const [subMenuStyle, setSubMenuStyle] = useState("");
    const [arrowDirection, setArrowDirection] = useState("down");

    // could potentially create a new state here for books so that when a book is clicked (line 31) the NavBar book state is updated
    // after that, when the page number is clicked, the book and chapter are updated simultaneously, not on seperate occasions

    // update of book state will be within the MenuItem.js file
    // update of chapter state will be in pagination
    // onClick within pagination should set both the Book and CurrentChapter

    const toggleSubMenu = () => {
        if (!subMenu) {
            setSubMenu(true);
            setSubMenuStyle("-expanded");
            setArrowDirection("up");
            // console.log("sub menu now active");
        } else {
            setSubMenu(false);
            setSubMenuStyle("");
            setArrowDirection("down");
            // console.log("sub menu now NOT active");
        }
    };

    return (
        <div className="menu-item">
            <li onClick={() => toggleSubMenu()}>
                <a href="#/book" onClick={props.setBookandChapters}>
                    <Link
                        to={`/book/${props.book}`}
                        className="bible__book"
                        style={{ textDecoration: "none" }}
                    >
                        {props.book}
                    </Link>
                    <i class={`navbar-icon angle ${arrowDirection} icon`}></i>
                </a>
            </li>
            <li className={`sub-menu${subMenuStyle}`}>
                <Pagination
                    numberOfChapters={props.bookNumChapters}
                    setTheCurrentChapter={(value) =>
                        props.setTheCurrentChapter(value)
                    }
                />
            </li>
        </div>
    );
}

export default MenuItem;
