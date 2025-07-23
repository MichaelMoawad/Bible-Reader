import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./styling/App.css";
import BackGround from "./components/BackGround";
import NewNavBar from "./components/NewNavBar";
import Loading from "./components/Loading";
import PaginationLeftRight from "./components/PaginationLeftRight";
import PageNotFound from "./components/PageNotFound";
import BibleOverviewPage from "./components/BibleOverviewPage";

const App = () => {
    const [chapterText, setChapterText] = useState("");
    const [numberOfChapters, setNumberOfChapters] = useState(28);
    const [book, setBook] = useState("Psalms");
    const [loading, setLoading] = useState(false);
    const [currentChapter, setCurrentChapter] = useState(150);

    const fetchData = async () => {
        const version = "en-kjv";
        const chapter = currentChapter.toString();
    
        try {
            const res = await axios.get(
                `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book.toLowerCase().replace(/\s/g, "")}/chapters/${chapter}.json`
            );
            setChapterText(res.data);
        } catch (error) {
            console.error("Failed to fetch:", error);
            setChapterText("Error loading verse. Please try another.");
        } finally {
            setLoading(false);
        }
    };
    

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [currentChapter]);

    if (loading === true) {
        return <Loading />;
    } 

    const goToNextChapter = () => {
        console.log("currentChapter", currentChapter);
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
                        <Switch>
                            <Route exact path="/" component={BackGround} />
                        </Switch>
                    </div>
                </div>
                <div className="body-reading">
                    <Switch>
                        <Route path="/loading" component={Loading} />
                        <Route exact path="/" component={BibleOverviewPage} />
                        <Route path="/book">
                            <div className="chapter-heading-reading">{book}</div>
                            <div className="chapter-text">
                                {Array.isArray(chapterText.data) && chapterText.data.map((verseObj, index) => (
                                    <p key={index}>
                                    <sup>{verseObj.verse}</sup> {verseObj.text}
                                    </p>
                                ))}
                            </div>

                            <PaginationLeftRight
                                nextChapter={() => goToNextChapter()}
                                previousChapter={() => goToPrevChapter()}
                            />
                        </Route>
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
