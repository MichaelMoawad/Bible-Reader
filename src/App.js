import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import "./styling/App.css";
import DailyVerse from './components/DailyVerse'
import BackGround from './components/BackGround'
import NavBar from './components/NavBar'
import NewNavBar from './components/NewNavBar'
import Loading from './components/Loading'
import Pagination from './components/Pagination';
import DailyReflection from './components/DailyReflection';
import PaginationLeftRight from './components/PaginationLeftRight'
import Home from './components/Home'
import Chapter from './components/Chapter'

const KEY = 'fd37d8f28e95d3be8cb4fbc37e15e18e'

const App = () => {

    const [chapterText, setChapterText] = useState('');
    const [numberOfChapters, setNumberOfChapters] = useState(28)
    const [book, setBook] = useState('Matthew')
    const [loading, setLoading] = useState(false);
    const [currentChapter, setCurrentChapter] = useState(1)
    
    
    const fetchData = async () => {
        console.log(`this function has run`)
        console.log(`${book}${currentChapter}`)
        console.log(chapterText)
        const res = await axios.get(`https://api.biblia.com//v1/bible/content/KJV1900.html`,{
            params: {
                passage: `${book}${currentChapter}`,
                style: 'fullyFormatted',
                key: KEY
            }
        })
        setChapterText(res.data)
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        fetchData()
        
        // This is a test



    }, [currentChapter])
    
    if(loading === true){
        return <Loading />
    }

   


    return (
        <div className="App">
            <div className="home">
                    <NewNavBar setBookandChapters={(value) => {setBook(value[0], setNumberOfChapters(value[1]))}} numberOfChapters={numberOfChapters} setTheCurrentChapter={(value) => setCurrentChapter(value)}/>

                <div className="header">
                    {/* <Route path="/Home"component={DailyVerse}/> */}
                </div>
                    <Route path="/Home"component={BackGround}/>
                {/* <div className="body">
                    <Route path="/Home"component={DailyReflection}/>
                </div> */}
            </div>
            <div className="body">
                <Route path="/Home"component={DailyReflection}/>
                <div className="chapter-heading">
                    {book}
                </div>
                <div className="chapter-text" dangerouslySetInnerHTML={{__html: chapterText}}/>
                {/* <Pagination numberOfChapters={numberOfChapters} setTheCurrentChapter={(value) => setCurrentChapter(value)}/> */}
                <PaginationLeftRight nextChapter={() => setCurrentChapter(currentChapter+1)} previousChapter={() => setCurrentChapter(currentChapter-1)}/>
            </div>
        </div>
    );
}

export default App; 