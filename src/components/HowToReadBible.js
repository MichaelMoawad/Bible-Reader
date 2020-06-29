import React from "react";
import "../styling/App.css";
import "../styling/HowToReadBible.css";

const DailyReflection = () => {
    return (
        <div>
            <h1 className="chapter-heading-first">How to Read the Bible</h1>
            <p className="chapter-text-home">
                The bible is a collection of smaller books written over an
                extended period of time documenting the history of the people of
                ancient Israel. It explores fundamental questions of theology,
                exploring the reasons of why we are here and what we were placed
                on earth to do. Check out the playlist below by pur friends over
                at the Bible Project to understand more about the bible, its
                origins and how best to read it.
            </p>
            <div className="video">
                <iframe
                    width="1000"
                    height="562"
                    src="https://www.youtube.com/embed/videoseries?list=PLH0Szn1yYNedn4FbBMMtOlGN-BPLQ54IH"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <div className="living-and-powerful">
                <h1 className="chapter-heading">Living and Powerful</h1>
                <h4 className="chapter-text-home">
                    Check out the amazing work done by our friends over at
                    Living and Powerful!
                </h4>
                <h4 className="chapter-text-home">
                    A word from Cumi: "Help us achieve our target and become one
                    of the first people to experience the Living and Powerful
                    Bible cards. In a world where spiritual equipping is more
                    and more essential, our heart is to provide children,
                    friends and communities with the ultimate sword of the
                    Spirit - the word of God. His word shines light into the
                    darkness and destroys every lie with truth. Seeing so many
                    struggle with lack of purpose, loneliness, depression, peer
                    pressure, fear and anxiety, we wanted to design something
                    that would help empower them and our own children. We wanted
                    to create a resource appealing to all ages -that sparks
                    imagination and resonates with hearts, is simple to use and
                    easy to recall."
                </h4>
                <div className="LP-logo">
                    <a href="https://www.kickstarter.com/projects/livingandpowerful/landp-living-and-powerful-illustrated-bible-verse-cards">
                        <img
                            className="LP-logo-img"
                            src={require("../styling/Living-and-Powerful-Illustrations/Living-and-powerful-Logo-gold-banner.png")}
                            alt=""
                        />
                    </a>
                </div>
                <div className="living-and-powerful images">
                    <img
                        className="LP-image"
                        src={require("../styling/Living-and-Powerful-Illustrations/IMG_0533.JPG")}
                        alt=""
                    />
                    <img
                        className="LP-image"
                        src={require("../styling/Living-and-Powerful-Illustrations/IMG_0534.JPG")}
                        alt=""
                    />
                    <img
                        className="LP-image"
                        src={require("../styling/Living-and-Powerful-Illustrations/IMG_0535.JPG")}
                        alt=""
                    />
                    <img
                        className="LP-image"
                        src={require("../styling/Living-and-Powerful-Illustrations/IMG_0536.JPG")}
                        alt=""
                    />
                    <img
                        className="LP-image"
                        src={require("../styling/Living-and-Powerful-Illustrations/IMG_0537.JPG")}
                        alt=""
                    />
                    <img
                        className="LP-image"
                        src={require("../styling/Living-and-Powerful-Illustrations/IMG_0538.JPG")}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default DailyReflection;
