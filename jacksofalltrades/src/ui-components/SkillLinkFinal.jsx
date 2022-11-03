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
    useStateMutationAction("rgba(251,182,205,1)");
  const skillLinkOnMouseOver = () => {
    setLinkBackgroundColor("#000000");
  };
  const skillLinkOnMouseLeave = () => {
    setLinkBackgroundColor("#F5BCBC");
  };
  const skillLinkOnClick = useNavigateAction({
    type: "url",
    url: `${"/skillprofile/"}${skillprofile?.id}`,
  });
  return (
    <Flex
      gap="5px"
      direction="column"
      width="90vw"
      height="272px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="13px 15px 13px 15px"
      backgroundColor="rgba(255,184,184,1)"
      onMouseOver={() => {
        skillLinkOnMouseOver();
      }}
      onMouseLeave={() => {
        skillLinkOnMouseLeave();
      }}
      onClick={() => {
        skillLinkOnClick();
      }}
      {...rest}
      {...getOverrideProps(overrides, "SkillLink")}
      >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Text")}
      >
        <Flex
          gap="400px"
          direction="row"
          width="unset"
          height="25px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 2")}
        >
          <Text
            fontFamily="Kameron"
            fontSize="20px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="25.41015625px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="22px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={skillprofile?.title}
            {...getOverrideProps(overrides, "Skill Name")}
          ></Text>
          <Flex
            gap="6px"
            direction="row"
            width="unset"
            height="16px"
            justifyContent="flex-end"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 420")}
          >
            <Text
              fontFamily="Kameron"
              fontSize="18px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="21.3662109375px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
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
              lineHeight="21.3662109375px"
              textAlign="left"
              display="flex"
              direction="row"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={skillprofile?.timeEstimate}
              {...getOverrideProps(overrides, "num")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex 
        width="40vw"
        height="300px"
        display="flex"
        direction="row"
       
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 8")}
      >
        <Flex
         
          direction="row"
          width="90vw"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          
          {...getOverrideProps(overrides, "Frame 422")}
        >
            <Flex
              width="50vw"
              height="220px"

              backgroundColor="rgba(255,255,255,0.5)"
              border="rgba(0,0,0,1)"
              borderRadius="2"
              display="flex"
              
              position="relative"
              
              {...getOverrideProps(overrides, "Background of description")}
            >
               <Text
                fontFamily="Kameron"
                fontSize="14px"
                fontWeight="400"
                color="rgba(0,0,0,1)"
                lineHeight="16.6181640625px"
                textAlign="left"
                display="flex"
                direction="row"
                justifyContent="flex-start"
                width="50vw"      
                
                position="relative"
                top="1vw"
                left="5px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={skillprofile?.description}
                {...getOverrideProps(overrides, "Description")}
              ></Text>`
            </Flex>
          
          <Image
            width="34vw"
            height="220px"
            display="flex"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(0,0,0,1)"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={skillprofile?.photo}
            {...getOverrideProps(overrides, "Logo 1")}
          ></Image>
        </Flex>
      </Flex>
    </Flex>
  );
}