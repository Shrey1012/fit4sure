import React, { useState } from "react";
import "./SurveyPages.css";
import axios from "axios";
import * as XLSX from "xlsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import First from "./Questions/First";
import Second from "./Questions/Second";
import Third from "./Questions/Third";
import Fourth from "./Questions/Fourth"; 
import Fifth from "./Questions/Fifth";
import Sixth from "./Questions/Sixth";
import Seventh from "./Questions/Seventh";
import Eighth from "./Questions/Eighth";
import Ninth from "./Questions/Ninth";
import Tenth from "./Questions/Tenth";
import Eleventh from "./Questions/Eleventh";
import Twelfth from "./Questions/Twelfth";
import Thirteenth from "./Questions/Thirteenth";
import Fourteenth from "./Questions/Fourteenth";
import Fifteenth from "./Questions/Fifteenth";
import Sixteenth from "./Questions/Sixteenth";
import Seventeenth from "./Questions/Seventeenth";
import Eighteenth from "./Questions/Eighteenth";
import Nineteenth from "./Questions/Nineteenth";
import Twentieth from "./Questions/Twentieth";
import TwentyFirst from "./Questions/TwentyFirst";
import TwentySecond from "./Questions/TwentySecond";
import TwentyThird from "./Questions/TwentyThird";
import TwentyFourth from "./Questions/TwentyFourth";
import TwentyFifth from "./Questions/TwentyFifth";
import TwentySixth from "./Questions/TwentySixth";
import TwentySeventh from "./Questions/TwentySeventh";
import TwentyEighth from "./Questions/TwentyEighth";
import TwentyNinth from "./Questions/TwentyNinth";
import Thirtieth from "./Questions/Thirtieth";
import ThirtyFirst from "./Questions/ThirtyFirst";
import ThirtySecond from "./Questions/ThirtySecond";

