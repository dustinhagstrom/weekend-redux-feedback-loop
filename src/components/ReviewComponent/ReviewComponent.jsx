import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function ReviewComponent() {
    
    const feedback = useSelector((state) => state.feedbackReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    let unblock;

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

                dispatch({
                    type: "CLEAR_STORE",
                    payload: []
                })
                // go to the success page
                history.push("/success");
            })
            .catch((err) => {
                console.log("Houston, we got ourselves an error in here");
                console.error(err);
            });


    };

    // prevent blocking history more than once
    useEffect(() => {
        unblock = history.block(() => {
            //do nothing
        });
    }, []);

    console.log("feedback from ReviewComponent:", feedback);
    return (
        <>
            <h2>Review Your Feedback</h2>
            <ul>
                {feedback.map((item, i) => {
                    for (const [itemKey, itemValue] of Object.entries(item)) {
                        console.log("typeof input values", typeof itemValue)
                        return <li className="feedbackItems" key={i}>{itemKey}: {itemValue}</li>;
                    }
                })}
            </ul>
            <button data-testid="next" onClick={(e) => submitHandler(e)}>Submit</button>
        </>
    );
}
