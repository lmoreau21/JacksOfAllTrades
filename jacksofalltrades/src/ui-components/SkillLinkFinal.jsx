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
      alignItems="center"
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
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          
          {...getOverrideProps(overrides, "Frame 422")}
        >
          <Flex
            
            width="30vw"
            height="300px"
            display="flex"
            gap="unset"
            
            {...getOverrideProps(overrides, "Group 7")}
          >
            <Icon
              width="35vw"
              height="300px"
              viewBox={{ minX: 0, minY: 0, width: 437, height: 207 }}
              paths={[
                {
                  d: "M0 0L0 -1L-1 -1L-1 0L0 0ZM437 0L438 0L438 -1L437 -1L437 0ZM437 207L437 208L438 208L438 207L437 207ZM0 207L-1 207L-1 208L0 208L0 207ZM0 1L437 1L437 -1L0 -1L0 1ZM436 0L436 207L438 207L438 0L436 0ZM437 206L0 206L0 208L437 208L437 206ZM1 207L1 0L-1 0L-1 207L1 207Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
                {
                  d: "M0 0L437 0L437 207L0 207L0 0Z",
                  fill: "rgba(255,255,255,0.5)",
                  fillRule: "nonzero",
                },
              ]}
              display="flex"
              
              justifyContent="flex-start"
              position="absolute"
              
              {...getOverrideProps(overrides, "Background of description")}
            ></Icon>
            <Text
              fontFamily="Kameron"
              fontSize="14px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="16.6181640625px"
              textAlign="left"
              display="flex"
              direction="row"
              justifyContent="unset"
              width="30vw"
              height="207px"
            
              
              position="relative"
              top="calc(50% - 88.5px - 5px)"
              left="11px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={skillprofile?.description}
              {...getOverrideProps(overrides, "Description")}
            ></Text>
          </Flex>
          <Image
            width="40vw"
            height="207px"
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