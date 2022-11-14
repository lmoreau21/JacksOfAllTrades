import React from "react";
import {
  useAuthSignOutAction, useNavigateAction, useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import {Flex, Button, Image, Text, View, ToggleButton } from "@aws-amplify/ui-react";
import { setDarkMode, useDarkMode } from "../pages/darkMode";

//settings page allows user to signout
export default function Settingspage() {
  //aws variable that will force the user to signout
  const signOut = useAuthSignOutAction({
    global: true,
  }) ;
  const mode = useDarkMode();
  const toggleTheme = () => {
    console.log(mode)
    if (mode === 'dark') {
      setDarkMode('');
    } else {
      setDarkMode('dark');
    }
  };
 
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
          className="background"
          width="100vw"
          height="100vh"
          display="flex"
          gap="unset"
          alignItems="center"
          justifyContent="center"
          padding="0px 0px 0px 0px"
        >
           <View
           className='mid-background'
          width="400px"
          height="60vh"
          display="flex"
          direction="row"
          gap="unset"
          alignItems="center"
          justifyContent="center"
          position="relative"
          border="4px SOLID rgba(255,255,255,.5)"
          boxShadow="0px 4px 25px rgba(0, 0, 0, 0.25)"
          borderRadius="24px"
          padding="0px 0px 0px 0px"
        >
          <View
          className="small-background"
          width="320px"
          height="50vh"
          display="flex"
          gap="unset"
          alignItems="center"
          justifyContent="flex-start"
          direction="column"
          position="relative"
          borderRadius="23px"
          padding="0px 0px 0px 0px"
          border="3px SOLID rgba(255,255,255,.5)"
        >
          <Text
            className="text"
            fontFamily="Kameron"
            fontSize="45px"
            fontWeight="400"
            top="10px"
            lineHeight="67.5px"
            textAlign="center"
            position="relative"
            whiteSpace="pre-wrap"
            children="Settings"

          ></Text>
          <Flex
            alignContent='center'
            justifyContent='center'
            alignItems='center'
            direction="column"
          >
          
          <Button 
            className="button"
            width="18vw"
            fontFamily="Kameron"
            fontSize="18px"
            marginTop="30px"
            //when the user selects the signout button the user will be signed out by using the function above
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </Button>
          <Button 
          onClick={toggleTheme}
          className="button"
          width="18vw"
            fontFamily="Kameron"
            fontSize="18px"
            marginTop="20px"
          >Toggle Dark Mode</Button>
          </Flex>
        </View>
        </View>
      </View> 
      </View>
    </View>
  );
}