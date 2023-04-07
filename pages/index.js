import axios from "axios";
import { useState } from "react";
export default function Home({ triviaSet, trivialength }) {
  //const [isCorrect, setIsCorrect] = useState(true);
  const [userAnswer, setUserAnswer] = useState("");
  const [showResult, setShowResult] = useState("");
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isEndOfTrivia, setIsEndOfTrivia] = useState("");
  



  function handleBack(event) {
    setIndex(index - 1);
    event.preventDefault();
    
  }
 

  function handleSubmit(event) {
    userAnswer == answer ? (setShowResult("Correct Answer !!!"), setScore(score +1)) : setShowResult("Incorrect Answer. Try Again ")  ;
    
    event.preventDefault();
  }

  function handleRadio(event) {
    setUserAnswer(event.target.value);
 
  }


  function handleNext(event) {
    setIndex(index + 1);
    setShowResult("") ;
    index+1 == trivialength-1 ? setIsEndOfTrivia("none"):setIsEndOfTrivia("");
    event.preventDefault();
    unCheckFunction();
  }



const unCheckFunction = () => {
  let allRadioButtons = document.querySelectorAll('.radioButtons')
  allRadioButtons.forEach(value => value.checked = false);
}

  const triviaPack =  triviaSet[index];
  const question = triviaPack[0];
  const option1 = triviaPack[1];
  const option2 = triviaPack[2];
  const option3 = triviaPack[3];
  const option4 = triviaPack[4];
  const answer = triviaPack[5];

  
  console.log(score)

  return (
    <div className="rounded-lg  border-[1px]  border-gray-300 bg-white max-w-4xl mx-auto mt-28 p-10">
      <form>
         <div>
          <legend className="text-gray-700 font-semibold">{question}</legend>

          <div className="p-1.5 pt-5">
            <input
              type="radio"
              id="option1"
              name="answer"
              value={option1}
              className="radioButtons"
              onChange={handleRadio}
              
            />
            <label className="p-2" htmlFor="answer1">
              {option1}
            </label>
          </div>

          <div className="p-1.5">
            <input
              type="radio"
              id="option2"
              name="answer"
              value={option2}
              className="radioButtons"
              onChange={handleRadio}
              
            />
            <label className="p-2" htmlFor="answer2">
              {option2}
            </label>
          </div>

          <div className="p-1.5">
            <input
              type="radio"
              id="option3"
              name="answer"
              value={option3}
              className="radioButtons"
              onChange={handleRadio}
              
            />
            <label className="p-2" htmlFor="answer3">
              {option3}
            </label>
          </div>

          <div className="p-1.5">
            <input
              type="radio"
              id="option4"
              name="answer"
              value={option4}
              className="radioButtons"
              onChange={handleRadio}
              
            />
            <label className="p-2" htmlFor="answer4">
              {option4}
            </label>
          </div>
        </div>

        <div className="flex justify-between  pt-10 ">
          <button
            type="submit"
            className="border border-blue-600 rounded-md p-2 w-40"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            type="submit"
            className="border border-blue-600 rounded-md p-2 w-40"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            type="submit"
            disabled = {isEndOfTrivia}
            className="border border-blue-600 rounded-md p-2 w-40"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </form>

      {showResult == "Correct Answer !!!" ? <div className="pt-4 flex justify-center text-green-500">{showResult}</div> : <div className="pt-4 flex justify-center text-red-500">{showResult}</div>}
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost:3000/api/data");
  const results = data.results;

  function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }
const trivialength = results.length;
  
  let triviaSet = results.map(item => { 
      let quest = [item.question];
      let unshuffled_ans = [item.correct_answer, item.incorrect_answers[0], item.incorrect_answers[1], item.incorrect_answers[2]];
      let correct_ans = item.correct_answer;
      let shuffled_ans = shuffle(unshuffled_ans);
      const trivia = [...quest, ...shuffled_ans, correct_ans]
      return (trivia);
  });
 
  return {
    props: {
      triviaSet,
      trivialength
    },
  };
}
