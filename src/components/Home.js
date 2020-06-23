import React from 'react';
import DailyVerse from './DailyVerse'
import DailyReflection from './DailyReflection'
import BackGround from './BackGround'
import NewNavBar from './NewNavBar'

function Home(props){
    return (
        <div className="home">
                <NewNavBar setBookandChapters={(value) => {props.setBook(value[0], props.setNumberOfChapters(value[1]))}}/>
            <div className="header">
                {/* <NewNavBar setBookandChapters={(value) => {setBook(value[0], setNumberOfChapters(value[1], setCurrentChapter(value[2])))}}/> */}
                // also need to set the number of chapters here
                {/* <NavBar setBookandChapters={(value) => {setBook(value[0], setNumberOfChapters(value[1], setCurrentChapter(value[2])))}}/> */}
                <DailyVerse />
            </div>
                <BackGround />
            <div className="body">
                <DailyReflection/>
            </div>
        </div>
    );
}

export default Home;