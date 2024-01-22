import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function ReviewComponent() {
    const feedback = useSelector((state) => state.feedbackReducer);
    const history = useHistory();

    const unblock = history.block();

    const submitHandler = (e) => {
        e.preventDefault();
        
        axios
            .post("/api/feedback", {
                data: feedback,
            })
            .then((res) => {
                console.log("res from server:", res);
                // unblock history on success
                unblock();
                // go to the success page
                history.push("/success");
            })
            .catch((err) => {
                console.log("Houston, we got ourselves an error in here");
                console.error(err);
            });
    };

    console.log("feedback from ReviewComponent:", feedback);
    return (
        <>
            <h2>Review Your Feedback</h2>
            <ul>
                {feedback.map((item, i) => {
                    for (const [itemKey, itemValue] of Object.entries(item)) {
                        return <li className="feedbackItems" key={i}>{itemKey}: {itemValue}</li>;
                    }
                })}
            </ul>
            <button onClick={(e) => submitHandler(e)}>Submit</button>
        </>
    );
}
