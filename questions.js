// questions.js

// **question_text**: This is a string that contains the text of the question you want to ask. DONE
// **question_type**: This should always be the string "multiple_choice" for this task. DONE
// **options**: This is an array of strings, where each string is a possible answer to the question. You should provide four options. DONE
// **correct_option**: This is a number that represents the index of the correct answer in the options array. The index is 0-based, meaning the first option is 0, the second is 1, and so on. DONE
// **correct_explanation**: This is a string that explains why the correct answer is correct. This helps learners understand the reasoning behind the answer. DONE


const questions = [

  {question_text:"Which of these is a data type in JavaScript?",
   question_type:"multiple_choice",
   options:["Boolean", "Array", "Logic flow", "Loop"],
   correct_option:0,
   correct_explanation:"Boolean is a data type that expressess true or false"},

  {question_text:"Which one of these is not a School of Code KPI?",
   question_type:"multiple_choice",
   options:["learn", "mindset", "ambassador", "collaborate"],
   correct_option: 3,
   correct_explanation:"Co-elevate is a KPI, not collaborate"},

  {question_text:"Which one of these is a part of the High Performance Routine?",
   question_type:"multiple_choice",
   options:["Sleep", "Breakfast", "Preperation", "Re-read notes"],
   correct_option: 3,
   correct_explanation:"Preperation ensure you are ready to learn and have the correct mindset"},

  {question_text:"What did you create in the last Hackaton?",
   question_type:"multiple_choice",
   options:["quiz", "escape-room", "website", "app"],
   correct_option: 1 ,
   correct_explanation:"During Week 1, we created an escape-room using Scratch."},

  {question_text:"Which of the following is not a part of the Diney Ideation?",
   question_type:"multiple_choice",
   options:["Dreamer", "Realist", "Critic", "Explorer"],
   correct_option: 3 ,
   correct_explanation:"Explorer is not a part of the Disney Ideation."},

   {question_text:"Which one of these were not guest speakers during Week 1?",
    question_type:"multiple_choice",
    options:["Ira Rainey", "Fadumo Aideed", "Chris Meah", "Steve Jobs"],
    correct_option: 3 ,
    correct_explanation:"Steve Jobs is a made up name."},

    {question_text:"Which one of these is not a part of Git?",
     question_type:"multiple_choice",
     options:["git add .", "git commit -m", "git drive", "git push" ],
     correct_option: 2 ,
     correct_explanation:"git drive is not a part of Git"},

    {question_text:"What does MVP stand for?",
     question_type:"multiple_choice",
     options:["minimum viable product", "master volume person", "multi vitamin prescription", "most valuable player"],
     correct_option: 0 ,
     correct_explanation:"Minimum viable product is possible code that is functioning(usually in its early stages)"},

     {question_text:"Which one these is part of the agile methodology? ",
      question_type:"multiple_choice",
      options:["fix", "code", "develop", "mediate"],
      correct_option: 2 ,
      correct_explanation:"During the develop stage, a team builds a product with minimal features and adds functionality later."},

      {question_text:"What does pair programming mean at the SoC?",
      question_type:"multiple_choice",
      options:["driver/nagivator" , "pilot/co-pilot" , "chef/waiter", "teacher/student"],
      correct_option: 0 ,
      correct_explanation:"At the SoC, the driver is the person using the keyboard, but the navigator instructs the driver on the overall strategy."},
        
 

];

// Don't worry about this, we're just exporting the questions
module.exports = questions;