const SurveyPages = ({handleSurveySubmit}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [surveyData, setSurveyData] = useState({
    goal: "",
    gender: "",
    ageGroup: "",
    heightInCm: "",
    weightInKg: "",
    idealWeightInKg: "",
    lifestyle: "",
    sportsInvolvement: "",
    healthIssues: "",
    risks: "",
    activeDiagonosis: "",
    diagnosisDetails: "",
    eatingFeeling: "",
    healthyHabitRoutine: "",
    foodCompletion: "",
    preferredName: "",
    selfImage: "",
    eatingHabits: "",
    mainGoal: [],
    fitnessPriority: "",
    weightGainReasons: [],
    weightGainTime: "",
    triedWeightLossProgram: "",
    triedWeightLossMethods: "",
    customMetodUnderstanding: "",
    weightIssueInSocializing: "",
    needForMotivation: "",
    focusArea: "",
    requireWorkoutInPlan: "",
    allergenicFood: "",
    allergenicFoodDetails: "",
    snackTime: "",
    urgeToEatTrigger: "",
    hearingSource: "",
  });

  const navigateToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const questions = [
    { key: "goal", question: "What is your goal?" },
    {
      key: "gender",
      question: "Which among the following sex best identifies you?",
    },
    {
      key: "ageGroup",
      question:
        "Diet plans and workouts are different for different age groups. In which age group do you belong?",
    },
    { key: "heightInCm", question: "Describe your height in  cm" },
    { key: "weightInKg", question: "What is your weight (kg)currently?" },
    {
      key: "idealWeightInKg",
      question:
        " What weight do you see as your ideal weight at the end of this journey to achieve in kgs?",
    },
    {
      key: "lifestyle",
      question:
        " Describe your lifestyle and how you cope with your work and workout together?",
    },
    {
      key: "sportsInvolvement",
      question: "Do you often involve yourself with sports or some activity",
    },
    {
      key: "healthIssues",
      question: "Do you have any previous body / health issues",
    },
    { key: "risks", question: "Are you at risk of any of the following?" },
    {
      key: "activeDiagonosis",
      question: "Are you going on with any active diagnosis?",
    },
    {
      key: "diagnosisDetails",
      question: "Are you going on with any active diagnosis?",
    },
    {
      key: "eatingFeeling",
      question:
        "Does eating food make you feel good and comfortable all the time? Rate through the below scale:",
    },
    {
      key: "healthyHabitRoutine",
      question:
        "Are you of those who start on with a new healthy habit but with time go back to the old routine",
    },
    {
      key: "foodCompletion",
      question:
        "How much can you relate: You tend to complete your food even when your tummy feels full.",
    },
    {
      key: "preferredName",
      question: "Hey! We forgot an important question. What can we call you?",
    },
    {
      key: "selfImage",
      question:
        "How do you see yourself after the goals that you wish to achieve",
    },
    {
      key: "eatingHabits",
      question:
        " What are your eating habits once you achieve your ideal weight (goal)",
    },
    { key: "mainGoal", question: "Describe your main goal to lose weight" },
    {
      key: "fitnessPriority",
      question: " Do you have any priority in this fitness journey?",
    },
    {
      key: "weightGainReasons",
      question: "When do you feel you gained more weight?",
    },
    {
      key: "weightGainTime",
      question: " How much time has passed ever since you gained the weight?",
    },
    {
      key: "triedWeightLossProgram",
      question: "Have you tried any of the weight loss programs before?",
    },
    {
      key: "triedWeightLossMethods",
      question: "Have you tried any of the below in the  past to lose weight?",
    },
    {
      key: "customMetodUnderstanding",
      question:
        "Can you identify with the following statement: 'I understand what actions I need to take to achieve weight loss, but I require a method that can be customised to my lifestyle'? ",
    },
    {
      key: "weightIssueInSocializing",
      question:
        " Do you feel that your weight has been an issue for your ability to socialise to others`?",
    },
    {
      key: "needForMotivation",
      question:
        "Do you relate to the fact that you need motivation at times to continue being on the healthy path.",
    },
    {
      key: "focusArea",
      question: "What area do you want to focus on in your plan?",
    },
    {
      key: "requireWorkoutInPlan",
      question:
        "Do you feel that you require a weight loss plan that involves some part of working out as well?",
    },
    {
      key: "allergenicFood",
      question: "Are you allergenic to any specific kind of food?",
    },
    {
      key: "allergenicFoodDetails",
      question: "Are you allergenic to any specific kind of food?",
    },
    { key: "snackTime", question: "When do you feel an urge to grab a snack?" },
    {
      key: "urgeToEatTrigger",
      question: "What typically triggers your urge to eat?",
    },
    { key: "hearingSource", question: "Where did you hear about us?" },
  ];

  const usernameFromEmail = JSON.parse(localStorage.getItem("profile")).result
    .name;

  // Function to calculate column widths based on content length
  const getColumnWidths = (dataWithQuestions) => {
    const columnWidths = [];
    dataWithQuestions.forEach((row) => {
      row.forEach((cellValue, colIndex) => {
        const cellWidth = (cellValue && cellValue.length) || 10; // Minimum width is 10
        columnWidths[colIndex] = Math.max(
          columnWidths[colIndex] || 0,
          cellWidth
        );
      });
    });
    return columnWidths;
  };

  const onSubmitSurvey = async (e) => {
    e.preventDefault();

    try {
      const userName = `${usernameFromEmail} (${surveyData.preferredName})`;

      const questionColumn = ["User Name", ...questions.map((q) => q.question)];
      const answerColumn = [
        userName,
        ...questions.map((q) => surveyData[q.key]),
      ];

      const dataWithQuestions = questionColumn.map((question, index) => [
        question,
        answerColumn[index],
      ]);

      console.log("Survey data:", dataWithQuestions);

      // Convert survey data and questions to a sheet
      const sheetData = XLSX.utils.aoa_to_sheet(dataWithQuestions);

      // Get the column widths based on content length
      const columnWidths = getColumnWidths(dataWithQuestions);

      sheetData["!cols"] = columnWidths.map((width) => ({ width }));

      // Create a workbook with the sheet
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, sheetData, "Survey Data");

      // Generate a buffer containing the Excel file data
      const excelBuffer = XLSX.write(workbook, {
        type: "array",
        bookType: "xlsx",
      });

      // Create a Blob and FormData to send the file to the backend
      const blob = new Blob([new Uint8Array(excelBuffer)], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const formData = new FormData();
      formData.append("file", blob, "survey_data.xlsx");

      const API = axios.create({ baseURL: "http://localhost:3001" });

      API.interceptors.request.use((req) => {
        if (localStorage.getItem("profile")) {
          req.headers.authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
          }`;
        }

        return req;
      });

      // Send the form data to the backend
      await API.post("/app/test/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Submitted successfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000, // Time in milliseconds for the toast to be visible (e.g., 2000 = 2 seconds)
      });


      if(handleSurveySubmit){
      handleSurveySubmit();
      }

    } catch (error) {
      console.error("Error submitting survey:", error);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <First surveyData={surveyData} setSurveyData={setSurveyData} />;
      case 2:
        return <Second surveyData={surveyData} setSurveyData={setSurveyData} />;
      case 3:
        return <Third surveyData={surveyData} setSurveyData={setSurveyData} />;
      case 4:
        return <Fourth surveyData={surveyData} setSurveyData={setSurveyData} />;
      case 5:
        return <Fifth surveyData={surveyData} setSurveyData={setSurveyData} />;
      case 6:
        return <Sixth surveyData={surveyData} setSurveyData={setSurveyData} />;
      case 7:
        return (
          <Seventh surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 8:
        return <Eighth surveyData={surveyData} setSurveyData={setSurveyData} />;
      case 9:
        return <Ninth surveyData={surveyData} setSurveyData={setSurveyData} />;
      case 10:
        return <Tenth surveyData={surveyData} setSurveyData={setSurveyData} />;
      case 11:
        return (
          <Eleventh surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 12:
        return (
          <Twelfth surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 13:
        return (
          <Thirteenth surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 14:
        return (
          <Fourteenth surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 15:
        return (
          <Fifteenth surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 16:
        return (
          <Sixteenth surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 17:
        return (
          <Seventeenth surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 18:
        return (
          <Eighteenth surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 19:
        return (
          <Nineteenth surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 20:
        return (
          <Twentieth surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 21:
        return (
          <TwentyFirst surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 22:
        return (
          <TwentySecond surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 23:
        return (
          <TwentyThird surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 24:
        return (
          <TwentyFourth surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 25:
        return (
          <TwentyFifth surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 26:
        return (
          <TwentySixth surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 27:
        return (
          <TwentySeventh
            surveyData={surveyData}
            setSurveyData={setSurveyData}
          />
        );
      case 28:
        return (
          <TwentyEighth surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 29:
        return (
          <TwentyNinth surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 30:
        return (
          <Thirtieth surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 31:
        return (
          <ThirtyFirst surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      case 32:
        return (
          <ThirtySecond surveyData={surveyData} setSurveyData={setSurveyData} />
        );
      default:
        return null;
    }
  };

  return (
    <form className="question-container" onSubmit={onSubmitSurvey}>
      <div className="question-body">{renderCurrentPage()}</div>
      <div className="next-button-container">
        {currentPage !== 32 && (
          <button
            className="next-button"
            type="button"
            onClick={navigateToNextPage}
          >
            Next
          </button>
        )}
        {currentPage === 32 && (
          <button className="submit-button" type="submit">
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default SurveyPages;
