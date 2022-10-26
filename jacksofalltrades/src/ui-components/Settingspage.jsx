/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Text, View } from "@aws-amplify/ui-react";
export default function Settingspage(props) {
  const { overrides, ...rest } = props;
  const changePasswordOnClick = useAuthSignOutAction({ global: true });
  return (
    <View
      width="1440px"
      height="1024px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Settingspage")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="1440px"
        height="1024px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Group 3")}
      >
        <View
          width="1440px"
          height="1024px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundImage="linear-gradient(-45deg, rgba(167,83,83,1), rgba(167,153,153,1))"
          {...getOverrideProps(overrides, "background")}
        ></View>
        <View
          width="561px"
          height="771px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="127px"
          left="440px"
          border="4px SOLID rgba(0,0,0,1)"
          boxShadow="0px 4px 25px rgba(0, 0, 0, 0.25)"
          borderRadius="24px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(209,150,150,1)"
          {...getOverrideProps(overrides, "Background 2")}
        ></View>
        <View
          width="325px"
          height="501px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="262px"
          left="558px"
          borderRadius="23px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,0.3)"
          {...getOverrideProps(overrides, "Background 3")}
        ></View>
      </View>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="264px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="564px"
        left="588px"
        padding="8px 16px 8px 16px"
        opacity="0.75"
        size="large"
        isDisabled={true}
        variation="primary"
        children="Change Email"
        {...getOverrideProps(overrides, "Change Email")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="264px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="489px"
        left="588px"
        padding="8px 16px 8px 16px"
        opacity="0.75"
        size="large"
        isDisabled={true}
        variation="primary"
        children="Change Password"
        {...getOverrideProps(overrides, "Edit Profile")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="264px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="414px"
        left="588px"
        padding="8px 16px 8px 16px"
        opacity="0.75"
        size="large"
        isDisabled={true}
        variation="primary"
        children="Sign Out"
        onClick={() => {
          changePasswordOnClick();
        }}
        {...getOverrideProps(overrides, "Change Password")}
      ></Button>
      <Text
        fontFamily="Kameron"
        fontSize="45px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="67.5px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        textDecoration="underline"
        width="302px"
        height="65px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="320px"
        left="569px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Settings"
        {...getOverrideProps(overrides, "Settings")}
      ></Text>
    </View>
  );
}
