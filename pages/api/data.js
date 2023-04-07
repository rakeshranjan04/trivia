// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json(
        {
            "response_code": 0,
            "results": [
              {
                "category": "Entertainment: Music",
                "type": "multiple",
                "difficulty": "medium",
                "question": "Who had a US and UK number 1 hit in 1962 with the instrumental, &#039;Telstar&#039;?",
                "correct_answer": "The Tornados",
                "incorrect_answers": [
                  "The Ventures",
                  "The Spotnicks",
                  "The Tremeloes"
                ]
              },
              {
                "category": "Entertainment: Film",
                "type": "multiple",
                "difficulty": "easy",
                "question": "Which actress danced the twist with John Travolta in &#039;Pulp Fiction&#039;?",
                "correct_answer": "Uma Thurman",
                "incorrect_answers": [
                  "Kathy Griffin",
                  "Pam Grier",
                  "Bridget Fonda"
                ]
              },
              {
                "category": "Entertainment: Music",
                "type": "multiple",
                "difficulty": "easy",
                "question": "Which Disney character sings the song &quot;A Dream is a Wish Your Heart Makes&quot;?",
                "correct_answer": "Cinderella",
                "incorrect_answers": [
                  "Belle",
                  "Snow White",
                  "Pocahontas"
                ]
              },
              {
                "category": "Entertainment: Japanese Anime & Manga",
                "type": "multiple",
                "difficulty": "easy",
                "question": "How many &quot;JoJos&quot; that are protagonists are there in the series &quot;Jojo&#039;s Bizarre Adventure&quot;?",
                "correct_answer": "8",
                "incorrect_answers": [
                  "6",
                  "4",
                  "5"
                ]
              },
              {
                "category": "Geography",
                "type": "multiple",
                "difficulty": "medium",
                "question": "How many provinces are in the Netherlands?",
                "correct_answer": "12",
                "incorrect_answers": [
                  "14",
                  "10",
                  "13"
                ]
              },
              {
                "category": "General Knowledge",
                "type": "multiple",
                "difficulty": "easy",
                "question": "The drug cartel run by Pablo Escobar originated in which South American city?",
                "correct_answer": "Medell&iacute;n",
                "incorrect_answers": [
                  "Bogot&aacute;",
                  "Quito",
                  "Cali"
                ]
              },
              {
                "category": "History",
                "type": "multiple",
                "difficulty": "hard",
                "question": "Which country did the Eureka Rebellion, an 1856 battle against colonial rule, take place in?",
                "correct_answer": "Australia",
                "incorrect_answers": [
                  "India",
                  "Canada",
                  "Brazil"
                ]
              },
              {
                "category": "Entertainment: Film",
                "type": "multiple",
                "difficulty": "medium",
                "question": "The killer in the 1981 film &#039;My Bloody Valentine&#039; wears what sort of outfit?",
                "correct_answer": "Mining gear",
                "incorrect_answers": [
                  "Clown costume",
                  "Santa suit",
                  "Police uniform"
                ]
              },
              {
                "category": "General Knowledge",
                "type": "multiple",
                "difficulty": "easy",
                "question": "Who invented the first ever chocolate bar, in 1847?",
                "correct_answer": "Joseph Fry",
                "incorrect_answers": [
                  "Andrew Johnson",
                  "John Cadbury",
                  "John Tyler"
                ]
              }
            ]
          }
        
        )
  }