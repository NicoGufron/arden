import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Head from 'next/head';
import { Box, Image, Flex, IconButton, Spacer, Container, Center, useDisclosure } from '@chakra-ui/react';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';
import { HiOutlineSun, HiMoon, HiMenu } from 'react-icons/hi';
import FAQ from '../components/faq';

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const iconBtnRef = React.useRef();

  function changeMode() {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.style = 'background-color: white; color: #161616';
    } else {
      document.body.style = 'background-color: #161616; color: white';
    }
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Arden Labs</title>
      </Head>
      <div className='wrapper'>
        <Box bgColor={darkMode ? "rgb(22 22 22/.5)" : "rgb(255 255 255/.7)"} className='nav-box' p={5}>
          <Flex alignItems={"center"} justifyContent={"space-around"} >
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>
              <Image width={12} height={12} src={darkMode ? "../images/ardent-logo-black-bg.png" : "../images/ardent-logo-white-bg.png"}></Image>
              <Spacer p={1}></Spacer>
              <h1 className='logo-name'>ARDEN</h1>
            </Box>
            <Box className='nav-state'>
              <Box>
                <ul className='navigation'>
                  <li className='nav-link'><a href="">Networks</a></li>
                  <li className='nav-link'><a href="">Features</a></li>
                  <li className='nav-link'><a href="">Product</a></li>
                  <li className='nav-link'><a href="">FAQs</a></li>
                </ul>
              </Box>
            </Box>
            <Box className='theme-button'>
              <IconButton _hover={{ bgColor: darkMode ? "" : "" }} onClick={changeMode} bgColor={darkMode ? "#262626" : "#F7FAFC"} icon={darkMode ? <HiOutlineSun /> : <HiMoon />}></IconButton>
            </Box>
            <Box className='drawer-button'>
              <IconButton ref={iconBtnRef} _hover={{ bgColor: darkMode ? "" : "" }} onClick={onOpen} bgColor={darkMode ? "#262626" : "#F7FAFC"} icon={<HiMenu />}></IconButton>
            </Box>
            <Drawer
              size={"xs"}
              isOpen={isOpen}
              placement={"right"}
              onClose={onClose}
              finalFocusRef={iconBtnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader bgColor={darkMode ? "rgb(28 28 28)" : "white"}>Menu</DrawerHeader>
                <DrawerBody bgColor={darkMode ? "rgb(28 28 28)" : "white"}>
                  <ul className='navigation-drawer'>
                    <li className='nav-link drawer'><a onClick={onClose} href="#networks">Networks</a></li>
                    <li className='nav-link drawer'><a onClick={onClose} href="#">Features</a></li>
                    <li className='nav-link drawer'><a onClick={onClose} href="#product">Product</a></li>
                    <li className='nav-link drawer'><a onClick={onClose} href="#faq">FAQs</a></li>
                  </ul>
                </DrawerBody>
                <DrawerFooter bgColor={darkMode ? "rgb(28 28 28)" : "white"}>
                <IconButton _hover={{ bgColor: darkMode ? "" : "" }} onClick={changeMode} bgColor={darkMode ? "#262626" : "#F7FAFC"} icon={darkMode ? <HiOutlineSun /> : <HiMoon />}></IconButton>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Flex>
        </Box>
        <div className='first-section'>
          <div className='wrap-section'>
            <img className='first-section image' src="/images/blur 1.png"></img>
            <h1 data-aos="zoom-out" className='title'>Welcome to <br></br><span className='gradient-ardent'>ARDEN</span></h1>
            <h4 data-aos="zoom-out" className='subtitle' style={{ color: darkMode ? "#f8f8f8" : "#1c1c1c" }}>Arden is a brand new social platform integrated with blockchain which based on users chosen sports and at the same time rewarding them with crypto coin.</h4>
            <a href="#features"><button data-aos="zoom-out" className='arden-button'>Get Started</button></a>
          </div>
        </div>
        <Container pt={"15%"} maxW={"1000px"}>
          <h1 className='featured-title'><span className='gradient-ardent'>No more doing <br></br> sports alone</span></h1>

          {/* Upper box */}
          <Box bgColor={darkMode ? "rgb(28 28 28)" : "#F7FAFC"} borderRadius='xl' overflow='hidden'>
            <Flex className='upper-box' justifyContent={"space-between"} flexDirection={"row"}>
              <Box display={"flex"} flexDirection={"column"} p={5} justifyContent={"space-evenly"}>
                <h3 className='title-card'>Enjoy activities with your friends</h3>
                <p className='body-card-text'>Why train yourself when you can do with your partner?</p>
              </Box>
              <Image className='upper-box-image' src="../images/two-peeps.png"></Image>
            </Flex>
          </Box>
          <Spacer p={"3"} />
          <Flex className='flex-boxx' flexDirection={"row"} justifyContent={"space-around"}>
            {/* Left Box */}
            <Box className='left-box' width={"500px"} textAlign={"left"} paddingTop={5} bgColor={darkMode ? "rgb(28 28 28)" : "#F7FAFC"} borderRadius='xl' overflow='hidden'>
              <Flex flexDirection={"column"}>
                <Box p={5}>
                  <h3 className='title-card'>0% Management Fee</h3>
                  {/* <Spacer p={5}></Spacer> */}
                  <p className='body-card-text'>Free of charge, finding your partner in activities is our first priority.</p>
                </Box>
                <Image src="../images/another-two-peeps.png"></Image>
              </Flex>
            </Box>
            {/* Right Box */}
            <Box className='right-box' width={"500px"} bgColor={darkMode ? "rgb(28 28 28)" : "#F7FAFC"} borderRadius='xl' overflow='hidden'>
              <Flex flexDirection={"column"}>
                <Image src="../images/bicycle.png"></Image>
                <Box textAlign={"right"} p={5}>
                  <h3 className='title-card'>Explore activities</h3>
                  {/* <Spacer p={5}></Spacer> */}
                  <p className='body-card-text'>You are free to explore and add activities that you like. Simply add them in our application.</p>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Container>

        <FAQ status={{ darkMode }}></FAQ>

        <Center pt={10}>
          <div className="video-section" id="product">
            <video className="video-display aos-init aos-animate" src="/videos/video.mp4" controls="controls"></video>
          </div>
        </Center>
        <div className='footer' id="networks">
          <div className='content-footer'>
            <h1 className='title'>Learn More About <span className='gradient-ardent'>ARDEN</span></h1>
            <h4 className='subtitle' style={{ color: darkMode ? "#f8f8f8" : "#1c1c1c" }}> These are the links to help you more understand about Arden</h4>
            <div className='footer-buttons'>
              <a className='footer-links' href="https://t.me/ardenlabs"><div className='footer-button telegram'><img className='icon-logo' src="/images/telegram-white.png" />Join Telegram  ↗</div></a>
              <a className='footer-links' href="https://twitter.com/arden_labs"><div className='footer-button telegram'><img className='icon-logo' src="/images/twitter-white.png" />Join Twitter  ↗</div></a>
            </div>
          </div>
          <img className='blur' src="/images/blur.png"></img>
        </div>
      </div>
    </>
  )
}
