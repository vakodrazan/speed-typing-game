import { useState, useRef, useEffect } from "react";

/**
 * Challenge:
 * 
 * Move the "business logic" into a custom hook, which will provide
 * any parts of state and any functions to this component to use.
 * 
 * You can easily tell which parts the component needs by looking at 
 * the variables being used inside the `return`ed markup below.
*/

function useTypingGame() {

    const START_TIME = 10;
    const [text, setText] = useState("");
    const [timeRemaining, setTimeRemaining] = useState(START_TIME);
    const [isTimeRuning, setTimeRuning] = useState(false);
    const [finalResult, setFinalResult] = useState(0);
    const textAreaRef = useRef(null)

    function handleChange(e) {
        const {value} = e.target;
        setText(value);
    }
    
    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ");
        return wordsArr.filter(word => word !== "").length;
    }

    function startGame() {
        setTimeRuning(true);
        setFinalResult(0);
        setText("");
        textAreaRef.current.disabled = false;
        textAreaRef.current.focus();
    }

    function endGame() {
        setTimeRuning(false);
        setTimeRemaining(START_TIME);
        const numWords = calculateWordCount(text);
        setFinalResult(numWords);
    }    

    useEffect(() => {
        if (isTimeRuning && timeRemaining > 0) {
            setTimeRuning(true)
            setTimeout(() => {
                setTimeRemaining(prevTime => prevTime - 1)
            }, 1000);
        } else if (timeRemaining === 0) {
            endGame();
        }
    }, [isTimeRuning, timeRemaining])

    return [text, textAreaRef, timeRemaining, isTimeRuning, finalResult, handleChange, startGame];

}

export default useTypingGame;