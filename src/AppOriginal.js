// import React from 'react';
// import "./styling/App.css";
// import { Route, Link } from "react-router-dom";
// import NavBar from './components/NavBar'
// import Home from './components/Home';
// import Matthew from './components/Matthew'
// import Mark from './components/Mark'
// import Luke from './components/Luke'
// import John from './components/John'
// import DailyVerse from './components/DailyVerse'
// import BackGround from './components/BackGround'
// import bible from './apis/bible'
// import Pagination from './components/Pagination';
// import TestSmoothScroll from './components/Test'

// const KEY = '2fca7b59938f7b8f55b0da9b429a5c9e'

// class App extends React.Component{

//     state = {
//         numOfChapters: 17
//     }

//     componentDidMount(){
//         console.log('page has loaded')
//         console.log(this.state.numOfChapters)
//     }

//     updateState = () =>{
//         console.log('state has been updated')
//         this.setState({ numOfChapters: 2})
//     }

//     render(){
//         return (
//             <div className="App">
//                 <div className="header">

//                     <NavBar />
//                     <DailyVerse />
//                 </div>
//                     <BackGround />
//                 <div className="body">
//                     <Route exact path="/" component={Home} updateState={()=>this.updateState()}/>
//                     <Route exact path="/Matthew" component={Matthew}/>
//                     <Route exact path="/Mark" component={Mark} />
//                     <Route exact path="/Luke" component={Luke} />
//                     <Route exact path="/John" component={John} />
//                 </div>
//             </div>
//         );
//     }
// }

// export default App; 