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
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function SkillLink(props) {
  const { skillProfile, overrides, ...rest } = props;
  const skillNameOnClick = useNavigateAction({
    type: "url",
    url: `${"/"}${skillProfile?.id}`,
  });
  return (
    <View
      width="790px"
      height="311px"
      overflow="hidden"
      position="relative"
      border="3px SOLID rgba(0,0,0,1)"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(245,188,188,1)"
      {...rest}
      {...getOverrideProps(overrides, "SkillLink")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="739px"
        height="256px"
        position="absolute"
        top="19px"
        left="23px"
        {...getOverrideProps(overrides, "Text")}
      >
        <Text
          fontFamily="Kameron"
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="23.4375px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="3px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={skillProfile?.title}
          onClick={() => {
            skillNameOnClick();
          }}
          {...getOverrideProps(overrides, "Skill Name")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="88px"
          height="21px"
          position="absolute"
          top="0px"
          left="651px"
          {...getOverrideProps(overrides, "Group 1")}
        >
          <Flex
            gap="6px"
            position="absolute"
            bottom="0px"
            right="0px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 420")}
          >
            <Text
              fontFamily="Kameron"
              fontSize="18px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="21.09375px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="center"
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
              lineHeight="21.09375px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={skillProfile?.time}
              {...getOverrideProps(overrides, "num")}
            ></Text>
          </Flex>
        </View>
        <Text
          fontFamily="Kameron"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.75px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="443px"
          height="204px"
          position="absolute"
          top="52px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={skillProfile?.description}
          {...getOverrideProps(overrides, "Description")}
        ></Text>
      </View>
      <Image
        width="286px"
        height="239px"
        position="absolute"
        top="61px"
        left="487px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        src={skillProfile?.photo}
        {...getOverrideProps(overrides, "Skill Image")}
      ></Image>
      <View
        width="745px"
        height="1px"
        position="absolute"
        top="47px"
        left="17px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 1200")}
      ></View>
    </View>
  );
}
