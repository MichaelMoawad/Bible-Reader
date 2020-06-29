import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "./Pagination";
import "../styling/NewNavBar.css";

function MenuItem(props) {
    const [subMenu, setSubMenu] = useState(false);
    const [subMenuStyle, setSubMenuStyle] = useState("");
    const [arrowDirection, setArrowDirection] = useState("down");

    const toggleSubMenu = () => {
        if (!subMenu) {
            setSubMenu(true);
            setSubMenuStyle("-expanded");
            setArrowDirection("up");
            console.log("sub menu now active");
        } else {
            setSubMenu(false);
            setSubMenuStyle("");
            setArrowDirection("down");
            console.log("sub menu now NOT active");
        }
    };

    return (
        <div className="menu-item">
            <li onClick={() => toggleSubMenu()}>
                <a href="#/Book" onClick={props.setBookandChapters}>
                    <Link
                        to={`/Book/${props.book}`}
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
