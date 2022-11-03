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
      width="100vw"
      height="88vh"
      display="flex"
      gap="unset"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Settingspage")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="unset"
        height="unset"
        display="flex"
        gap="unset"
        alignItems="flex-start"
        justifyContent="center"
        position="relative"
        {...getOverrideProps(overrides, "Group 3")}
      >
        <View
          width="100vw"
          height="100vh"
          display="flex"
          gap="unset"
          alignItems="center"
          justifyContent="center"
          padding="0px 0px 0px 0px"
          backgroundImage="linear-gradient(-45deg, rgba(167,83,83,1), rgba(167,153,153,1))"
          {...getOverrideProps(overrides, "background")}
        >
           <View
          width="50vw"
          height="70vh"
          display="flex"
          direction="row"
          gap="unset"
          alignItems="center"
          justifyContent="center"
          position="relative"
          border="4px SOLID rgba(0,0,0,1)"
          boxShadow="0px 4px 25px rgba(0, 0, 0, 0.25)"
          borderRadius="24px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(209,150,150,1)"
          {...getOverrideProps(overrides, "Background 2")}
        >
          <View
          width="30vw"
          height="50vh"
          display="flex"
          gap="unset"
          alignItems="center"
          justifyContent="center"
          position="relative"
          borderRadius="23px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,0.3)"
          {...getOverrideProps(overrides, "Background 3")}
        >
          <Text
            fontFamily="Kameron"
            fontSize="45px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="67.5px"
            textAlign="center"
            textDecoration="underline"
            top="10vh"
            position="relative"
            whiteSpace="pre-wrap"
            children="Settings"
            {...getOverrideProps(overrides, "Settings")}
          ></Text>
          <View
            padding="0px 0px 0px 0px"
            width="unset"
            height="unset"
           
            gap="unset"
            alignItems="center"
            justifyContent="center"
            position="relative"
          
            onClick={() => {
              signOutThreeSixSixFourTwoFourNineFourOnClick();
            }}
            {...getOverrideProps(overrides, "Sign Out")}
          >
            <View
              width="18vw"
              height="46px"
              display="flex"
              gap="unset"
              alignItems="center"
              justifyContent="center"
              position="relative"
              borderRadius="8px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(217,217,217,1)"
              {...getOverrideProps(overrides, "Sign Out Button")}
            >
              <Text
              fontFamily="Kameron"
              fontSize="24px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="36px"
              textAlign="center"
              display="flex"
              height="46px"
              whiteSpace="pre-wrap"
              children="Sign Out"
              {...getOverrideProps(overrides, "Sign Out")}
            ></Text>
            </View> 
            </View>
        </View>
        </View>
        </View>
       
      </View>
    </View>
  );
}
