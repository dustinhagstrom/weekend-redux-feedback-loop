export default [
    {
        questionText: "How are you feeling today?",
        answerLabel: "Feeling?",
        answerType: "number",
        thisUrl: "/",
        nextUrl: "/understanding",
    },
    {
        questionText: "How well are you understanding the content?",
        answerLabel: "Understanding?",
        answerType: "number",
        thisUrl: "/understanding",
        nextUrl: "/support",
    },
    {
        questionText: "How well are you being supported?",
        answerLabel: "Support?",
        answerType: "number",
        thisUrl: "/support",
        nextUrl: "/comment",
    },
    {
        questionText: "Any comments you want to leave?",
        answerLabel: "Comments",
        answerType: "text",
        thisUrl: "/comment",
        nextUrl: "/comment", // TODO gotta put something here
    },
];
