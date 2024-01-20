import { useHistory } from "react-router-dom";

export default function ButtonComponent({ nextUrl }) {

    const history = useHistory();

    const handlesNextClick = (url) => {
        console.log("handlesNextClick were clicked:");
        // uses the url to get to next component
        history.push(url);
    };

    console.log("nextUrl:", nextUrl);
    return (
        <>
        <button onClick={() => handlesNextClick(nextUrl)}>Button component</button>
        </>
    )

}