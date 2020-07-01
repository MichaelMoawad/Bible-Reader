import React from "react";
import "../styling/PageNotFound.css";

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            {/* <div className="error-type">404-error</div> */}
            <div className="not-found-text">
                Woops! We could not find this page
            </div>
        </div>
    );
};

export default PageNotFound;
