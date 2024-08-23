const questionsList = [
  {
    id: 1,
    question: `If you could describe your current state of mind in three words, what would they be ?`,
  },
  {
    id: 2,
    question: `What's one thing you're looking forward to this week ?`,
  },
  {
    id: 3,
    question: `If you were a weather phenomenon, what would you be today and why ?`,
  },
  { id: 4, question: `What's one small win you've had recently ` },
  {
    id: 5,
    question: `If you could have any superpower for just today, what would it be ?`,
  },
  { id: 6, question: `What's one thing you've learned in the past week ?` },
  {
    id: 7,
    question: `If your mood was a color right now, what color would it be ?`,
  },
  { id: 8, question: `What's one thing you're grateful for today ?` },
  {
    id: 9,
    question: `If you could teleport anywhere for your next break, where would you go ?`,
  },
  { id: 10, question: `What's one goal you're working towards right now ?` },
];

export const questionsLength = () => questionsList.length;

export const getQuestion = (id: number) => {
  return questionsList.find((que) => que.id === id)?.question;
};
