/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function SkillLinkFinal(props) {
  const { skillprofile, overrides, ...rest } = props;
  const [linkBorderBackgroundColor, setLinkBorderBackgroundColor] =
    useStateMutationAction("3px SOLID #000000");
  const skillLinkOnMouseOver = () => {
    setLinkBorderBackgroundColor("5px SOLID #9a4c4c");
  };
  const skillLinkOnMouseLeave = () => {
    setLinkBorderBackgroundColor("3px SOLID #000000");
  };
  const skillLinkOnClick = useNavigateAction({
    type: "url",
    url: `${"/skillprofile/"}${skillprofile?.id}`,
  });
  return (
    <Flex
      gap="5px"
      direction="column"
      width="68vw"
      height="282px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="13px 15px 13px 15px"
      border={linkBorderBackgroundColor}
      borderRadius="5px"
      backgroundColor="rgba(255,184,184,1)"
      onMouseLeave={() => {
        skillLinkOnMouseLeave();
      }}
      onMouseOver={() => {
        skillLinkOnMouseOver();
      }}
      onClick={() => {
        skillLinkOnClick();
      }}
      {...rest}
      {...getOverrideProps(overrides, "Link")}
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
        {...getOverrideProps(overrides, "Text")}
      >
          <Text
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
            children={skillprofile?.title}
            {...getOverrideProps(overrides, "Skill Name")}
          ></Text>
          <Flex gap="3px">
          <Text
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
            {...getOverrideProps(overrides, "Time:")}
          ></Text>
          <Text
            fontFamily="Kameron"
            fontSize="18px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="21px"
            textAlign="left"
            display="flex"
            position="relative"
            whiteSpace="pre-wrap"
            children={skillprofile?.timeEstimate}
            {...getOverrideProps(overrides, "num")}
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
          {...getOverrideProps(overrides, "Frame 422")}
        >
            <Flex
              width="37vw"
              height="220px"
              backgroundColor="rgba(255,255,255,0.5)"
              border="1px SOLID rgba(0,0,0,1)"
              display="flex"
              position="relative"
              
              {...getOverrideProps(overrides, "Background of description")}
            >
               <Text
                fontFamily="Kameron"
                fontSize="15px"
                fontWeight="400"
                color="rgba(0,0,0,1)"
                lineHeight="20px"
                textAlign="left"
                display="flex"
                direction="row"    
                position="relative"
                top="1vw"
                left="1vw"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={skillprofile?.description}
                {...getOverrideProps(overrides, "Description")}
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
            src={skillprofile?.photo}
            {...getOverrideProps(overrides, "Logo 1")}
          ></Image>
        </Flex>
      </Flex>
 
  );
}