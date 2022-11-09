import React from "react";
import {
  useAuth,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";

export default function TopBarFinal() {
  const authAttributes = useAuth().user?.attributes ?? {};
  const [homeColor, setHomeColor] = useStateMutationAction("rgba(0,0,0,1)");
  const [aboutColor, setAboutColor] = useStateMutationAction("rgba(0,0,0,1)");
  const [skillColor, setSkillColor] = useStateMutationAction("rgba(0,0,0,1)");
  const [calenderColor, setCalenderColor] = useStateMutationAction("rgba(0,0,0,1)");
  const [settingsColor, setSettingsColor] = useStateMutationAction("rgba(13,26,38,1)");
  const homeOnClick = useNavigateAction({ type: "url", url: "/Homepage/" });
  const aboutOnClick = useNavigateAction({ type: "url", url: "/about" });
  const skillOnClick = useNavigateAction({ type: "url", url: "/skilllist" });
  const calenderOnClick = useNavigateAction({ type: "url", url: "/calender" });
  const settingsOnClick = useNavigateAction({ type: "url", url: "/settings" });
 
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
        width="48px"
        height="68.79px"
        flex='none'
        order="0"
        flexGrow="0"
      >
        <View
          width="29px"
          height="43px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="4px"
          left="25.14px"
          transformOrigin="top left"
          transform="rotate(30.98deg)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(220,220,220,1)"
        ></View>
        <View
          width="29px"
          height="43px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="12px"
          left="26.14px"
          transformOrigin="top left"
          transform="rotate(30.98deg)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(242,236,236,1)"
        ></View>
        <View
          width="29px"
          height="43px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="21px"
          left="26.14px"
          transformOrigin="top left"
          transform="rotate(30.98deg)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,250,250,1)"
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="30px"
          left="44.88px"
          transformOrigin="top left"
          transform="rotate(33.29deg)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="J"
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="45px"
          left="13.88px"
          transformOrigin="top left"
          transform="rotate(33.29deg)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="J"
        ></Text>
      </Flex>
      <Flex
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
          onMouseLeave={() => {
            homeOnClick();
            setHomeColor("#000000");
          }}
          onMouseOver={() => {
            setHomeColor("#9a4c4c");
          }}
          onClick={() => {
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
          children="Skill"
          letterSpacing="0.01px"
          flex="none"
          order="2"
          flexGrow="0"
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
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color={calenderColor}
          lineHeight="24px"
          textAlign="left"
          letterSpacing="0.01px"
          children="Calendar"
          flex="none"
          order="3"
          flexGrow="0"
          onMouseOver={() => {
            setCalenderColor("#9a4c4c");
          }}
          onMouseLeave={() => {
            setCalenderColor("#000000");
          }}
          onClick={() => {
            calenderOnClick();
            setCalenderColor("#9a4c4c");
          }}
        ></Text>
      </Flex>
      </Flex>
      <Flex
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
          <View
            width="48px"
            height="48px"
            borderRadius="40px"
            backgroundColor="#9a4c4c"
            flex="none"
            order="0"
            flexGrow="0"
          ></View>
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
