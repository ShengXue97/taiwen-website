import * as React from 'react';
import AccordionMessage from './AccordionMessage';

const messages = [
  {
    title: "Family prioritisation 🏠",
    body: "You genuinely love your family and always put them as your priority. This is important to me because you will be my family in the future and I know that you will prioritise us. (:"
  },
  {
    title: "Kind and big heart ❤️",
    body: "I can see that you have a really big heart. You always attend these volunteer events such as collecting the extra fruits and asking nothing back in return. It is difficult to find someone with such a kind and caring personality, and I have found you. (:"
  },
  {
    title: "Care and concern 🤗",
    body: "You always mention that you deeply care for me, and it warms my heart whenever you say that. I have found someone who genuinely care and wants the best for me, what more could I ask for? ~ (:"
  },
  {
    title: "Flaws and imperfections 🥰",
    body: "You always point out my flaws and want me to work on it. I have to admit that I get annoyed at times whenever it gets too much. I know that you don’t like it to point out too often too. But I want to assure you that from the bottom of my heart, I am thankful to you for always wanting me to improve as a person. You see, how much I have improved over this year! I try my best to keep my hair shorter and wear better shirts. I want to assure you that this is not a bad thing and I have always put in an effort to improve myself. I hope you don’t see this as our problem, but rather as the circumstances. Even your parents get nagged at by you. I believe that you will nag at the person as long as it’s someone you love and deeply care for. I have accepted this as how you show love and concern for your loved ones. I hope that you will learn to accept that this is how you show love too. (:"
  },
  {
    title: "Love for cooking 🍳",
    body: "We both have a love for cooking! You have always mentioned how you want to learn how to cook a nice and homely meal for your family in the future. I really love cooking too as it brings me joy. I hope to learn many more dishes in the future. Next time, we can cook many dishes together and maybe invent new desserts. (:"
  },
  {
    title: "Love for kids 👶",
    body: "We both love kids and want to start a family together! You have always mentioned that you can tell that I love kids, and you’re absolutely right. Every time I see kids outside, my heart will melt and I will think about how it will be like having my own kids. I believe that it is very important that we are both aligned with the fact that we want kids, as that is a big decision that we have to make in the future together. I can picture us starting our own little family together.~ (:"
  },
  {
    title: "Mature and wise 🧠",
    body: "You’re mature and wise beyond your age. You have so many interesting thoughts that having a conversation with you is never boring. I love listening to you and learning about various topics from you. For example, you have taught me more about recycling, the Japanese bar culture, the selling of drugs in Singapore etc. I have learnt so much from you and it has expanded my horizons. I hope that I have taught you meaningful lessons as well. (:"
  },
  {
    title: "Absolute foodie 🍽️",
    body: "You’re an absolute foodie! You know all of the places to get yummy food not just in Singapore, but even in other countries like Taiwan and Korea! I love eating yummy food too. Hopefully soon we can go on food hunts together, especially after both of us become comfortable with driving around. Then we can drive to the food places which are less accessible by public transport, and enjoy yummy food together.~ (:"
  },
  {
    title: "Countless encouragements 🙌",
    body: "You want the best for me and will always encourage me to do things that you know are good for me. You encouraged me to go to the gym and also attend class pass lessons when you saw that I had to pass IPPT. Although I have not really continued these exercise routine, I’m thankful to you for pushing me and I hope to start the exercise routine again soon."
  },
  {
    title: "Genuine love and care 💕",
    body: "I think that what is really important is that I can see we both genuinely love and care for each other, with no conditions or ulterior motives. This kind of love is so difficult to find nowadays, some people find relationships just for financial gain but they do not genuinely love their partner. This is important to me because that is the whole meaning of finding a life partner. (:"
  },
  {
    title: "Best friends and partner 👫",
    body: "We are each other best friends and can share anything with each other! You have mentioned before that you’re looking for a best friend in your partner and I believe that we have managed to achieve that. I feel comfortable sharing my innermost thoughts with you, because I trust you. You always listen with no judgements and provide important advice whenever I need them. Sometimes, you even allowed me to believe in myself and have more confidence. I really appreciate this. (:"
  },
]
export default function Serious() {
  return (
    <div>
      {
        messages.map((message, index) => {
          return (
            <AccordionMessage title={message.title} body={message.body} time={`2023-06-10T01:${(10 + index).toString().padStart(2, '0')}`} />
          )
        }
        )
      }
    </div>
  );
}