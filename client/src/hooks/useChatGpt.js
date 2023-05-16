import axios from 'axios';
import { useState } from 'react';

export const useChatGpt = (question) => {
  const [answer, setAnswer] = useState([]);

  axios
    .post('/chatgpt/post', question)
    .then((res) => {
      console.log(res);
      // setAnswer(res)
    })
    .catch((err) => {
      console.error(err);
    });

  return answer;
};
