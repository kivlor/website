import "$std/dotenv/load.ts";

import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import OpenAI from "npm:openai";

import { resume } from "./library/resume.ts";

const commmands = {
  json: async () => {
    return JSON.stringify(resume, 0, 2);
  },
  pdf: async () => {
    const path = "static/resume-gen.pdf";
    const format = "A4";

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://kivlor.com/resume", {
      waitUntil: "networkidle2",
    });
    await page.pdf({ path, format });

    await browser.close();

    return `saved to ${path}`;
  },
  suggestions: async () => {
    const client = new OpenAI({
      apiKey: Deno.env.get('OPENAI_API_KEY'),
    });

    const resumeJSON = JSON.stringify(resume);

    const prompt = `
      This is my resume in the JSON format.

      ${resumeJSON}

      Please give me detail suggestions on how to improve it e.g.
      - Bad spelling and grammar
      - Sentences that seem irrelvant
      - Better ways of saying things
      - Jobs and skills that I could have described better

      Do not give general tips. Be as specific about my actual resume as possible.

      Give you final response in mardown format.
    `;

    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo-0125",
    });

    return chatCompletion.choices[0].message.content;
  }
}

const run = async () => {
  const args = Deno.args;

  if (!args[0] || !commmands[args[0]]) {
    console.error("commmand missing or incorrect");
    Deno.exit(1);
  }

  const commmand = commmands[args[0]];

  return commmand();
}

(async () => {
  const reponse = await run();

  console.log(reponse);
})();
