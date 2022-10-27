/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
  useAuth,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Top(props) {
  const { signIn, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Rectangle 1191": {},
        "Rectangle 1192": {},
        "Rectangle 1193": {},
        J35842498: {},
        J35842499: {},
        Logo: {},
        Home: {},
        About: {},
        Skill: {},
        Calender: {},
        "Frame 32135842501": {},
        "Profile Image": {},
        Name: {},
        "Frame 32135842509": {},
        "Frame 415": {},
        Settings: {},
        "Frame 32136392505": {},
        "Frame 41636392504": {},
        "Frame 41635842506": {},
        Profile: {},
        Top: {},
      },
      variantValues: { property1: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const authAttributes = useAuth().user?.attributes ?? {};
  const [homeColor, setHomeColor] = useStateMutationAction("rgba(0,0,0,1)");
  const [aboutColor, setAboutColor] = useStateMutationAction("rgba(0,0,0,1)");
  const [skillColor, setSkillColor] = useStateMutationAction("rgba(0,0,0,1)");
  const [calenderColor, setCalenderColor] =
    useStateMutationAction("rgba(0,0,0,1)");
  const [settingsColor, setSettingsColor] =
    useStateMutationAction("rgba(13,26,38,1)");
  const homeOnMouseLeave = () => {
    setHomeColor("#000000");
  };
  const homeOnMouseOver = () => {
    setHomeColor("#9a4c4c");
  };
  const homeOnClick = useNavigateAction({ type: "url", url: "/Homepage/" });
  const aboutOnClick = useNavigateAction({ type: "url", url: "/about" });
  const aboutOnMouseOver = () => {
    setAboutColor("#9a4c4c");
  };
  const aboutOnMouseLeave = () => {
    setAboutColor("#000000");
  };
  const skillOnClick = useNavigateAction({ type: "url", url: "/skilllist" });
  const skillOnMouseOver = () => {
    setSkillColor("#9a4c4c");
  };
  const skillOnMouseLeave = () => {
    setSkillColor("#000000");
  };
  const calenderOnMouseOver = () => {
    setCalenderColor("#9a4c4c");
  };
  const calenderOnMouseLeave = () => {
    setCalenderColor("#000000");
  };
  const calenderOnClick = useNavigateAction({ type: "url", url: "/calender" });
  const settingsOnClick = useNavigateAction({ type: "url", url: "/settings" });
  const settingsOnMouseOver = () => {
    setSettingsColor("#9a4c4c");
  };
  const settingsOnMouseLeave = () => {
    setSettingsColor("#000000");
  };
  return (
    <Flex
      gap="0px"
      direction="row"
      width="100vw"
      height="80px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...rest}
      {...getOverrideProps(overrides, "Top")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="48px"
        height="68.79px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Logo")}
      >
        <View
          width="29px"
          height="43px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
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
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
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
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
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
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
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
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
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
        direction="row"
        width="334px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 32135842501")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color={homeColor}
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Home"
          onMouseLeave={() => {
            homeOnMouseLeave();
          }}
          onMouseOver={() => {
            homeOnMouseOver();
          }}
          onClick={() => {
            homeOnClick();
          }}
          {...getOverrideProps(overrides, "Home")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color={aboutColor}
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="About"
          onClick={() => {
            aboutOnClick();
          }}
          onMouseOver={() => {
            aboutOnMouseOver();
          }}
          onMouseLeave={() => {
            aboutOnMouseLeave();
          }}
          {...getOverrideProps(overrides, "About")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color={skillColor}
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Skill"
          onClick={() => {
            skillOnClick();
          }}
          onMouseOver={() => {
            skillOnMouseOver();
          }}
          onMouseLeave={() => {
            skillOnMouseLeave();
          }}
          {...getOverrideProps(overrides, "Skill")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color={calenderColor}
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Calendar"
          onMouseOver={() => {
            calenderOnMouseOver();
          }}
          onMouseLeave={() => {
            calenderOnMouseLeave();
          }}
          onClick={() => {
            calenderOnClick();
          }}
          {...getOverrideProps(overrides, "Calender")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="70vw"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 21px 0px 500px"
        display="flex"
        {...getOverrideProps(overrides, "Profile")}
      >
        <Flex
          gap="15px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 32px 0px 32px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 41635842506")}
        >
          <View
            width="48px"
            height="48px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="40px"
            padding="0px 0px 0px 0px"
            backgroundColor="#9a4c4c"
            {...getOverrideProps(overrides, "Profile Image")}
          ></View>
          <Flex
            gap="5px"
            direction="row"
            width="153px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 415")}
          >
            <Flex
              gap="0"
              direction="column"
              width="100px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 32135842509")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={authAttributes["email"]}
                {...getOverrideProps(overrides, "Name")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="75px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 41636392504")}
          >
            <Flex
              gap="0"
              direction="column"
              width="100px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 32136392505")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color={settingsColor}
                lineHeight="24px"
                textAlign="right"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Settings"
                onClick={() => {
                  settingsOnClick();
                }}
                onMouseOver={() => {
                  settingsOnMouseOver();
                }}
                onMouseLeave={() => {
                  settingsOnMouseLeave();
                }}
                {...getOverrideProps(overrides, "Settings")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
