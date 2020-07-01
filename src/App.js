import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./styling/App.css";
// import DailyVerse from "./components/DailyVerse";
import BackGround from "./components/BackGround";
import NewNavBar from "./components/NewNavBar";
import Loading from "./components/Loading";
import HowToReadBible from "./components/HowToReadBible";
import PaginationLeftRight from "./components/PaginationLeftRight";
import PageNotFound from "./components/PageNotFound";

const KEY = "fd37d8f28e95d3be8cb4fbc37e15e18e";

const App = () => {
    const [chapterText, setChapterText] = useState("");
    const [numberOfChapters, setNumberOfChapters] = useState(28);
    const [book, setBook] = useState("Psalms");
    const [loading, setLoading] = useState(false);
    const [currentChapter, setCurrentChapter] = useState(150);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         console.log(`this function has run`);
    //         console.log(`${book}${currentChapter}`);
    //         console.log(chapterText);
    //         const res = await axios.get(
    //             `https://api.biblia.com//v1/bible/content/KJV1900.html`,
    //             {
    //                 params: {
    //                     passage: `${book}${currentChapter}`,
    //                     style: "fullyFormatted",
    //                     key: KEY,
    //                 },
    //             }
    //         );
    //         setChapterText(res.data);
    //         setLoading(false);
    //     };

    //     setLoading(true);
    //     fetchData();
    // }, [currentChapter]);

    // ORIGINAL CODE -------------------------------------------------

    const fetchData = async () => {
        // console.log(`this function has run`);
        // console.log(`${book}${currentChapter}`);
        // console.log(chapterText);
        const res = await axios.get(
            `https://api.biblia.com//v1/bible/content/KJV1900.html`,
            {
                params: {
                    passage: `${book}${currentChapter}`,
                    style: "fullyFormatted",
                    key: KEY,
                },
            }
        );
        setChapterText(res.data);
        setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [currentChapter]);

    // ORIGINAL CODE -------------------------------------------------

    if (loading === true) {
        // console.log("loading");
        return <Loading />;
    } else {
        // console.log("not loading?");
    }

    // Next Chapter Issue -------------------------------------------------

    const goToNextChapter = () => {
        if (currentChapter < numberOfChapters) {
            setCurrentChapter(currentChapter + 1);
        } else {
            setCurrentChapter(currentChapter);
        }
    };

    const goToPrevChapter = () => {
        if (1 < currentChapter && currentChapter <= numberOfChapters) {
            setCurrentChapter(currentChapter - 1);
        } else if (currentChapter === 1) {
            console.log("on first chapter");
            // setCurrentChapter(1);
        }
    };

    // Next Chapter Issue -------------------------------------------------

    return (
        <div className="App">
            <Router>
                <div className="home">
                    <NewNavBar
                        setBookandChapters={(value) => {
                            setBook(value[0], setNumberOfChapters(value[1]));
                        }}
                        numberOfChapters={numberOfChapters}
                        setTheCurrentChapter={(value) =>
                            setCurrentChapter(value)
                        }
                    />
                    <div className="header">
                        <div>
                            {/* <Route path="/Home" component={DailyVerse} /> */}
                        </div>
                        <Switch>
                            <Route exact path="/" component={BackGround} />
                        </Switch>
                    </div>
                </div>
                <div className="body">
                    <Switch>
                        <Route path="/loading" component={Loading} />
                        <Route exact path="/" component={HowToReadBible} />
                        <Route path="/book">
                            <div className="chapter-heading">{book}</div>
                            <div
                                className="chapter-text"
                                dangerouslySetInnerHTML={{
                                    __html: chapterText,
                                }}
                            />
                            <PaginationLeftRight
                                nextChapter={() => goToNextChapter()}
                                previousChapter={() => goToPrevChapter()}
                            />
                            {/* <PaginationLeftRight
                                nextChapter={() =>
                                    setCurrentChapter(currentChapter + 1)
                                }
                                previousChapter={() =>
                                    setCurrentChapter(currentChapter - 1)
                                }
                            /> */}
                        </Route>
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
