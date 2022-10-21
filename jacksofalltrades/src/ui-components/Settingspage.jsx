/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Settingspage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1024px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(226,226,226,1)"
      {...rest}
      {...getOverrideProps(overrides, "Settingspage")}
    >
      <View
        width="982px"
        height="700px"
        position="absolute"
        top="162px"
        left="229px"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-45deg, rgba(167,83,83,1), rgba(167,153,153,1))"
        {...getOverrideProps(overrides, "background")}
      ></View>
      <View
        width="369px"
        height="611px"
        position="absolute"
        top="206px"
        left="523px"
        border="4px SOLID rgba(0,0,0,1)"
        boxShadow="0px 4px 25px rgba(0, 0, 0, 0.25)"
        borderRadius="24px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(209,150,150,1)"
        {...getOverrideProps(overrides, "Rectangle 1201")}
      ></View>
      <Text
        fontFamily="Kameron"
        fontSize="35px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="52.5px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        textDecoration="underline"
        width="302px"
        height="65px"
        position="absolute"
        top="334px"
        left="557px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Settings"
        {...getOverrideProps(overrides, "Settings")}
      ></Text>
      <Text
        fontFamily="Kameron"
        fontSize="25px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="37.5px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="303px"
        height="48px"
        position="absolute"
        top="427px"
        left="568px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Change password"
        {...getOverrideProps(overrides, "Change password")}
      ></Text>
      <Text
        fontFamily="Kameron"
        fontSize="25px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="37.5px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="297px"
        height="51px"
        position="absolute"
        top="502px"
        left="562px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Edit profile"
        {...getOverrideProps(overrides, "Edit profile")}
      ></Text>
      <View
        width="325px"
        height="465px"
        position="absolute"
        top="301px"
        left="546px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 1202")}
      ></View>
    </View>
  );
}
