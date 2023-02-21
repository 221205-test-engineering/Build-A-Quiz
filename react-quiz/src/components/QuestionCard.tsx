import React from "react";

//Types
import { AnswerObject } from '../App'
//Styles
import {Wrapper, ButtonWrapper} from './QuestionCard.styles'

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestion: number;
}

//FC is function component in TypeScript
//In React, a functional component is a JavaScript function that accepts 
//props as input and returns a React element. 
const QuestionCard: React.FC<Props> = ({
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNr, 
    totalQuestion
    }) => (
    <Wrapper>
        <p className="number">
            Question: {questionNr} / {totalQuestion}
        </p>

        {/*
            Use brackets to comment HTML within React.
            *dangerouslySetInnerHTML
            - A prop in React that allows you to set HTML content of an element
            directly.
        */}
        
        <p dangerouslySetInnerHTML={{__html: question}} />
        <div>
            {answers.map((answer) => (
                <ButtonWrapper 
                    key={answer}
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}
                >
                    <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer}} />
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
    );

export default QuestionCard;