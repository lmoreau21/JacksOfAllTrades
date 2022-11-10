import React from "react";
import {
  useAuthSignOutAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Text, View } from "@aws-amplify/ui-react";

//settings page allows user to signout
export default function Settingspage() {
  //aws variable that will force the user to signout
  const signOut = useAuthSignOutAction({
    global: true,
  }) ;
  
  //graphics for the settings page
  return (
    <View
      width="100vw"
      height="88vh"
      display="flex"
      gap="unset"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
    >
      <View
        padding="0px 0px 0px 0px"
        width="unset"
        height="unset"
        display="flex"
        gap="unset"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <View
          width="100vw"
          height="100vh"
          display="flex"
          gap="unset"
          alignItems="center"
          justifyContent="center"
          padding="0px 0px 0px 0px"
          backgroundImage="linear-gradient(-45deg, rgba(167,83,83,1), rgba(167,153,153,1))"
        >
           <View
          width="50vw"
          height="70vh"
          display="flex"
          direction="row"
          gap="unset"
          alignItems="center"
          justifyContent="center"
          position="relative"
          border="4px SOLID rgba(0,0,0,1)"
          boxShadow="0px 4px 25px rgba(0, 0, 0, 0.25)"
          borderRadius="24px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(209,150,150,1)"
        >
          <View
          width="30vw"
          height="50vh"
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
          <Text
            fontFamily="Kameron"
            fontSize="45px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            top="10px"
            lineHeight="67.5px"
            textAlign="center"
            textDecoration="underline"
            position="relative"
            whiteSpace="pre-wrap"
            children="Settings"

          ></Text>
            
          <Button 
            width="18vw"
            fontFamily="Kameron"
            fontSize="18px"
            backgroundColor="rgba(255,255,255,.5)"
            marginTop="20px"
            //when the user selects the signout button the user will be signed out by using the function above
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </Button>
        </View>
        </View>
      </View> 
      </View>
    </View>
  );
}