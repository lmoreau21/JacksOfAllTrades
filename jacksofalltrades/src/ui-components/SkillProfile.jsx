/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import Auth from "@aws-amplify/auth";
import { DataStore} from "aws-amplify";
import {
  getOverrideProps,
  useStateMutationAction,
  useDataStoreUpdateAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { SkillCompleted } from "../models";
import { schema } from "../models/schema";
import { Button, Divider, Flex, Text, View } from "@aws-amplify/ui-react";

export default function SkillProfile(props) {
  
  const { skillprofile, SkillCompleted, rectangle1199, skillCompleted, overrides, ...rest } =
    props;
  
  
  const { user } = Auth.currentUserInfo();
  if(user?.SkillCompleted && user.SkillCompleted?.isComplete){
    setButtonColor("rgba(209,150,150,1)")
    setSkillWord("Congrats! Skill is completed!")
  }
  function buttonOnClick() {
    setButtonColor("rgba(209,150,150,1)");
    setSkillWord("Congrats! Skill is completed!")
    Auth.currentAuthenticatedUser().then((user) => {
      console.log('user email = ' + user.attributes.email);
    });
    DataStore.save(
      new SkillCompleted({
      id: '',
      userEmail: Auth.user.attributes.email,
      isComplete: true
    })

  );
  }
  const returnButtonClick = useNavigateAction({ type: "url", url: "/skilllist" });
  
  const [buttonColor, setButtonColor] =
    
    useStateMutationAction("rgba(217,217,217,1)");
  const [skillWord, setSkillWord]=
    useStateMutationAction("Complete Skill");
  
  return (
  <Flex
    gap="25px"
    direction="column"
    width="100vw"
    height="unset"
    backgroundColor="rgba(255,255,255,1)"
    justifyContent="center"
    padding="0px 0px 35px 0px"
    alignItems="center"
    {...getOverrideProps(overrides, "Frame")}
  >
    <View
      width="90vw"
      height="400px"
      alignSelf="center"
      position="relative"
      border="10px SOLID rgba(255,184,184,1)"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(241,239,239,1)"
      
    >
      <iframe width="100%" height="100%" src= {skillprofile?.video} frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > </iframe>
    </View>
    <Flex
      gap="8px"
      direction="column"
      width="90vw"
      height="59px"
      justifyContent="center"
      alignItems="center"
      shrink="0"
      alignSelf="center"
      position="relative"
      padding="20px 0px 0px 0px"
    >
      <Text
        fontFamily="Flamenco"
        fontSize="48px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="20px"
        textAlign="center"
        direction="column"
        children={skillprofile?.title}
        {...getOverrideProps(overrides, "Skill Name")}
      ></Text>
    </Flex>
    <Button
      fontFamily="Inter"
      fontSize="18px"
      textAlign="center"
      children={skillWord}
      backgroundColor= {buttonColor}
      onClick={() => {
        buttonOnClick();
      }}
    >
    </Button>
    <Flex
      gap="22px"
      direction="column"
      width="90vw"
      height="unset"
      justifyContent="center"
      alignItems="center"
      shrink="0"
      position="relative"
      padding="0px 10px 0px 10px"
      {...getOverrideProps(overrides, "Frame")}
    >
      <Divider
        width="90vw"
        height="1px"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(174,179,183,1)"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Flex
        gap="8px"
        direction="column"
        width="90vw"
        height="unset"
        shrink="0"
        position="relative"
        padding="0px 20px 0px 20px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="600"
          color="rgba(13,26,38,1)"
          lineHeight="30px"
          textAlign="left"
          display="flex"
          direction="column"
          width="90vw"
          children="Skill Description"
          {...getOverrideProps(overrides, "Skill Description")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          width="90vw"
          children={skillprofile?.description}
          {...getOverrideProps(overrides, "Insert Skill Description")}
        ></Text>
      </Flex>
      <Divider
        width="90vw"
        height="1px"
        display="flex"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Flex
        gap="8px"
        direction="column"
        width="90vw"
        height="unset"
        padding="0px 20px 0px 20px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="800"
          color="rgba(13,26,38,1)"
          lineHeight="20px"
          textAlign="left"
          direction="column" 
          width="100%"
          children="Instructions"
          {...getOverrideProps(overrides, "Instructions")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          width="100%"
          children={skillprofile?.instructions}
          {...getOverrideProps(overrides, "Insert instructions")}
        ></Text>
      </Flex>
      <Divider
        width="90vw"
        height="1px"
        display="flex"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Flex
        gap="8px"
        direction="column"
        width="90vw"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        padding="0px 0px 0px 20px"
        {...getOverrideProps(overrides, "Frame 729766962")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="800"
          lineHeight="20px"
          children="Content Provided by:"
          {...getOverrideProps(overrides, "Content Provided by:")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          children={skillprofile?.videoRights}
          {...getOverrideProps(overrides, "Line One")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          children={skillprofile?.instructionRights}
          {...getOverrideProps(overrides, "Line Three36702560")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          children={skillprofile?.photoRights}
          {...getOverrideProps(overrides, "Line Three")}
        ></Text>
      </Flex>
    </Flex>
      <Button
        fontFamily="Inter"
        fontSize="18px"
        textAlign="center"
        backgroundColor="rgba(217,217,217,1)"
        children="Back to List"
        onClick={() => {
          returnButtonClick();
        }}
      >
      </Button>
  </Flex>    
  );
};