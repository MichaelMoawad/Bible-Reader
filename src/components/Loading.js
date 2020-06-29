import React from "react";
import "../styling/Loading.css";

const Loading = () => {
    return (
        <div className="loading-spinner">
            <div className="loading-header">
                <img
                    className="spinner"
                    src={require("../styling/Spin-1s-200px.gif")}
                    alt=""
                />
            </div>
            <div class="loading-text">Loading...</div>
        </div>
    );
};

export default Loading;
