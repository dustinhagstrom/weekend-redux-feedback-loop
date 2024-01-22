import { Route } from "react-router-dom";
import NavButtonComponent from "../NavButtonComponent/NavButtonComponent";
import { useState } from "react";

export default function SurveyQuestionComponent({
    questionKey,
    questionText,
    answerLabel,
    answerType,
    thisUrl,
    nextUrl,
}) {
    // set the initial state to zero if a number type, empty string otherwise
    let initialState = answerType === "number" ? 0 : "";

    const [inputValue, setInputValue] = useState(initialState);

    console.log("inputValue in survey component:", inputValue);

    return (
        <>
            <Route exact path={thisUrl}>
                <h2>{questionText}</h2>
                <label htmlFor="userInput">{answerLabel}</label>
                <input
                    id="userInput"
                    data-testid="input"
                    type={answerType}
                    min={1}
                    max={5}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                />
                <NavButtonComponent
                    questionKey={questionKey}
                    nextUrl={nextUrl}
                    inputValue={inputValue}
                />
            </Route>
        </>
    );
}
