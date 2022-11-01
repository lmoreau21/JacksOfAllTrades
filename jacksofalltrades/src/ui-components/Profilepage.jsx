/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps, useAuth } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Profilepage(props) {
  const { Signin, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
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
      backgroundColor="rgba(226,226,226,1)"
      {...rest}
      {...getOverrideProps(overrides, "Profilepage")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="982px"
        height="700px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="162px"
        left="229px"
        {...getOverrideProps(overrides, "Background")}
      >
        <View
          width="982px"
          height="700px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          border="4px SOLID rgba(0,0,0,1)"
          padding="0px 0px 0px 0px"
          backgroundImage="linear-gradient(-45deg, rgba(167,83,83,1), rgba(167,153,153,1))"
          {...getOverrideProps(overrides, "background")}
        ></View>
        <View
          width="982px"
          height="6px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="497px"
          left="0px"
          border="4px SOLID rgba(0,0,0,1)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Line36122570")}
        ></View>
        <View
          width="982px"
          height="6px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="305px"
          left="0px"
          border="4px SOLID rgba(0,0,0,1)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Line36142577")}
        ></View>
        <View
          width="337px"
          height="303px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="345px"
          left="23px"
          border="4px SOLID rgba(0,0,0,1)"
          borderRadius="48px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(209,150,150,1)"
          {...getOverrideProps(overrides, "Box 2")}
        ></View>
        <View
          width="337px"
          height="303px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="345px"
          left="588px"
          border="4px SOLID rgba(0,0,0,1)"
          borderRadius="48px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(209,150,150,1)"
          {...getOverrideProps(overrides, "Box 1")}
        ></View>
      </View>
      <Icon
        width="260px"
        height="260px"
        viewBox={{ minX: 0, minY: 0, width: 260, height: 260 }}
        paths={[
          {
            d: "M260 130C260 201.797 201.797 260 130 260C58.203 260 0 201.797 0 130C0 58.203 58.203 0 130 0C201.797 0 260 58.203 260 130Z",
            fill: "rgba(217,217,217,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="185px"
        left="266px"
        {...getOverrideProps(overrides, "user profile picture")}
      ></Icon>
      <Text
        fontFamily="Kameron"
        fontSize="30px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="661px"
        height="69px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="280px"
        left="550px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={authAttributes["email"]}
        {...getOverrideProps(overrides, "Email")}
      ></Text>
      <Text
        fontFamily="Kameron"
        fontSize="28px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="42px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="324px"
        height="294px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="507px"
        left="252px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="# Topics Learned"
        {...getOverrideProps(overrides, "# Topics Learned")}
      ></Text>
      <Text
        fontFamily="Kameron"
        fontSize="28px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="324px"
        height="294px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="516px"
        left="824px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Streak: #"
        {...getOverrideProps(overrides, "Streak: #")}
      ></Text>
    </View>
  );
}
