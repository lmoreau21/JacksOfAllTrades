import React from "react";
import {
  useAuth,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Image, Flex, Text, View } from "@aws-amplify/ui-react";

export default function TopBarFinal() {
  //pulls the user info in order to display the email
  const authAttributes = useAuth().user?.attributes ?? {};

  //creates variables with setterMethods for tall of the colors.
  const [homeColor, setHomeColor] = useStateMutationAction("rgba(0,0,0,1)");
  const [aboutColor, setAboutColor] = useStateMutationAction("rgba(0,0,0,1)");
  const [skillColor, setSkillColor] = useStateMutationAction("rgba(0,0,0,1)");
  const [suggestColor, setSuggestColor] = useStateMutationAction("rgba(0,0,0,1)");
  const [settingsColor, setSettingsColor] = useStateMutationAction("rgba(0,0,0,1");

  //redirection links to take the user to the correct url on the website when clicked by the user
  const homeOnClick = useNavigateAction({ type: "url", url: "/" });
  const aboutOnClick = useNavigateAction({ type: "url", url: "/about" });
  const skillOnClick = useNavigateAction({ type: "url", url: "/skilllist" });
  const suggestOnClick = useNavigateAction({ type: "url", url: "/suggest" });
  const settingsOnClick = useNavigateAction({ type: "url", url: "/settings" });
  
  //taskbar graphics
  return (
    <Flex
      display="flex"
      gap="20px"
      direction="row"
      width="100vw"
      height="80px"
      justifyContent="space-between"
      alignItems="center"
      paddingLeft="0px"
      backgroundColor="#F2F2F2"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      flex='none'
      order="0"
      alignSelf="stretch"
      flexGrow="0"
      border="2px SOLID rgba(0,0,0,1)"
    >
      <Flex>
      
      <Flex
        width="43px"
        height="unset"
        flex='none'
        order="0"
        flexGrow="0"
        paddingLeft="10px"
      >
        <Image src="assets/logo.png"></Image>
      </Flex>
      <Flex
        //left side of the top bar
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        paddingLeft="0px"
        gap="30px"
        width="55vw"
        height="unset"
        flex="none"
        order="1"
        alignSelf="stretch"
        flexGrow="1"
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color={homeColor}
          lineHeight="24px"
          textAlign="left"
          letterSpacing="0.01px"
          children="Home"
          flex="none"
          order="0"
          flexGrow="0"
          //changes color of Home and redirects the user to the home page
          onMouseLeave={() => {
            setHomeColor("#000000");
          }}
          onMouseOver={() => {
            setHomeColor("#9a4c4c");
          }}
          onClick={() => {
            homeOnClick();
            setHomeColor("#9a4c4c");
          }}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color={aboutColor}
          lineHeight="24px"
          textAlign="left"
          letterSpacing="0.01px"
          children="About"
          flex="none"
          order="1"
          flexGrow="0"
          //changes color of about and redirects the user to the about page
          onClick={() => {
            aboutOnClick();
            setAboutColor("#9a4c4c");
          }}
          onMouseOver={() => {
            setAboutColor("#9a4c4c");
          }}
          onMouseLeave={() => {
            setAboutColor("#000000");
          }}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color={skillColor}
          lineHeight="24px"
          textAlign="left"
          children="Skill List"
          letterSpacing="0.01px"
          flex="none"
          order="2"
          flexGrow="0"
          //changes color of skill and redirects the user to the skill page
          onClick={() => {
            skillOnClick();
            setSkillColor("#9a4c4c");
          }}
          onMouseOver={() => {
            setSkillColor("#9a4c4c");
          }}
          onMouseLeave={() => {
           
            setSkillColor("#000000");
          }}
        ></Text>
        <Text
          //this page does not exist (but we wanted to be able to implement it)
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color={suggestColor}
          lineHeight="24px"
          textAlign="left"
          letterSpacing="0.01px"
          children="Suggest a Skill"
          flex="none"
          order="3"
          flexGrow="0"
          //changes color of calender  and redirects the user to the calener page
          onMouseOver={() => {
            setSuggestColor("#9a4c4c");
          }}
          onMouseLeave={() => {
            setSuggestColor("#000000");
          }}
          onClick={() => {
            suggestOnClick();
            setSuggestColor("#9a4c4c");
          }}
        ></Text>
      </Flex>
      </Flex>
      <Flex
        //right side of the task bar
        display="flex"
        paddingRight="15px"
        direction="row"
        width="34vw"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        flex="none"
        order="2"
        alignSelf="stretch"
        flexGrow="1"
      >
        <Flex
          display="flex"
          gap="15px"
          direction="row"
          width="30vw"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          flex="none"
          order="0"
          flexGrow="0"
        >
          
          <Image
            width="48px"
            height="48px"
            src="assets\hero-logo.png" 
          >
          </Image>
          <Flex
            display="flex"
            gap="25px"
            direction="row"
            width="unset"
            height="unset"
            alignItems="center"
            justifyContent="flex-end"
            padding="0px"
            flex="none"
            order="1"
            flexGrow="0"
          >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="row"             
                alignItems="center"
                //displays the logged in users email or nothing if the user is not logged in
                children={authAttributes["email"]}
                flex="none"
                order="0"
                flexGrow="0"
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color={settingsColor}
                lineHeight="24px"
                textAlign="right"
                display="flex"
                direction="row"
                letterSpacing="0.01px"                         
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Settings"
                flex="none"
                order="1"
                flexGrow="0"
                //changes color of setting and redirects the user to the settings page
                onClick={() => {
                  settingsOnClick();
                  setSettingsColor("#9a4c4c");
                }}
                onMouseOver={() => {
                  setSettingsColor("#9a4c4c");
                }}
                onMouseLeave={() => {
                  
                  setSettingsColor("#000000");
                }}
              ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
