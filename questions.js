// questions.js

// **question_text**: This is a string that contains the text of the question you want to ask. DONE
// **question_type**: This should always be the string "multiple_choice" for this task. DONE
// **options**: This is an array of strings, where each string is a possible answer to the question. You should provide four options. DONE
// **correct_option**: This is a number that represents the index of the correct answer in the options array. The index is 0-based, meaning the first option is 0, the second is 1, and so on. DONE
// **correct_explanation**: This is a string that explains why the correct answer is correct. This helps learners understand the reasoning behind the answer. DONE


const questions = [

  {question_text:"Which of these is a data type in JavaScript?",
   question_type:"multiple-choice",
   options:["Boolean", "Array", "Logic flow", "Loop"],
   correct_option:0,
   correct_explanation:"Boolean is a data type that expressess true or false"},

  {question_text:"",
   question_type:"multiple-choice",
   options:["", "", "", ""],
   correct_option:,
   correct_explanation:""},

  {question_text:"",
   question_type:"multiple-choice",
   options:["", "", "", ""],
   correct_option:,
   correct_explanation:""},

  {question_text:"",
   question_type:"multiple-choice",
   options:["", "", "", ""],
   correct_option:,
   correct_explanation:""},

  {question_text:"",
   question_type:"multiple-choice",
   options:["", "", "", ""],
   correct_option:,
   correct_explanation:""},

];

// Don't worry about this, we're just exporting the questions
module.exports = questions;
