import React, { useEffect, useRef, useState } from "react";
import useTypingGame from "./useTypingGame";

function App() {
    const [
        text, textAreaRef, 
        timeRemaining, 
        isTimeRuning, 
        finalResult, 
        handleChange, 
        startGame
    ] = useTypingGame();

    return (
        <>
            <h1>Speed Typing Game</h1>
            <textarea ref={textAreaRef} disabled={!isTimeRuning} value={text} onChange={handleChange} />
            <h4>Time remaining: {timeRemaining}</h4>
            <button disabled={isTimeRuning} onClick={startGame}>Start</button>
            <h1>Word count: {finalResult}</h1>
        </>
    )
}

export default App;