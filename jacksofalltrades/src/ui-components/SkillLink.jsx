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
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="22px"
        left="23px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={skillProfile?.title}
        onClick={() => {
          skillNameOnClick();
        }}
        {...getOverrideProps(overrides, "Skill Name")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="22px"
        left="631px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Time:"
        {...getOverrideProps(overrides, "Time:")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="89px"
        position="absolute"
        top="22px"
        left="680px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={skillProfile?.time}
        {...getOverrideProps(overrides, "num")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="463px"
        height="225px"
        position="absolute"
        top="70px"
        left="23px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={skillProfile?.description}
        {...getOverrideProps(overrides, "Description")}
      ></Text>
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
        {...getOverrideProps(overrides, "Line 3")}
      ></Icon>
      <Image
        width="270px"
        height="225px"
        position="absolute"
        top="70px"
        left="499px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        src={skillProfile?.photo}
        {...getOverrideProps(overrides, "Rectangle 1164")}
      ></Image>
    </View>
  );
}
