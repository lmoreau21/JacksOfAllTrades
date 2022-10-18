/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Profilepage(props) {
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
      {...getOverrideProps(overrides, "Profilepage")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="982px"
        height="700px"
        position="absolute"
        top="162px"
        left="229px"
        {...getOverrideProps(overrides, "Background")}
      >
        <View
          width="982px"
          height="700px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(148,41,41,1)"
          {...getOverrideProps(overrides, "background")}
        ></View>
        <View
          width="337px"
          height="303px"
          position="absolute"
          top="345px"
          left="23px"
          borderRadius="48px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Rectangle 1202")}
        ></View>
        <View
          width="337px"
          height="303px"
          position="absolute"
          top="345px"
          left="588px"
          borderRadius="48px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Rectangle 1203")}
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
        position="absolute"
        top="185px"
        left="266px"
        {...getOverrideProps(overrides, "user profile picture")}
      ></Icon>
      <Text
        fontFamily="Kameron"
        fontSize="45px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="67.5px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="661px"
        height="69px"
        position="absolute"
        top="280px"
        left="550px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Email"
        {...getOverrideProps(overrides, "Email")}
      ></Text>
      <Text
        fontFamily="Kameron"
        fontSize="35px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="52.5px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="324px"
        height="294px"
        position="absolute"
        top="507px"
        left="252px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="# Topics Learned"
        {...getOverrideProps(overrides, "# Topics Learned")}
      ></Text>
      <View
        width="982px"
        height="11px"
        position="absolute"
        top="475px"
        left="229px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 1201")}
      ></View>
    </View>
  );
}
