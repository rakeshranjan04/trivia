import axios from "axios";
import { useState } from "react";
export default function Home({ triviaSet }) {


    let triviaPack =  triviaSet[0]

  console.log(triviaPack[0]);
}

export async function getServerSideProps() {
    const { data } = await axios.get("http://localhost:3000/api/data");
    const results = data.results;
  
    function shuffle(array) {
      return [...array].sort(() => Math.random() - 0.5);
    }
  
    
    let triviaSet = results.map(item => { 
        let quest = [item.question];
        let unshuffled_ans = [item.correct_answer, item.incorrect_answers[0], item.incorrect_answers[1], item.incorrect_answers[2]];
        let shuffled_ans = shuffle(unshuffled_ans);
        const trivia = [...quest, ...shuffled_ans]
        return (trivia);
    });
   
    return {
      props: {
        triviaSet,
      },
    };
  }