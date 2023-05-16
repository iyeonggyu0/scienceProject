const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;
const express = require("express");
const router = express.Router();

const configuration = new Configuration({
  organization: "org-61MEulc6s1BeLM2RoTdq7Wyg",
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.post("/", async (res, req) => {
  const { message } = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 4000,
    temperature: 0,
  });
  console.log(response.data);
  if (response.data) {
    if (response.data.choices) {
      res.json({
        message: response.data.choices[0].text,
      });
    }
  }
});

module.exports = router;
