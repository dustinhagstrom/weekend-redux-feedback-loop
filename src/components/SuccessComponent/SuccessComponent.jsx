import { useHistory } from "react-router-dom";

export default function SuccessComponent() {

    const history = useHistory();


    const doAnotherSurvey = () => {
        history.push("/");
    }
    
    return (
        <>
            <h2>Thank You!</h2>
            <button data-testid="next" onClick={doAnotherSurvey}>Leave New Feedback</button>
        </>
    );
}
