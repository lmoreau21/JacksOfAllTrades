/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuth,
  useAuthSignOutAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function TopBar(props) {
  const { overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const homeOnClick = useNavigateAction({ type: "url", url: "/" });
  const aboutOnClick = useAuthSignOutAction({ global: true });
  const skillOnClick = useNavigateAction({ type: "url", url: "/skilllist" });
  return (
    <Flex
      gap="39px"
      width="1503px"
      height="80px"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 19px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "TopBar")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="48px"
        height="68.79px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Logo")}
      >
        <View
          width="29px"
          height="43px"
          position="absolute"
          top="0px"
          left="23.14px"
          transformOrigin="top left"
          transform="rotate(30.98deg)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(220,220,220,1)"
          {...getOverrideProps(overrides, "Rectangle 1191")}
        ></View>
        <View
          width="29px"
          height="43px"
          position="absolute"
          top="8px"
          left="22.14px"
          transformOrigin="top left"
          transform="rotate(30.98deg)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(242,236,236,1)"
          {...getOverrideProps(overrides, "Rectangle 1192")}
        ></View>
        <View
          width="29px"
          height="43px"
          position="absolute"
          top="17px"
          left="22.14px"
          transformOrigin="top left"
          transform="rotate(30.98deg)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,250,250,1)"
          {...getOverrideProps(overrides, "Rectangle 1193")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="26px"
          left="40.88px"
          transformOrigin="top left"
          transform="rotate(33.29deg)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="J"
          {...getOverrideProps(overrides, "J35842498")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="41px"
          left="9.88px"
          transformOrigin="top left"
          transform="rotate(33.29deg)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="J"
          {...getOverrideProps(overrides, "J35842499")}
        ></Text>
      </Flex>
      <Flex
        gap="40px"
        width="334px"
        alignItems="center"
        shrink="0"
        height="24px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32135842501")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Home"
          onClick={() => {
            homeOnClick();
          }}
          {...getOverrideProps(overrides, "Home")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sign Out"
          onClick={() => {
            aboutOnClick();
          }}
          {...getOverrideProps(overrides, "About")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Skill"
          onClick={() => {
            skillOnClick();
          }}
          {...getOverrideProps(overrides, "Skill")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Calander"
          {...getOverrideProps(overrides, "Calander")}
        ></Text>
      </Flex>
      <Flex
        gap="4px"
        direction="column"
        width="300px"
        shrink="0"
        height="32px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SearchField")}
      ></Flex>
      <Flex
        gap="32px"
        width="685px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Profile")}
      >
        <View
          width="326.5px"
          height="1px"
          grow="1"
          basis="326.5px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Divider")}
        ></View>
        <Flex
          gap="129px"
          width="326.5px"
          alignItems="center"
          grow="1"
          basis="326.5px"
          height="48px"
          position="relative"
          padding="0px 32px 0px 32px"
          {...getOverrideProps(overrides, "Frame 416")}
        >
          <Flex
            gap="16px"
            width="109.5px"
            alignItems="center"
            grow="1"
            basis="109.5px"
            height="48px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 415")}
          >
            <View
              width="48px"
              height="48px"
              shrink="0"
              position="relative"
              borderRadius="40px"
              padding="0px 0px 0px 0px"
              backgroundColor="#123456"
              {...getOverrideProps(overrides, "Rectangle 1163")}
            ></View>
            <Flex
              gap="0"
              direction="column"
              width="100px"
              shrink="0"
              height="24px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 32135842509")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.01px"
                shrink="0"
                alignSelf="stretch"
                objectFit="cover"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={authAttributes["email"]}
                {...getOverrideProps(overrides, "Name")}
              ></Text>
            </Flex>
          </Flex>
          <View
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          ></View>
        </Flex>
      </Flex>
    </Flex>
  );
}
