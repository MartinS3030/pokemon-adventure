    import { useState, useEffect } from "react";

    export default function useMessage(
    questions,
    question,
    setQuestion,
    setMessage,
    messageFinished,
    setMessageFinished
    ) {
    useEffect(() => {
        console.log(messageFinished)
        console.log(question)
        const nextMessage = (event) => {
        if (event.key === " " && messageFinished) {
            if (Math.floor(question + 1) < questions.length) {
            setQuestion(Math.floor(question + 1));
            setMessage(questions[Math.floor(question + 1)]);
            setMessageFinished(false);
            }
        }
        };

        window.addEventListener("keydown", nextMessage);

        return () => {
        window.removeEventListener("keydown", nextMessage);
        };
    }, [question, messageFinished]);
    }
