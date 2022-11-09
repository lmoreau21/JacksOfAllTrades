
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
        setLinkBorderBackgroundColor("3px SOLID #000000");
      }}
      onMouseOver={() => {
        setLinkBorderBackgroundColor("5px SOLID #9a4c4c");
      }}
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
              width="37vw"
              height="220px"
              backgroundColor="rgba(255,255,255,0.5)"
              border="1px SOLID rgba(0,0,0,1)"
              display="flex"
              position="relative"
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
          ></Image>
        </Flex>
      </Flex>
 
  );
}