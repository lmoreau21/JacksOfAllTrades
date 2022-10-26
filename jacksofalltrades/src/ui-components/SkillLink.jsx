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
    url: `${"/skillprofile/"}${skillprofile?.id}`,
  });
  return (
    <View
      width="790px"
      height="317px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
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
        width="1227px"
        height="308px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="-219px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 1200")}
      ></View>
      <View
        width="1035px"
        height="851px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-4558px"
        left="-2793px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 417")}
      ></View>
      <View
        width="790px"
        height="317px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        border="5px SOLID rgba(0,0,0,0)"
        padding="0px 0px 0px 0px"
        backgroundColor={linkBorderBackgroundColor}
        {...getOverrideProps(overrides, "Link Border")}
      ></View>
      <View
        width="781px"
        height="313px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
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
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="60px"
        left="20px"
        {...getOverrideProps(overrides, "Background of description")}
      ></Icon>
      <View
        width="745px"
        height="1px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
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
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="53px"
        left="488px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Skill Image")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="738px"
        height="237px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="25px"
        left="23px"
        {...getOverrideProps(overrides, "Text")}
      >
        <Text
          fontFamily="Kameron"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16.40625px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="415px"
          height="189.78px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 94.89px - -23.61px)"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={skillprofile?.description}
          {...getOverrideProps(overrides, "Description")}
        ></Text>
        <Flex
          gap="392px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 2")}
        >
          <Text
            fontFamily="Kameron"
            fontSize="20px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="23.4375px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="258px"
            height="22px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={skillprofile?.title}
            {...getOverrideProps(overrides, "Skill Name")}
          ></Text>
          <Flex
            gap="6px"
            direction="row"
            width="unset"
            height="16px"
            justifyContent="flex-end"
            alignItems="flex-start"
            shrink="0"
            position="relative"
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
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
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
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={skillprofile?.timeEstimate}
              {...getOverrideProps(overrides, "num")}
            ></Text>
          </Flex>
        </Flex>
      </View>
      <Image
        width="293px"
        height="232px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="60px"
        left="469px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={skillprofile?.photo}
        {...getOverrideProps(overrides, "Logo 1")}
      ></Image>
      <Text
        fontFamily="Kameron"
        fontSize="40px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="46.875px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="235.56px"
        left="535px"
        transformOrigin="top left"
        transform="rotate(-45deg)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Completed"
        {...getOverrideProps(overrides, "Completed")}
      ></Text>
    </View>
  );
}
