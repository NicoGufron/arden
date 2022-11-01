import React from 'react';
import ReactDOM from 'react-dom';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Center, Spacer, Box, Container } from '@chakra-ui/react'

function FAQ() {

    const titleFAQ = [
        "What is Arden?",
        "What is the main feature of Arden?",
        "Is Arden will be released for Android / iOS?",
        "Does Arden have match to earn function?"
    ];

    const answersFAQ = [
        "Arden is a brand new social platform integrated with blockchain which based on users chosen sports and at the same time rewarding them with crypto coin",
        "The main feature is Arden can find activities near you and match you with your partner so you can meet up and do activities together.",
        "Of course! Arden will be released in Android and iOS. Check out in Play Store and App Store.",
        "Yes, it does. Simply match with your partner in activities, and Arden will automatically reward you in coins!"
    ]

    var indents = [];

    for (var i = 0; i < titleFAQ.length; i++) {
        indents.push(
            <AccordionItem key={i}>
                <h2>
                    <AccordionButton _expanded={{ bgGradient: 'linear(to-r, #39cdff 10%,#8b6ffb 50%, #fb63eb 100%)', color: 'white' }}>
                        <Box flex='1' textAlign="left">
                            {titleFAQ[i]}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel>
                    {answersFAQ[i]}
                </AccordionPanel>
            </AccordionItem>
        )
    }

    return (
        <div className='faq-section' id="faq">
            <Container>
                <Center flexDirection={"column"} justifyContent={"center"}>
                    <h1 className='faq-title'><span className='gradient-ardent'>FAQ</span></h1>
                    <Spacer pt={15} />
                    <Box maxW={"xl"}>
                        <Accordion allowToggle>
                            {indents}
                        </Accordion>
                    </Box>
                </Center>
            </Container>
        </div>
    )
}

export default FAQ;