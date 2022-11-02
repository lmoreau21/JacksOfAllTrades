/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { SkillCompleted } from "../models";
import { schema } from "../models/schema";
import { Button, Divider, Flex, Text, View } from "@aws-amplify/ui-react";
export default function SkillProfile(props) {
  const { skillprofile, rectangle1199, skillCompleted, overrides, ...rest } =
    props;
  const rectangleOneOneNineNineOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: skillprofile?.video,
  });
  const buttonOnClick = useDataStoreUpdateAction({
    fields: { isComplete: "true" },
    id: skillCompleted?.isComplete,
    model: SkillCompleted,
    schema: schema,
  });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="100vw"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "SkillProfile")}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 401")}
      >
        <Flex
          gap="25px"
          direction="column"
          width="unset"
          height="962px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="19px 0px 27px 0px"
          {...getOverrideProps(overrides, "Frame 6")}
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
            border="10px SOLID rgba(255,184,184,1)"
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
            width="unset"
            height="59px"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 8")}
          >
            <Text
              fontFamily="Flamenco"
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
          <Button
            display="flex"
            gap="0"
            direction="row"
            width="371px"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Complete Skill"
            onClick={() => {
              buttonOnClick();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
          <Flex
            gap="22px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 10px 0px 10px"
            {...getOverrideProps(overrides, "Frame 736702563")}
          >
            <Divider
              width="1287px"
              height="1px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(174,179,183,1)"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider35122563")}
            ></Divider>
            <Flex
              gap="8px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 20px 0px 20px"
              {...getOverrideProps(overrides, "Frame 729766954")}
            >
              <Text
                fontFamily="Inter"
                fontSize="24px"
                fontWeight="600"
                color="rgba(13,26,38,1)"
                lineHeight="30px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="1247px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
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
                width="1247px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={skillprofile?.description}
                {...getOverrideProps(overrides, "Insert Skill Description")}
              ></Text>
            </Flex>
            <Divider
              width="1287px"
              height="1px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider29766957")}
            ></Divider>
            <Flex
              gap="8px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 20px 0px 20px"
              {...getOverrideProps(overrides, "Frame 729766958")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="800"
                color="rgba(13,26,38,1)"
                lineHeight="20px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="1247px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
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
                width="1247px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={skillprofile?.instructions}
                {...getOverrideProps(overrides, "Insert instructions")}
              ></Text>
            </Flex>
            <Divider
              width="1287px"
              height="1px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider29766961")}
            ></Divider>
            <Flex
              gap="8px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 20px"
              {...getOverrideProps(overrides, "Frame 729766962")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="800"
                color="rgba(13,26,38,1)"
                lineHeight="20px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="1267px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
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
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={skillprofile?.videoRights}
                {...getOverrideProps(overrides, "Line One")}
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
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={skillprofile?.instructionRights}
                {...getOverrideProps(overrides, "Line Three36702560")}
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
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={skillprofile?.photoRights}
                {...getOverrideProps(overrides, "Line Three36702561")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
