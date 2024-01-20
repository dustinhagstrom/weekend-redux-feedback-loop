import React from "react";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import SurveyQuestionComponent from "../SurveyQuestionComponent/SurveyQuestionComponent";
import { Provider } from "react-redux";

import store from "../../redux/store";
import surveyQuestions from "../../utils/surveyQuestions";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header />
                    {surveyQuestions.map((question, i) => (
                        <SurveyQuestionComponent
                            key={i}
                            questionText={question.questionText}
                            answerLabel={question.answerType}
                            answerType={question.answerType}
                            thisUrl={question.thisUrl}
                            nextUrl={question.nextUrl}
                        />
                    ))}
                </div>
            </Router>
        </Provider>
    );
}

export default App;
