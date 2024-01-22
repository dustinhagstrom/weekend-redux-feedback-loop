import React from "react";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import SurveyQuestionComponent from "../SurveyQuestionComponent/SurveyQuestionComponent";
import { Provider } from "react-redux";

import store from "../../redux/store";
import surveyQuestions from "../../utils/surveyQuestions";
import ReviewComponent from "../ReviewComponent/ReviewComponent";
import SuccessComponent from "../SuccessComponent/SuccessComponent";

function App() {


    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header />
                    <form id="userSurveyForm">
                        {surveyQuestions.map((question, i) => (
                            <SurveyQuestionComponent
                                key={i}
                                questionKey={question.questionKey}
                                questionText={question.questionText}
                                answerLabel={question.answerLabel}
                                answerType={question.answerType}
                                thisUrl={question.thisUrl}
                                nextUrl={question.nextUrl}
                            />
                        ))}
                        <Route exact path="/review">
                            <ReviewComponent />
                        </Route>
                        <Route exact path="/success">
                            <SuccessComponent />
                        </Route>
                    </form>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
