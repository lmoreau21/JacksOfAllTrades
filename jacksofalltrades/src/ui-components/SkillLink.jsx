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
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function SkillLink(props) {
  const { skillProfile, overrides, ...rest } = props;
  const skillNameOnClick = useNavigateAction({
    type: "url",
    url: "/SkillProfile",
  });
  return (
    <View
      width="790px"
      height="311px"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "SkillLink")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="615px"
        height="209px"
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
        <Text
          fontFamily="Kameron"
          fontSize="18px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="21.09375px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0px"
          left="569px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Time:"
          {...getOverrideProps(overrides, "Time:")}
        ></Text>
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
          width="355px"
          height="144px"
          position="absolute"
          top="65px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={skillProfile?.description}
          {...getOverrideProps(overrides, "Description")}
        ></Text>
      </View>
      <Icon
        width="747px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 747, height: 1 }}
        paths={[
          {
            d: "M0 0L747 0L747 -1L0 -1L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="55.5px"
        left="22px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Line")}
      ></Icon>
      <Image
        width="286px"
        height="239px"
        position="absolute"
        top="65px"
        left="483px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        src={skillProfile?.photo}
        {...getOverrideProps(overrides, "Skill Image")}
      ></Image>
    </View>
  );
}
