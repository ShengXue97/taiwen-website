import * as React from 'react';
import AccordionMessage from './AccordionMessage';

const messages = [
  {
    title: "Cute panda eyes 🐼",
    body: "You have the cutest panda eyes ever"
  },
  {
    title: "Awesome hugs 🤗",
    body: "I love hugging you so much, you give me such warmth"
  },
  {
    title: "My sunshine ☀️",
    body: "I feel genuinely happy whenever I am with you, you brighten up every day of my life"
  },
  {
    title: "Gentle hands 🤲",
    body: "Do you know why I love holding your hands? Because I always feel cozy holding your warm hands and extra happy whenever we are holding hands."
  },
  {
    title: "Derealised bean 🥺",
    body: "A cute, derealised and vulnerable bean who needs protection by me~"
  },
  {
    title: "Cute teasing 🤭",
    body: "I love it whenever you tease me, and I tease you back. You’re my little bundle of joy."
  },
  {
    title: "Cute ponytail 🐴",
    body: "I love playing with your cute ponytail!"
  },
  {
    title: "Patting 🍑",
    body: "Cute little moments like patting each other tummies and butt shows our love for each other."
  },
  {
    title: "Poke poke 🤏",
    body: "The poke poke for my face and back, which is how you show love for me."
  },
  {
    title: "Overnight stays 🧡",
    body: "Staying overnight at your place makes me feel so loved, I finally have someone to spend my life with."
  },
  {
    title: "Adorable smile 🥺",
    body: "You’re soo cute and adorable, especially when you smile"
  },
]
export default function Fun() {
  return (
    <div>
      {
        messages.map((message, index) => {
          return (
            <AccordionMessage title={message.title} body={message.body} time={`2023-06-10T${(8 + index).toString().padStart(2, '0')}:00`} />
          )
        }
        )
      }
    </div>
  );
}