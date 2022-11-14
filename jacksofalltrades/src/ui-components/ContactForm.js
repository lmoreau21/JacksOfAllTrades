import {TextField, Text, Button, View,Flex, withAuthenticator } from '@aws-amplify/ui-react'
import React, { useState } from 'react'

function ContactForm(){
//graphics for contact form
  return(
    <View 
        className="background"
        width="100%"
        height="100%"
        padding="30px"
        display= 'flex'
        direction="column"
        alignItems= 'center'
        justifyContent = "center"        
        >
        <Flex
            className='mid-background'
            border="4px SOLID rgba(255,255,255,.5)"
            boxShadow="0px 4px 25px rgba(0, 0, 0, 0.25)"
            borderRadius="24px"
            width="500px"
            height="80vh"
            padding="30px"
            display= 'flex'
            direction="column"
            alignItems= 'center'
            justifyContent='center'
        >
        
        <Flex
            width="420px"
            height="70vh"
            display="flex"
            gap="unset"
            alignItems="center"
            justifyContent="flex-start"
            border="3px SOLID rgba(255,255,255,.5)"
            direction="column"
            position="relative"
            borderRadius="23px"
            padding="0px 0px 0px 0px"
            className='small-background'
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
                    className='text'
                    fontFamily="Kameron"
                    fontSize="32px"
                    fontWeight="400"
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
                    border="1px SOLID rgba(0,0,0,1)"
                    lineHeight="20px"
                    
                    required />
                </Flex>
                <button type="submit"
                className='button'
                width="18vw"
                >
                Submit
            
                </button>
        </Flex>
        </form>
        </Flex>
        </Flex>
    </View>
);
  }
export default withAuthenticator(ContactForm);