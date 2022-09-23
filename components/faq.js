import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ChevronDown from '@heroicons/react/24/outline/ChevronDownIcon';

function FAQ() {
    return (
        <div className='faq-section'>
            <div className='content-section'>
                <h1 className='title'><span className='gradient-ardent'>FAQ</span></h1>
                <h4 className='subtitle'>All of your questions will be answered right here</h4>
                <div className='accordions'>
                    <Accordion>
                        <AccordionSummary expandIcon={<ChevronDown />}>
                            What is Arden?
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Arden is an application where you can find partners in activities such as sports, so you can do activities without going alone.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            What is the main feature in Arden?
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>The main feature is Arden can find activities near you and match you with your partner so you can meet up and do activities together.</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            Is Arden will be released in Android / iOS?
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Of course! Arden will be released in Android and iOS. Check out in Play Store and App Store.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            What is Arden?
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Arden is something that you cannot see.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default FAQ;