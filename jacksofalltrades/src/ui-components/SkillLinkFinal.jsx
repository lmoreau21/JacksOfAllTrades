import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
  useStateMutationAction,
  authAttributes
} from "@aws-amplify/ui-react/internal";
import { DataStore } from "aws-amplify";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import { useAuth } from "@aws-amplify/ui-react/internal";
import { SkillCompleted } from "../models";

//SkillLinkFinal is the mini boxes that comprise the skillList page
export default function SkillLinkFinal(props) {
  //pulls the users info
  const authAttributes = useAuth().user?.attributes ?? {};
  const { skillprofile, skillCompleted, overrides, ...rest } = props;
  
  //redirects users to the specific skill profile
  const skillLinkOnClick = useNavigateAction({
    type: "url",
    url: `${"/skillprofile/"}${skillprofile?.id}`,
  });
  //creates variable linkBorderBackgroundColor and setter method setLinkBorderBackgroundColor

  //creates variable skillTitlePhrase and setter method setSkillTitlePhrase
  const [skillTitlePhrase, setSkillTitlePhrase] = 
    useStateMutationAction(skillprofile?.title);
  
  //pulls the skillcomplete data model to search for if the user has completed the skill
  const completeModel = DataStore.query(SkillCompleted, c => c.userEmail('eq',authAttributes["email"])).then((results)=>{
    //the word complete would be appended if the skill is complete
    console.log(results[0]);
    if(results.skillID('eq',  skillprofile.skillId)[0].isComplete){
      setSkillTitlePhrase(skillprofile?.title+" (Completed)")
}
  });

  //graphics for skilllink final
  return (
    <Flex
      className="skillcard"
      gap="5px"
      direction="column"
      width="68vw"
      height="282px"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="13px 15px 13px 15px"
      borderRadius="5px"
      //redirects user to specific profile page
      onClick={() => {
        skillLinkOnClick();
      }}
      >
      <Flex
        direction="row"
        width="65vw"
        height="19px"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
      >
          <Text
            className="text"
            fontFamily="Kameron"
            fontSize="20px"
            fontWeight="700"
            lineHeight="25px"
            textAlign="left"
            display="flex"
            direction="row"
            height="22px"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            //overrides skill title with the title and the word (complete) if it is complete
            children={skillTitlePhrase}
          ></Text>
          <Flex gap="3px">
          <Text
            className="text"
            fontFamily="Kameron"
            fontSize="18px"
            fontWeight="400"
            lineHeight="21px"
            textAlign="right"
            display="flex"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Time:"
          ></Text>
          <Text
            className="text"
            fontFamily="Kameron"
            fontSize="18px"
            fontWeight="400"
            lineHeight="21px"
            textAlign="left"
            display="flex"
            position="relative"
            whiteSpace="pre-wrap"
            //override with skill profile time estimate
            children={skillprofile?.timeEstimate}
          ></Text>
          </Flex>
        </Flex>
        <Flex
            width="65vw"
            height=".5px"
            backgroundColor="rgba(0,0,0,1)"
            border="1px SOLID rgba(0,0,0,1)"
            display="flex"
            position="relative"
            top="1px"
        >
            
          </Flex>
        <Flex
          direction="row"
          width="65vw"
          height="unset"
          justifyContent="space-between"
          top="4px"
          gap="8px"
        >
            <Flex
              className="mid-background"
              width="37vw"
              height="220px"
              border="1px SOLID rgba(0,0,0,1)"
              display="flex"
              position="relative"
            >
               <Text
                className="text"
                fontFamily="Kameron"
                fontSize="15px"
                fontWeight="400"
                lineHeight="20px"
                textAlign="left"
                display="flex"
                direction="row"    
                position="relative"
                top="1vw"
                left="1vw"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                //overides with skill profile description
                children={skillprofile?.description}
              ></Text>`
            </Flex>
          
          <Image
            width="30vw"
            height="220px"
            display="flex"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(0,0,0,1)"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            backgroundColor="#FFFFFF"
            //overrides with skill profile photo
            src={skillprofile?.photo}
          ></Image>
        </Flex>
      </Flex>
 
  );
}