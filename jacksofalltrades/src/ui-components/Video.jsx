/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex } from "@aws-amplify/ui-react";
export default function Video(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1118px"
      height="443px"
      overflow="hidden"
      position="relative"
      border="5px SOLID rgba(4,52,149,1)"
      padding="0px 195px 0px 195px"
      backgroundColor="rgba(184,206,249,1)"
      {...rest}
      {...getOverrideProps(overrides, "Video")}
    ></Flex>
  );
}
