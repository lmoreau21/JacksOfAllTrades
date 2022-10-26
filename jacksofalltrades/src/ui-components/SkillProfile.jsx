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
import { Button, Divider, Flex, Text, View } from "@aws-amplify/ui-react";
export default function SkillProfile(props) {
  const { skillprofile, rectangle1199, overrides, ...rest } = props;
  const rectangleOneOneNineNineOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: skillprofile?.video,
  });
  return (
    <View
      width="1440px"
      height="1024px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "SkillProfile")}
    >
      <Flex
        gap="0"
        direction="column"
        width="1440px"
        height="1024px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 401")}
      >
        <View
          width="unset"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 6")}
        >
          <Divider
            width="1440px"
            height="1px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider35122563")}
          ></Divider>
          <View
            width="1134px"
            height="363px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="37px"
            left="153px"
            border="1px SOLID rgba(0,0,0,1)"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(241,239,239,1)"
            onClick={() => {
              rectangleOneOneNineNineOnClick();
            }}
            {...getOverrideProps(overrides, "Rectangle 1199")}
          ></View>
          <Flex
            gap="8px"
            direction="column"
            width="1440px"
            height="59px"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="436px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 8")}
          >
            <Text
              fontFamily="Inter"
              fontSize="48px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="59px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={skillprofile?.title}
              {...getOverrideProps(overrides, "Skill Name")}
            ></Text>
          </Flex>
          <Flex
            gap="8px"
            direction="column"
            width="1440px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="calc(50% - 31px - -50px)"
            left="calc(50% - 720px - 0px)"
            padding="0px 20px 0px 20px"
            {...getOverrideProps(overrides, "Frame 729766954")}
          >
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="30px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Skill Description"
              {...getOverrideProps(overrides, "Skill Description")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
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
              children={skillprofile?.description}
              {...getOverrideProps(overrides, "Insert Skill Description")}
            ></Text>
          </Flex>
          <Divider
            width="1440px"
            height="1px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="629px"
            left="0px"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider29766957")}
          ></Divider>
          <Flex
            gap="8px"
            direction="column"
            width="1440px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="666px"
            left="0px"
            padding="0px 20px 0px 20px"
            {...getOverrideProps(overrides, "Frame 729766958")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Instructions"
              {...getOverrideProps(overrides, "Instructions")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
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
              children={skillprofile?.instructions}
              {...getOverrideProps(overrides, "Insert instructions")}
            ></Text>
          </Flex>
          <Divider
            width="1440px"
            height="1px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="754px"
            left="0px"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider29766961")}
          ></Divider>
          <Flex
            gap="8px"
            direction="column"
            width="1440px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="791px"
            left="0px"
            padding="0px 20px 0px 20px"
            {...getOverrideProps(overrides, "Frame 729766962")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Content Provided by:"
              {...getOverrideProps(overrides, "Content Provided by:")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
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
              children={`${skillprofile?.videoRights}${skillprofile?.instructionRights}${skillprofile?.photoRights}`}
              {...getOverrideProps(overrides, "Insert Source")}
            ></Text>
          </Flex>
          <Button
            display="flex"
            gap="0"
            direction="row"
            width="371px"
            height="unset"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top="879px"
            left="535px"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Complete Skill"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </View>
      </Flex>
    </View>
  );
}
