/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { UserRolesReference, Users } from "../models";
import { schema } from "../models/schema";
import { Icon, Text, TextAreaField, View } from "@aws-amplify/ui-react";
export default function Signup(props) {
  const { logins, overrides, ...rest } = props;
  const [
    textAreaFieldThreeFiveThreeSevenTwoFiveSevenOneValue,
    setTextAreaFieldThreeFiveThreeSevenTwoFiveSevenOneValue,
  ] = useStateMutationAction("");
  const [
    textAreaFieldThreeFiveThreeSevenTwoFiveSixThreeValue,
    setTextAreaFieldThreeFiveThreeSevenTwoFiveSixThreeValue,
  ] = useStateMutationAction("");
  const signinBoxOnClick = useDataStoreCreateAction({
    fields: {
      firstName: textAreaFieldThreeFiveThreeSevenTwoFiveSevenOneValue,
      lastName: textAreaFieldThreeFiveThreeSevenTwoFiveSevenOneValue,
      userName: textAreaFieldThreeFiveThreeSevenTwoFiveSevenOneValue,
      userEmail: textAreaFieldThreeFiveThreeSevenTwoFiveSixThreeValue,
    },
    model: Users,
    schema: schema,
  });
  const sIGNUPOnClick = useDataStoreCreateAction({
    fields: {},
    model: UserRolesReference,
    schema: schema,
  });
  return (
    <View
      width="1388px"
      height="1019px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(226,226,226,1)"
      {...rest}
      {...getOverrideProps(overrides, "Signup")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="485px"
        height="814px"
        position="absolute"
        top="85px"
        left="477px"
        {...getOverrideProps(overrides, "Background")}
      >
        <View
          width="485px"
          height="814px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(191,64,64,1)"
          {...getOverrideProps(overrides, "Rectangle 119035162562")}
        ></View>
        <Icon
          width="420px"
          height="740px"
          viewBox={{ minX: 0, minY: 0, width: 420, height: 740 }}
          paths={[
            {
              d: "M0 0L420 0L420 740L0 740L0 0Z",
              fill: "rgba(245,188,188,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="37px"
          left="33px"
          {...getOverrideProps(overrides, "Rectangle 118835162564")}
        ></Icon>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="48px"
        height="68.79px"
        position="absolute"
        top="133px"
        left="532px"
        {...getOverrideProps(overrides, "Logo35372561")}
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
          {...getOverrideProps(overrides, "Rectangle 118835162568")}
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
          {...getOverrideProps(overrides, "Rectangle 118935162569")}
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
          {...getOverrideProps(overrides, "Rectangle 119035162570")}
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
          {...getOverrideProps(overrides, "J35162571")}
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
          {...getOverrideProps(overrides, "J35162572")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="48px"
        height="68.79px"
        position="absolute"
        top="139px"
        left="855px"
        {...getOverrideProps(overrides, "Logo35372562")}
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
          {...getOverrideProps(overrides, "J35172590")}
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
          {...getOverrideProps(overrides, "J35172591")}
        ></Text>
      </View>
      <Text
        fontFamily="Marcellus SC"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        letterSpacing="2.25px"
        width="422px"
        height="48px"
        position="absolute"
        top="149px"
        left="509px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Jack of All Trades"
        {...getOverrideProps(overrides, "Jack of All Trades")}
      ></Text>
      <View
        width="267px"
        height="1px"
        position="absolute"
        top="397px"
        left="579px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 118935162575")}
      ></View>
      <View
        width="267px"
        height="1px"
        position="absolute"
        top="490px"
        left="579px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 1197")}
      ></View>
      <Text
        fontFamily="Kameron"
        fontSize="32px"
        fontWeight="400"
        color="rgba(77,0,0,1)"
        lineHeight="48px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="220px"
        left="658px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="SIGN UP"
        {...getOverrideProps(overrides, "SIGN UP (Signup page)")}
      ></Text>
      <Text
        fontFamily="Kameron"
        fontSize="16px"
        fontWeight="400"
        color="rgba(104,112,120,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="268px"
        left="658px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create an acount"
        {...getOverrideProps(overrides, "Create an acount")}
      ></Text>
      <View
        width="285px"
        height="197px"
        position="absolute"
        top="654px"
        left="577px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "undraw_playing_cards_cywn 1")}
      >
        <Icon
          width="124.705078125px"
          height="196.6328125px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 124.705078125,
            height: 196.6328125,
          }}
          paths={[
            {
              d: "M68.7605 196.633C67.3435 196.632 65.9333 196.441 64.5691 196.064L7.93289 181.165L8.09909 180.579L64.7359 195.478C66.0458 195.84 67.3999 196.024 68.7605 196.025C75.4257 196.025 81.3372 192.229 83.1362 185.923L123.453 44.6158L123.452 44.6158L123.54 44.3083C124.599 40.564 124.105 36.5599 122.166 33.173C120.227 29.7862 117.002 27.2927 113.196 26.2387L22.159 1.14883C18.3478 0.103515 14.2705 0.586431 10.8211 2.49166C7.3718 4.3969 4.83207 7.56891 3.75899 11.312L0.595926 22.4008L0 22.2366L3.16306 11.1478C4.28048 7.24935 6.92551 3.94568 10.5179 1.96141C14.1104 -0.0228618 18.3569 -0.525715 22.3261 0.563145L113.363 25.653C117.278 26.737 120.605 29.2843 122.633 32.7495C124.661 36.2148 125.228 40.3226 124.213 44.1936L124.215 44.1944L124.132 44.4872L83.7321 186.087C81.8585 192.655 75.7019 196.633 68.7605 196.633Z",
              fill: "rgba(47,46,65,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="0%"
          bottom="0.18%"
          left="54.9%"
          right="1.35%"
          {...getOverrideProps(overrides, "Vector35262562")}
        ></Icon>
        <Icon
          width="15.6552734375px"
          height="18.4794921875px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 15.6552734375,
            height: 18.4794921875,
          }}
          paths={[
            {
              d: "M0.445603 15.6721L1.48224 15.958L4.67263 16.837L5.00684 15.663L3.81238 15.3345L4.86139 11.6575L7.38338 9.50426L8.05488 16.5055L6.1982 15.9915L5.86399 17.1654L10.6295 18.4793L10.9637 17.3053L9.95178 17.0286L8.98012 8.14173L13.9313 3.91119L15.3207 4.2944L15.6549 3.12044L10.8863 1.80657L10.5521 2.98053L12.1241 3.41241L5.82686 8.27555L7.57214 2.15937L8.7666 2.48783L9.10081 1.31387L4.33225 0L3.99804 1.17397L5.78663 1.66667L2.02687 14.8418L0.238261 14.3491L0.191855 14.5073L0 15.1886L0.445603 15.6721Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="5.02%"
          bottom="85.6%"
          left="56.19%"
          right="38.32%"
          {...getOverrideProps(overrides, "Vector35262563")}
        ></Icon>
        <Icon
          width="4.6787109375px"
          height="8.43359375px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 4.6787109375,
            height: 8.43359375,
          }}
          paths={[
            {
              d: "M4.67883 6.3747C3.48807 6.88157 2.32596 7.45113 1.19756 8.0809C0.990226 8.19647 0.782897 8.31509 0.578663 8.4337L0.578663 4.67153C0.580211 3.31814 0.385363 1.97146 0 0.672143C0.179479 0.562654 0.362052 0.444041 0.541531 0.325428C0.705537 0.21898 0.872631 0.109489 1.03664 0C2.05502 2.22731 3.27394 4.3607 4.67883 6.3747L4.67883 6.3747Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="15.38%"
          bottom="80.34%"
          left="57.4%"
          right="40.96%"
          {...getOverrideProps(overrides, "Vector35262564")}
        ></Icon>
        <Icon
          width="15.7509765625px"
          height="18.4765625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 15.7509765625,
            height: 18.4765625,
          }}
          paths={[
            {
              d: "M1.72207 14.5675L0.334207 14.1849L0 15.3562L4.76733 16.67L5.10154 15.4988L3.53142 15.066L9.82679 10.201L8.08088 16.32L6.8892 15.9915L6.55501 17.1627L11.3223 18.4766L11.6565 17.3054L9.86857 16.8127L13.6283 3.63475L15.4163 4.12745L15.7505 2.95621L10.9832 1.64234L10.649 2.81358L11.8407 3.14205L10.7913 6.82027L8.27059 8.97354L7.60062 1.97354L9.457 2.4851L9.7912 1.31387L5.02418 0L4.68997 1.17123L5.70279 1.45044L6.67508 10.3364L1.72207 14.5675Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="87.06%"
          bottom="3.56%"
          left="78.33%"
          right="16.14%"
          {...getOverrideProps(overrides, "Vector35262565")}
        ></Icon>
        <Icon
          width="9.9755859375px"
          height="9.87109375px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 9.9755859375,
            height: 9.87109375,
          }}
          paths={[
            {
              d: "M0 3.49701C2.23113 2.55639 4.35359 1.38406 6.33116 0C7.39065 2.20708 8.60868 4.33723 9.97602 6.37428C7.75935 7.34346 5.63973 8.51423 3.64485 9.87129C2.62487 7.64438 1.4051 5.51119 0 3.49701L0 3.49701Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="81.08%"
          bottom="13.91%"
          left="80.98%"
          right="15.52%"
          {...getOverrideProps(overrides, "Vector35262566")}
        ></Icon>
        <Icon
          width="18.3046875px"
          height="22.7626953125px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 18.3046875,
            height: 22.7626953125,
          }}
          paths={[
            {
              d: "M2.07069 0C2.07069 0 0.505346 9.99221 0.0402913 10.4958C-0.424763 10.9993 3.2895 22.7625 3.2895 22.7625L15.1997 15.9372C15.1997 15.9372 17.517 3.30943 18.28 2.88799C19.043 2.46654 2.07069 0 2.07069 0Z",
              fill: "rgba(255,184,184,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="50.71%"
          bottom="37.74%"
          left="65.6%"
          right="27.97%"
          {...getOverrideProps(overrides, "Vector35262567")}
        ></Icon>
        <Icon
          width="18.3046875px"
          height="22.7626953125px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 18.3046875,
            height: 22.7626953125,
          }}
          paths={[
            {
              d: "M2.07069 0C2.07069 0 0.505346 9.99221 0.0402913 10.4958C-0.424763 10.9993 3.2895 22.7625 3.2895 22.7625L15.1997 15.9372C15.1997 15.9372 17.517 3.30943 18.28 2.88799C19.043 2.46654 2.07069 0 2.07069 0Z",
              fill: "rgba(0,0,0,0.1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="50.71%"
          bottom="37.74%"
          left="65.6%"
          right="27.97%"
          {...getOverrideProps(overrides, "Vector35262568")}
        ></Icon>
        <Icon
          width="23.517578125px"
          height="23.1142578125px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 23.517578125,
            height: 23.1142578125,
          }}
          paths={[
            {
              d: "M11.759 23.1144C18.2533 23.1144 23.5179 17.94 23.5179 11.5572C23.5179 5.17432 18.2533 0 11.759 0C5.26466 0 0 5.17432 0 11.5572C0 17.94 5.26466 23.1144 11.759 23.1144Z",
              fill: "rgba(255,184,184,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="43.89%"
          bottom="44.38%"
          left="65.44%"
          right="26.31%"
          {...getOverrideProps(overrides, "Vector35262569")}
        ></Icon>
        <Icon
          width="36.1767578125px"
          height="52.23046875px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 36.1767578125,
            height: 52.23046875,
          }}
          paths={[
            {
              d: "M21.0645 7.38388L20.0398 6.46974L15.4337 0.0268464C15.4337 0.0268464 14.9051 -0.315121 14.4038 1.44192L13.9025 3.19897L9.57514 4.84913L0 45.1682L25.624 52.2302L36.1766 11.8647L31.2201 6.70826L30.6713 4.22057L23.0193 7.29091L21.0645 7.38388Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="55.07%"
          bottom="18.41%"
          left="60.38%"
          right="26.92%"
          {...getOverrideProps(overrides, "Vector35262570")}
        ></Icon>
        <Icon
          width="53.8681640625px"
          height="60.513671875px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 53.8681640625,
            height: 60.513671875,
          }}
          paths={[
            {
              d: "M0 49.3461L0.618892 49.5164L40.5251 60.514L53.8684 17.1289C53.8684 17.1289 50.7121 14.6776 48.2427 14.3127C48.2427 14.3127 44.0961 9.69586 42.3106 9.20316C40.522 8.71045 38.5446 4.37652 38.5446 4.37652C38.5446 4.37652 36.4559 11.6971 32.8663 16.3929C29.2767 21.0888 23.0259 37.3722 23.0259 37.3722L21.2621 7.50912L23.2425 0C22.091 0.670447 21.0428 1.49895 20.1295 2.46046C18.7339 3.96898 15.1722 5.19769 15.1722 5.19769C15.1722 5.19769 5.78973 7.66728 4.1311 7.84368C2.47556 8.01703 1.71125 8.43978 1.71125 8.43978L0.618892 15.8273L0 20.0122L0 49.3461Z",
              fill: "rgba(47,46,65,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="55.05%"
          bottom="14.23%"
          left="57.6%"
          right="23.5%"
          {...getOverrideProps(overrides, "Vector35262571")}
        ></Icon>
        <Icon
          width="5.478515625px"
          height="37.755859375px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 5.478515625,
            height: 37.755859375,
          }}
          paths={[
            {
              d: "M5.44625 24.0876C5.07491 26.5115 1.25635 36.5146 1.25635 36.5146L0.618893 37.1441L0 37.7555L0 0.708643C0.172359 0.524938 0.383622 0.380626 0.618893 0.285889C0.968414 0.143163 1.33579 0.0470139 1.71125 0L2.9057 0.328472C2.9057 0.328472 5.81758 21.6606 5.44625 24.0876Z",
              fill: "rgba(47,46,65,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="59.33%"
          bottom="21.5%"
          left="57.6%"
          right="40.48%"
          {...getOverrideProps(overrides, "Vector35262572")}
        ></Icon>
        <Icon
          width="11.7451171875px"
          height="9.7548828125px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 11.7451171875,
            height: 9.7548828125,
          }}
          paths={[
            {
              d: "M0 8.28775C0 8.28775 5.8565 -2.10116 10.2896 0.38407C14.7226 2.8693 7.61594 9.75497 7.61594 9.75497L0 8.28775Z",
              fill: "rgba(255,184,184,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="73.88%"
          bottom="21.17%"
          left="69.05%"
          right="26.83%"
          {...getOverrideProps(overrides, "Vector35262573")}
        ></Icon>
        <Icon
          width="14.0859375px"
          height="10.421875px"
          viewBox={{ minX: 0, minY: 0, width: 14.0859375, height: 10.421875 }}
          paths={[
            {
              d: "M14.0857 2.67928C14.0857 2.67928 2.84701 -0.73398 2.59636 0.144542C2.34571 1.02306 -0.731518 6.17644 0.162342 6.42279C1.0562 6.66914 7.99268 8.26499 7.90913 8.55783C7.82558 8.85067 11.2339 10.4218 11.2339 10.4218L14.0857 2.67928Z",
              fill: "rgba(255,184,184,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="74.67%"
          bottom="20.04%"
          left="57.75%"
          right="37.31%"
          {...getOverrideProps(overrides, "Vector35262574")}
        ></Icon>
        <Icon
          width="16.58203125px"
          height="9.998046875px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 16.58203125,
            height: 9.998046875,
          }}
          paths={[
            {
              d: "M16.5817 4.02555L9.42882 4.30201L7.93916 3.89143L1.97519 0L0 5.80962L7.52139 5.35554L9.01107 5.76612L15.1957 9.99757L16.5817 4.02555Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="57.32%"
          bottom="37.61%"
          left="64.56%"
          right="29.62%"
          {...getOverrideProps(overrides, "Vector35262575")}
        ></Icon>
        <Icon
          width="17.189453125px"
          height="10.0185546875px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 17.189453125,
            height: 10.0185546875,
          }}
          paths={[
            {
              d: "M17.1897 7.71899L16.0912 10.0183L0.309446 5.76035L0 4.8753L0 0L0.618892 0.237226L1.25635 0.483576L17.1897 7.71899Z",
              fill: "rgba(47,46,65,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="77.62%"
          bottom="17.29%"
          left="57.6%"
          right="36.37%"
          {...getOverrideProps(overrides, "Vector35262576")}
        ></Icon>
        <Icon
          width="7.83984375px"
          height="11.515625px"
          viewBox={{ minX: 0, minY: 0, width: 7.83984375, height: 11.515625 }}
          paths={[
            {
              d: "M7.83961 1.39512C7.83961 1.39512 4.13332 -0.258071 4.04977 0.0347699C3.96621 0.327611 -1.00746 8.74873 0.18435 9.0772C1.37616 9.40567 5.59481 11.5159 5.59481 11.5159L7.83961 1.39512Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="75.78%"
          bottom="18.37%"
          left="61.09%"
          right="36.16%"
          {...getOverrideProps(overrides, "Vector35262577")}
        ></Icon>
        <Icon
          width="41.990234375px"
          height="45.6181640625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 41.990234375,
            height: 45.6181640625,
          }}
          paths={[
            {
              d: "M37.4656 0.0211595L39.5513 0.595981C39.5513 0.595981 40.7431 0.924447 40.8377 2.84572C40.9323 4.767 42.5499 13.7412 41.7868 14.1627C41.0238 14.5841 40.8094 14.2092 41.2383 14.9591C41.6671 15.709 42.0486 15.4983 41.5835 16.0018C41.1185 16.5054 40.0513 32.6364 36.5926 38.0005C33.1339 43.3646 32.084 45.9181 30.8921 45.5896L0 37.0757C0 37.0757 1.37572 25.136 2.65109 25.1716C3.92645 25.2072 24.8194 29.7019 24.8194 29.7019C24.8194 29.7019 32.9128 -0.917746 37.4656 0.0211595Z",
              fill: "rgba(47,46,65,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="63.44%"
          bottom="13.4%"
          left="62.62%"
          right="22.64%"
          {...getOverrideProps(overrides, "Vector35262578")}
        ></Icon>
        <Icon
          width="30.798828125px"
          height="24.28125px"
          viewBox={{ minX: 0, minY: 0, width: 30.798828125, height: 24.28125 }}
          paths={[
            {
              d: "M7.19183 4.6475L5.26259 3.28762C5.26259 3.28762 11.0141 0.110793 17.1542 2.21712L15.8893 0.00514242C15.8893 0.00514242 20.624 -0.346282 23.38 4.76112C24.8287 7.44597 26.4938 10.5914 27.1742 13.8054L29.4749 14.4394L27.9762 16.0623L30.7985 18.876L27.4457 17.5863C27.3075 19.3059 26.7143 20.9601 25.7247 22.3847L24.3411 24.2808C24.3411 24.2808 22.9688 17.2773 23.1878 16.5095L22.6402 18.429C22.6402 18.429 20.9848 16.1094 21.3134 14.9577L19.7582 15.9784L19.7747 13.7055L11.9462 13.8254L13.6109 12.4208L8.95473 11.7587L11.3149 10.1317C11.3149 10.1317 5.52516 11.2275 4.7274 13.2852C3.92972 15.3427 0.624162 17.3303 0.624162 17.3303L0 15.0879C0 15.0879 0.706687 5.96578 7.19183 4.6475Z",
              fill: "rgba(47,46,65,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="40.96%"
          bottom="46.71%"
          left="64.61%"
          right="24.59%"
          {...getOverrideProps(overrides, "Vector35262579")}
        ></Icon>
        <Icon
          width="34.7529296875px"
          height="19.8701171875px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 34.7529296875,
            height: 19.8701171875,
          }}
          paths={[
            {
              d: "M6.08384 19.8703L6.17582 19.4764C7.07002 15.6503 0.191641 8.53496 0.122124 8.46351L0 8.33824L0.0476899 8.17109C0.183784 7.69408 0.729595 7.27046 5.51228 8.28936C7.37444 8.68614 9.23146 9.16971 10.0089 9.37703C9.92207 7.19246 7.1667 4.29804 7.1373 4.26742L6.79069 3.90646L7.27529 3.76672C10.4519 2.85157 14.1699 5.88681 15.3581 6.96154L17.3443 0L21.2747 5.70572C23.6874 2.15568 27.1775 2.29951 27.3301 2.30777L27.82 2.33407L27.5847 2.75736C25.9313 5.7304 25.6333 7.68323 25.6162 8.646C30.0152 3.50944 33.9796 3.95685 34.1521 3.97925L34.7528 4.05721L34.3363 4.48978C28.5773 10.4706 27.8992 18.3602 27.8929 18.4392L27.8722 18.7051L6.08384 19.8703ZM0.807518 8.29306C2.02364 9.58847 7.2824 15.4345 6.84678 19.2202L27.3043 18.1264C27.4729 16.719 28.5104 10.0217 33.4019 4.59225C32.0688 4.7093 28.9242 5.45607 25.6115 9.61701L25.2318 10.0938L25.0693 9.50984C25.0438 9.41782 24.49 7.27883 26.7876 2.93359C25.7343 3.0315 23.282 3.57346 21.5489 6.41719L21.2993 6.82653L17.5798 1.42711L15.6708 8.11811L15.2964 7.74519C15.2546 7.70359 11.264 3.77654 7.94595 4.24476C8.79771 5.21952 10.8356 7.78679 10.6124 9.80509L10.573 10.1621L10.2212 10.0651C6.31344 8.98814 1.85016 8.06913 0.807518 8.29306Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="35.35%"
          bottom="54.57%"
          left="63.58%"
          right="24.23%"
          {...getOverrideProps(overrides, "Vector35262580")}
        ></Icon>
        <Icon
          width="2.2197265625px"
          height="2.181640625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 2.2197265625,
            height: 2.181640625,
          }}
          paths={[
            {
              d: "M0.810254 2.1413C0.598879 2.08305 0.409827 1.9645 0.267005 1.80065C0.124183 1.63679 0.0340214 1.43498 0.0078924 1.22076C-0.0182366 1.00653 0.020843 0.789495 0.120214 0.597104C0.219585 0.404713 0.37478 0.245605 0.566157 0.139897C0.757534 0.0341901 0.976504 -0.01337 1.19538 0.00323652C1.41426 0.019843 1.6232 0.0998722 1.7958 0.233195C1.9684 0.366518 2.09691 0.547152 2.16506 0.752254C2.23321 0.957355 2.23795 1.17771 2.17868 1.38546C2.09893 1.66386 1.91005 1.89981 1.65351 2.04151C1.39696 2.18321 1.09369 2.2191 0.810254 2.1413L0.810254 2.1413ZM1.24254 0.626202C1.14903 0.600428 1.04982 0.602489 0.957498 0.632123C0.865174 0.661757 0.78386 0.717632 0.723846 0.792684C0.663832 0.867736 0.62782 0.95859 0.620344 1.05376C0.612869 1.14894 0.634277 1.24415 0.68186 1.32736C0.729443 1.41058 0.801069 1.47806 0.887672 1.52127C0.974276 1.56448 1.07196 1.58148 1.16839 1.57012C1.26482 1.55876 1.35567 1.51955 1.42943 1.45744C1.50319 1.39534 1.55655 1.31313 1.58277 1.22122C1.61778 1.09797 1.60163 0.966113 1.53784 0.854564C1.47406 0.743014 1.36786 0.660893 1.24254 0.626202L1.24254 0.626202Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="35.47%"
          bottom="63.43%"
          left="75.82%"
          right="23.4%"
          {...getOverrideProps(overrides, "Vector35262581")}
        ></Icon>
        <Icon
          width="2.2197265625px"
          height="2.181640625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 2.2197265625,
            height: 2.181640625,
          }}
          paths={[
            {
              d: "M0.810273 2.1413C0.598897 2.08305 0.409847 1.9645 0.267024 1.80065C0.124201 1.63679 0.0340223 1.43498 0.00789265 1.22076C-0.018237 1.00653 0.0208433 0.789496 0.120214 0.597104C0.219585 0.404712 0.37478 0.245605 0.566158 0.139897C0.757535 0.0341894 0.976503 -0.0133698 1.19538 0.00323649C1.41426 0.0198428 1.62322 0.0998625 1.79582 0.233186C1.96842 0.366509 2.09693 0.547142 2.16508 0.752244C2.23323 0.957346 2.23797 1.17771 2.1787 1.38546C2.09894 1.66386 1.91007 1.89981 1.65353 2.04151C1.39698 2.18321 1.09371 2.2191 0.810273 2.1413L0.810273 2.1413ZM1.24254 0.626201C1.14903 0.600428 1.04984 0.60249 0.957517 0.632123C0.865192 0.661757 0.78388 0.717631 0.723865 0.792684C0.66385 0.867736 0.62782 0.958589 0.620345 1.05376C0.612869 1.14894 0.634277 1.24416 0.68186 1.32737C0.729443 1.41059 0.801069 1.47806 0.887673 1.52127C0.974276 1.56448 1.07198 1.58148 1.16841 1.57012C1.26484 1.55876 1.35567 1.51955 1.42943 1.45744C1.50319 1.39534 1.55657 1.31314 1.58279 1.22123C1.6178 1.09798 1.60163 0.966123 1.53784 0.854573C1.47406 0.743023 1.36786 0.660892 1.24254 0.626201L1.24254 0.626201Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="34.39%"
          bottom="64.5%"
          left="73.11%"
          right="26.11%"
          {...getOverrideProps(overrides, "Vector35262582")}
        ></Icon>
        <Icon
          width="2.2197265625px"
          height="2.181640625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 2.2197265625,
            height: 2.181640625,
          }}
          paths={[
            {
              d: "M0.810271 2.1413C0.598896 2.08305 0.409843 1.9645 0.267021 1.80065C0.124199 1.63679 0.0340194 1.43498 0.0078904 1.22076C-0.0182386 1.00653 0.0208599 0.789495 0.120231 0.597104C0.219602 0.404713 0.374778 0.245605 0.566155 0.139897C0.757532 0.0341901 0.976502 -0.01337 1.19538 0.00323652C1.41426 0.019843 1.62322 0.0998722 1.79582 0.233195C1.96842 0.366518 2.09691 0.547152 2.16506 0.752254C2.23321 0.957355 2.23795 1.17771 2.17868 1.38546C2.09892 1.66386 1.91005 1.89981 1.6535 2.04151C1.39696 2.18321 1.09371 2.2191 0.810271 2.1413ZM1.24254 0.626202C1.14902 0.600429 1.04984 0.60249 0.957515 0.632123C0.86519 0.661757 0.783877 0.717632 0.723863 0.792684C0.663849 0.867736 0.627818 0.95859 0.620342 1.05376C0.612867 1.14894 0.634274 1.24416 0.681858 1.32737C0.729441 1.41059 0.801067 1.47806 0.88767 1.52127C0.974274 1.56448 1.07198 1.58148 1.16841 1.57012C1.26484 1.55876 1.35567 1.51955 1.42943 1.45744C1.50319 1.39534 1.55655 1.31313 1.58277 1.22122C1.61778 1.09797 1.60162 0.966113 1.53784 0.854564C1.47406 0.743014 1.36786 0.660893 1.24254 0.626202L1.24254 0.626202Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="33.79%"
          bottom="65.11%"
          left="69%"
          right="30.22%"
          {...getOverrideProps(overrides, "Vector35262583")}
        ></Icon>
        <Icon
          width="2.2197265625px"
          height="2.181640625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 2.2197265625,
            height: 2.181640625,
          }}
          paths={[
            {
              d: "M0.810271 2.1413C0.598896 2.08305 0.409843 1.9645 0.267021 1.80065C0.124199 1.63679 0.0340194 1.43498 0.0078904 1.22076C-0.0182386 1.00653 0.0208599 0.789495 0.120231 0.597104C0.219602 0.404713 0.374797 0.245605 0.566174 0.139897C0.757551 0.0341901 0.976521 -0.01337 1.1954 0.00323652C1.41428 0.019843 1.62322 0.0998722 1.79582 0.233195C1.96842 0.366518 2.09693 0.547152 2.16508 0.752254C2.23323 0.957355 2.23797 1.17771 2.1787 1.38546C2.09894 1.66386 1.91007 1.89981 1.65352 2.04151C1.39698 2.18321 1.09371 2.2191 0.810271 2.1413L0.810271 2.1413ZM1.24254 0.626202C1.14902 0.600428 1.04984 0.602489 0.957515 0.632123C0.86519 0.661757 0.783877 0.717632 0.723863 0.792684C0.663849 0.867736 0.627836 0.95859 0.620361 1.05376C0.612886 1.14894 0.634293 1.24416 0.681877 1.32737C0.72946 1.41059 0.801067 1.47806 0.88767 1.52127C0.974274 1.56448 1.07198 1.58148 1.16841 1.57012C1.26484 1.55876 1.35569 1.51955 1.42945 1.45744C1.50321 1.39534 1.55657 1.31314 1.58279 1.22123C1.6178 1.09798 1.60162 0.966122 1.53784 0.854573C1.47406 0.743024 1.36786 0.660893 1.24254 0.626202L1.24254 0.626202Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="38.22%"
          bottom="60.67%"
          left="62.44%"
          right="36.78%"
          {...getOverrideProps(overrides, "Vector35262584")}
        ></Icon>
        <Icon
          width="2.2197265625px"
          height="2.181640625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 2.2197265625,
            height: 2.181640625,
          }}
          paths={[
            {
              d: "M0.810271 2.14131C0.598895 2.08305 0.409844 1.96449 0.267021 1.80064C0.124199 1.63678 0.0340194 1.43499 0.00789044 1.22076C-0.0182386 1.00653 0.0208594 0.789496 0.120231 0.597105C0.219602 0.404713 0.374797 0.245596 0.566174 0.139889C0.757552 0.0341812 0.97652 -0.0133698 1.1954 0.00323705C1.41428 0.0198439 1.62323 0.0998627 1.79584 0.233186C1.96844 0.36651 2.09693 0.547143 2.16508 0.752245C2.23323 0.957347 2.23797 1.17771 2.1787 1.38546C2.09891 1.66385 1.91004 1.89977 1.6535 2.04146C1.39697 2.18316 1.09371 2.21907 0.810271 2.14131L0.810271 2.14131ZM1.24256 0.626193C1.14904 0.600419 1.04984 0.602481 0.957515 0.632114C0.86519 0.661748 0.783877 0.717623 0.723863 0.792675C0.663848 0.867728 0.627837 0.95859 0.620361 1.05376C0.612886 1.14894 0.634293 1.24415 0.681877 1.32736C0.72946 1.41058 0.801067 1.47806 0.887671 1.52127C0.974274 1.56448 1.07197 1.58148 1.16841 1.57012C1.26484 1.55876 1.35569 1.51955 1.42945 1.45744C1.50321 1.39534 1.55657 1.31313 1.58279 1.22122C1.61779 1.09797 1.60162 0.966121 1.53784 0.854574C1.47406 0.743026 1.36787 0.660892 1.24256 0.626193Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="35.71%"
          bottom="63.19%"
          left="64.98%"
          right="34.24%"
          {...getOverrideProps(overrides, "Vector35262585")}
        ></Icon>
        <Icon
          width="95.6416015625px"
          height="152.59765625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 95.6416015625,
            height: 152.59765625,
          }}
          paths={[
            {
              d: "M58.6286 152.598L58.3309 152.516L0 136.439L0.166792 135.854L58.2 151.848L94.879 23.2908L13.0905 0.749999L0.615795 44.4741L0.0197937 44.3099L12.6622 0L12.9596 0.0821158L95.6418 22.8695L95.5582 23.1621L58.6286 152.598Z",
              fill: "rgba(47,46,65,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="11.33%"
          bottom="11.21%"
          left="57.63%"
          right="8.81%"
          {...getOverrideProps(overrides, "Vector35262586")}
        ></Icon>
        <Icon
          width="14.892578125px"
          height="25.3857421875px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.892578125,
            height: 25.3857421875,
          }}
          paths={[
            {
              d: "M2.40171 15.3663C6.24764 22.3764 14.4101 25.3856 14.4101 25.3856C14.4101 25.3856 16.337 17.0294 12.4911 10.0193C8.64518 3.00927 0.482737 0 0.482737 0C0.482737 0 -1.44422 8.35627 2.40171 15.3663Z",
              fill: "rgba(47,46,65,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="86.97%"
          bottom="0.15%"
          left="3.68%"
          right="91.1%"
          {...getOverrideProps(overrides, "Vector35262587")}
        ></Icon>
        <Icon
          width="25.14453125px"
          height="15.4013671875px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 25.14453125,
            height: 15.4013671875,
          }}
          paths={[
            {
              d: "M15.5269 2.8741C22.4704 6.97985 25.1446 15.135 25.1446 15.135C25.1446 15.135 16.5611 16.6334 9.61764 12.5277C2.67416 8.42192 0 0.266763 0 0.266763C0 0.266763 8.58345 -1.23166 15.5269 2.8741Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="92.14%"
          bottom="0.04%"
          left="0%"
          right="91.18%"
          {...getOverrideProps(overrides, "Vector35262588")}
        ></Icon>
        <Icon
          width="125.0166015625px"
          height="177.0068359375px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 125.0166015625,
            height: 177.0068359375,
          }}
          paths={[
            {
              d: "M124.36 10.6265C123.828 8.90263 122.982 7.28791 121.863 5.86071C121.465 5.3507 121.034 4.86614 120.573 4.40998C119.159 3.01139 117.478 1.90165 115.626 1.14476C113.774 0.387871 111.788 -0.00119375 109.782 2.75133e-06L15.234 2.75133e-06C11.195 0.00402846 7.32252 1.58279 4.46647 4.38983C1.61042 7.19687 0.004096 11.0029 0 14.9726L0 162.035C0.004096 166.004 1.61042 169.81 4.46647 172.617C7.32252 175.424 11.195 177.003 15.234 177.007L109.782 177.007C113.821 177.003 117.694 175.424 120.55 172.617C123.406 169.81 125.012 166.004 125.016 162.035L125.016 14.9726C125.018 13.5 124.797 12.0353 124.36 10.6265L124.36 10.6265ZM124.397 162.035C124.393 165.843 122.851 169.494 120.112 172.187C117.372 174.88 113.657 176.394 109.782 176.399L15.234 176.399C11.3593 176.394 7.64459 174.88 4.90473 172.187C2.16486 169.494 0.62356 165.843 0.618893 162.035L0.618893 14.9726C0.62356 11.1644 2.16486 7.51341 4.90473 4.82056C7.64459 2.12772 11.3593 0.612863 15.234 0.608275L109.782 0.608275C111.766 0.6074 113.73 1.00454 115.552 1.77538C117.374 2.54622 119.018 3.67454 120.381 5.09125C120.532 5.2494 120.681 5.41059 120.826 5.57482C123.13 8.18227 124.398 11.5195 124.397 14.9726L124.397 162.035Z",
              fill: "rgba(47,46,65,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="10.15%"
          bottom="0%"
          left="13.95%"
          right="42.18%"
          {...getOverrideProps(overrides, "Vector35262589")}
        ></Icon>
        <Icon
          width="16.939453125px"
          height="16.1513671875px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 16.939453125,
            height: 16.1513671875,
          }}
          paths={[
            {
              d: "M13.6107 12.4606C13.5935 12.421 13.5723 12.3849 13.5534 12.3468C14.2514 11.0045 14.6036 9.51452 14.5791 8.00737C14.5791 3.29278 11.5815 0 7.28957 0C2.99768 0 0 3.29278 0 8.00737C0 12.722 2.99768 16.0147 7.28957 16.0147C8.30264 16.0349 9.30772 15.8347 10.2329 15.4287C11.1582 15.0226 11.9807 14.4206 12.6416 13.6658C14.0159 15.8514 16.6725 16.1397 16.7949 16.1518L16.9398 14.7541C16.8398 14.7435 14.4814 14.4723 13.6107 12.4606ZM7.28957 14.6099C3.83908 14.6099 1.42933 11.8948 1.42933 8.00737C1.42933 4.11988 3.83908 1.4048 7.28957 1.4048C10.7401 1.4048 13.1498 4.11988 13.1498 8.00737C13.1638 9.11567 12.9414 10.2146 12.4969 11.2332C10.3635 9.95932 6.39439 10.7205 5.85606 10.8321L6.15003 12.2068C7.60795 11.9068 10.5084 11.6661 11.7709 12.4446C11.2526 13.1294 10.5758 13.683 9.79648 14.0595C9.01717 14.436 8.15782 14.6247 7.28957 14.6099L7.28957 14.6099Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="15.82%"
          bottom="75.98%"
          left="14.47%"
          right="79.59%"
          {...getOverrideProps(overrides, "Vector35262590")}
        ></Icon>
        <Icon
          width="8.4619140625px"
          height="7.6064453125px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 8.4619140625,
            height: 7.6064453125,
          }}
          paths={[
            {
              d: "M4.23216 0.712662C3.76699 0.256107 3.1364 -0.000226544 2.479 1.50233e-07C1.8216 0.000226844 1.19118 0.257002 0.726332 0.713878C0.26148 1.17075 0.000230224 1.79034 1.52089e-07 2.43646C-0.00022992 3.08258 0.260578 3.70235 0.725104 4.15954L4.23216 7.60641L7.73922 4.15953C8.20275 3.70213 8.4627 3.08268 8.46204 2.43711C8.46138 1.79154 8.20016 1.1726 7.7357 0.716114C7.27125 0.259629 6.6415 0.00289265 5.98466 0.00224627C5.32782 0.0015999 4.69755 0.257091 4.23216 0.712662L4.23216 0.712662Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="25.28%"
          bottom="70.85%"
          left="15.72%"
          right="81.31%"
          {...getOverrideProps(overrides, "Vector35262591")}
        ></Icon>
        <Icon
          width="16.939453125px"
          height="16.1513671875px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 16.939453125,
            height: 16.1513671875,
          }}
          paths={[
            {
              d: "M3.32904 3.69116C3.34621 3.73081 3.36745 3.76685 3.38633 3.80499C2.6884 5.14722 2.33621 6.63725 2.36062 8.1444C2.36062 12.859 5.3583 16.1518 9.6502 16.1518C13.9421 16.1518 16.9398 12.859 16.9398 8.1444C16.9398 3.42982 13.9421 0.137051 9.6502 0.137051C8.63712 0.116922 7.63205 0.31704 6.70683 0.723103C5.78161 1.12917 4.95909 1.73114 4.29812 2.48598C2.92387 0.300422 0.267269 0.012056 0.144883 0L0 1.39766C0.0999511 1.40823 2.45832 1.67944 3.32904 3.69116ZM9.6502 1.54182C13.1007 1.54182 15.5104 4.25692 15.5104 8.1444C15.5104 12.0319 13.1007 14.747 9.6502 14.747C6.19971 14.747 3.78996 12.0319 3.78996 8.1444C3.776 7.0361 3.99841 5.9372 4.44289 4.91853C6.57627 6.19245 10.5454 5.43122 11.0837 5.31971L10.7897 3.94495C9.3318 4.24498 6.43137 4.48565 5.16883 3.70714C5.68716 3.02238 6.36399 2.46881 7.14329 2.09227C7.92259 1.71573 8.78194 1.52704 9.6502 1.54184L9.6502 1.54182Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="86.61%"
          bottom="5.19%"
          left="51.36%"
          right="42.7%"
          {...getOverrideProps(overrides, "Vector35262592")}
        ></Icon>
        <Icon
          width="8.4609375px"
          height="7.6044921875px"
          viewBox={{ minX: 0, minY: 0, width: 8.4609375, height: 7.6044921875 }}
          paths={[
            {
              d: "M4.23067 6.89374C4.69599 7.34965 5.32636 7.60545 5.9834 7.60495C6.64043 7.60445 7.27041 7.34771 7.73501 6.89109C8.1996 6.43447 8.46084 5.8153 8.46135 5.16954C8.46186 4.52378 8.2016 3.90422 7.73773 3.44689L4.23067 0L0.723622 3.44689C0.259751 3.90422 -0.000510113 4.52378 7.50656e-07 5.16954C0.000511614 5.8153 0.261748 6.43447 0.726342 6.89109C1.19094 7.34771 1.82092 7.60445 2.47795 7.60495C3.13498 7.60545 3.76536 7.34965 4.23067 6.89374L4.23067 6.89374Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="81.48%"
          bottom="14.66%"
          left="53.08%"
          right="43.96%"
          {...getOverrideProps(overrides, "Vector35262593")}
        ></Icon>
        <Icon
          width="34.935546875px"
          height="32.0419921875px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 34.935546875,
            height: 32.0419921875,
          }}
          paths={[
            {
              d: "M32.5081 7.3487C28.2953 0.352445 19.9605 0.0263911 19.9605 0.0263911C19.9605 0.0263911 11.8387 -0.994388 6.62866 9.66099C1.77248 19.5927 -4.92968 29.1819 5.54967 31.5069L7.44256 25.7165L8.6148 31.9379C10.1069 32.0434 11.6037 32.0686 13.0985 32.0133C24.3211 31.6571 35.0089 32.1174 34.6647 28.1594C34.2073 22.8978 36.5617 14.0805 32.5081 7.3487Z",
              fill: "rgba(47,46,65,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="48.83%"
          bottom="34.91%"
          left="27.15%"
          right="60.59%"
          {...getOverrideProps(overrides, "Vector35262594")}
        ></Icon>
        <Icon
          width="20.2685546875px"
          height="34.0126953125px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 20.2685546875,
            height: 34.0126953125,
          }}
          paths={[
            {
              d: "M5.70789 9.43161C5.72827 10.2191 5.72217 11.0496 5.32402 11.7333C4.53472 13.0886 2.60788 13.2915 1.44887 14.3597C0.230006 15.4831 0.0920431 17.3062 0.0339539 18.9475C-0.026778 20.6634 -0.0783074 22.4357 0.558864 24.0344C0.949108 24.915 1.44242 25.748 2.02884 26.5164C2.73646 27.519 3.45063 28.517 4.17133 29.5105C4.55624 30.0701 4.98518 30.5991 5.45421 31.0928C6.74494 32.385 8.51539 33.1003 10.2831 33.6107C11.4253 33.9404 12.6585 34.1972 13.7917 33.839C14.5415 33.5514 15.2326 33.1338 15.832 32.6059C16.6748 31.9481 17.5306 31.2768 18.1415 30.4059C19.0931 29.0492 19.3565 27.3509 19.5537 25.7145C20.1368 20.8756 20.3637 16.0017 20.2327 11.1307C20.2566 10.6 20.1598 10.0706 19.9494 9.58121C19.3625 8.4549 17.7906 8.21444 16.9623 7.2456C16.2542 6.41726 16.2253 5.23512 16.2314 4.15322L16.2468 1.39896C16.2714 1.1669 16.224 0.932937 16.1106 0.727942C16.0078 0.617536 15.884 0.528141 15.746 0.464886C15.6081 0.401632 15.4588 0.365751 15.3067 0.359318C13.565 0.0752422 11.7992 -0.0408481 10.0346 0.0126728C8.60385 0.0556412 5.85874 -0.062073 4.62165 0.721111C3.49875 1.432 4.90469 3.39543 5.16479 4.49831C5.51449 6.12056 5.69644 7.7734 5.70789 9.43161Z",
              fill: "rgba(160,97,106,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="59.87%"
          bottom="22.86%"
          left="31.1%"
          right="61.78%"
          {...getOverrideProps(overrides, "Vector35262595")}
        ></Icon>
        <Icon
          width="22.6533203125px"
          height="22.2646484375px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 22.6533203125,
            height: 22.2646484375,
          }}
          paths={[
            {
              d: "M11.3268 22.2649C17.5825 22.2649 22.6537 17.2808 22.6537 11.1325C22.6537 4.98418 17.5825 0 11.3268 0C5.07119 0 0 4.98418 0 11.1325C0 17.2808 5.07119 22.2649 11.3268 22.2649Z",
              fill: "rgba(160,97,106,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="50.96%"
          bottom="37.74%"
          left="30.29%"
          right="61.77%"
          {...getOverrideProps(overrides, "Vector35262596")}
        ></Icon>
        <Icon
          width="31.841796875px"
          height="36.48046875px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 31.841796875,
            height: 36.48046875,
          }}
          paths={[
            {
              d: "M10.5236 7.57969C9.80318 6.52715 9.21035 5.39548 8.75716 4.2077C8.3521 3.00454 8.24584 1.65993 8.7264 0.483925C7.50243 -0.214114 5.84061 0.351168 4.94925 1.4314C4.05789 2.51163 3.7851 3.95965 3.70651 5.34832C3.62793 6.737 3.71123 8.14611 3.40375 9.50371C2.72346 12.5073 0.199108 14.9766 0.0113859 18.0481C-0.173295 21.0699 1.935 23.7023 2.97219 26.5527C3.60083 28.3293 3.8636 30.2111 3.74521 32.0884C3.71161 32.6945 3.67289 33.3852 4.108 33.816C4.33435 34.0104 4.60229 34.1522 4.89198 34.2311C9.89688 35.9617 15.3029 36.1114 20.6068 36.2435L29.3671 36.4616C29.8969 36.5237 30.4338 36.4353 30.9141 36.2069C31.7 35.7333 31.8052 34.6717 31.8186 33.7657C31.9336 25.9626 31.5959 18.1608 31.2583 10.364C31.1359 7.53797 31.0115 4.69559 30.4018 1.93124C30.2465 1.22733 29.9919 0.44456 29.3308 0.133882C28.7711 -0.129086 28.1072 0.0411594 27.5253 0.25237C24.81 1.24483 22.4632 3.0204 20.7923 5.34635C18.9948 7.86073 18.1107 10.8769 16.3515 13.4104C15.0749 15.2489 14.3365 13.6466 13.486 12.2927C12.4989 10.7215 11.5114 9.15045 10.5236 7.57969Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="66.76%"
          bottom="14.72%"
          left="28.93%"
          right="59.9%"
          {...getOverrideProps(overrides, "Vector35262597")}
        ></Icon>
        <Icon
          width="20.7685546875px"
          height="48.255859375px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 20.7685546875,
            height: 48.255859375,
          }}
          paths={[
            {
              d: "M17.394 5.02265C17.1712 5.17776 16.9515 5.342 16.741 5.51535C15.9526 6.15493 15.246 6.88613 14.6368 7.69296C13.6284 9.04442 12.8257 10.5331 12.2541 12.1121C11.2267 14.8797 10.7811 17.8177 10.3541 20.7313C10.1677 21.8046 10.0673 22.8907 10.0539 23.9795C10.1189 27.9819 12.5264 31.6893 12.5295 35.6948C12.5295 35.8469 12.5264 35.9959 12.5171 36.1479C12.4884 36.8037 12.4098 37.4563 12.2819 38.1005C12.1055 39.0403 11.8518 39.9679 11.6011 40.8925C10.9699 43.21 10.2891 45.6127 9.0575 47.6473C8.93372 47.8541 8.80065 48.0579 8.66449 48.2556L0 48.2556C0.0680782 48.0518 0.139255 47.8511 0.207333 47.6473C1.68339 43.3499 3.15842 39.0535 4.63243 34.758C5.08422 33.4442 5.53601 32.1242 5.85474 30.7739C6.21933 29.1064 6.46849 27.4166 6.6005 25.7161C6.94089 22.1911 7.16473 18.6591 7.27201 15.12C7.31223 13.8487 7.34009 12.55 7.75784 11.3456C8.14947 10.3642 8.66736 9.43617 9.29887 8.58408C10.1932 7.26107 11.0875 5.93808 11.9818 4.6151C12.48 3.87909 13.003 3.1218 13.7704 2.66255C14.4109 2.2763 15.1722 2.1364 15.8468 1.81098C16.2713 1.57423 16.6786 1.30899 17.066 1.01717C18.0748 0.314612 19.26 -0.424441 20.1295 0.293321C20.2705 0.408338 20.3917 0.544926 20.4885 0.697827C20.538 0.772928 20.5825 0.851165 20.6215 0.932018C21.457 2.70818 18.5173 4.24102 17.394 5.02265Z",
              fill: "rgba(47,46,65,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="64.55%"
          bottom="10.95%"
          left="26.04%"
          right="66.67%"
          {...getOverrideProps(overrides, "Vector35262598")}
        ></Icon>
        <Icon
          width="40.12890625px"
          height="12.1201171875px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 40.12890625,
            height: 12.1201171875,
          }}
          paths={[
            {
              d: "M40.129 12.1202L0 12.1202C0.216612 11.9256 0.43013 11.7218 0.637459 11.512C0.668403 11.4815 0.696247 11.4511 0.727191 11.4207C2.26204 9.85442 2.61172 7.92924 3.38225 5.89151C3.96091 4.35562 4.53957 2.82074 5.11823 1.28688C5.20983 0.988335 5.36017 0.710367 5.56074 0.468756C5.72838 0.29862 5.93862 0.174849 6.17035 0.109878C6.34539 0.0570584 6.52609 0.0243961 6.70879 0.0125521C6.96948 -0.00418402 7.231 -0.00418402 7.49169 0.0125521C14.6925 0.377516 21.8882 0.822573 29.0787 1.34771C30.007 1.41768 30.9353 1.48763 31.8637 1.55757C32.6218 2.1111 33.3707 2.69807 34.0855 3.31851C36.4094 5.32581 38.4239 7.68895 39.5782 10.4809C39.7174 10.8185 39.8443 11.1622 39.9495 11.5119C40.0176 11.7127 40.0764 11.9165 40.129 12.1202Z",
              fill: "rgba(47,46,65,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="82.89%"
          bottom="10.95%"
          left="28.08%"
          right="57.84%"
          {...getOverrideProps(overrides, "Vector35262599")}
        ></Icon>
        <Icon
          width="22.3505859375px"
          height="11.947265625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 22.3505859375,
            height: 11.947265625,
          }}
          paths={[
            {
              d: "M21.9583 4.23936L13.7239 0L2.35272 1.73419L0 11.9471L5.85658 11.7257L7.49263 7.97354L7.49263 11.6636L10.195 11.5614L11.7633 5.58821L12.7436 11.9471L22.3504 11.7543L21.9583 4.23936Z",
              fill: "rgba(47,46,65,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="50.07%"
          bottom="43.87%"
          left="30.2%"
          right="61.96%"
          {...getOverrideProps(overrides, "Vector35262600")}
        ></Icon>
        <Icon
          width="26.4130859375px"
          height="49.830078125px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 26.4130859375,
            height: 49.830078125,
          }}
          paths={[
            {
              d: "M16.4705 49.8301L7.40989 49.8301C7.3449 49.6294 7.28301 49.4256 7.22422 49.2219C6.58428 46.9596 6.11471 44.6541 5.81933 42.3241C5.7234 41.658 5.63985 40.9889 5.56249 40.3228C5.51298 39.9001 5.46656 39.4804 5.42014 39.0576C4.90027 34.3618 4.50109 29.6203 3.04051 25.1251C2.86412 24.5807 2.67226 24.0394 2.4866 23.498C2.14361 22.5659 1.87461 21.6091 1.68203 20.6361C1.28594 18.4098 1.58302 16.1045 1.17455 13.8812C0.945557 12.6404 0.490669 11.5485 0.215262 10.411C0.0399092 9.72462 -0.0289467 9.0161 0.011026 8.30946C0.67775 7.69103 1.51711 7.28227 2.42161 7.1355C2.73416 7.08379 3.08692 7.04426 3.27568 6.79791C3.38703 6.61045 3.43675 6.39375 3.41803 6.17746C3.43972 4.74294 3.35594 3.30876 3.16737 1.8861C3.10548 1.38732 3.02812 0.888543 2.93529 0.392801C2.93219 0.36847 2.92601 0.347167 2.92292 0.322837C3.67796 0.000452147 4.52894 -0.0025885 5.34897 0.000452859C6.24327 0.00349422 7.13448 0.00350016 8.02568 0.00654152C9.67503 0.0126242 11.3244 0.0176895 12.9737 0.0217446C14.5086 0.024786 16.096 0.0399883 17.4916 0.663468C18.9337 1.31128 20.0291 2.56129 20.7532 3.94815C21.4773 5.33502 21.8703 6.86176 22.2262 8.3794C22.3249 8.79942 22.3768 9.22876 22.3809 9.65982C22.449 13.0844 19.8496 16.5333 19.5897 20.0339C19.5061 21.1683 19.6021 22.3119 19.4968 23.4463C19.3916 24.5838 19.0822 25.6969 19.0265 26.8344C19.0234 26.8922 19.0203 26.953 19.0203 27.0108C18.9863 28.4919 19.4257 29.9427 19.9332 31.3387C20.7192 33.5072 21.6754 35.6087 22.6625 37.6981C23.6156 39.7206 24.5934 41.734 25.4722 43.7839C25.9293 44.7355 26.2371 45.7496 26.3851 46.7918C26.4827 47.6296 26.3198 48.4768 25.9179 49.2219C25.8148 49.406 25.6913 49.5784 25.5496 49.7359L25.5434 49.7419C25.5156 49.7723 25.4877 49.8028 25.4599 49.8301L16.4705 49.8301L16.4705 49.8301Z",
              fill: "rgba(47,46,65,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="63.75%"
          bottom="10.95%"
          left="36.38%"
          right="54.35%"
          {...getOverrideProps(overrides, "Vector35262601")}
        ></Icon>
        <Icon
          width="6.3369140625px"
          height="5.2998046875px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 6.3369140625,
            height: 5.2998046875,
          }}
          paths={[
            {
              d: "M6.33437 2.1798C6.29637 2.58452 6.18419 2.97914 6.00326 3.34463C5.98779 3.38112 5.97231 3.41459 5.95684 3.45108C5.77736 3.86775 5.5948 4.27834 5.40604 4.69197C5.3132 4.89269 5.22036 5.09647 5.12443 5.30024L0 5.30024C0.185498 5.10954 0.357157 4.90629 0.513691 4.69197C1.29968 3.61836 1.75456 2.31362 2.55603 1.15486C2.66485 0.996359 2.79036 0.849563 2.93047 0.716902C4.21467 -0.505731 6.41483 -0.256337 6.33437 2.1798Z",
              fill: "rgba(255,184,184,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="86.36%"
          bottom="10.95%"
          left="42.97%"
          right="54.81%"
          {...getOverrideProps(overrides, "Vector35262602")}
        ></Icon>
        <Icon
          width="17.591796875px"
          height="45.34375px"
          viewBox={{ minX: 0, minY: 0, width: 17.591796875, height: 45.34375 }}
          paths={[
            {
              d: "M13.791 45.3437C13.8565 45.1439 13.9112 44.9409 13.955 44.7354C13.9921 44.5742 14.0231 44.4161 14.0478 44.2549C14.2118 43.1934 14.2087 42.1077 14.4656 41.0645C14.8276 39.5712 15.9138 37.8041 15.0195 36.548C15.7153 36.4077 16.3712 36.1191 16.9411 35.7026C17.4734 35.2463 17.7828 34.4556 17.461 33.8352C17.1423 33.2238 16.2789 32.8193 16.3965 32.1411C16.4551 31.926 16.5584 31.7251 16.6998 31.5511C17.169 30.8235 17.4117 29.9771 17.398 29.1158C17.3842 28.2545 17.1147 27.4159 16.6224 26.7032C16.3408 26.3078 15.9942 25.9611 15.7374 25.5474C15.4566 25.0416 15.2414 24.5031 15.0968 23.9447C14.2033 21.1146 12.8861 18.4311 11.1885 15.9824C10.8123 15.5111 10.5204 14.9805 10.3252 14.413C10.2111 13.798 10.1882 13.1701 10.2571 12.5487C10.319 10.0912 9.38447 7.6916 8.03838 5.62348C7.93936 5.47141 7.83723 5.32239 7.73511 5.17336C6.43543 3.29076 4.82323 1.63929 3.2172 0C2.55499 0.304136 1.97013 0.501837 1.62664 1.13444C1.45818 1.49113 1.3545 1.87402 1.32029 2.26582C0.880881 5.27677 0.500266 8.30596 0.203198 11.3321C0.0546636 12.8619 -0.0969726 14.4039 0.0794117 15.9307C0.255796 17.4574 0.784947 18.9872 1.83706 20.1217C2.49618 20.8333 3.33169 21.3625 4.04651 22.0195C4.16101 22.1259 4.27242 22.2354 4.38072 22.3479C4.89594 22.8873 5.35323 23.4774 5.74537 24.1089C7.46029 26.8318 8.2553 30.0179 8.01672 33.2117C7.97347 33.7874 7.89598 34.3602 7.78463 34.927C7.64865 35.7386 7.37012 36.5207 6.96149 37.2384C6.63657 37.7646 6.20954 38.2239 5.91556 38.7683C5.62159 39.3127 5.48235 39.9909 5.77323 40.5353C6.20948 40.5349 6.64229 40.6111 7.05124 40.7603C8.01464 41.1255 8.852 41.7533 9.46492 42.57C9.69086 42.8637 9.89559 43.1727 10.0776 43.4945C10.3072 43.8956 10.5118 44.31 10.6903 44.7354C10.7646 44.9027 10.8358 45.076 10.9038 45.2494C10.9194 45.2795 10.9319 45.3111 10.941 45.3437L13.791 45.3437Z",
              fill: "rgba(47,46,65,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="66.03%"
          bottom="10.95%"
          left="41.52%"
          right="52.3%"
          {...getOverrideProps(overrides, "Vector35262603")}
        ></Icon>
        <Icon
          width="16.013671875px"
          height="7.5859375px"
          viewBox={{ minX: 0, minY: 0, width: 16.013671875, height: 7.5859375 }}
          paths={[
            {
              d: "M15.0963 0L8.53483 2.81266L6.99503 2.96229L0 1.46777L0.308511 7.58547L7.14727 4.47567L8.68708 4.32603L16.0135 6.0584L15.0963 0Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="62.19%"
          bottom="33.96%"
          left="32.19%"
          right="62.19%"
          {...getOverrideProps(overrides, "Vector35262604")}
        ></Icon>
        <Icon
          width="85.5615234375px"
          height="134.1240234375px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 85.5615234375,
            height: 134.1240234375,
          }}
          paths={[
            {
              d: "M60.6484 133.516C60.7164 133.717 60.7752 133.92 60.8279 134.124L63.1239 134.124C63.3094 133.933 63.4811 133.73 63.6376 133.516L60.6484 133.516ZM0 0L0 134.124L85.5619 134.124L85.5619 0L0 0ZM84.943 133.516L0.618892 133.516L0.618892 0.608272L84.943 0.608272L84.943 133.516ZM60.6484 133.516C60.7164 133.717 60.7752 133.92 60.8279 134.124L63.1239 134.124C63.3094 133.933 63.4811 133.73 63.6376 133.516L60.6484 133.516Z",
              fill: "rgba(47,46,65,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="20.96%"
          bottom="10.95%"
          left="20.82%"
          right="49.16%"
          {...getOverrideProps(overrides, "Vector35262605")}
        ></Icon>
        <Icon
          width="32.2861328125px"
          height="22.833984375px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 32.2861328125,
            height: 22.833984375,
          }}
          paths={[
            {
              d: "M2.60112 15.9297L2.65416 15.6682C2.66987 15.5905 4.18431 7.81398 0.282249 0.527041L0 0L0.599854 0.0843596C0.772104 0.108566 4.71211 0.729751 7.53672 6.84292C7.78467 5.91135 8.03428 3.95199 7.259 0.650596L7.1487 0.180581L7.62768 0.285276C7.77681 0.317798 11.1768 1.10547 12.5247 5.16393L17.8766 0.713116L17.8766 7.94319C19.3159 7.22369 23.7296 5.28779 26.5368 7.01193L26.965 7.27508L26.5322 7.53066C26.4954 7.55234 23.0473 9.60808 22.3635 11.6885C23.169 11.6952 25.0899 11.7223 26.9919 11.8345C31.8769 12.1226 32.2861 12.6753 32.2861 13.1707L32.2861 13.3443L32.134 13.4325C32.0475 13.4828 23.4699 18.5087 23.2798 22.4299L23.2601 22.8335L2.60112 15.9297ZM21.9701 12.2947L21.6047 12.2947L21.6649 11.9405C22.0044 9.9379 24.6718 8.00674 25.7597 7.29422C22.6935 5.96288 17.7723 8.68512 17.7206 8.71408L17.2577 8.9738L17.2577 2.0247L12.193 6.23658L12.0652 5.77621C11.1777 2.57818 8.96532 1.40559 7.97805 1.03181C8.9966 5.82537 7.87576 7.73795 7.8259 7.81978L7.50905 8.33894L7.27439 7.77908C5.22779 2.89359 2.40515 1.34009 1.15377 0.87364C4.37198 7.39949 3.53113 14.1233 3.3069 15.5233L22.7041 22.0052C23.3247 18.2445 29.9941 14.0111 31.5209 13.0865C30.5785 12.5942 26.0285 12.2947 21.9701 12.2947L21.9701 12.2947Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="42.66%"
          bottom="45.75%"
          left="29.77%"
          right="58.9%"
          {...getOverrideProps(overrides, "Vector35262606")}
        ></Icon>
        <Icon
          width="2.2197265625px"
          height="2.181640625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 2.2197265625,
            height: 2.181640625,
          }}
          paths={[
            {
              d: "M0 1.0909C6.12026e-07 0.875143 0.0651034 0.66423 0.187067 0.484832C0.309031 0.305433 0.482378 0.165613 0.685196 0.0830447C0.888014 0.000476864 1.11119 -0.0211325 1.3265 0.0209608C1.54181 0.0630541 1.73958 0.166952 1.89481 0.319519C2.05004 0.472085 2.15575 0.666473 2.19858 0.878089C2.24141 1.0897 2.21943 1.30905 2.13542 1.50839C2.05141 1.70772 1.90914 1.8781 1.72661 1.99797C1.54408 2.11784 1.32949 2.18182 1.10996 2.18182C0.815674 2.18152 0.533533 2.06648 0.325444 1.86197C0.117354 1.65745 0.00031127 1.38014 0 1.0909L0 1.0909ZM0.618892 1.0909C0.618892 1.18636 0.647697 1.27968 0.701656 1.35905C0.755615 1.43842 0.8323 1.50028 0.92203 1.53681C1.01176 1.57334 1.1105 1.58289 1.20576 1.56427C1.30102 1.54565 1.38851 1.49968 1.45719 1.43219C1.52586 1.36469 1.57264 1.27869 1.59159 1.18507C1.61054 1.09144 1.60081 0.994402 1.56364 0.906212C1.52648 0.818021 1.46354 0.742642 1.38278 0.689609C1.30203 0.636577 1.20708 0.608276 1.10996 0.608276C0.979765 0.608424 0.854947 0.65932 0.762888 0.7498C0.670828 0.84028 0.619043 0.962947 0.618892 1.0909L0.618892 1.0909Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="40.61%"
          bottom="58.29%"
          left="29.23%"
          right="70%"
          {...getOverrideProps(overrides, "Vector35262607")}
        ></Icon>
        <Icon
          width="2.2197265625px"
          height="2.181640625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 2.2197265625,
            height: 2.181640625,
          }}
          paths={[
            {
              d: "M0 1.0909C6.12027e-07 0.875143 0.0651034 0.66423 0.187067 0.484832C0.309031 0.305433 0.482387 0.165613 0.685205 0.0830447C0.888023 0.000476864 1.1112 -0.0211325 1.32651 0.0209608C1.54182 0.0630541 1.73959 0.166952 1.89482 0.319519C2.05005 0.472085 2.15576 0.666473 2.19859 0.878089C2.24142 1.0897 2.21943 1.30905 2.13542 1.50839C2.05141 1.70772 1.90915 1.8781 1.72662 1.99797C1.54409 2.11784 1.32949 2.18182 1.10996 2.18182C0.815674 2.18152 0.533533 2.06648 0.325444 1.86197C0.117354 1.65745 0.00031127 1.38014 0 1.0909L0 1.0909ZM0.618893 1.0909C0.618893 1.18636 0.647697 1.27968 0.701656 1.35905C0.755615 1.43842 0.83231 1.50028 0.92204 1.53681C1.01177 1.57334 1.11051 1.58289 1.20576 1.56427C1.30102 1.54565 1.38852 1.49968 1.4572 1.43219C1.52587 1.36469 1.57264 1.27869 1.59159 1.18507C1.61054 1.09144 1.60081 0.994402 1.56364 0.906212C1.52648 0.818021 1.46354 0.742642 1.38278 0.689609C1.30203 0.636577 1.20708 0.608276 1.10996 0.608276C0.979765 0.608424 0.854957 0.65932 0.762897 0.7498C0.670838 0.84028 0.619043 0.962947 0.618893 1.0909L0.618893 1.0909Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="40.61%"
          bottom="58.29%"
          left="32.03%"
          right="67.19%"
          {...getOverrideProps(overrides, "Vector35262608")}
        ></Icon>
        <Icon
          width="2.2197265625px"
          height="2.181640625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 2.2197265625,
            height: 2.181640625,
          }}
          paths={[
            {
              d: "M4.30955e-12 1.09092C-6.12023e-07 0.875154 0.0650942 0.664234 0.187058 0.484834C0.309022 0.305434 0.482377 0.165607 0.685196 0.0830379C0.888014 0.000468997 1.11119 -0.0211297 1.3265 0.0209633C1.54181 0.0630563 1.73959 0.166954 1.89482 0.319521C2.05005 0.472088 2.15576 0.666475 2.19859 0.878091C2.24142 1.08971 2.21943 1.30905 2.13542 1.50839C2.05141 1.70773 1.90915 1.87811 1.72662 1.99798C1.54409 2.11785 1.32949 2.18183 1.10996 2.18183C0.815674 2.18152 0.533533 2.06649 0.325444 1.86197C0.117354 1.65745 0.000312089 1.38015 4.30955e-12 1.09092L4.30955e-12 1.09092ZM0.618893 1.09092C0.618893 1.18637 0.647697 1.27969 0.701656 1.35906C0.755615 1.43843 0.832309 1.50029 0.92204 1.53682C1.01177 1.57335 1.1105 1.5829 1.20576 1.56428C1.30102 1.54566 1.38852 1.4997 1.4572 1.4322C1.52587 1.3647 1.57264 1.27869 1.59159 1.18507C1.61054 1.09144 1.60081 0.994405 1.56364 0.906214C1.52648 0.818023 1.46354 0.742645 1.38278 0.689612C1.30203 0.636579 1.20708 0.608277 1.10996 0.608278C0.979765 0.608425 0.854948 0.659322 0.762888 0.749802C0.670828 0.840283 0.619042 0.962958 0.618893 1.09092L0.618893 1.09092Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="41.61%"
          bottom="57.29%"
          left="36.11%"
          right="63.11%"
          {...getOverrideProps(overrides, "Vector35262609")}
        ></Icon>
        <Icon
          width="2.2197265625px"
          height="2.181640625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 2.2197265625,
            height: 2.181640625,
          }}
          paths={[
            {
              d: "M0 1.09091C8.79499e-13 0.875152 0.0650938 0.664232 0.187058 0.484832C0.309022 0.305432 0.482386 0.165613 0.685205 0.0830449C0.888024 0.000476402 1.11119 -0.0211324 1.3265 0.0209609C1.54181 0.0630543 1.73958 0.166961 1.89481 0.319528C2.05004 0.472095 2.15576 0.666473 2.19859 0.878089C2.24142 1.08971 2.21944 1.30905 2.13543 1.50839C2.05142 1.70772 1.90915 1.87811 1.72662 1.99798C1.54409 2.11785 1.32949 2.18183 1.10996 2.18182C0.815674 2.18152 0.533533 2.06648 0.325444 1.86197C0.117354 1.65745 0.000312087 1.38015 0 1.09091L0 1.09091ZM0.618892 1.09091C0.618892 1.18637 0.647697 1.27969 0.701656 1.35906C0.755615 1.43843 0.8323 1.50029 0.92203 1.53682C1.01176 1.57335 1.11049 1.5829 1.20575 1.56428C1.30101 1.54566 1.38852 1.49969 1.4572 1.43219C1.52587 1.3647 1.57265 1.2787 1.5916 1.18507C1.61054 1.09145 1.60081 0.994412 1.56364 0.906221C1.52648 0.81803 1.46354 0.742652 1.38278 0.689619C1.30203 0.636586 1.20708 0.608275 1.10996 0.608276C0.979765 0.608424 0.854947 0.65932 0.762888 0.7498C0.670828 0.84028 0.619043 0.962956 0.618892 1.09091L0.618892 1.09091Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="48.4%"
          bottom="50.5%"
          left="41.58%"
          right="57.64%"
          {...getOverrideProps(overrides, "Vector35262610")}
        ></Icon>
        <Icon
          width="2.2197265625px"
          height="2.181640625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 2.2197265625,
            height: 2.181640625,
          }}
          paths={[
            {
              d: "M2.69697e-09 1.09106C-1.52979e-05 0.875281 0.065073 0.66434 0.187039 0.484916C0.309005 0.305493 0.48237 0.165639 0.685205 0.0830551C0.88804 0.000471462 1.11124 -0.0211314 1.32657 0.0209618C1.54191 0.0630551 1.7397 0.166957 1.89494 0.319539C2.05019 0.47212 2.15591 0.666527 2.19874 0.878164C2.24157 1.0898 2.21958 1.30916 2.13555 1.50852C2.05153 1.70787 1.90924 1.87826 1.72669 1.99814C1.54413 2.11801 1.32951 2.18198 1.10996 2.18197C0.815674 2.18166 0.533534 2.06663 0.325444 1.86212C0.117354 1.6576 0.000312911 1.3803 2.69697e-09 1.09106L2.69697e-09 1.09106ZM0.618892 1.09106C0.618878 1.18654 0.647675 1.27988 0.701637 1.35927C0.755598 1.43866 0.832302 1.50054 0.922049 1.53709C1.0118 1.57363 1.11055 1.5832 1.20583 1.56458C1.30111 1.54595 1.38863 1.49998 1.45732 1.43247C1.52601 1.36495 1.57279 1.27893 1.59174 1.18529C1.61069 1.09165 1.60096 0.994578 1.56378 0.906371C1.52659 0.818164 1.46363 0.742776 1.38285 0.689741C1.30207 0.636705 1.2071 0.608402 1.10996 0.608416C0.979764 0.608563 0.854948 0.65946 0.762888 0.74994C0.670827 0.840421 0.619042 0.963105 0.618892 1.09106Z",
              fill: "rgba(249,168,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="45%"
          bottom="53.89%"
          left="39.62%"
          right="59.6%"
          {...getOverrideProps(overrides, "Vector35262611")}
        ></Icon>
        <Icon
          width="281.287109375px"
          height="0.6083984375px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 281.287109375,
            height: 0.6083984375,
          }}
          paths={[
            {
              d: "M281.287 0L0 0L0 0.608272L281.287 0.608272L281.287 0Z",
              fill: "rgba(63,61,86,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="99.62%"
          bottom="0.07%"
          left="1.3%"
          right="0%"
          {...getOverrideProps(overrides, "Vector35262612")}
        ></Icon>
      </View>
      <View
        width="165px"
        height="35px"
        position="absolute"
        top="583px"
        left="561px"
        boxShadow="0px 10px 20px rgba(0, 0, 0, 0.17000000178813934)"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(45deg, rgba(147,35,35,1), rgba(154,136,136,0.87), rgba(53,10,10,0.08))"
        onClick={() => {
          signinBoxOnClick();
        }}
        {...getOverrideProps(overrides, "Sign in Box")}
      ></View>
      <Text
        fontFamily="Kameron"
        fontSize="25px"
        fontWeight="400"
        color="rgba(252,233,233,1)"
        lineHeight="37.5px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="99px"
        height="38px"
        position="absolute"
        top="583px"
        left="596px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="SIGN UP"
        onClick={() => {
          sIGNUPOnClick();
        }}
        {...getOverrideProps(overrides, "SIGN UP")}
      ></Text>
      <TextAreaField
        display="flex"
        gap="0"
        position="absolute"
        top="303px"
        left="563px"
        direction="column"
        width="316px"
        height="75px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="Email Address:"
        placeholder="enter an email"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textAreaFieldThreeFiveThreeSevenTwoFiveSixThreeValue}
        onChange={(event) => {
          setTextAreaFieldThreeFiveThreeSevenTwoFiveSixThreeValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextAreaField35372563")}
      ></TextAreaField>
      <TextAreaField
        display="flex"
        gap="0"
        position="absolute"
        top="405px"
        left="563px"
        direction="column"
        width="316px"
        height="75px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="Username:"
        placeholder="enter a username"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textAreaFieldThreeFiveThreeSevenTwoFiveSevenOneValue}
        onChange={(event) => {
          setTextAreaFieldThreeFiveThreeSevenTwoFiveSevenOneValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextAreaField35372571")}
      ></TextAreaField>
      <TextAreaField
        display="flex"
        gap="0"
        position="absolute"
        top="496px"
        left="563px"
        direction="column"
        width="316px"
        height="75px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="Password:"
        placeholder="enter a password"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextAreaField35372578")}
      ></TextAreaField>
    </View>
  );
}
