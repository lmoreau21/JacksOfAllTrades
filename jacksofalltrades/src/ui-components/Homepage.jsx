/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Homepage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1503px"
      height="2302px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Homepage")}
    >
      <View
        width="1503px"
        height="2302px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-45deg, rgba(147,37,37,1), rgba(167,152,152,1))"
        {...getOverrideProps(overrides, "Rectangle 1200")}
      ></View>
      <Icon
        width="1164px"
        height="1144px"
        viewBox={{ minX: 0, minY: 0, width: 1164, height: 1144 }}
        paths={[
          {
            d: "M1164 572C1164 496.884 1148.95 422.503 1119.7 353.105C1090.45 283.707 1047.58 220.65 993.536 167.535C939.492 114.42 875.333 72.2866 804.722 43.5409C734.11 14.7952 658.429 -3.28343e-06 582 5.86198e-13C505.571 3.28343e-06 429.89 14.7952 359.278 43.5409C288.667 72.2866 224.508 114.42 170.464 167.535C116.42 220.65 73.5503 283.707 44.3021 353.105C15.0539 422.503 -6.68166e-06 496.884 2.31282e-12 572L582 572L1164 572Z",
            fill: "rgba(209,150,150,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="572px"
        left="1334px"
        transformOrigin="top left"
        transform="rotate(-180deg)"
        {...getOverrideProps(overrides, "Ellipse 11")}
      ></Icon>
    </View>
  );
}
