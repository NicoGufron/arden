import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ChevronDown from '@heroicons/react/24/outline/ChevronDownIcon';

import React, { useEffect } from 'react';

import Aos from 'aos';
import "aos/dist/aos.css";

function FAQ(props) {

    const darkMode = props.status.darkMode;

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className='faq-section'>
            <div data-aos="zoom-out" className='content-section'>
                <h1 className='title'><span className='gradient-ardent'>FAQ</span></h1>
                <h4 className='subtitle' style={{ color: darkMode ? "white" : "black" }}>All of your questions will be answered right here</h4>
                <div className='accordions'>
                    <Accordion style={{ backgroundColor: darkMode ? "#1c1c1c" : "#f8f8f8" }}>
                        <AccordionSummary style={{ color: darkMode ? "white" : "black" }} expandIcon={<ChevronDown />}>
                            What is Arden?
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Arden is an application where you can find partners in activities such as sports, so you can do activities without going alone.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ backgroundColor: darkMode ? "#1c1c1c" : "#f8f8f8" }}>
                        <AccordionSummary style={{ color: darkMode ? "white" : "black" }}>
                            What is the main feature in Arden?
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>The main feature is Arden can find activities near you and match you with your partner so you can meet up and do activities together.</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ backgroundColor: darkMode ? "#1c1c1c" : "#f8f8f8" }}>
                        <AccordionSummary style={{ color: darkMode ? "white" : "black" }}>
                            Is Arden will be released in Android / iOS?
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Of course! Arden will be released in Android and iOS. Check out in Play Store and App Store.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ backgroundColor: darkMode ? "#1c1c1c" : "#f8f8f8" }}>
                        <AccordionSummary style={{ color: darkMode ? "white" : "black" }}>
                            Does Arden have match to earn function?
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, it does. Simply match with your partner in activities, and Arden will automatically reward you in coins!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default FAQ;