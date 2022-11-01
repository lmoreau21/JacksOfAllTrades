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
import { Text, View } from "@aws-amplify/ui-react";
export default function Settingspage(props) {
  const { overrides, ...rest } = props;
  const signOutThreeSixSixFourTwoFourNineFourOnClick = useAuthSignOutAction({
    global: true,
  });
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
      <View
        padding="0px 0px 0px 0px"
        width="264px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="416px"
        left="588px"
        onClick={() => {
          signOutThreeSixSixFourTwoFourNineFourOnClick();
        }}
        {...getOverrideProps(overrides, "Sign Out36642494")}
      >
        <View
          width="264px"
          height="46px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "Sign Out Button")}
        ></View>
        <Text
          fontFamily="Kameron"
          fontSize="24px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="36px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="155px"
          height="19px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="7px"
          left="54px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sign Out"
          {...getOverrideProps(overrides, "Sign Out36642489")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="264px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="489px"
        left="588px"
        {...getOverrideProps(overrides, "Change Password36642495")}
      >
        <View
          width="264px"
          height="46px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "Change Password Button")}
        ></View>
        <Text
          fontFamily="Kameron"
          fontSize="24px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="36px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="246px"
          height="24px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="8px"
          left="10px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Change Password"
          {...getOverrideProps(overrides, "Change Password36642492")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="264px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="562px"
        left="588px"
        {...getOverrideProps(overrides, "Change email36642496")}
      >
        <View
          width="264px"
          height="46px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "Change Email Button")}
        ></View>
        <Text
          fontFamily="Kameron"
          fontSize="24px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="36px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="149px"
          height="21px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="8px"
          left="57px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Change email"
          {...getOverrideProps(overrides, "Change email36642493")}
        ></Text>
      </View>
    </View>
  );
}
