import { Route } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export default function SurveyQuestionComponent({
    questionText,
    answerLabel,
    answerType,
    thisUrl,
    nextUrl,
}) {

    // console.log("thisUrl in survey component:", thisUrl);

    return (
        <>
            <Route exact path={thisUrl}>
                <h2>{questionText}</h2>
                <p>{answerLabel}</p>
                <input type={answerType} />
                <ButtonComponent nextUrl={nextUrl} />
            </Route>
        </>
    );
}
