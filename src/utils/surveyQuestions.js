export default [
    {
        questionKey: "Feelings",
        questionText: "How are you feeling today?",
        answerLabel: "Feeling?",
        answerType: "number",
        thisUrl: "/",
        nextUrl: "/understanding",
    },
    {
        questionKey: "Understanding",
        questionText: "How well are you understanding the content?",
        answerLabel: "Understanding?",
        answerType: "number",
        thisUrl: "/understanding",
        nextUrl: "/support",
    },
    {
        questionKey: "Support",
        questionText: "How well are you being supported?",
        answerLabel: "Support?",
        answerType: "number",
        thisUrl: "/support",
        nextUrl: "/comment",
    },
    {
        questionKey: "Comments",
        questionText: "Any comments you want to leave?",
        answerLabel: "Comments",
        answerType: "text",
        thisUrl: "/comment",
        nextUrl: "/review",
    },
];
