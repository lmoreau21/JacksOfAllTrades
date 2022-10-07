/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function SettingsPopUp(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="121px"
      height="85px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SettingsPopUp")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="3px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,184,184,1)"
        {...getOverrideProps(overrides, "Settings Background")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.01px"
        position="absolute"
        top="16.47%"
        bottom="2.35%"
        left="8.26%"
        right="9.92%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sign Out"
        {...getOverrideProps(overrides, "Sign Out")}
      ></Text>
    </View>
  );
}
