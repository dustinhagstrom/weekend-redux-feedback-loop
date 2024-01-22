import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function NavButtonComponent({
    questionKey,
    nextUrl,
    inputValue,
}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const handlesNextClick = (nextUrl) => {
        console.log("handlesNextClick were clicked:");
        addDataToReducer();
        navigateToNextComponent();
    };

    const navigateToNextComponent = () => {
        history.push(nextUrl);
    };

    const addDataToReducer = () => {
        dispatch({
            type: "ADD_FEEDBACK",
            payload: { [`${questionKey}`]: `${inputValue}` },
        });
    };

    return (
            <button data-testid="next" onClick={() => handlesNextClick(nextUrl)}>
                Button component
            </button>
    );
}
