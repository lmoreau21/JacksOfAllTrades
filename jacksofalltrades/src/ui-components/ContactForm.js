import {TextField, Text, Button, View,Flex } from '@aws-amplify/ui-react'
import React from 'react'

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Submit')

  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, message } = e.target.elements
    let conFom = {
      name: name.value,
      message: message.value,
    }
    console.log(conFom)
  }

  return (
    <View 
        onSubmit={onSubmit}
        width="100%"
        height="100%"
        padding="30px"
        display= 'flex'
        direction="column"
        alignItems= 'center'
        backgroundImage="linear-gradient(45deg, rgba(167,83,83,1), rgba(167,153,153,1))"
        
        >
        <form
            action="mailto:lmoreau2021@gmail.com"
            method="Post"
            enctype="text/plain"
            name="EmailForm"
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
            <TextField className="field" 
                type="text" 
                id="name" 
                placeholder="Name" 
                textAlign="center" 
                backgroundColor="rgba(255,255,255,.5)"
                border="1px SOLID rgba(0,0,0,1)"
                required>

            </TextField>
        </Flex>
        <Flex 
        >
            <TextField 
                className="field" 
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
        </form>
    </View>
  )
}
export default ContactForm;