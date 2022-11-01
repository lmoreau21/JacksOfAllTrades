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
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Homepage(props) {
  const { Line1, mp, overrides, ...rest } = props;
  const [
    letsGetStartedExclamationMarkColor,
    setLetsGetStartedExclamationMarkColor,
  ] = useStateMutationAction("rgba(0,0,0,1)");
  const letsGetStartedExclamationMarkOnClick = useNavigateAction({
    type: "url",
    url: "/skilllist",
  });
  const letsGetStartedExclamationMarkOnMouseLeave = () => {
    setLetsGetStartedExclamationMarkColor("#000000");
  };
  const letsGetStartedExclamationMarkOnMouseEnter = () => {
    setLetsGetStartedExclamationMarkColor("#9a4c4c");
  };
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Homepage")}
    >
      <Flex
        gap="329px"
        direction="column"
        width="1369px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="54px 0px 0px 0px"
        backgroundImage="linear-gradient(-90deg, rgba(147,38,38,1), rgba(152,152,152,0))"
        {...getOverrideProps(overrides, "Frame 423")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="731px"
          height="238.17px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 5")}
        >
          <Text
            fontFamily="Kaisei Tokumin"
            fontSize="40px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="57.91999816894531px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="122.17px"
            left="128px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Learn skills the easy way,&#xA;use Jacks of All Trades."
            {...getOverrideProps(
              overrides,
              "Learn skills the easy way, use Jacks of All Trades."
            )}
          ></Text>
          <Text
            fontFamily="Flamenco"
            fontSize="100px"
            fontWeight="400"
            color="rgba(183,183,183,1)"
            lineHeight="103.0999984741211px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="731px"
            height="109.97px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Jacks of All Trades"
            {...getOverrideProps(overrides, "The Jacks of All Trades (title)")}
          ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="1234px"
          height="464px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 6")}
        >
          <Text
            fontFamily="Kaisei Tokumin"
            fontSize="40px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="57.91999816894531px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="1234px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Are you intrested in learning new skills with ease? Are you board easily? Do you want to find a new trick to excell at? Are you sick and tired off learning usefull things? &#xA;&#xA;If you answered yes to any of the above questions, click below to start learning! Simply choose a skill to learn everytime you visit the website until you feel confident enough to complete a skill."
            {...getOverrideProps(
              overrides,
              "Are you intrested in learning new skills with ease? Are you board easily? Do you want to find a new trick to excell at? Are you sick and tired off learning usefull things? If you answered yes to any of the above questions, click below to start learning! Simply choose a skill to learn everytime you visit the website until you feel confident enough to complete a skill."
            )}
          ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="1160.38px"
          height="765px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Side quotes and images")}
        >
          <Flex
            gap="49px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 4")}
          >
            <Text
              fontFamily="Kaisei Tokumin"
              fontSize="86px"
              fontWeight="400"
              color={letsGetStartedExclamationMarkColor}
              lineHeight="124.52799987792969px"
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
              children="Let's Get Started"
              onClick={() => {
                letsGetStartedExclamationMarkOnClick();
              }}
              onMouseLeave={() => {
                letsGetStartedExclamationMarkOnMouseLeave();
              }}
              onMouseEnter={() => {
                letsGetStartedExclamationMarkOnMouseEnter();
              }}
              {...getOverrideProps(overrides, "Let\u2019s Get Started!")}
            ></Text>
            <View
              width="610px"
              height="4px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(0,0,0,1)"
              top="900px"
              {...getOverrideProps(overrides, "Line 6")}
            ></View>
            <View
              width="1160.38px"
              height="538px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "graphic")}
            >
              <Icon
                width="194.69px"
                height="186.9px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 194.6865234375,
                  height: 186.8994140625,
                }}
                paths={[
                  {
                    d: "M193.89 95.4344L190.255 121.689L181.234 186.899L0 186.899C1.41522 172.284 3.34998 151.246 5.41688 128.536C5.6206 126.268 5.83442 123.985 6.03802 121.689C11.2209 64.6012 16.8923 0 16.8923 0L40.7188 4.02617L86.9461 11.8231L105.783 14.9986L156.226 23.5185C181.376 27.7572 198.676 60.7878 193.89 95.4344L193.89 95.4344Z",
                    fill: "rgba(242,242,242,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="37.55%"
                bottom="27.71%"
                left="78.85%"
                right="4.37%"
                {...getOverrideProps(overrides, "Vector36102505")}
              ></Icon>
              <Icon
                width="61.11px"
                height="62.91px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 61.1083984375,
                  height: 62.912109375,
                }}
                paths={[
                  {
                    d: "M38.8216 0L61.1086 35.3761L18.2731 62.9121L0 19.4282L38.8216 0Z",
                    fill: "rgba(255,182,182,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="17.91%"
                bottom="70.4%"
                left="80.4%"
                right="14.33%"
                {...getOverrideProps(overrides, "Vector36102506")}
              ></Icon>
              <Icon
                width="110.42px"
                height="100.16px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 110.4248046875,
                  height: 100.162109375,
                }}
                paths={[
                  {
                    d: "M55.2124 100.162C85.7054 100.162 110.425 77.7401 110.425 50.0811C110.425 22.4221 85.7054 0 55.2124 0C24.7194 0 0 22.4221 0 50.0811C0 77.7401 24.7194 100.162 55.2124 100.162Z",
                    fill: "rgba(255,182,182,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="5.51%"
                bottom="75.87%"
                left="76.54%"
                right="13.94%"
                {...getOverrideProps(overrides, "Vector36102507")}
              ></Icon>
              <Icon
                width="130.04px"
                height="99.16px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 130.0400390625,
                  height: 99.16015625,
                }}
                paths={[
                  {
                    d: "M64.2935 71.0807C59.9094 65.0286 61.6301 61.8631 57.9599 59.639C57.9598 59.6389 56.4829 58.7439 45.9126 58.2337C43.546 42.7836 40.5917 40.9099 40.5916 40.9099C37.1868 38.7505 32.1338 39.4521 28.9902 40.7728C22.3417 43.5661 23.1126 49.5999 18.636 50.7545C12.452 52.3495 1.20092 43.3578 0.0924989 33.064C-0.81163 24.6672 5.15246 16.5119 7.51805 16.9433C9.86351 17.371 15.479 10.8683 18.511 10.9686C20.5816 11.0371 29.042 7.70164 31.3179 7.96242C33.8034 8.24726 41.9985 12.1264 42.34 11.2401C44.7131 5.0814 44.0156 3.3726 46.0293 1.61072C49.5974 -1.51133 55.4345 0.662776 64.5916 1.82997C83.4325 4.23149 86.7208 -1.40356 96.3764 2.41591C101.254 4.34533 105.335 9.54873 113.299 19.8768C124.436 34.3204 130.004 41.5422 130.04 49.9654C130.076 58.5556 125.49 58.0103 123.476 70.7273C121.234 84.8835 125.998 91.3565 120.793 95.9556C116.77 99.5101 108.594 100.354 104.298 97.2342C96.9426 91.8932 106.568 79.0054 98.4288 69.5895C93.4326 63.8096 83.3848 61.2379 78.782 64.0949C73.5776 67.3254 76.4447 76.8074 72.7849 77.7065C69.6509 78.4765 65.0575 72.1354 64.2936 71.0808L64.2935 71.0807Z",
                    fill: "rgba(47,46,65,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="3.69%"
                bottom="77.88%"
                left="75.42%"
                right="13.37%"
                {...getOverrideProps(overrides, "Vector36102508")}
              ></Icon>
              <Icon
                width="168.64px"
                height="275.67px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 168.642578125,
                  height: 275.6708984375,
                }}
                paths={[
                  {
                    d: "M168.277 164.638C166.737 188.523 160.621 196.063 158.478 224.271C158.01 230.464 157.729 237.652 157.729 246.225C157.729 248.41 157.742 250.523 157.742 252.588C157.742 256.983 157.649 261.136 157.086 265.349C156.658 268.713 155.922 272.101 154.704 275.67L35.789 275.67C35.7759 275.646 35.7759 275.622 35.7615 275.598C35.066 272.854 34.6242 270.231 34.2895 267.717C34.1823 266.916 34.0882 266.127 34.0084 265.349C33.9012 264.439 33.8071 263.54 33.7143 262.654C33.3522 259.12 32.9913 255.781 32.1338 252.588C30.9833 248.179 28.8943 244.027 24.6102 240.02C22.8572 238.381 21.1041 237.106 19.3902 235.989C19.0555 235.782 18.7339 235.576 18.3993 235.369C13.6603 232.418 9.17625 230.293 5.29356 224.271C5.2269 224.186 5.17329 224.089 5.11969 224.004C4.45036 222.947 2.71034 220.178 1.45141 216.488C0.125809 212.65 -0.676869 207.83 0.768995 202.9C4.20981 191.219 16.9534 190.053 27.3687 178.25C28.4929 176.976 29.6041 175.567 30.6617 174C35.3733 167.055 36.6453 160.935 38.1447 153.661C38.3853 152.483 38.5997 151.318 38.7735 150.189C38.9082 149.339 39.0285 148.501 39.1226 147.675C39.9514 140.742 39.5501 134.768 38.5735 129.425C35.3876 111.927 25.9894 101.096 32.6292 85.3954C34.7183 80.466 37.6767 76.7622 40.6613 73.5931C46.9795 66.8779 53.4728 62.5189 52.3486 53.8495C51.2099 45.1066 43.9008 43.9042 43.085 36.2664C42.6693 32.4054 44.0616 28.3376 46.6723 24.3426L46.6723 24.3307C55.0259 11.4713 75.8826 -0.36775 89.1347 0.00874432C91.5846 0.0698095 93.7534 0.567256 95.5601 1.52657C102.107 5.0235 99.3761 12.6613 109.403 23.3714C116.859 31.3246 125.292 34.5061 128.492 36.0115C141.169 42.0104 151.477 59.702 158.478 82.3236C158.531 82.4938 158.585 82.6633 158.639 82.8459C162.963 97.0163 166.016 113.105 167.528 129.425C168.17 136.334 168.545 143.28 168.625 150.152C168.693 155.641 168.558 160.401 168.277 164.638L168.277 164.638Z",
                    fill: "rgba(108,99,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="22.96%"
                bottom="25.8%"
                left="77.54%"
                right="7.92%"
                {...getOverrideProps(overrides, "Vector36102509")}
              ></Icon>
              <View
                padding="0px 0px 0px 0px"
                width="129.36px"
                height="223.39px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="32.68%"
                bottom="25.8%"
                left="80.09%"
                right="8.76%"
                {...getOverrideProps(overrides, "Group36102510")}
              >
                <Icon
                  width="37.91px"
                  height="36.44px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 37.912109375,
                    height: 36.439453125,
                  }}
                  paths={[
                    {
                      d: "M37.9117 7.23695L35.488 13.3569L33.9624 17.1935L30.4274 26.1185L26.3317 36.4397L0 36.4397L4.41737 26.1185L6.46591 21.3101L9.8662 13.3569L15.5687 0L37.9117 7.23695Z",
                      fill: "rgba(255,182,182,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="83.69%"
                  bottom="0%"
                  left="9.06%"
                  right="61.64%"
                  {...getOverrideProps(overrides, "Vector36102511")}
                ></Icon>
                <Icon
                  width="129.29px"
                  height="223.39px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 129.2890625,
                    height: 223.39453125,
                  }}
                  paths={[
                    {
                      d: "M129.289 27.9587C129.223 28.7484 129.129 29.6223 129.035 30.5698C127.991 40.211 125.527 57.4656 121.927 77.1487C120.026 87.5304 117.804 98.5928 115.3 109.582C109.919 133.296 103.226 156.647 95.6618 171.995C94.31 174.763 92.9177 177.265 91.498 179.475C90.4143 181.163 89.2756 182.826 88.0846 184.465C84.2294 189.844 79.9049 194.945 75.4208 199.704C75.247 199.911 75.0456 200.105 74.8456 200.311C74.1227 201.088 73.3723 201.854 72.6232 202.618C68.9549 206.37 65.2069 209.867 61.5791 213.073C57.1618 216.983 52.9039 220.444 49.0892 223.394L6.33126 223.394L6.15739 223.321L0 220.844C0 220.844 1.75309 218.974 4.68537 215.441C5.28804 214.724 5.92992 213.935 6.62671 213.073C7.48299 212.016 8.40725 210.851 9.39688 209.588C11.4585 206.941 13.8012 203.833 16.3177 200.311C21.1913 193.499 26.7461 185.121 32.3557 175.419C32.9989 174.29 33.6539 173.148 34.3101 171.994C34.3232 171.958 34.3506 171.922 34.3637 171.885C35.4749 169.918 36.5731 167.89 37.6699 165.826C46.974 148.268 49.6382 133.697 50.4017 128.974C51.4724 122.295 52.9575 112.957 52.5561 102.684C52.2881 95.9093 51.2044 88.7447 48.6211 81.6292L48.6211 81.6174C48.0852 80.1239 47.4825 78.6303 46.8001 77.1487C45.5817 74.4895 44.1358 71.8665 42.4219 69.2803C34.8592 57.8907 28.7149 57.4169 23.8282 45.0069C22.3823 41.328 19.1023 33.0226 20.1063 24.2554L20.1063 24.2435C20.2279 23.1626 20.4279 22.0699 20.6959 20.9766L20.6959 20.9648C20.7626 20.6612 20.8567 20.3458 20.9508 20.0422C21.713 17.3587 22.9719 14.699 24.8858 12.1732C28.6207 7.26816 33.7205 4.35344 38.2856 2.61742L38.3 2.60499C43.5737 0.614025 48.1257 0.188906 49.0094 0.11599C68.5667 -1.46231 83.7339 13.4486 92.0209 21.5962C95.2199 24.741 98.1522 27.3764 100.83 29.5251C121.672 46.4038 127.389 35.6207 128.874 30.0474C129.101 29.1854 129.223 28.4448 129.289 27.9587L129.289 27.9587Z",
                      fill: "rgba(108,99,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0.05%"
                  {...getOverrideProps(overrides, "Vector36102512")}
                ></Icon>
                <Icon
                  width="0.07px"
                  height="0.61px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 0.06640625,
                    height: 0.607421875,
                  }}
                  paths={[
                    {
                      d: "M0.0666724 0C0.0666724 0.0604702 0.0535872 0.26681 0 0.607131C0.0261444 0.424518 0.0405205 0.242501 0.0535994 0.0723339C0.0535994 0.0361611 0.0535935 0.0118633 0.0666724 0L0.0666724 0Z",
                      fill: "rgba(108,99,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="12.23%"
                  bottom="87.5%"
                  left="99.95%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector36102513")}
                ></Icon>
              </View>
              <Icon
                width="741.79px"
                height="21.94px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 741.787109375,
                  height: 21.94140625,
                }}
                paths={[
                  {
                    d: "M729.699 0L12.1017 0C5.43445 0 0 4.91752 0 10.9651C0 17.024 5.43445 21.9415 12.1017 21.9415L729.699 21.9415C736.365 21.9415 741.788 17.024 741.788 10.9651C741.788 4.91752 736.365 0 729.699 0Z",
                    fill: "rgba(230,230,230,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="85.39%"
                bottom="10.54%"
                left="19.19%"
                right="16.88%"
                {...getOverrideProps(overrides, "Vector36102514")}
              ></Icon>
              <Icon
                width="423.3px"
                height="21.94px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 423.302734375,
                  height: 21.94140625,
                }}
                paths={[
                  {
                    d: "M411.201 0L12.088 0C5.42138 0 0 4.91751 0 10.9645C0 17.0115 5.42137 21.9415 12.088 21.9415L411.201 21.9415C417.868 21.9415 423.303 17.0115 423.303 10.9645C423.303 4.91752 417.868 0 411.201 0L411.201 0Z",
                    fill: "rgba(230,230,230,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="95.92%"
                bottom="0%"
                left="32.92%"
                right="30.6%"
                {...getOverrideProps(overrides, "Vector36102515")}
              ></Icon>
              <Icon
                width="64.62px"
                height="53.67px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 64.623046875,
                  height: 53.6650390625,
                }}
                paths={[
                  {
                    d: "M0 17.264L45.2254 0L64.6234 36.0702L17.0982 53.6654L0 17.264Z",
                    fill: "rgba(255,182,182,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="15.13%"
                bottom="74.89%"
                left="27.12%"
                right="67.31%"
                {...getOverrideProps(overrides, "Vector36102516")}
              ></Icon>
              <Icon
                width="64.62px"
                height="53.67px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 64.623046875,
                  height: 53.6650390625,
                }}
                paths={[
                  {
                    d: "M0 17.264L45.2254 0L64.6234 36.0702L17.0982 53.6654L0 17.264Z",
                    fill: "rgba(0,0,0,0.1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="15.13%"
                bottom="74.89%"
                left="27.12%"
                right="67.31%"
                {...getOverrideProps(overrides, "Vector36102517")}
              ></Icon>
              <Icon
                width="222.11px"
                height="193.55px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 222.107421875,
                  height: 193.5478515625,
                }}
                paths={[
                  {
                    d: "M177.492 3.51904L222.108 50.1464C222.108 50.1464 191.071 139.002 160.034 146.92C128.997 154.838 71.7728 193.547 71.7728 193.547L0 151.319L34.9165 104.692C34.9165 104.692 119.298 0 141.606 0C163.913 0 177.492 3.51904 177.492 3.51904L177.492 3.51904Z",
                    fill: "rgba(108,99,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="15.13%"
                bottom="48.89%"
                left="12.38%"
                right="68.48%"
                {...getOverrideProps(overrides, "Vector36102518")}
              ></Icon>
              <Icon
                width="162.49px"
                height="164.96px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 162.4931640625,
                  height: 164.955078125,
                }}
                paths={[
                  {
                    d: "M162.493 164.955L58.6357 164.955L52.0695 156.993L25.2614 124.486L19.0928 117.008C19.0928 117.008 -4.18484 78.2987 0.664673 43.1083C5.51419 7.91784 55.9491 0 55.9491 0L58.0247 0L119.769 49.2138L116.083 95.0142L135.636 124.486L162.493 164.955L162.493 164.955Z",
                    fill: "rgba(47,46,65,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="41.63%"
                bottom="27.71%"
                left="8.47%"
                right="77.52%"
                {...getOverrideProps(overrides, "Vector36102519")}
              ></Icon>
              <Icon
                width="27.84px"
                height="37.39px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 27.8359375,
                  height: 37.3896484375,
                }}
                paths={[
                  {
                    d: "M27.8362 37.3898L0 37.3898L0 0L27.8362 37.3898Z",
                    fill: "rgba(47,46,65,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="65.34%"
                bottom="27.71%"
                left="12.96%"
                right="84.64%"
                {...getOverrideProps(overrides, "Vector36102520")}
              ></Icon>
              <Icon
                width="185.45px"
                height="115.99px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 185.447265625,
                  height: 115.9873046875,
                }}
                paths={[
                  {
                    d: "M184.689 59.2256L181.226 75.5188L172.633 115.988L0 115.988C1.34806 106.917 3.19103 93.8617 5.15984 79.768C5.35389 78.3604 5.5575 76.944 5.75143 75.5188C10.6883 40.0908 16.0906 0 16.0906 0L38.7864 2.49862L82.8198 7.3373L100.763 9.30796L148.812 14.5953C172.769 17.2258 189.247 37.7243 184.689 59.2256L184.689 59.2256Z",
                    fill: "rgba(242,242,242,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="50.73%"
                bottom="27.71%"
                left="51.19%"
                right="32.83%"
                {...getOverrideProps(overrides, "Vector36102521")}
              ></Icon>
              <Icon
                width="93.63px"
                height="15.26px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 93.634765625,
                  height: 15.263671875,
                }}
                paths={[
                  {
                    d: "M93.6343 15.2639L0 15.2639C1.42573 13.7419 2.23066 12.8622 2.23066 12.8622L30.2997 8.65691L88.1349 0C88.1349 0 90.773 6.18475 93.6343 15.2639L93.6343 15.2639Z",
                    fill: "rgba(47,46,65,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="69.45%"
                bottom="27.71%"
                left="80.09%"
                right="11.84%"
                {...getOverrideProps(overrides, "Vector36102522")}
              ></Icon>
              <Icon
                width="78.65px"
                height="54.16px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 78.6533203125,
                  height: 54.1591796875,
                }}
                paths={[
                  {
                    d: "M37.9333 0L78.6532 52.2351L7.6243 54.1591L0 5.07042L37.9333 0Z",
                    fill: "rgba(160,97,106,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="21.61%"
                bottom="68.32%"
                left="50.66%"
                right="42.56%"
                {...getOverrideProps(overrides, "Vector36102523")}
              ></Icon>
              <Icon
                width="78.65px"
                height="54.16px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 78.6533203125,
                  height: 54.1591796875,
                }}
                paths={[
                  {
                    d: "M37.9333 0L78.6532 52.2351L7.6243 54.1591L0 5.07042L37.9333 0Z",
                    fill: "rgba(0,0,0,0.1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="21.61%"
                bottom="68.32%"
                left="50.66%"
                right="42.56%"
                {...getOverrideProps(overrides, "Vector36102524")}
              ></Icon>
              <Icon
                width="64.96px"
                height="103px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 64.9599609375,
                  height: 102.9990234375,
                }}
                paths={[
                  {
                    d: "M37.1454 19.8918C31.9206 6.22025 19.9085 -2.41632 10.3169 0.601197C0.725354 3.61872 -2.81226 17.146 2.41646 30.8218C4.42251 36.3107 7.84856 41.284 12.408 45.3256L35.3524 102.999L64.9603 92.6556L39.1978 36.8981C40.0208 31.162 39.3171 25.3305 37.1454 19.8918L37.1454 19.8918Z",
                    fill: "rgba(160,97,106,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="38.03%"
                bottom="42.82%"
                left="33.42%"
                right="60.98%"
                {...getOverrideProps(
                  overrides,
                  "uuid-ae755ff6-bb09-410e-86b1-7d1b81a37005-160"
                )}
              ></Icon>
              <Icon
                width="192.52px"
                height="240.05px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 192.5234375,
                  height: 240.0517578125,
                }}
                paths={[
                  {
                    d: "M192.523 49.0466L192.467 102.281L187.007 121.944L175.775 162.386L167.599 199.583L161.508 227.295L159.336 237.192C157.696 238.186 156.067 239.137 154.437 240.051L12.5699 240.051C4.51002 235.662 0 232.248 0 232.248C0 232.248 2.23077 230.348 4.78162 227.295C9.08799 222.14 14.2963 213.694 11.1054 205.626C10.4362 203.937 10.2616 201.879 10.4652 199.583C11.7649 184.433 29.2813 158.814 29.2813 158.814L25.6539 120.791L24.0633 104.128L35.2783 22.8821L71.8339 3.60661L78.1451 3.05274L140.442 0L166.19 1.34595L167.364 1.63634L192.523 49.0467L192.523 49.0466Z",
                    fill: "rgba(204,204,204,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="27.67%"
                bottom="27.71%"
                left="43.78%"
                right="39.62%"
                {...getOverrideProps(overrides, "Vector36102526")}
              ></Icon>
              <View
                padding="0px 0px 0px 0px"
                width="62.92px"
                height="238.9px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="27.88%"
                bottom="27.71%"
                left="56.97%"
                right="37.6%"
                {...getOverrideProps(overrides, "Group36102527")}
              >
                <Icon
                  width="32.43px"
                  height="14.97px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 32.43359375,
                    height: 14.9736328125,
                  }}
                  paths={[
                    {
                      d: "M32.4335 14.9735L1.39669 14.9735L0.0291283 2.21701L0 1.96187L8.78735 1.4164L31.648 0L32.0456 7.63627L32.356 13.4956L32.4335 14.9735Z",
                      fill: "rgba(255,182,182,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="93.73%"
                  bottom="0%"
                  left="15.58%"
                  right="32.87%"
                  {...getOverrideProps(overrides, "Vector36102528")}
                ></Icon>
                <Icon
                  width="62.92px"
                  height="238.9px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 62.9169921875,
                    height: 238.8994140625,
                  }}
                  paths={[
                    {
                      d: "M49.8796 60.7651L62.9174 130.152L52.2776 198.43L50.6192 209.058L47.69 227.823L46.788 233.594L46.8172 234.219L47.0403 238.899L10.184 238.899L8.82596 226.143L8.70969 224.999L5.93568 198.87L5.88727 198.43L0 143.023L11.5418 102.976L12.3954 100.029L12.3954 100.02L17.417 31.4515L13.5277 0.290392L13.489 0C13.5665 0.0440291 13.6345 0.0880626 13.712 0.131995C13.9158 0.246366 14.1194 0.360732 14.3134 0.483919C36.9703 13.522 50.4714 36.3958 49.8796 60.7651L49.8796 60.7651Z",
                      fill: "rgba(204,204,204,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector36102529")}
                ></Icon>
              </View>
              <Icon
                width="154.75px"
                height="181.07px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 154.7509765625,
                  height: 181.0693359375,
                }}
                paths={[
                  {
                    d: "M154.751 13.2969L140.578 0C140.578 0 110.237 12.4068 108.725 19.29C107.213 26.1732 53.6431 127.269 53.6431 127.269L30.337 70.8073L0 89.1794C0 89.1794 24.3424 176.839 47.1077 180.954C69.873 185.07 146.172 77.2007 146.172 77.2007L154.751 13.2969L154.751 13.2969Z",
                    fill: "rgba(204,204,204,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="31.92%"
                bottom="34.42%"
                left="34.63%"
                right="52.04%"
                {...getOverrideProps(overrides, "Vector36102530")}
              ></Icon>
              <Icon
                width="1160.38px"
                height="51.4px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 1160.3779296875,
                  height: 51.3994140625,
                }}
                paths={[
                  {
                    d: "M1132.04 0L28.3266 0C12.7044 0 0 11.5355 0 25.7058C0 39.8762 12.7043 51.3998 28.3266 51.3998L1132.04 51.3998C1147.66 51.3998 1160.38 39.8768 1160.38 25.7058C1160.38 11.5349 1147.66 0 1132.04 0Z",
                    fill: "rgba(230,230,230,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="64.65%"
                bottom="25.8%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Vector36102531")}
              ></Icon>
              <Icon
                width="227.48px"
                height="123.17px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 227.4765625,
                  height: 123.166015625,
                }}
                paths={[
                  {
                    d: "M227.472 16.5148L225.326 107.344C225.118 116.137 217.201 123.166 207.505 123.166L23.2999 123.166C13.8334 123.166 6.01815 116.455 5.50141 107.881L0.0271256 17.051C-0.531129 7.78841 7.59874 0 17.8256 0L209.651 0C219.645 0 227.686 7.45171 227.472 16.5148L227.472 16.5148Z",
                    fill: "rgba(63,61,86,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="47.02%"
                bottom="30.08%"
                left="40.22%"
                right="40.18%"
                {...getOverrideProps(overrides, "Vector36102532")}
              ></Icon>
              <Icon
                width="88.14px"
                height="79.95px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 88.1435546875,
                  height: 79.951171875,
                }}
                paths={[
                  {
                    d: "M44.0717 79.9514C68.4118 79.9514 88.1433 62.0537 88.1433 39.9757C88.1433 17.8977 68.4118 0 44.0717 0C19.7316 0 0 17.8977 0 39.9757C0 62.0537 19.7316 79.9514 44.0717 79.9514Z",
                    fill: "rgba(255,182,182,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="7.56%"
                bottom="77.58%"
                left="30.39%"
                right="62.01%"
                {...getOverrideProps(overrides, "Vector36102533")}
              ></Icon>
              <Icon
                width="83.27px"
                height="184.13px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 83.2705078125,
                  height: 184.1298828125,
                }}
                paths={[
                  {
                    d: "M45.4441 7.03809L50.2936 54.5452L83.2703 175.072L54.7807 184.13L6.64803 52.7857L0 0L45.4441 7.03809Z",
                    fill: "rgba(255,182,182,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="33.12%"
                bottom="32.65%"
                left="23.92%"
                right="68.9%"
                {...getOverrideProps(overrides, "Vector36102534")}
              ></Icon>
              <Icon
                width="227.48px"
                height="123.17px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 227.4755859375,
                  height: 123.166015625,
                }}
                paths={[
                  {
                    d: "M227.472 16.5148L225.326 107.344C225.118 116.137 217.201 123.166 207.505 123.166L23.2998 123.166C13.8334 123.166 6.01813 116.455 5.50139 107.881L0.0271256 17.051C-0.531129 7.78841 7.59874 0 17.8256 0L209.651 0C219.645 0 227.686 7.45171 227.472 16.5148L227.472 16.5148Z",
                    fill: "rgba(63,61,86,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="47.02%"
                bottom="30.08%"
                left="7.11%"
                right="73.29%"
                {...getOverrideProps(overrides, "Vector36102535")}
              ></Icon>
              <Icon
                width="69.61px"
                height="27.93px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 69.611328125,
                  height: 27.927734375,
                }}
                paths={[
                  {
                    d: "M34.8056 27.928C54.0282 27.928 69.6112 21.6761 69.6112 13.964C69.6112 6.2519 54.0282 0 34.8056 0C15.583 0 0 6.2519 0 13.964C0 21.6761 15.583 27.928 34.8056 27.928Z",
                    fill: "rgba(255,182,182,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="64.84%"
                bottom="29.97%"
                left="28.55%"
                right="65.45%"
                {...getOverrideProps(overrides, "Vector36102536")}
              ></Icon>
              <Icon
                width="77.71px"
                height="109.55px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 77.71484375,
                  height: 109.5546875,
                }}
                paths={[
                  {
                    d: "M0 97.5899L19.883 1.47082C19.883 1.47082 75.1674 -5.56728 77.1072 11.1482C79.047 27.8637 75.7211 109.554 75.7211 109.554L0 97.5899L0 97.5899Z",
                    fill: "rgba(108,99,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="17.64%"
                bottom="62%"
                left="21.95%"
                right="71.36%"
                {...getOverrideProps(overrides, "Vector36102537")}
              ></Icon>
              <Icon
                width="184.27px"
                height="262.24px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 184.26953125,
                  height: 262.2373046875,
                }}
                paths={[
                  {
                    d: "M110.629 83.2066C110.629 83.2066 137.891 74.3809 149.391 69.6322C160.891 64.8836 183.738 98.0051 184.246 80.5125C184.754 63.0199 176.86 55.6843 176.86 55.6843C176.86 55.6843 174.888 17.4167 132.385 22.2011C132.385 22.2011 141.734 3.05542 111.045 0.0948963C80.3565 -2.86563 32.6128 64.3548 36.8886 74.4005C41.1644 84.4463 46.2901 92.7515 34.1592 103.493C22.0283 114.234 -0.686993 174.854 16.5958 191.166C33.8786 207.479 35.0126 214.557 23.1712 224.706C11.3298 234.854 -16.6601 256.92 13.6034 260.751C43.867 264.582 10.8347 261.721 33.3966 243.719C55.9585 225.718 88.8813 226.454 76.5884 197.572C64.2955 168.691 85.6527 127.304 82.9804 121.025C80.308 114.746 88.9677 74.8771 88.9677 74.8771C88.9677 74.8771 109.122 72.1913 110.629 83.2066L110.629 83.2066Z",
                    fill: "rgba(47,46,65,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0.69%"
                bottom="50.57%"
                left="23.13%"
                right="60.99%"
                {...getOverrideProps(overrides, "Vector36102538")}
              ></Icon>
              <View
                padding="0px 0px 0px 0px"
                width="125.03px"
                height="150.61px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="72.01%"
                left="47.57%"
                right="41.65%"
                {...getOverrideProps(overrides, "Group36102539")}
              >
                <Icon
                  width="95.95px"
                  height="87.03px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 95.9501953125,
                    height: 87.033203125,
                  }}
                  paths={[
                    {
                      d: "M47.9752 87.0329C74.4711 87.0329 95.9504 67.5499 95.9504 43.5164C95.9504 19.483 74.4711 0 47.9752 0C21.4792 0 0 19.483 0 43.5164C0 67.5499 21.4792 87.0329 47.9752 87.0329Z",
                      fill: "rgba(160,97,106,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="31.98%"
                  bottom="10.24%"
                  left="3.2%"
                  right="20.06%"
                  {...getOverrideProps(overrides, "Vector36102540")}
                ></Icon>
                <Icon
                  width="125.03px"
                  height="138.07px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 125.033203125,
                    height: 138.0654296875,
                  }}
                  paths={[
                    {
                      d: "M55.8049 33.1705C54.4167 33.9055 52.5573 32.7934 52.1121 31.3924C51.667 29.9914 52.1855 28.5039 52.6997 27.1225L55.2882 20.1682C57.124 15.2361 59.0725 10.1316 63.0484 6.37766C69.0495 0.711622 78.5866 -0.729791 87.1719 0.314462C98.1971 1.65549 109.075 7.07067 114.202 16.0254C119.328 24.9801 117.145 37.4751 107.882 43.062C121.084 56.7872 125.686 72.0835 124.96 90.2865C124.233 108.489 102.364 125.242 88.102 138.065C84.9172 136.314 82.0218 128.107 83.7732 125.126C85.5246 122.144 83.0152 118.69 85.1842 115.944C87.3533 113.198 89.168 117.571 86.9751 114.84C85.5914 113.117 90.992 109.153 88.9352 108.122C78.9867 103.134 75.6779 91.8859 69.4296 83.2725C61.893 72.8831 48.994 65.8473 35.3435 64.6801C27.824 64.0371 19.8816 65.2017 13.7181 69.1615C7.55462 73.1213 3.5644 80.1973 4.99365 86.9245C1.29211 83.5154 -0.550418 78.5193 0.144542 73.7762C0.839503 69.033 4.05673 64.6469 8.61144 62.2331C5.84197 53.9258 8.21451 44.37 14.6426 37.9416C21.0706 31.5131 47.1463 32.608 56.5307 34.2999L55.8049 33.1705L55.8049 33.1705Z",
                      fill: "rgba(47,46,65,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="8.33%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector36102541")}
                ></Icon>
                <Icon
                  width="39.47px"
                  height="85.68px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 39.466796875,
                    height: 85.6767578125,
                  }}
                  paths={[
                    {
                      d: "M0 0C12.4294 1.21705 21.4038 10.9831 28.982 20.002C33.3498 25.2003 37.9251 30.9409 37.8155 37.4761C37.7046 44.0834 32.8343 49.7506 30.5067 56.0123C26.7022 66.2472 30.4102 78.4245 39.4666 85.4374C30.5178 86.9777 20.844 80.8915 19.2991 72.7492C17.5007 63.2707 25.4221 54.1224 24.484 44.5422C23.6574 36.102 16.3247 29.6062 10.0907 23.2954C3.85673 16.9846 -1.99801 8.6104 0.869927 0.546113L0 0L0 0Z",
                      fill: "rgba(47,46,65,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="43.11%"
                  bottom="0%"
                  left="45.8%"
                  right="22.64%"
                  {...getOverrideProps(overrides, "Vector36102542")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="223.1px"
                height="234.07px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="27.76%"
                bottom="28.73%"
                left="67.17%"
                right="13.6%"
                {...getOverrideProps(overrides, "Group36102543")}
              >
                <Icon
                  width="95.92px"
                  height="63.94px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 95.91796875,
                    height: 63.935546875,
                  }}
                  paths={[
                    {
                      d: "M15.6429 33.811C3.33142 40.1627 -3.03497 51.0733 1.42275 58.1795C5.88049 65.2858 19.4725 65.8959 31.7874 59.5405C36.7451 57.0629 40.9767 53.5445 44.128 49.2795L95.9176 21.7694L81.1671 0L31.6778 29.4312C26.0239 29.7086 20.5255 31.2104 15.6429 33.811Z",
                      fill: "rgba(255,182,182,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="72.69%"
                  bottom="0%"
                  left="0%"
                  right="57.01%"
                  {...getOverrideProps(
                    overrides,
                    "uuid-aec20554-f6ec-4c5b-9d97-717cd04239bf-161"
                  )}
                ></Icon>
                <Icon
                  width="178.51px"
                  height="208.66px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 178.509765625,
                    height: 208.6572265625,
                  }}
                  paths={[
                    {
                      d: "M146.403 2.21504C144.855 1.65869 131.275 -3.00596 118.878 3.15272C104.636 10.2274 102.437 26.3772 101.665 32.0416C99.8831 45.1265 105.133 48.0593 106.242 61.3061C108.315 86.0895 113.783 57.8165 105.051 69.129C102.029 73.0448 71.1595 133.725 54.1353 145.611C21.0252 168.727 0 185.007 0 185.007L24.003 208.658C24.003 208.658 61.9322 199.491 95.4564 179.746C129.845 159.492 147.039 149.365 160.341 129.554C161.487 127.848 188.897 85.627 174.176 38.9405C170.819 28.2915 164.666 8.7801 146.403 2.21504L146.403 2.21504Z",
                      fill: "rgba(108,99,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="10.86%"
                  left="19.99%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector36102545")}
                ></Icon>
              </View>
              <Icon
                width="227.48px"
                height="123.17px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 227.4755859375,
                  height: 123.166015625,
                }}
                paths={[
                  {
                    d: "M227.472 16.5148L225.326 107.344C225.118 116.137 217.201 123.166 207.505 123.166L23.2998 123.166C13.8333 123.166 6.01811 116.455 5.50137 107.881L0.0271258 17.051C-0.531129 7.78841 7.59869 0 17.8255 0L209.651 0C219.645 0 227.686 7.45171 227.472 16.5148L227.472 16.5148Z",
                    fill: "rgba(63,61,86,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="47.02%"
                bottom="30.08%"
                left="74.71%"
                right="5.69%"
                {...getOverrideProps(overrides, "Vector36102546")}
              ></Icon>
            </View>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
