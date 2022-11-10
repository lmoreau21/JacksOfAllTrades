import {TextField, Text, Button, View,Flex, withAuthenticator } from '@aws-amplify/ui-react'
import React, { useState } from 'react'

const ContactForm = () => {
    //graphics for contact form
  return(
    <View 
        width="100%"
        height="100%"
        padding="30px"
        display= 'flex'
        direction="column"
        alignItems= 'center'
        justifyContent = "center"
        backgroundImage="linear-gradient(45deg, rgba(167,83,83,1), rgba(167,153,153,1))"
        
        >
        <Flex
            backgroundColor="rgba(209,150,150,1)"
            border="4px SOLID rgba(0,0,0,1)"
            boxShadow="0px 4px 25px rgba(0, 0, 0, 0.25)"
            borderRadius="24px"
            width="60vw"
            height="80vh"
            padding="30px"
            display= 'flex'
            direction="column"
            alignItems= 'center'
            justifyContent='center'
        >
        
        <Flex
            width="50vw"
            height="70vh"
            display="flex"
            gap="unset"
            alignItems="center"
            justifyContent="flex-start"
            direction="column"
            position="relative"
            borderRadius="23px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,0.3)"
        >
        
        <form
            //creates an email with data field info
            action="mailto:ideas.jacksofalltrades@gmail.com"
            method="get"
            enctype='text/plain'
            target="EmailForm "
        >   
            <Flex
                padding="20px"
                display= 'flex'
                direction="column"
                alignItems= 'center'
                justifyContent="center"
            >
                <Text 
                    fontFamily="Kameron"
                    fontSize="32px"
                    fontWeight="400"
                    color="rgba(0,0,0,1)"
                    top="10px"
                    marginBottom="10px"
                    lineHeight="45px"
                    textAlign="center"
                    textDecoration="underline"
                    position="relative"
                    whiteSpace="pre-wrap"
                >
                    Submit a New Skill Idea <br></br>or Leave a Comment
                </Text>
                <Flex
                    alignContent="center"
                >
                <input className="field" 
                    name="subject"
                    type="text" 
                    id="name" 
                    placeholder="Name" 
                    textAlign="center" 
                    backgroundColor="rgba(255,255,255,.5)"
                    border="1px SOLID rgba(0,0,0,1)"
                    size="40"
                    required/>
                </Flex>
                <Flex
                >
                <input 
                    className="field" 
                    name="cc"
                    id="email" 
                    placeholder="Email" 
                    type="email"
                    textAlign="center" 
                    backgroundColor="rgba(255,255,255,.5)"
                    border="1px SOLID rgba(0,0,0,1)"
                    lineHeight="20px"
                    size="40"
                    required /> 
                    </Flex>
                <Flex 
                    
                >
                <textarea 
                    className="field" 
                    name="body"
                    cols="42"
                    rows="6"
                    type="text"
                    placeholder="Skill Idea or Comment" 
                    textAlign="left" 
                    backgroundColor="rgba(255,255,255,.5)"
                    border="1px SOLID rgba(0,0,0,1)"
                    lineHeight="20px"
                    
                    required />
                </Flex>
                <Button type="submit"
                width="18vw"
                fontFamily="Kameron"
                fontSize="18px"
                backgroundColor="rgba(255,255,255,.5)"
                marginTop="0px"
            >
                Submit
            
            </Button>
        </Flex>
        </form>
        </Flex>
        </Flex>
    </View>
);
  }
export default withAuthenticator(ContactForm);