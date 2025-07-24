import React, { useState, useEffect, useRef } from "react";
import "../styling/App.css";
import "../styling/HowToReadBible.css";


const SectionWrapper = ({ title, imageSrc, children, reverse, center, smallHeading }) => {
    const HeadingTag = smallHeading ? "h3" : "h2";
    const imageRef = useRef(null);
    const [offsetY, setOffsetY] = useState(0);
  
    // Parallax scroll effect setup for default image sections
    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          setOffsetY(scrollY * 0.1); // Adjust speed here (0.1–0.3 recommended)
        };
      
        window.addEventListener("scroll", handleScroll);
        handleScroll();
      
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
      
  
    // Center layout: text on top, video (iframe) below
    if (center) {
      return (
        <div className="section-wrapper center" >
          <div className="section-content">
            <HeadingTag className="chapter-heading centered">{title}</HeadingTag>
            {children}
          </div>
          {imageSrc && (
            <div className="section-media">
              <iframe
                width="100%"
                height="400"
                src={imageSrc}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      );
    }
  
    // Default layout with optional reverse order and parallax image
    return (
      <div 
        className={`section-wrapper ${reverse ? "reverse" : ""}`}
      >
        {imageSrc && (
          <div className="section-image">
            <img
              ref={imageRef}
              src={imageSrc}
              alt={title}
              style={{ transform: `translate(${ -150 }px, ${offsetY}px)`, zIndex: 1 }}
              />
          </div>
        )}
        <div className="section-content" style={{ position: "relative", zIndex: 2 }}>
          <HeadingTag className="chapter-heading">{title}</HeadingTag>
          {children}
        </div>
      </div>
    );
  };


export const WhatIsTheBible = () => (
  <SectionWrapper
    title="What is the Bible?"
    imageSrc="/Bible-Info-Section/stack-of-books.png"
    reverse
  >
    <div className="inner-section">

        <p>The Bible is a collection of ancient books written over centuries. It includes law, poetry, prophecy, wisdom literature, biographies, and letters — all inspired by God and telling one unified story of redemption. The Bible reveals who God is, how He interacts with humanity, and what He has done to restore the broken relationship between Himself and us.</p>
        <p>From Genesis to Revelation, it’s the unfolding drama of God's plan to rescue the world through Jesus Christ. It’s not just information — it’s invitation.</p>
        </div>
  </SectionWrapper>
);

export const BibleStructure = () => (
  <SectionWrapper
    imageSrc="/Bible-Info-Section/saint-jose-design.png"
  >

    <div className="inner-section" >
    <h3 className="chapter-heading">"How is the Bible Split Up?"</h3>

    <div style={{marginBottom: "50px"}}>
        <p>The Bible is divided into two main sections: the <strong>Old Testament</strong> and the <strong>New Testament</strong>. The Old Testament contains 39 books and lays the foundation for God’s promises and relationship with His people. It includes the Law (like Genesis and Exodus), wisdom (like Proverbs), and prophets (like Isaiah).</p>
        <p>The New Testament contains 27 books, beginning with the life of Jesus and continuing through the early Church. Together, the 66 books of the Bible form a rich, interconnected narrative filled with history, poetry, prophecy, and hope.</p>
    </div>



    <h3 className="chapter-heading">"Old vs New Testament"</h3>

    <div style={{marginBottom: "50px"}}>
        <p>The <strong>Old Testament</strong> looks forward — full of longing, promises, and shadows of what is to come. It shows humanity's need for rescue and God's faithfulness to His covenant people.</p>
        <p>The <strong>New Testament</strong> is the fulfillment of that longing. Jesus steps into history, fulfilling prophecy and revealing God in flesh. It brings clarity to the promises and hope foreshadowed in the Old Testament, showing us the depth of God’s love through the life, death, and resurrection of Christ.</p>
    </div>

    <h3 className="chapter-heading">"What are the Gospels?"</h3>

    <div style={{marginBottom: "50px"}}>
        <p>The Gospels — Matthew, Mark, Luke, and John — are biographies of Jesus. They were written by those who walked with Him or were close to His disciples. Each Gospel provides a unique angle on who Jesus is, what He did, and what He taught.</p>
        <p>They’re not just stories. They’re transformative accounts meant to reveal Jesus as the Messiah and invite us into a new kind of life.</p>
    </div>
    </div>
  </SectionWrapper>
);

export const WhoIsJesus = () => (
  <SectionWrapper
    title="Who is Jesus?"
    imageSrc="/Bible-Info-Section/mary-joseph-jesus.png"
    reverse
  >

    <div className="inner-section" >
        <p>Jesus is more than a historical figure. Christians believe He is the Son of God — both fully human and fully divine. He lived among us, healed the sick, forgave sins, and welcomed the outcast. His love was radical. His truth uncompromising.</p>
        <p>He died on a cross as a sacrifice for our sin and rose from the dead, proving His victory over sin and death. Jesus isn't just someone we learn about — He's someone we can know.</p>
    </div>
  </SectionWrapper>
);

export const GospelSummary = () => (
  <SectionWrapper
    title="The Gospel Message"
    imageSrc="/Bible-Info-Section/bible-translations.png"
         
  >
    <div className="inner-section" >
        <p>The word "gospel" means "good news." And here it is:</p>
        <p>We were made for relationship with God, but sin broke that connection. No matter how good we try to be, we can’t fix it ourselves. But God didn’t leave us in our brokenness. He sent Jesus to do what we couldn’t — to live perfectly, die sacrificially, and rise victoriously.</p>
        <p>By trusting in Jesus, we’re forgiven, freed, and invited into eternal life — a relationship that starts now and never ends. That’s the message at the heart of Christianity.</p>
    </div>
  </SectionWrapper>
);

export const HowToRead = () => (
  <SectionWrapper
    title="How to Read Your Bible"
    imageSrc="/Bible-Info-Section/purple-cross-design.png"
    reverse
  >
    <div className="inner-section" >
        <p>The Bible is rich and diverse. Different sections serve different purposes:</p>
        <ul>
        <li><strong>Psalms:</strong> Use them as personal prayers and songs of worship.</li>
        <li><strong>Proverbs:</strong> Short nuggets of wisdom for everyday decisions.</li>
        <li><strong>The Gospels:</strong> A vivid picture of Jesus and how He calls us to live.</li>
        <li><strong>Acts:</strong> The story of the early Church and the power of the Spirit.</li>
        <li><strong>The Letters:</strong> Deep teaching on Christian life and faith.</li>
        </ul>
        <p>You don’t have to read in order. Start with a book that stirs your curiosity. Ask questions. Take your time. Let it speak.</p>
    </div>
  </SectionWrapper>
);

export const HowToReadVideo = () => (
    <div className="video" style={{ position: "relative", zIndex: 2 }}>
        <iframe
            className="iframe-video"
            title="Embeded-youtube-video"
            width="1000"
            height="562"
            src="https://www.youtube.com/embed/videoseries?list=PLH0Szn1yYNedn4FbBMMtOlGN-BPLQ54IH"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style={{ boxShadow: "40px 40px 0px 0px #1e0915d7"}}
        ></iframe>
    </div>
);

export const WhatIsPrayer = () => (
  <SectionWrapper
    title="What is Prayer?"
    imageSrc="/Bible-Info-Section/prayer-hands.png"
    
  >
    <div className="inner-section" >
        <p>Prayer is simply talking to God. No need for perfect words or performance. It's real, honest conversation with the One who knows you best.</p>
        <p>We pray to build relationship, to express gratitude, to ask for guidance, and to align our hearts with God's will. Through prayer, we grow in trust and deepen our faith.</p>
        <p>Prayer isn’t about getting what we want. It’s about drawing closer to the One who gives us what we truly need.</p>
    </div>
  </SectionWrapper>
);

export const Translations = () => (
  <SectionWrapper
    title="Bible Translations"
    // imageSrc="/Bible-Info-Section/bible-translations.png"
    reverse
  >
    <div className="inner-section" >
        <p>There are many Bible translations because scholars aim to make Scripture understandable while preserving meaning. Some are more literal (like ESV or NASB), others are more conversational (like NLT), and some are paraphrased for clarity (like The Message).</p>
        <p>Different translations serve different needs. Want accuracy? Go with a word-for-word version. New to the Bible? Try the NLT. Want poetic beauty? Check out the KJV.</p>
        <p>It's okay to explore. The best Bible is the one you'll actually read.</p>
  </div>
  </SectionWrapper>
);
