import React, { useState } from 'react';
import './calculator.css';

export default function Calculator() {
    const [quiz, setQuiz] = useState(0);
    const [lab, setLab] = useState(0);
    const [finalExam, setFinalExam] = useState(0);
    const [grade, setGrade] = useState(0);
    const [finalGrade, setFinalGrade] = useState(0);
    
    const compute = () => {
        const calculatedGrade = (quiz * 0.3) + (lab * 0.3) + (finalExam * 0.4);
        setGrade(calculatedGrade);

        let scale = '0';
        if (calculatedGrade >= 50 && calculatedGrade <= 74.5) {
            scale = '0';
        } else if (calculatedGrade >= 74.51 && calculatedGrade <= 76.5) {
            scale = '1';
        } else if (calculatedGrade >= 76.51 && calculatedGrade <= 78.5) {
            scale = '1.25';
        } else if (calculatedGrade >= 78.51 && calculatedGrade <= 80.5) {
            scale = '1.5';
        } else if (calculatedGrade >= 80.51 && calculatedGrade <= 82.5) {
            scale = '1.75';
        } else if (calculatedGrade >= 82.51 && calculatedGrade <= 84.5) {
            scale = '2.00';
        } else if (calculatedGrade >= 84.51 && calculatedGrade <= 86.5) {
            scale = '2.25';
        } else if (calculatedGrade >= 86.51 && calculatedGrade <= 88.5) {
            scale = '2.5';
        } else if (calculatedGrade >= 88.51 && calculatedGrade <= 90.5) {
            scale = '2.75';
        } else if (calculatedGrade >= 90.51 && calculatedGrade <= 92.5) {
            scale = '3.00';
        } else if (calculatedGrade >= 92.51 && calculatedGrade <= 94.5) {
            scale = '3.25';
        } else if (calculatedGrade >= 94.51 && calculatedGrade <= 96.5) {
            scale = '3.5';
        } else if (calculatedGrade >= 96.51 && calculatedGrade <= 98.5) {
            scale = '3.75';
        } else if (calculatedGrade >= 98.51 && calculatedGrade <= 100) {
            scale = '4.00';
        } else {
            scale = "Invalid";
        }

        setFinalGrade(scale);
    };

    return (
        <div className="container">
            <h1>Grades Calculator</h1>
            <p>Quizzes</p>
            <input type="text" value={quiz} onChange={(e) => setQuiz(parseFloat(e.target.value))} />
            <p>Lab Activities</p>
            <input type="text" value={lab} onChange={(e) => setLab(parseFloat(e.target.value))} />
            <p>Final Exam</p>
            <input type="text" value={finalExam} onChange={(e) => setFinalExam(parseFloat(e.target.value))} />
            <button onClick={compute}>Compute</button>
            <br />
            <p>Grade: {grade.toFixed(2)}</p>
            <p>Final Grade: {finalGrade}</p>
            <button>Logout</button>
        </div>
    );
}