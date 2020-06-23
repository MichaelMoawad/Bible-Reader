import React from 'react';
import {Link} from 'react-router-dom'
import '../styling/NewNavBar.css'
import '../styling/Pagination.css'
import { useState } from 'react';
import Pagination from './Pagination'
import MenuItem from './MenuItem';

function NewNavBar(props){

    // Make state which is either nav-links or nav-active. set State to nav-active when burger is clicked 

    const [activity, setActivity] = useState('nav-not-active')
    const [burger, setBurger] = useState('burger')
    const [chapterMenu, setChapterMenu] = useState(false)
    const [subMenu, setSubMenu] = useState(false)
    const [subMenuStyle, setSubMenuStyle] = useState('sub-menu-not-active')
    // const [chapterMenu, setChapterMenu] = useState('chaptermenu-not-active')

    const navSlide = () => {
        if(activity === 'nav-links'){
            setActivity('nav-not-active')
            setBurger('burger')
        }
        else{
            setActivity('nav-links')
            setBurger('burger-active')
        }
    }

    const toggleChapterMenu = () =>{
        setChapterMenu(!chapterMenu)
        if(chapterMenu){
            console.log('menu now active')
        }
        else{
            console.log('menu now NOT active')
        }
    }
    

    const toggleSubMenu = () => {
        if(!subMenu){
            setSubMenu(true)
            setSubMenuStyle('expanded')
            console.log('sub menu now active')
        }
        else{
            setSubMenu(false)
            setSubMenuStyle('')
            console.log('sub menu now NOT active')
        }
    }

    const pageNumbers = [];

    for(let i = 1; i<= props.numberOfChapters; i++){
        pageNumbers.push(i);
    }

    function displayPagination(){
        return <Pagination />
    }

//     return(
//         <nav className={`${activity}-bar`}>
//         <div className={burger} onClick={() => navSlide()}>
//             <div className="line1"></div>
//             <div className="line2"></div>
//             <div className="line3"></div>
//         </div >
//             <a href="#" className="logo"><Link to="/Home" className="logo">Bible Reader</Link></a>
//             {/* <h4 className="logo">Bible Reader</h4> */}
//             <div className={activity}>
//                 <MenuItem />
//                 <MenuItem />
//                 <MenuItem />
//             </div>
//         </nav>
//     )
// }









    return(
        <nav className={`${activity}-bar`}>
        <div className={burger} onClick={() => navSlide()}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div >
            <a href="#" className="logo"><Link to="/Home" className="logo">Bible Reader</Link></a>
            {/* <h4 className="logo">Bible Reader</h4> */}
            <div className={activity}>

                {/* <ul className="navLinkFade">
                    <h4>The Law</h4>
                    <li ><a href="#" onClick={() => props.setBookandChapters(['Genesis', 50, 1]), displayPagination()}><Link to="/Book/Genesis" className="bible__book" style={{ textDecoration: 'none' }}>Genesis</Link></a></li>
                    <li><a href="#" onClick={() => props.setBookandChapters(['Exodus', 40, 1])}><Link to="/Book/Exodus" className="bible__book" style={{ textDecoration: 'none' }}>Exodus</Link></a></li>
                    <li><a href="#" onClick={() => props.setBookandChapters(['Leviticus', 27, 1])}><Link to="/Book/Leviticus" className="bible__book" style={{ textDecoration: 'none' }}>Leviticus</Link></a></li>
                    <li><a href="#" onClick={() => toggleChapterMenu()}><Link to="/Book/Numbers" className="bible__book" style={{ textDecoration: 'none' }}>Numbers</Link></a></li>
                    <li><a href="#" onClick={() => toggleChapterMenu()}><Link to="/Book/Deuteronomy" className="bible__book" style={{ textDecoration: 'none' }}>Deuteronomy</Link></a></li>
                </ul> */}

                            {/* <div className="ui buttons" id="uis">
                                <i class="angle down icon small" onClick={() => toggleSubMenu()}></i>
                            </div> */}

                <div className="column">
                    <h4>The Law</h4>
                    {/* <div className="multi-level">

                        <div className="book">
                            <input type="checkbox" id="Genesis"/>
                            <label for="Genesis">Genesis</label>
                        </div>
                        <ul>
                            <li><a href="#">Genesis Test 1</a></li>
                            <li><a href="#">Genesiss Test 2</a></li>
                            <li><a href="#">GEn Test 3</a></li>
                            <li className={`Genesis sub-menu ${subMenuStyle}`}>
                                <Pagination numberOfChapters={50} setTheCurrentChapter={(value) => props.setTheCurrentChapter(value)}/>
                            </li>
                        </ul>

                        <div className="book">
                            <input type="checkbox" id="Exodus"/>
                            <label for="Exodus">Exodus</label>
                        </div>
                        <ul>
                            <li><a href="#">Exodus Test 1</a></li>
                            <li><a href="#">TExods</a></li>
                            <li className={`Genesis sub-menu ${subMenuStyle}`}>
                                <Pagination numberOfChapters={50} setTheCurrentChapter={(value) => props.setTheCurrentChapter(value)}/>
                            </li>
                        </ul>
                    </div> */}
                    

                    const booksOfBible = [{
                        name: 'Genesis',
                        chapters: 50
                    },
                    {
                        name: 'Exodus',
                        chapters: 40
                    },
                    {
                        name: 'Exodus',
                        chapters: 40
                    }]


                    // On click event described in the MenuItem.js file 
                    booksOfBible.map(book => {<MenuItem bookName={book.name} Chapters={book.chapters}/>})
                    <MenuItem bookName="Genesis" Chapters={50}/>
                   

                    <ul >
                        {/* <li id="book-name" className="Book" onClick={() => toggleSubMenu()}>
                            <a href="#" onClick={() => props.setBookandChapters(['Genesis', 50, 1])}>
                                <Link to="/Book/Genesis" className="bible__book" style={{ textDecoration: 'none' }}>Genesis</Link>
                                <i class="navbar-icon angle up icon" ></i>
                            </a>
                        </li>


                        <li className={`Genesis sub-menu ${subMenuStyle}`}>
                            <Pagination numberOfChapters={50} setTheCurrentChapter={(value) => props.setTheCurrentChapter(value)}/>
                        </li> */}








                        <li id="book-name" className="Book" onClick={() => toggleSubMenu()}>
                            <a href="#" onClick={() => props.setBookandChapters(['Genesis', 50, 1])}>
                                <Link to="/Book/Genesis" className="bible__book" style={{ textDecoration: 'none' }}>Genesis</Link>
                                <i class="navbar-icon angle up icon" ></i>
                            </a>
                        </li>
                        <li className={`Genesis sub-menu ${subMenuStyle}`}>
                            <Pagination numberOfChapters={50} setTheCurrentChapter={(value) => props.setTheCurrentChapter(value)}/>
                        </li>

                        <li className="Book" onClick={() => toggleSubMenu()}>
                            <a href="#" onClick={() => props.setBookandChapters(['Exodus', 40, 1])}>
                                <Link to="/Book/Exodus" className="bible__book" style={{ textDecoration: 'none' }}>Exodus</Link>
                                <i class="navbar-icon angle up icon" ></i>
                            </a>
                        </li>
                        <li className={`Exodus sub-menu ${subMenuStyle}`}>
                            <Pagination numberOfChapters={40} setTheCurrentChapter={(value) => props.setTheCurrentChapter(value)}/>
                        </li>

                        <li className="Book" onClick={() => toggleSubMenu()}>
                            <a href="#" onClick={() => props.setBookandChapters(['Leviticus', 27, 1])}>
                                <Link to="/Book/Leviticus" className="bible__book" style={{ textDecoration: 'none' }}>Leviticus</Link>
                                <i class="navbar-icon angle up icon" ></i>
                            </a>
                        </li>
                        <li className={`Numbers ${subMenuStyle}`}>
                            <Pagination numberOfChapters={27} setTheCurrentChapter={(value) => props.setTheCurrentChapter(value)}/>
                        </li>

                        <li className="Book" onClick={() => toggleSubMenu()}>
                            <a href="#" onClick={() => props.setBookandChapters(['Numbers', 36, 1])}>
                                <Link to="/Book/Numbers" className="bible__book" style={{ textDecoration: 'none' }}>Numbers</Link>
                                <i class="navbar-icon angle up icon" ></i>
                            </a>
                        </li>
                        <li className={`Deuteronomy ${subMenuStyle}`}>
                            <Pagination numberOfChapters={36} setTheCurrentChapter={(value) => props.setTheCurrentChapter(value)}/>
                        </li>

                        <li className="Book" onClick={() => toggleSubMenu()}>
                            <a href="#" onClick={() => props.setBookandChapters(['Deuteronomy', 34, 1])}>
                                <Link to="/Book/Deuteronomy" className="bible__book" style={{ textDecoration: 'none' }}>Deuteronomy</Link>
                                <i class="navbar-icon angle up icon" ></i>
                            </a>
                        </li>
                        <li className={subMenuStyle}>
                            <Pagination numberOfChapters={34} setTheCurrentChapter={(value) => props.setTheCurrentChapter(value)}/>
                        </li>
                    </ul>

                    {/* <ul >
                        <h4>The Law</h4>
                        <li className="Book" >
                            <a href="#" onClick={() => props.setBookandChapters(['Genesis', 50, 1])}>
                                <Link to="/Book/Genesis" className="bible__book" style={{ textDecoration: 'none' }}>Genesis</Link>
                                <i class="navbar-icon angle up icon" onClick={() => toggleSubMenu()}></i>
                            </a>
                        </li>
                        <li className="chapter sub-menu">
                            <Pagination numberOfChapters={50} setTheCurrentChapter={(value) => props.setCurrentChapter(value)}/>
                        </li>
                        <li className="Book">
                            <a href="#" onClick={() => props.setBookandChapters(['Exodus', 40, 1])}><Link to="/Book/Exodus" className="bible__book" style={{ textDecoration: 'none' }}>Exodus</Link></a>
                        </li>
                        <li className="chapter sub-menu">
                            <Pagination numberOfChapters={40} setTheCurrentChapter={(value) => props.setCurrentChapter(value)}/>
                        </li>
                        <li className="Book">
                            <a href="#" onClick={() => props.setBookandChapters(['Leviticus', 27, 1])}><Link to="/Book/Leviticus" className="bible__book" style={{ textDecoration: 'none' }}>Leviticus</Link></a>
                        </li>
                        <li className="chapter sub-menu">
                            <Pagination numberOfChapters={27} setTheCurrentChapter={(value) => props.setCurrentChapter(value)}/>
                        </li>
                        <li className="Book">
                            <a href="#" onClick={() => props.setBookandChapters(['Numbers', 36, 1])}><Link to="/Book/Numbers" className="bible__book" style={{ textDecoration: 'none' }}>Numbers</Link></a>
                        </li>
                        <li className="chapter sub-menu">
                            <Pagination numberOfChapters={36} setTheCurrentChapter={(value) => props.setCurrentChapter(value)}/>
                        </li>
                        <li className="Book">
                            <a href="#" onClick={() => props.setBookandChapters(['Deuteronomy', 34, 1])}><Link to="/Book/Deuteronomy" className="bible__book" style={{ textDecoration: 'none' }}>Deuteronomy</Link></a>
                        </li>
                        <li className="chapter sub-menu">
                            <Pagination numberOfChapters={34} setTheCurrentChapter={(value) => props.setCurrentChapter(value)}/>
                        </li>
                    </ul> */}
                    
                    <ul >
                        <h4>Old Testament Narrative</h4>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Joshua', 24, 1])}><Link to="/Book/Joshua" className="bible__book" style={{ textDecoration: 'none' }}>Joshua</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Judges', 21, 1])}><Link to="/Book/Judges" className="bible__book" style={{ textDecoration: 'none' }}>Judges</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Ruth', 4, 1])}><Link to="/Book/Ruth" className="bible__book" style={{ textDecoration: 'none' }}>Ruth</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['1st Samuel', 31, 1])}><Link to="/Book/1st Samuel" className="bible__book" style={{ textDecoration: 'none' }}>1st Samuel</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['2nd Samuel', 24, 1])}><Link to="/Book/2nd Samuel" className="bible__book" style={{ textDecoration: 'none' }}>2nd Samuel</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['1st Kings', 22, 1])}><Link to="/Book/1st Kings" className="bible__book" style={{ textDecoration: 'none' }}>1st Kings</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['2nd Kings', 25, 1])}><Link to="/Book/2nd Kings" className="bible__book" style={{ textDecoration: 'none' }}>2nd Kings</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['1st Chronicles', 29, 1])}><Link to="/Book/1st Chronicles" className="bible__book" style={{ textDecoration: 'none' }}>1st Chronicles</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['2nd Chronicles', 36, 1])}><Link to="/Book/2nd Chronicles" className="bible__book" style={{ textDecoration: 'none' }}>2nd Chronicles</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Ezra', 10, 1])}><Link to="/Book/Ezra" className="bible__book" style={{ textDecoration: 'none' }}>Ezra</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Nehemiah', 13, 1])}><Link to="/Book/Nehemiah" className="bible__book" style={{ textDecoration: 'none' }}>Nehemiah</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Esther', 10, 1])}><Link to="/Book/Esther" className="bible__book" style={{ textDecoration: 'none' }}>Esther</Link></a></li>
                    </ul>
                    <ul >
                        <h4>Wisdom Literature</h4>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Job', 42, 1])}><Link to="/Book/Job" className="bible__book" style={{ textDecoration: 'none' }}>Job</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Psalms', 150, 1])}><Link to="/Book/Psalms" className="bible__book" style={{ textDecoration: 'none' }}>Psalms</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Proverbs', 31, 1])}><Link to="/Book/Proverbs" className="bible__book" style={{ textDecoration: 'none' }}>Proverbs</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Ecclesiastes', 12, 1])}><Link to="/Book/Ecclesiastes" className="bible__book" style={{ textDecoration: 'none' }}>Ecclesiastes</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Song of Solomon', 8, 1])}><Link to="/Book/Song of Solomon" className="bible__book" style={{ textDecoration: 'none' }}>Song of Solomon</Link></a></li>
                    </ul> 
                    <ul >
                        <h4>Major Prophets</h4>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Isaiah', 66, 1])}><Link to="/Book/Isaiah" className="bible__book" style={{ textDecoration: 'none' }}>Isaiah</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Jeremiah', 52, 1])}><Link to="/Book/Jeremiah" className="bible__book" style={{ textDecoration: 'none' }}>Jeremiah</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Lamentations', 5, 1])}><Link to="/Book/Lamentations" className="bible__book" style={{ textDecoration: 'none' }}>Lamentations</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Ezekiel', 48, 1])}><Link to="/Book/Ezekiel" className="bible__book" style={{ textDecoration: 'none' }}>Ezekiel</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Daniel', 12, 1])}><Link to="/Book/Daniel" className="bible__book" style={{ textDecoration: 'none' }}>Daniel</Link></a></li>
                    </ul> 
                    <ul >
                        <h4>Minor Prophets</h4>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Hosea', 14, 1])}><Link to="/Book/Hosea" className="bible__book" style={{ textDecoration: 'none' }}>Hosea</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Joel', 3, 1])}><Link to="/Book/Joel" className="bible__book" style={{ textDecoration: 'none' }}>Joel</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Amos', 9, 1])}><Link to="/Book/Amos" className="bible__book" style={{ textDecoration: 'none' }}>Amos</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Obadiah', 1, 1])}><Link to="/Book/Obadiah" className="bible__book" style={{ textDecoration: 'none' }}>Obadiah</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Jonah', 4, 1])}><Link to="/Book/Jonah" className="bible__book" style={{ textDecoration: 'none' }}>Jonah</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Micah', 7, 1])}><Link to="/Book/Micah" className="bible__book" style={{ textDecoration: 'none' }}>Micah</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Nahum', 3, 1])}><Link to="/Book/Nahum" className="bible__book" style={{ textDecoration: 'none' }}>Nahum</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Habakkuk', 3, 1])}><Link to="/Book/Habakkuk" className="bible__book" style={{ textDecoration: 'none' }}>Habakkuk</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Zephaniah', 3, 1])}><Link to="/Book/Zephaniah" className="bible__book" style={{ textDecoration: 'none' }}>Zephaniah</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Haggai', 2, 1])}><Link to="/Book/Haggai" className="bible__book" style={{ textDecoration: 'none' }}>Haggai</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Zechariah', 14, 1])}><Link to="/Book/Zechariah" className="bible__book" style={{ textDecoration: 'none' }}>Zechariah</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Malachi', 4, 1])}><Link to="/Book/Malachi" className="bible__book" style={{ textDecoration: 'none' }}>Malachi</Link></a></li>
                    </ul> 
                    <ul >
                        <h4>Gospels</h4>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Matthew', 28, 1])}><Link to="/Book/Matthew" className="bible__book" style={{ textDecoration: 'none' }}>Matthew</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Mark', 16, 1])}><Link to="/Book/Mark" className="bible__book" style={{ textDecoration: 'none' }}>Mark</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Luke', 24, 1])}><Link to="/Book/Luke" className="bible__book" style={{ textDecoration: 'none' }}>Luke</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['John', 21, 1])}><Link to="/Book/John" className="bible__book" style={{ textDecoration: 'none' }}>John</Link></a></li>
                    </ul>
                    <ul >
                        <h4>History</h4>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Acts', 28, 1])}><Link to="/Book/Acts" className="bible__book" style={{ textDecoration: 'none' }}>Acts</Link></a></li>
                    </ul>
                    <ul >
                        <h4>Pauline Epistles</h4>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Romans', 16, 1])}><Link to="/Book/Romans" className="bible__book" style={{ textDecoration: 'none' }}>Romans</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['1 Corinthians', 16, 1])}><Link to="/Book/1 Corinthians" className="bible__book" style={{ textDecoration: 'none' }}>1 Corinthians</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['2 Corinthians', 13, 1])}><Link to="/Book/2 Corinthians" className="bible__book" style={{ textDecoration: 'none' }}>2 Corinthians</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Galatians', 6, 1])}><Link to="/Book/Galatians" className="bible__book" style={{ textDecoration: 'none' }}>Galatians</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Ephesians', 6, 1])}><Link to="/Book/Ephesians" className="bible__book" style={{ textDecoration: 'none' }}>Ephesians</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Philippians', 4, 1])}><Link to="/Book/Philippians" className="bible__book" style={{ textDecoration: 'none' }}>Philippians</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Colossians', 4, 1])}><Link to="/Book/Colossians" className="bible__book" style={{ textDecoration: 'none' }}>Colossians</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['1 Thessalonians', 5, 1])}><Link to="/Book/1 Thessalonians" className="bible__book" style={{ textDecoration: 'none' }}>1 Thessalonians</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['2 Thessalonians', 3, 1])}><Link to="/Book/2 Thessalonians" className="bible__book" style={{ textDecoration: 'none' }}>2 Thessalonians</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['1 Timothy', 6, 1])}><Link to="/Book/1 Timothy" className="bible__book" style={{ textDecoration: 'none' }}>1 Timothy</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['2 Timothy', 4, 1])}><Link to="/Book/2 Timothy" className="bible__book" style={{ textDecoration: 'none' }}>2 Timothy</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Titus', 3, 1])}><Link to="/Book/Titus" className="bible__book" style={{ textDecoration: 'none' }}>Titus</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Philemon', 1, 1])}><Link to="/Book/Philemon" className="bible__book" style={{ textDecoration: 'none' }}>Philemon</Link></a></li>
                    </ul>
                    <ul >
                        <h4>General Epistles</h4>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Hebrews', 13, 1])}><Link to="/Book/Hebrews" className="bible__book" style={{ textDecoration: 'none' }}>Hebrews</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['James', 5, 1])}><Link to="/Book/James" className="bible__book" style={{ textDecoration: 'none' }}>James</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['1 Peter', 5, 1])}><Link to="/Book/1 Peter" className="bible__book" style={{ textDecoration: 'none' }}>1 Peter</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['2 Peter', 3, 1])}><Link to="/Book/2 Peter" className="bible__book" style={{ textDecoration: 'none' }}>2 Peter</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['1 John', 5, 1])}><Link to="/Book/1 John" className="bible__book" style={{ textDecoration: 'none' }}>1 John</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['2 John', 1, 1])}><Link to="/Book/2 John" className="bible__book" style={{ textDecoration: 'none' }}>2 John</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['3 John', 1, 1])}><Link to="/Book/3 John" className="bible__book" style={{ textDecoration: 'none' }}>3 John</Link></a></li>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Jude', 1, 1])}><Link to="/Book/Jude" className="bible__book" style={{ textDecoration: 'none' }}>Jude</Link></a></li>
                    </ul>
                    <ul >
                        <h4>Apocalyptic Writings</h4>
                        <li><a href="#" onClick={() => props.setBookandChapters(['Revelation', 22, 1])}><Link to="/Book/Revelation" className="bible__book" style={{ textDecoration: 'none' }}>Revelation</Link></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NewNavBar