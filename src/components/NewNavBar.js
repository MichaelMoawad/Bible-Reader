import React from "react";
import { Link } from "react-router-dom";
import "../styling/NewNavBar.css";
import "../styling/Pagination.css";
import { useState } from "react";
import MenuItem from "./MenuItem";

function NewNavBar(props) {
    const [activity, setActivity] = useState("nav-not-active");
    const [burger, setBurger] = useState("burger");

    const navSlide = () => {
        if (activity === "nav-links") {
            setActivity("nav-not-active");
            setBurger("burger");
        } else {
            setActivity("nav-links");
            setBurger("burger-active");
        }
    };

    const booksLaw = [
        {
            name: "Genesis",
            chapters: 50,
        },
        {
            name: "Exodus",
            chapters: 40,
        },
        {
            name: "Leviticus",
            chapters: 27,
        },
        {
            name: "Numbers",
            chapters: 36,
        },
        {
            name: "Deuteronomy",
            chapters: 34,
        },
    ];

    const booksHistoricalBooks = [
        {
            name: "Joshua",
            chapters: 24,
        },
        {
            name: "Judges",
            chapters: 21,
        },
        {
            name: "Ruth",
            chapters: 4,
        },
        {
            name: "1 Samuel",
            chapters: 31,
        },
        {
            name: "2 Samuel",
            chapters: 24,
        },
        {
            name: "1 Kings",
            chapters: 22,
        },
        {
            name: "2 Kings",
            chapters: 25,
        },
        {
            name: "1 Chronicles",
            chapters: 29,
        },
        {
            name: "2 Chronicles",
            chapters: 36,
        },
        {
            name: "Ezra",
            chapters: 10,
        },
        {
            name: "Nehemiah",
            chapters: 13,
        },
        {
            name: "Esther",
            chapters: 10,
        },
    ];

    const booksBooksofWisdom = [
        {
            name: "Job",
            chapters: 42,
        },
        {
            name: "Psalms",
            chapters: 150,
        },
        {
            name: "Proverbs",
            chapters: 31,
        },
        {
            name: "Ecclesiastes",
            chapters: 12,
        },
        {
            name: "Song of Solomon",
            chapters: 8,
        },
    ];

    const booksMajorProphets = [
        {
            name: "Isaiah",
            chapters: 66,
        },
        {
            name: "Jeremiah",
            chapters: 52,
        },
        {
            name: "Lamentations",
            chapters: 5,
        },
        {
            name: "Ezekiel",
            chapters: 48,
        },
        {
            name: "Daniel",
            chapters: 12,
        },
    ];

    const booksMinorProphets = [
        {
            name: "Hosea",
            chapters: 14,
        },
        {
            name: "Joel",
            chapters: 3,
        },
        {
            name: "Amos",
            chapters: 9,
        },
        {
            name: "Obadiah",
            chapters: 1,
        },
        {
            name: "Jonah",
            chapters: 4,
        },
        {
            name: "Micah",
            chapters: 7,
        },
        {
            name: "Nahum",
            chapters: 3,
        },
        {
            name: "Habakkuk",
            chapters: 3,
        },
        {
            name: "Zephaniah",
            chapters: 3,
        },
        {
            name: "Haggai",
            chapters: 2,
        },
        {
            name: "Zechariah",
            chapters: 14,
        },
        {
            name: "Malachi",
            chapters: 4,
        },
    ];

    const booksGospels = [
        {
            name: "Matthew",
            chapters: 28,
        },
        {
            name: "Mark",
            chapters: 16,
        },
        {
            name: "Luke",
            chapters: 24,
        },
        {
            name: "John",
            chapters: 21,
        },
    ];

    const booksHistory = [
        {
            name: "Acts",
            chapters: 28,
        },
    ];

    const booksPaulineEpistles = [
        {
            name: "Romans",
            chapters: 16,
        },
        {
            name: "1 Corinthians",
            chapters: 16,
        },
        {
            name: "2 Corinthians",
            chapters: 13,
        },
        {
            name: "Galatians",
            chapters: 6,
        },
        {
            name: "Ephesians",
            chapters: 6,
        },
        {
            name: "Philippians",
            chapters: 4,
        },
        {
            name: "Colossians",
            chapters: 4,
        },
        {
            name: "1 Thessalonians",
            chapters: 5,
        },
        {
            name: "2 Thessalonians",
            chapters: 3,
        },
        {
            name: "1 Timothy",
            chapters: 6,
        },
        {
            name: "2 Timothy",
            chapters: 4,
        },
        {
            name: "Titus",
            chapters: 3,
        },
        {
            name: "Philemon",
            chapters: 1,
        },
    ];

    const booksGeneralEpistles = [
        {
            name: "Hebrews",
            chapters: 13,
        },
        {
            name: "James",
            chapters: 5,
        },
        {
            name: "1 Peter",
            chapters: 5,
        },
        {
            name: "2 Peter",
            chapters: 3,
        },
        {
            name: "1 John",
            chapters: 5,
        },
        {
            name: "2 John",
            chapters: 1,
        },
        {
            name: "3 John",
            chapters: 1,
        },
        {
            name: "Jude",
            chapters: 1,
        },
    ];

    const booksApocalypticWritings = [
        {
            name: "Revelation",
            chapters: 22,
        },
    ];

    return (
        <nav className={`${activity}-bar`}>
            <div className={burger} onClick={() => navSlide()}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <a href="#/" className="logo">
                <Link to="/" className="logo">
                    Bible Reader
                </Link>
            </a>
            <div className={activity}>
                <h4>The Law</h4>
                {booksLaw.map((book) => (
                    <MenuItem
                        setTheCurrentChapter={props.setTheCurrentChapter}
                        book={book.name}
                        bookNumChapters={book.chapters}
                        setBookandChapters={() =>
                            props.setBookandChapters([book.name, book.chapters])
                        }
                    />
                ))}

                <h4>Historical Books</h4>
                {booksHistoricalBooks.map((book) => (
                    <MenuItem
                        setTheCurrentChapter={props.setTheCurrentChapter}
                        book={book.name}
                        bookNumChapters={book.chapters}
                        setBookandChapters={() =>
                            props.setBookandChapters([book.name, book.chapters])
                        }
                    />
                ))}

                <h4>Books of Wisdom</h4>
                {booksBooksofWisdom.map((book) => (
                    <MenuItem
                        setTheCurrentChapter={props.setTheCurrentChapter}
                        book={book.name}
                        bookNumChapters={book.chapters}
                        setBookandChapters={() =>
                            props.setBookandChapters([book.name, book.chapters])
                        }
                    />
                ))}

                <h4>Major Prophets</h4>
                {booksMajorProphets.map((book) => (
                    <MenuItem
                        setTheCurrentChapter={props.setTheCurrentChapter}
                        book={book.name}
                        bookNumChapters={book.chapters}
                        setBookandChapters={() =>
                            props.setBookandChapters([book.name, book.chapters])
                        }
                    />
                ))}

                <h4>Minor Prophets</h4>
                {booksMinorProphets.map((book) => (
                    <MenuItem
                        setTheCurrentChapter={props.setTheCurrentChapter}
                        book={book.name}
                        bookNumChapters={book.chapters}
                        setBookandChapters={() =>
                            props.setBookandChapters([book.name, book.chapters])
                        }
                    />
                ))}

                <h4>Gospels</h4>
                {booksGospels.map((book) => (
                    <MenuItem
                        setTheCurrentChapter={props.setTheCurrentChapter}
                        book={book.name}
                        bookNumChapters={book.chapters}
                        setBookandChapters={() =>
                            props.setBookandChapters([book.name, book.chapters])
                        }
                    />
                ))}

                <h4>History</h4>
                {booksHistory.map((book) => (
                    <MenuItem
                        setTheCurrentChapter={props.setTheCurrentChapter}
                        book={book.name}
                        bookNumChapters={book.chapters}
                        setBookandChapters={() =>
                            props.setBookandChapters([book.name, book.chapters])
                        }
                    />
                ))}

                <h4>Pauline Epistles</h4>
                {booksPaulineEpistles.map((book) => (
                    <MenuItem
                        setTheCurrentChapter={props.setTheCurrentChapter}
                        book={book.name}
                        bookNumChapters={book.chapters}
                        setBookandChapters={() =>
                            props.setBookandChapters([book.name, book.chapters])
                        }
                    />
                ))}

                <h4>General Epistles</h4>
                {booksGeneralEpistles.map((book) => (
                    <MenuItem
                        setTheCurrentChapter={props.setTheCurrentChapter}
                        book={book.name}
                        bookNumChapters={book.chapters}
                        setBookandChapters={() =>
                            props.setBookandChapters([book.name, book.chapters])
                        }
                    />
                ))}

                <h4>Apocalyptic Writings</h4>
                {booksApocalypticWritings.map((book) => (
                    <MenuItem
                        setTheCurrentChapter={props.setTheCurrentChapter}
                        book={book.name}
                        bookNumChapters={book.chapters}
                        setBookandChapters={() =>
                            props.setBookandChapters([book.name, book.chapters])
                        }
                    />
                ))}
            </div>
        </nav>
    );
}

export default NewNavBar;
