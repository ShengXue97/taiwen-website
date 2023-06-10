import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNysm6rKbbRpZsSk27gC3pImpOyQw_Zl8",
  authDomain: "taiwen-website.firebaseapp.com",
  projectId: "taiwen-website",
  storageBucket: "taiwen-website.appspot.com",
  messagingSenderId: "19089407254",
  appId: "1:19089407254:web:233e31bae1dec749f62437",
  measurementId: "G-STS4JT424F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const asynchandleAccordionClick = async (props, isButtonEnabled) => {
  if (!isButtonEnabled) {
    return;
  }
  const options = { timeZone: 'Asia/Singapore', hour12: false };
  const timeString = new Date().toLocaleString('en-US', options);

  try {
    const docRef = await addDoc(collection(db, "logs"), {
      ip: props.ip,
      time: timeString,
      title: props.title,
      body: props.body,
      type: props.type,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default function AccordionMessage(props) {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    const targetDate = new Date(props.time);
    const currentTime = new Date();

    if (currentTime >= targetDate) {
      setIsButtonEnabled(true);
    } else {
      const timeDifference = targetDate - currentTime;
      const timer = setTimeout(() => {
        setIsButtonEnabled(true);
      }, timeDifference);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div style={{
      margin: '10px',
    }}>
      <Accordion onClick={async () => { await asynchandleAccordionClick(props, isButtonEnabled) }} disabled={!isButtonEnabled} sx={{
        background: '#9e9e9e',
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {isButtonEnabled ?
            <Typography sx={{
              color: 'black !important',
            }}>
              {props.title}
            </Typography>
            :
            <Typography sx={{
              color: 'white !important',
            }}>
              Check back after {new Date(props.time).toLocaleString()}!
            </Typography>
          }
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            color: 'white !important',
            textAlign: 'left !important',
            width: '100% !important',
          }}>
            {props.body}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}