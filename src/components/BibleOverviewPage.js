// ./components/BibleOverviewPage.js
import React from "react";
import "../styling/App.css";

import {
  WhatIsTheBible,
  BibleStructure,
  WhoIsJesus,
  GospelSummary,
  HowToRead,
  HowToReadVideo,
  WhatIsPrayer,
  Translations
} from "./BibleInfoSections";

const BibleOverviewPage = () => {
  return (
    <div>
      <WhatIsTheBible />
      <BibleStructure />
      <WhoIsJesus />
      <GospelSummary />
      <HowToRead />
      <HowToReadVideo />
      <WhatIsPrayer />
      <Translations />
    </div>
  );
};

export default BibleOverviewPage;
