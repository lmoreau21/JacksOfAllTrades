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
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function SkillLink(props) {
  const { skillprofile, overrides, ...rest } = props;
  const [linkBorderBackgroundColor, setLinkBorderBackgroundColor] =
    useStateMutationAction("rgba(251,182,205,1)");
  const skillLinkOnMouseOver = () => {
    setLinkBorderBackgroundColor("#000000");
  };
  const skillLinkOnMouseLeave = () => {
    setLinkBorderBackgroundColor("#F5BCBC");
  };
  const skillLinkOnClick = useNavigateAction({
    type: "url",
    url: "/skillprofile",
  });
  return (
    <View
      width="790px"
      height="311px"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundImage="linear-gradient(-81deg, rgba(148,42,42,1), rgba(167,151,151,1))"
      onMouseOver={() => {
        skillLinkOnMouseOver();
      }}
      onMouseLeave={() => {
        skillLinkOnMouseLeave();
      }}
      onClick={() => {
        skillLinkOnClick();
      }}
      {...rest}
      {...getOverrideProps(overrides, "SkillLink")}
    >
      <View
        width="790px"
        height="311px"
        position="absolute"
        top="0px"
        left="0px"
        border="5px SOLID rgba(0,0,0,0)"
        padding="0px 0px 0px 0px"
        backgroundColor={linkBorderBackgroundColor}
        {...getOverrideProps(overrides, "Link Border")}
      ></View>
      <View
        width="782px"
        height="303px"
        position="absolute"
        top="4px"
        left="4px"
        border="5px SOLID rgba(0,0,0,0)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(245,188,188,1)"
        {...getOverrideProps(overrides, "Link Background")}
      ></View>
      <Icon
        width="437px"
        height="233px"
        viewBox={{ minX: 0, minY: 0, width: 437, height: 233 }}
        paths={[
          {
            d: "M0 0L0 -1L-1 -1L-1 0L0 0ZM437 0L438 0L438 -1L437 -1L437 0ZM437 233L437 234L438 234L438 233L437 233ZM0 233L-1 233L-1 234L0 234L0 233ZM0 1L437 1L437 -1L0 -1L0 1ZM436 0L436 233L438 233L438 0L436 0ZM437 232L0 232L0 234L437 234L437 232ZM1 233L1 0L-1 0L-1 233L1 233Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 0L437 0L437 233L0 233L0 0Z",
            fill: "rgba(255,255,255,0.5)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="60px"
        left="20px"
        {...getOverrideProps(overrides, "Background of description")}
      ></Icon>
      <View
        width="745px"
        height="1px"
        position="absolute"
        top="47px"
        left="17px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "line")}
      ></View>
      <View
        width="286px"
        height="239px"
        position="absolute"
        top="53px"
        left="488px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Skill Image")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="739px"
        height="264px"
        position="absolute"
        top="19px"
        left="23px"
        {...getOverrideProps(overrides, "Text")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="88px"
          height="21px"
          position="absolute"
          top="0px"
          left="651px"
          {...getOverrideProps(overrides, "Group 1")}
        >
          <Flex
            gap="6px"
            position="absolute"
            bottom="0px"
            right="0px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 420")}
          >
            <Text
              fontFamily="Kameron"
              fontSize="18px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="21.09375px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Time:"
              {...getOverrideProps(overrides, "Time:")}
            ></Text>
            <Text
              fontFamily="Kameron"
              fontSize="18px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="21.09375px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={skillprofile?.timeEstimate}
              {...getOverrideProps(overrides, "num")}
            ></Text>
          </Flex>
        </View>
        <Text
          fontFamily="Kameron"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16.40625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="415px"
          height="213px"
          position="absolute"
          top="calc(50% - 106.5px - -25.5px)"
          left="8px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={skillprofile?.description}
          {...getOverrideProps(overrides, "Description")}
        ></Text>
        <Text
          fontFamily="Kameron"
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="23.4375px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="3px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={skillprofile?.title}
          {...getOverrideProps(overrides, "Skill Name")}
        ></Text>
      </View>
      <Image
        width="293px"
        height="232px"
        position="absolute"
        top="60px"
        left="469px"
        padding="0px 0px 0px 0px"
        src={skillprofile?.photo}
        {...getOverrideProps(overrides, "Logo 1")}
      ></Image>
    </View>
  );
}
