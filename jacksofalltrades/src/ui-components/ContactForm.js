import {TextField, Text, Button, View,Flex } from '@aws-amplify/ui-react'
import React, { useState } from 'react'

const ContactForm = () => {
    const FORM_ENDPOINT = "";
    const [formStatus, setFormStatus] = React.useState('Submit')
    const [submitted, setSubmitted] =useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
          }, 100);
    }
    if(submitted){
        setFormStatus("Submittied")
    }

  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      message: message.value,
      email: email.value
    }
    
    console.log(conFom)
  }    
  return(
    <View 
        //onSubmit={onSubmit}
        width="100%"
        height="88vh"
        padding="30px"
        display= 'flex'
        direction="column"
        alignItems= 'center'
        justifyContent = "center"
        backgroundImage="linear-gradient(45deg, rgba(167,83,83,1), rgba(167,153,153,1))"
        
        >
        <Flex
            backgroundColor="#D3D3D3"
            width="40vw"
            height="75%"
            padding="30px"
            display= 'flex'
            direction="column"
            alignItems= 'center'
            justifyContent='center'
            borderRadius="7px"
        >
        
        <Text className="heading" textAlign="center"
             fontFamily="Flamenco"
             fontSize="28px"
             fontWeight="400"
             backgroundColor=""
        >Submit a New Skill or Leave a Comment</Text>
        <form
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
                    size="26"
                    required/>
                </Flex>
                <Flex
                >
                <input 
                    className="field" 
                    name="cc"
                    width="40px"
                    id="email" 
                    placeholder="Email" 
                    type="email"
                    textAlign="center" 
                    backgroundColor="rgba(255,255,255,.5)"
                    border="1px SOLID rgba(0,0,0,1)"
                    lineHeight="20px"
                    size="26"
                    required /> 
                    </Flex>
                <Flex 
                    
                >
                <textarea 
                    className="field" 
                    name="body"
                    cols="28"
                    id="message" 
                    placeholder="Skill Idea" 
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
                backgroundColor="rgba(223, 205, 205, 0.752)"
                border="1px SOLID rgba(0,0,0,1)"

                marginTop="20px"
            >
                {formStatus}
            
            </Button>
        </Flex>
        </form>
        </Flex>
    </View>
  );
  /*
  return (
    <form
        action="mailto:ideas.jacksofalltrades@gmail.com"
        method="get"
        enctype='text/plain'
        target="EmailForm "
        >
        <input name="subject" type="text"/>
    <View 
        //onSubmit={onSubmit}
        width="100%"
        height="100%"
        padding="30px"
        display= 'flex'
        direction="column"
        alignItems= 'center'
        backgroundImage="linear-gradient(45deg, rgba(167,83,83,1), rgba(167,153,153,1))"
        
        >
        <Flex
            backgroundColor="#D3D3D3"
            width="33vw"
            height="100%"
            padding="30px"
            display= 'flex'
            direction="column"
            alignItems= 'center'
            borderRadius="7px"
        >
        <Text className="heading" textAlign="center"
             fontFamily="Flamenco"
             fontSize="28px"
             fontWeight="400"
             backgroundColor=""
        >Submit a new skill</Text>
        <Flex>
            <input className="field" 
                name="body"
                type="text" 
                id="name" 
                placeholder="Name" 
                textAlign="center" 
                backgroundColor="rgba(255,255,255,.5)"
                border="1px SOLID rgba(0,0,0,1)"
                required/>
        
        </Flex>
        <Flex 
        >
            <input 
                className="field" 
                name="body"
                id="email" 
                placeholder="email" 
                type="email"
                textAlign="center" 
                backgroundColor="rgba(255,255,255,.5)"
                border="1px SOLID rgba(0,0,0,1)"
                lineHeight="20px"
                required />
     
        </Flex>
        <Flex 
        >
           
            <input 
                className="field" 
                name="body"
                id="message" 
                placeholder="Skill Idea" 
                minHeight="100px"
                textAlign="center" 
                backgroundColor="rgba(255,255,255,.5)"
                border="1px SOLID rgba(0,0,0,1)"
                lineHeight="20px"
                required />
            
        </Flex>
        <Flex
            
        >
        <Button type="submit"
            width="18vw"
            fontFamily="Kameron"
            fontSize="18px"
            backgroundColor="rgba(255,255,255,.5)"
            border="1px SOLID rgba(0,0,0,1)"

            marginTop="20px"
        >
            {formStatus}
        
        </Button>
        </Flex>
        </Flex>
        
    </View>
    </form>
  )*/
}
export default ContactForm;