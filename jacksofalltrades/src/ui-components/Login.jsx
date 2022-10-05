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
import { Flex, Icon, Text, TextAreaField, View } from "@aws-amplify/ui-react";
export default function Login(props) {
  const { frame418, overrides, ...rest } = props;
  const [signUpColor, setSignUpColor] = useStateMutationAction(
    "rgba(104,112,120,1)"
  );
  const [signinBoxBackgroundColor, setSigninBoxBackgroundColor] =
    useStateMutationAction("#9D6565");
  const signUpOnMouseEnter = () => {
    setSignUpColor("#932323");
  };
  const signUpOnMouseLeave = () => {
    setSignUpColor("#687078");
  };
  const signUpOnClick = useNavigateAction({ type: "url", url: "/signup" });
  const signinBoxOnMouseLeave = () => {
    setSigninBoxBackgroundColor("#9D6565");
  };
  const signinBoxOnMouseEnter = () => {
    setSigninBoxBackgroundColor("#687078");
  };
  return (
    <View
      width="1388px"
      height="758px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(226,226,226,1)"
      {...rest}
      {...getOverrideProps(overrides, "Login")}
    >
      <View
        width="1388px"
        height="758px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="1324px"
        height="730px"
        position="absolute"
        top="5px"
        left="33px"
        {...getOverrideProps(overrides, "Border")}
      >
        <View
          width="447.25px"
          height="1px"
          position="absolute"
          top="729px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(77,0,0,1)"
          {...getOverrideProps(overrides, "Border Lower Left35102570")}
        ></View>
        <View
          width="1.18px"
          height="730px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(77,0,0,1)"
          {...getOverrideProps(overrides, "Border Left")}
        ></View>
        <View
          width="425.95px"
          height="1px"
          position="absolute"
          top="729px"
          left="898.05px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(77,0,0,1)"
          {...getOverrideProps(overrides, "Border Lower Left35102572")}
        ></View>
        <View
          width="1.18px"
          height="730px"
          position="absolute"
          top="0px"
          left="1322.82px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(77,0,0,1)"
          {...getOverrideProps(overrides, "Border Right")}
        ></View>
      </View>
      <Flex
        gap="0"
        position="absolute"
        top="88px"
        left="299px"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 419")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="392px"
          height="564px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Sign In Panel")}
        >
          <View
            width="392px"
            height="564px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(191,64,64,1)"
            {...getOverrideProps(overrides, "Background 2")}
          ></View>
          <Icon
            width="335px"
            height="516px"
            viewBox={{ minX: 0, minY: 0, width: 335, height: 516 }}
            paths={[
              {
                d: "M0 0L335 0L335 516L0 516L0 0Z",
                fill: "rgba(245,188,188,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="24px"
            left="32px"
            {...getOverrideProps(overrides, "Background 1")}
          ></Icon>
          <Text
            fontFamily="Kameron"
            fontSize="25px"
            fontWeight="400"
            color="rgba(77,0,0,1)"
            lineHeight="37.5px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="165px"
            left="57px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="SIGN IN"
            {...getOverrideProps(overrides, "SIGN IN34882708")}
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
            top="203px"
            left="57px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sign in to start learning"
            {...getOverrideProps(overrides, "Sign in to start learning")}
          ></Text>
          <View
            padding="0px 0px 0px 0px"
            width="48px"
            height="68.79px"
            position="absolute"
            top="28px"
            left="37px"
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
              {...getOverrideProps(overrides, "Rectangle 1180")}
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
              {...getOverrideProps(overrides, "Rectangle 1181")}
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
              {...getOverrideProps(overrides, "Rectangle 1182")}
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
              {...getOverrideProps(overrides, "J35022958")}
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
              {...getOverrideProps(overrides, "J35022959")}
            ></Text>
          </View>
          <Text
            fontFamily="Marcellus SC"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="20px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="1.45px"
            width="137px"
            height="48px"
            position="absolute"
            top="44px"
            left="89px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Jack of All Trades"
            {...getOverrideProps(overrides, "Jack of All Trades")}
          ></Text>
          <View
            width="267px"
            height="1px"
            position="absolute"
            top="320px"
            left="61px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(0,0,0,1)"
            {...getOverrideProps(overrides, "Seperator")}
          ></View>
          <TextAreaField
            display="flex"
            gap="0"
            position="absolute"
            top="323px"
            left="56px"
            direction="column"
            width="291px"
            height="71px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="Password:"
            placeholder="enter your password"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "Password")}
          ></TextAreaField>
          <TextAreaField
            display="flex"
            gap="0"
            position="absolute"
            top="237px"
            left="56px"
            direction="column"
            width="291px"
            height="71px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="Email Address:"
            placeholder="enter your email"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "Email")}
          ></TextAreaField>
          <Text
            fontFamily="Kameron"
            fontSize="16px"
            fontWeight="400"
            color={signUpColor}
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="56px"
            left="298px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sign Up"
            onMouseEnter={() => {
              signUpOnMouseEnter();
            }}
            onMouseLeave={() => {
              signUpOnMouseLeave();
            }}
            onClick={() => {
              signUpOnClick();
            }}
            {...getOverrideProps(overrides, "Sign Up")}
          ></Text>
          <View
            padding="0px 0px 0px 0px"
            width="195px"
            height="48px"
            position="absolute"
            top="431px"
            left="60px"
            {...getOverrideProps(overrides, "Sign in box")}
          >
            <View
              width="195px"
              height="48px"
              position="absolute"
              top="0px"
              left="0px"
              boxShadow="0px 10px 20px rgba(0, 0, 0, 0.17000000178813934)"
              borderRadius="8px"
              padding="0px 0px 0px 0px"
              backgroundColor={signinBoxBackgroundColor}
              onMouseLeave={() => {
                signinBoxOnMouseLeave();
              }}
              onMouseEnter={() => {
                signinBoxOnMouseEnter();
              }}
              {...getOverrideProps(overrides, "Sign in Box")}
            ></View>
            <Text
              fontFamily="Kameron"
              fontSize="25px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="37.5px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="5px"
              left="52px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="SIGN IN"
              {...getOverrideProps(overrides, "SIGN IN34902661")}
            ></Text>
          </View>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="398px"
          height="564px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Side Graphic")}
        >
          <View
            width="398px"
            height="564px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            backgroundImage="linear-gradient(-90deg, rgba(147,35,35,1), rgba(141,121,121,0.7))"
            {...getOverrideProps(overrides, "Rectangle 1177")}
          ></View>
          <Icon
            width="388px"
            height="398px"
            viewBox={{ minX: 0, minY: 0, width: 388, height: 398 }}
            paths={[
              {
                d: "M388 199C388 308.905 301.143 398 194 398C86.8568 398 0 308.905 0 199C0 89.0953 86.8568 0 194 0C301.143 0 388 89.0953 388 199Z",
                fill: "rgba(157,101,101,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="69.28px"
            left="3.5px"
            {...getOverrideProps(overrides, "Ellipse 134992567")}
          ></Icon>
          <View
            width="315px"
            height="309px"
            position="absolute"
            top="88px"
            left="41px"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Graphic")}
          >
            <Icon
              width="72.7197265625px"
              height="66.67578125px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 72.7197265625,
                height: 66.67578125,
              }}
              paths={[
                {
                  d: "M30.2923 19.0535L27.518 8.35249C22.5991 6.31364 17.5666 4.54774 12.4444 3.06321L12.0942 8.03648L10.6741 2.55738C4.32166 0.781356 0 0 0 0C0 0 5.83608 21.7101 18.0809 38.3075L32.3472 40.7586L21.2641 42.3216C22.8043 44.1341 24.4596 45.8502 26.2201 47.4595C44.0308 63.6284 63.8688 71.047 70.5291 64.0288C77.1895 57.0106 68.1503 38.2144 50.3397 22.0472C44.8182 17.0346 37.8821 13.0122 30.9389 9.84563L30.2923 19.0535Z",
                  fill: "rgba(242,242,242,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="78.08%"
              bottom="0.35%"
              left="0%"
              right="76.91%"
              {...getOverrideProps(overrides, "Path 1")}
            ></Icon>
            <Icon
              width="40.376953125px"
              height="90.74755859375px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 40.376953125,
                height: 90.74755859375,
              }}
              paths={[
                {
                  d: "M20.9168 31.6227L24.1977 21.0599C21.0647 16.8278 17.6902 12.772 14.0902 8.91169L11.162 12.992L12.8418 7.58359C8.34169 2.85352 5.05529 0 5.05529 0C5.05529 0 -1.4215 21.5355 0.287037 41.9337L11.2043 51.244L0.888833 46.9789C1.24977 49.3096 1.76023 51.6157 2.4172 53.8837C9.11856 76.7292 22.18 93.1086 31.5905 90.4681C41.001 87.8276 43.1975 67.1673 36.4962 44.3218C34.4189 37.2396 30.6068 30.2896 26.3367 24.0693L20.9168 31.6227Z",
                  fill: "rgba(242,242,242,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="70.25%"
              bottom="0.39%"
              left="11.35%"
              right="75.83%"
              {...getOverrideProps(overrides, "Path 2")}
            ></Icon>
            <Icon
              width="157.0517578125px"
              height="308.0439453125px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 157.0517578125,
                height: 308.0439453125,
              }}
              paths={[
                {
                  d: "M157.052 73.2023L155.322 73.2023L155.322 26.8364C155.322 23.3122 154.612 19.8225 153.233 16.5665C151.854 13.3106 149.833 10.3522 147.285 7.8602C144.737 5.36821 141.712 3.39145 138.383 2.0428C135.054 0.694141 131.486 0 127.882 0L27.4394 0C20.162 1.17556e-14 13.1827 2.8274 8.0368 7.8602C2.89092 12.893 0 19.7189 0 26.8364L0 281.208C0 284.732 0.709731 288.222 2.08869 291.478C3.46764 294.734 5.48882 297.692 8.0368 300.184C10.5848 302.676 13.6097 304.653 16.9388 306.001C20.2679 307.35 23.836 308.044 27.4394 308.044L127.882 308.044C135.16 308.044 142.139 305.217 147.285 300.184C152.43 295.151 155.321 288.325 155.321 281.208L155.321 106.206L157.052 106.206L157.052 73.2023Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="0%"
              bottom="0.31%"
              left="19.92%"
              right="30.22%"
              {...getOverrideProps(overrides, "Path 22")}
            ></Icon>
            <Icon
              width="141.9091796875px"
              height="294.08447265625px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 141.9091796875,
                height: 294.08447265625,
              }}
              paths={[
                {
                  d: "M121.418 0L108.308 0C108.911 1.44582 109.141 3.01448 108.978 4.56779C108.815 6.12109 108.264 7.61136 107.374 8.9073C106.483 10.2032 105.28 11.2651 103.871 11.9992C102.462 12.7334 100.89 13.1173 99.2935 13.1173L41.7509 13.1173C40.1544 13.1172 38.5825 12.7331 37.1735 11.9989C35.7646 11.2647 34.5618 10.2029 33.6713 8.90696C32.7808 7.61104 32.2298 6.12082 32.0669 4.56758C31.904 3.01434 32.1341 1.44575 32.7371 0L20.4914 0C15.0568 5.87778e-15 9.8447 2.11147 6.00181 5.86992C2.15892 9.62836 0 14.7259 0 20.0412L0 274.043C7.21181e-14 279.358 2.15892 284.456 6.00181 288.214C9.8447 291.973 15.0568 294.084 20.4914 294.084L121.418 294.084C126.853 294.084 132.065 291.973 135.908 288.214C139.751 284.456 141.91 279.358 141.91 274.043L141.91 274.043L141.91 20.0407C141.91 14.7256 139.751 9.62813 135.908 5.86977C132.065 2.11141 126.853 -1.13194e-09 121.418 0L121.418 0Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="2.26%"
              bottom="2.57%"
              left="22.33%"
              right="32.62%"
              {...getOverrideProps(overrides, "Path 23")}
            ></Icon>
            <Icon
              width="15.51171875px"
              height="20.2255859375px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 15.51171875,
                height: 20.2255859375,
              }}
              paths={[
                {
                  d: "M10.3392 10.1134C10.3389 8.33798 10.8168 6.59376 11.7248 5.05633C12.6327 3.5189 13.9387 2.24251 15.5114 1.35561C13.9395 0.467734 12.1564 0.000198383 10.3412 6.31182e-08C8.526 -0.000198257 6.74275 0.466954 5.17069 1.35449C3.59862 2.24202 2.29314 3.51866 1.38549 5.05608C0.477838 6.5935 0 8.33752 0 10.1128C0 11.8881 0.477838 13.6321 1.38549 15.1696C2.29314 16.707 3.59862 17.9836 5.17069 18.8711C6.74275 19.7587 8.526 20.2258 10.3412 20.2256C12.1564 20.2254 13.9395 19.7579 15.5114 18.87C13.9388 17.9833 12.6329 16.7071 11.7249 15.1699C10.8169 13.6327 10.339 11.8887 10.3392 10.1134L10.3392 10.1134Z",
                  fill: "rgba(204,204,204,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="31.73%"
              bottom="61.72%"
              left="37.49%"
              right="57.59%"
              {...getOverrideProps(overrides, "Path 6")}
            ></Icon>
            <Icon
              width="15.51171875px"
              height="20.2255859375px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 15.51171875,
                height: 20.2255859375,
              }}
              paths={[
                {
                  d: "M10.3393 10.1134C10.3389 8.33797 10.8167 6.59373 11.7247 5.0563C12.6327 3.51886 13.9387 2.24247 15.5114 1.35561C13.9395 0.467734 12.1564 0.000198383 10.3412 6.31182e-08C8.52601 -0.000198257 6.74277 0.466954 5.1707 1.35449C3.59864 2.24202 2.29314 3.51866 1.38549 5.05608C0.477838 6.5935 0 8.33752 0 10.1128C0 11.8881 0.477838 13.6321 1.38549 15.1696C2.29314 16.707 3.59864 17.9836 5.1707 18.8711C6.74277 19.7587 8.52601 20.2258 10.3412 20.2256C12.1564 20.2254 13.9395 19.7579 15.5114 18.87C13.9388 17.9833 12.6329 16.7071 11.7249 15.1699C10.8169 13.6327 10.339 11.8887 10.3393 10.1134L10.3393 10.1134Z",
                  fill: "rgba(204,204,204,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="31.73%"
              bottom="61.72%"
              left="41.61%"
              right="53.46%"
              {...getOverrideProps(overrides, "Path 7")}
            ></Icon>
            <Icon
              width="20.6796875px"
              height="20.2255859375px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 20.6796875,
                height: 20.2255859375,
              }}
              paths={[
                {
                  d: "M10.34 20.2256C16.0507 20.2256 20.6801 15.698 20.6801 10.1128C20.6801 4.52766 16.0507 0 10.34 0C4.62939 0 0 4.52766 0 10.1128C0 15.698 4.62939 20.2256 10.34 20.2256Z",
                  fill: "rgba(249,168,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="31.73%"
              bottom="61.72%"
              left="45.64%"
              right="47.79%"
              {...getOverrideProps(overrides, "Ellipse 135212608")}
            ></Icon>
            <Icon
              width="64.591796875px"
              height="63.1728515625px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 64.591796875,
                height: 63.1728515625,
              }}
              paths={[
                {
                  d: "M62.428 63.1726L2.16401 63.1726C1.59028 63.172 1.04025 62.9488 0.634564 62.552C0.22888 62.1552 0.000671546 61.6173 0 61.0562L0 2.11645C0.000671546 1.55534 0.22888 1.01739 0.634564 0.62062C1.04025 0.22385 1.59028 0.000656789 2.16401 0L62.428 0C63.0017 0.000656789 63.5517 0.22385 63.9574 0.62062C64.3631 1.01739 64.5913 1.55534 64.592 2.11645L64.592 61.0562C64.5913 61.6173 64.3631 62.1552 63.9574 62.552C63.5517 62.9488 63.0017 63.172 62.428 63.1726L62.428 63.1726ZM2.16401 0.847079C1.81977 0.847408 1.48973 0.981292 1.24632 1.21935C1.00291 1.45741 0.866021 1.7802 0.865686 2.11687L0.865686 61.0566C0.866021 61.3932 1.00291 61.716 1.24632 61.9541C1.48973 62.1922 1.81977 62.326 2.16401 62.3264L62.428 62.3264C62.7722 62.326 63.1022 62.1922 63.3457 61.9541C63.5891 61.716 63.726 61.3932 63.7263 61.0566L63.7263 2.11687C63.726 1.7802 63.5891 1.45741 63.3457 1.21935C63.1022 0.981292 62.7722 0.847408 62.428 0.847079L2.16401 0.847079Z",
                  fill: "rgba(204,204,204,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="24.78%"
              bottom="54.77%"
              left="34.59%"
              right="44.9%"
              {...getOverrideProps(overrides, "Path 8")}
            ></Icon>
            <Icon
              width="92.4267578125px"
              height="0.8466796875px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 92.4267578125,
                height: 0.8466796875,
              }}
              paths={[
                {
                  d: "M92.4268 0L0 0L0 0.846663L92.4268 0.846663L92.4268 0Z",
                  fill: "rgba(204,204,204,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="59.85%"
              bottom="39.88%"
              left="29.34%"
              right="41.32%"
              {...getOverrideProps(overrides, "Rectangle 1")}
            ></Icon>
            <Icon
              width="5.837890625px"
              height="5.70947265625px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.837890625,
                height: 5.70947265625,
              }}
              paths={[
                {
                  d: "M2.91889 5.70951C4.53095 5.70951 5.83778 4.43139 5.83778 2.85475C5.83778 1.27812 4.53095 0 2.91889 0C1.30683 0 0 1.27812 0 2.85475C0 4.43139 1.30683 5.70951 2.91889 5.70951Z",
                  fill: "rgba(249,168,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="56.29%"
              bottom="41.86%"
              left="29.34%"
              right="68.8%"
              {...getOverrideProps(overrides, "Ellipse 2")}
            ></Icon>
            <Icon
              width="92.4267578125px"
              height="0.8466796875px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 92.4267578125,
                height: 0.8466796875,
              }}
              paths={[
                {
                  d: "M92.4268 0L0 0L0 0.846663L92.4268 0.846663L92.4268 0Z",
                  fill: "rgba(204,204,204,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="69.08%"
              bottom="30.64%"
              left="29.34%"
              right="41.32%"
              {...getOverrideProps(overrides, "Rectangle 2")}
            ></Icon>
            <Icon
              width="5.837890625px"
              height="5.70947265625px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.837890625,
                height: 5.70947265625,
              }}
              paths={[
                {
                  d: "M2.91889 5.70949C4.53095 5.70949 5.83778 4.43138 5.83778 2.85474C5.83778 1.27811 4.53095 0 2.91889 0C1.30683 0 0 1.27811 0 2.85474C0 4.43138 1.30683 5.70949 2.91889 5.70949Z",
                  fill: "rgba(249,168,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="65.53%"
              bottom="32.63%"
              left="29.34%"
              right="68.8%"
              {...getOverrideProps(overrides, "Ellipse 3")}
            ></Icon>
            <Icon
              width="33.015625px"
              height="13.7353515625px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 33.015625,
                height: 13.7353515625,
              }}
              paths={[
                {
                  d: "M31.1124 13.7352L1.90307 13.7352C1.39852 13.7347 0.914781 13.5384 0.558006 13.1895C0.20123 12.8406 0.000551864 12.3674 0 11.874L0 1.86125C0.000550747 1.36778 0.201229 0.89468 0.558006 0.545744C0.914782 0.196808 1.39852 0.000538644 1.90307 0L31.1124 0C31.617 0.000537552 32.1007 0.196807 32.4575 0.545744C32.8143 0.89468 33.015 1.36778 33.0155 1.86125L33.0155 11.874C33.015 12.3674 32.8143 12.8406 32.4575 13.1895C32.1007 13.5384 31.617 13.7347 31.1124 13.7352L31.1124 13.7352Z",
                  fill: "rgba(249,168,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="75.16%"
              bottom="20.4%"
              left="48.27%"
              right="41.25%"
              {...getOverrideProps(overrides, "Vector35212614")}
            ></Icon>
            <Icon
              width="5.837890625px"
              height="5.70947265625px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.837890625,
                height: 5.70947265625,
              }}
              paths={[
                {
                  d: "M2.91889 5.70951C4.53095 5.70951 5.83778 4.43139 5.83778 2.85475C5.83778 1.27812 4.53095 0 2.91889 0C1.30684 0 0 1.27812 0 2.85475C0 4.43139 1.30684 5.70951 2.91889 5.70951Z",
                  fill: "rgba(249,168,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="56.29%"
              bottom="41.86%"
              left="32.37%"
              right="65.78%"
              {...getOverrideProps(overrides, "Ellipse 7")}
            ></Icon>
            <Icon
              width="5.837890625px"
              height="5.70947265625px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.837890625,
                height: 5.70947265625,
              }}
              paths={[
                {
                  d: "M2.91889 5.70951C4.53095 5.70951 5.83779 4.43139 5.83779 2.85475C5.83779 1.27812 4.53095 0 2.91889 0C1.30684 0 0 1.27812 0 2.85475C0 4.43139 1.30684 5.70951 2.91889 5.70951Z",
                  fill: "rgba(249,168,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="56.29%"
              bottom="41.86%"
              left="35.39%"
              right="62.76%"
              {...getOverrideProps(overrides, "Ellipse 8")}
            ></Icon>
            <Icon
              width="5.837890625px"
              height="5.70947265625px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.837890625,
                height: 5.70947265625,
              }}
              paths={[
                {
                  d: "M2.91889 5.70949C4.53095 5.70949 5.83778 4.43138 5.83778 2.85474C5.83778 1.27811 4.53095 0 2.91889 0C1.30684 0 0 1.27811 0 2.85474C0 4.43138 1.30684 5.70949 2.91889 5.70949Z",
                  fill: "rgba(249,168,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="65.53%"
              bottom="32.63%"
              left="32.37%"
              right="65.78%"
              {...getOverrideProps(overrides, "Ellipse 9")}
            ></Icon>
            <Icon
              width="5.837890625px"
              height="5.70947265625px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.837890625,
                height: 5.70947265625,
              }}
              paths={[
                {
                  d: "M2.91889 5.70949C4.53095 5.70949 5.83779 4.43138 5.83779 2.85474C5.83779 1.27811 4.53095 0 2.91889 0C1.30684 0 0 1.27811 0 2.85474C0 4.43138 1.30684 5.70949 2.91889 5.70949Z",
                  fill: "rgba(249,168,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="65.53%"
              bottom="32.63%"
              left="35.39%"
              right="62.76%"
              {...getOverrideProps(overrides, "Ellipse 10")}
            ></Icon>
            <Icon
              width="305.9931640625px"
              height="1.0078125px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 305.9931640625,
                height: 1.0078125,
              }}
              paths={[
                {
                  d: "M304.816 1.00798L1.17653 1.00798C0.526522 1.00798 0 0.782138 0 0.504191C0 0.226243 0.526522 0 1.17653 0L304.816 0C305.466 0 305.993 0.22583 305.993 0.504191C305.993 0.782551 305.466 1.00798 304.816 1.00798Z",
                  fill: "rgba(63,61,86,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="99.67%"
              bottom="0%"
              left="2.86%"
              right="0%"
              {...getOverrideProps(overrides, "Path 88")}
            ></Icon>
            <Icon
              width="33.919921875px"
              height="20.6201171875px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 33.919921875,
                height: 20.6201171875,
              }}
              paths={[
                {
                  d: "M6.09935 12.5245C6.3068 12.6172 6.50631 12.7261 6.69597 12.8501L25.6642 4.93224L26.3413 0.0453145L33.9204 0L33.4726 11.2081L8.43671 17.6836C8.38404 17.8538 8.32086 18.0207 8.24748 18.1834C7.88551 18.9388 7.30341 19.5727 6.57427 20.0056C5.84512 20.4385 5.00144 20.651 4.1492 20.6165C3.29695 20.582 2.47414 20.302 1.78409 19.8116C1.09403 19.3213 0.567496 18.6424 0.270621 17.8603C-0.026255 17.0783 -0.0802458 16.2278 0.115438 15.4159C0.311123 14.6039 0.74776 13.8665 1.3705 13.2964C1.99324 12.7264 2.7743 12.3489 3.61563 12.2116C4.45697 12.0743 5.32105 12.1831 6.09935 12.5245L6.09935 12.5245Z",
                  fill: "rgba(255,184,184,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="61.46%"
              bottom="31.86%"
              left="73.87%"
              right="15.36%"
              {...getOverrideProps(overrides, "Vector35212620")}
            ></Icon>
            <Icon
              width="7.65234375px"
              height="19.55908203125px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 7.65234375,
                height: 19.55908203125,
              }}
              paths={[
                {
                  d: "M7.65119 19.5589L2.46637 19.5589L0 0L7.65204 0.000429163L7.65119 19.5589Z",
                  fill: "rgba(255,184,184,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="92.06%"
              bottom="1.61%"
              left="83.09%"
              right="14.48%"
              {...getOverrideProps(overrides, "Vector35212621")}
            ></Icon>
            <Icon
              width="16.294921875px"
              height="6.1572265625px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 16.294921875,
                height: 6.1572265625,
              }}
              paths={[
                {
                  d: "M6.29572 0L16.2948 0L16.2948 6.1574L1.44236e-12 6.1574C-1.12162e-06 4.52436 0.66329 2.9582 1.84396 1.80347C3.02464 0.648735 4.62599 5.48483e-06 6.29572 0Z",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="97.92%"
              bottom="0.09%"
              left="80.7%"
              right="14.13%"
              {...getOverrideProps(overrides, "Vector35212622")}
            ></Icon>
            <Icon
              width="9.5751953125px"
              height="19.9619140625px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 9.5751953125,
                height: 19.9619140625,
              }}
              paths={[
                {
                  d: "M9.5754 19.4646L4.41554 19.9617L0 0.733742L7.61526 0L9.5754 19.4646Z",
                  fill: "rgba(255,184,184,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="91.62%"
              bottom="1.92%"
              left="88.88%"
              right="8.08%"
              {...getOverrideProps(overrides, "Vector35212623")}
            ></Icon>
            <Icon
              width="16.833984375px"
              height="7.68994140625px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 16.833984375,
                height: 7.68994140625,
              }}
              paths={[
                {
                  d: "M6.29441 0L16.2915 0L16.2915 6.15874L1.44206e-12 6.15874C-5.5525e-07 5.34997 0.162803 4.54911 0.479127 3.8019C0.795451 3.05469 1.25911 2.37575 1.8436 1.80386C2.42809 1.23197 3.12199 0.778304 3.88566 0.468799C4.64934 0.159293 5.46781 -1.41098e-13 6.29441 0Z",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="97.93%"
              bottom="0.08%"
              left="87.08%"
              right="7.75%"
              transformOrigin="top left"
              transform="rotate(-5.5deg)"
              {...getOverrideProps(overrides, "Vector35212624")}
            ></Icon>
            <Icon
              width="20.7744140625px"
              height="20.3173828125px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 20.7744140625,
                height: 20.3173828125,
              }}
              paths={[
                {
                  d: "M10.387 20.3175C16.1236 20.3175 20.774 15.7693 20.774 10.1587C20.774 4.54822 16.1236 0 10.387 0C4.65041 0 0 4.54822 0 10.1587C0 15.7693 4.65041 20.3175 10.387 20.3175Z",
                  fill: "rgba(255,184,184,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="48.19%"
              bottom="45.24%"
              left="82.68%"
              right="10.73%"
              {...getOverrideProps(overrides, "Vector35212625")}
            ></Icon>
            <Icon
              width="41.3896484375px"
              height="71.49169921875px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 41.3896484375,
                height: 71.49169921875,
              }}
              paths={[
                {
                  d: "M13.5392 71.4917C13.0936 71.4929 12.6619 71.34 12.3203 71.0603C11.9787 70.7805 11.7491 70.3917 11.672 69.9625C8.9884 55.3928 0.216433 7.75307 0.00662534 6.43347C0.00198949 6.40312 -0.00022125 6.37246 1.74489e-05 6.34178L1.74489e-05 2.78972C-0.000328233 2.66034 0.0410005 2.53414 0.118134 2.42902L1.27699 0.841626C1.33205 0.765264 1.40428 0.702277 1.48811 0.657465C1.57194 0.612652 1.66516 0.587207 1.76061 0.583118C8.36726 0.280181 30.004 -0.60761 31.0493 0.669582C32.0991 1.95323 31.7282 5.84253 31.6431 6.60917L31.6473 6.68917L41.3679 67.4881C41.444 67.973 41.3218 68.4677 41.0278 68.8651C40.7338 69.2626 40.2916 69.5309 39.7969 69.6119L33.7255 70.5902C33.2733 70.6612 32.8101 70.5712 32.42 70.3364C32.03 70.1017 31.7391 69.7378 31.6002 69.311C29.7223 63.4424 23.4258 43.7009 21.2436 36.0621C21.2299 36.0137 21.1988 35.9718 21.1559 35.9443C21.113 35.9168 21.0613 35.9054 21.0105 35.9125C20.9597 35.9195 20.9132 35.9444 20.8798 35.9825C20.8464 36.0206 20.8283 36.0693 20.8289 36.1194C20.938 43.4013 21.2014 61.9799 21.2923 68.3965L21.3022 69.0876C21.3062 69.5555 21.1307 70.0078 20.8102 70.3552C20.4897 70.7026 20.0476 70.9198 19.5714 70.9638L13.7168 71.4841C13.6573 71.4893 13.5978 71.4917 13.5392 71.4917Z",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="73.97%"
              bottom="2.89%"
              left="79.21%"
              right="7.65%"
              {...getOverrideProps(overrides, "Vector35212626")}
            ></Icon>
            <Icon
              width="35.830078125px"
              height="62.69140625px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 35.830078125,
                height: 62.69140625,
              }}
              paths={[
                {
                  d: "M14.3863 0.945045C12.5736 1.99893 11.4889 3.93563 10.8665 5.90636C9.71414 9.55491 9.0205 13.3272 8.80091 17.1398L8.14307 28.5556L0 58.8196C7.05774 64.66 11.1289 63.3327 20.6295 58.5553C30.1301 53.778 31.2158 60.1482 31.2158 60.1482L33.1156 34.3974L35.83 6.25842C35.2207 5.54086 34.5311 4.89238 33.774 4.32514C31.2651 2.41707 28.3461 1.09081 25.2369 0.446332C22.1278 -0.19815 18.9096 -0.144053 15.825 0.604542L14.3863 0.945045Z",
                  fill: "rgba(249,168,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="55.75%"
              bottom="23.96%"
              left="79.32%"
              right="9.31%"
              {...getOverrideProps(overrides, "Path 99")}
            ></Icon>
            <Icon
              width="33.8251953125px"
              height="22.80029296875px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 33.8251953125,
                height: 22.80029296875,
              }}
              paths={[
                {
                  d: "M5.97319 14.3855C6.19222 14.466 6.40442 14.5634 6.6078 14.6766L25.3629 5.49556L25.6742 0.52166L33.4107 0L33.8254 11.3382L8.76154 19.4447C8.55688 20.3032 8.08984 21.0804 7.42253 21.673C6.75523 22.2656 5.91927 22.6454 5.02586 22.762C4.13244 22.8786 3.22389 22.7265 2.42106 22.3258C1.61822 21.9251 0.959153 21.2948 0.531484 20.5188C0.103815 19.7428 -0.072182 18.8579 0.0269091 17.9817C0.126 17.1055 0.495485 16.2796 1.08621 15.6138C1.67694 14.948 2.46091 14.4739 3.33388 14.2544C4.20684 14.035 5.12742 14.0807 5.97319 14.3855Z",
                  fill: "rgba(255,184,184,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="62.84%"
              bottom="29.78%"
              left="81.15%"
              right="8.11%"
              {...getOverrideProps(overrides, "Vector35212628")}
            ></Icon>
            <Icon
              width="15.34765625px"
              height="21.255859375px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 15.34765625,
                height: 21.255859375,
              }}
              paths={[
                {
                  d: "M9.91984 0.547782C14.5344 2.14067 15.3472 19.3976 15.3472 19.3976C9.91852 16.4774 3.40379 21.2561 3.40379 21.2561C3.40379 21.2561 2.04661 16.7429 0.417928 10.9024C-0.0738552 9.25962 -0.132652 7.52183 0.247 5.85082C0.626652 4.17981 1.43243 2.62991 2.58929 1.34539C2.58929 1.34539 5.30531 -1.04608 9.91984 0.547782Z",
                  fill: "rgba(249,168,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="57.64%"
              bottom="35.48%"
              left="87.5%"
              right="7.63%"
              {...getOverrideProps(overrides, "Path 101")}
            ></Icon>
            <Icon
              width="21.2529296875px"
              height="17.6943359375px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 21.2529296875,
                height: 17.6943359375,
              }}
              paths={[
                {
                  d: "M19.6965 16.8666C18.4024 15.8539 16.6367 17.6945 16.6367 17.6945L15.6013 8.5812C15.6013 8.5812 9.13041 9.33931 4.98909 8.32823C0.847773 7.31715 0.200719 11.9991 0.200719 11.9991C-0.0127796 10.1078 -0.0560683 8.20193 0.0713748 6.30328C0.330015 4.02495 3.695 1.74661 9.64812 0.227593C15.6012 -1.29143 18.7071 5.2906 18.7071 5.2906C22.8489 7.31555 20.9906 17.8793 19.6965 16.8666Z",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="46.89%"
              bottom="47.39%"
              left="82.68%"
              right="10.57%"
              {...getOverrideProps(overrides, "Path 102")}
            ></Icon>
          </View>
        </Flex>
      </Flex>
    </View>
  );
}
