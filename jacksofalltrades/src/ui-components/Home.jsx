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
export default function Home(props) {
  const { overrides, ...rest } = props;
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
    setLetsGetStartedExclamationMarkColor("#ffffff");
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
      {...getOverrideProps(overrides, "Home")}
    >
      <Flex
        gap="50px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="54px 0px 88px 0px"
        backgroundImage="linear-gradient(0deg, rgba(152,152,152,0), rgba(147,43,43,0.9533), rgba(147,38,38,1))"
        {...getOverrideProps(overrides, "Frame 423")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 5")}
        >
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
            width="1160px"
            height="138px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Jacks of All Trades"
            {...getOverrideProps(overrides, "The Jacks of All Trades (title)")}
          ></Text>
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
            width="786px"
            height="112px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Learn skills the easy way,&#xA;use Jacks of All Trades."
            {...getOverrideProps(
              overrides,
              "Learn skills the easy way, use Jacks of All Trades."
            )}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="63px 57px 78px 57px"
          {...getOverrideProps(overrides, "Frame 6")}
        >
          <Text
            fontFamily="Dekko"
            fontSize="35px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="50.01499938964844px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="1064px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
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
          width="unset"
          height="757.99px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          {...getOverrideProps(overrides, "Side quotes and images")}
        >
          <Flex
            gap="49px"
            direction="column"
            width="1178px"
            height="757.99px"
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
              children="Let’s Get Started!"
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
              width="905px"
              height="365px"
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
                width="151.84px"
                height="126.8px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 151.83984375,
                  height: 126.7998046875,
                }}
                paths={[
                  {
                    d: "M151.218 64.7464L148.383 82.5584L141.347 126.8L0 126.8C1.10376 116.884 2.61271 102.611 4.22473 87.2037C4.38361 85.6649 4.55037 84.1165 4.70916 82.5584C8.75135 43.8279 13.1746 0 13.1746 0L31.7573 2.73151L67.8108 8.02125L82.5022 10.1756L121.843 15.9559C141.458 18.8315 154.951 41.2408 151.218 64.7464L151.218 64.7464Z",
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
                {...getOverrideProps(overrides, "Vector35498048")}
              ></Icon>
              <Icon
                width="47.66px"
                height="42.68px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 47.65966796875,
                  height: 42.68212890625,
                }}
                paths={[
                  {
                    d: "M30.2777 0L47.6597 24.0005L14.2515 42.682L0 13.1808L30.2777 0Z",
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
                {...getOverrideProps(overrides, "Vector35498049")}
              ></Icon>
              <Icon
                width="86.12px"
                height="67.95px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 86.12255859375,
                  height: 67.9541015625,
                }}
                paths={[
                  {
                    d: "M43.0611 67.9539C66.8432 67.9539 86.1224 52.7419 86.1224 33.9769C86.1224 15.212 66.8432 0 43.0611 0C19.2791 0 0 15.212 0 33.9769C0 52.7419 19.2791 67.9539 43.0611 67.9539Z",
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
                {...getOverrideProps(overrides, "Vector35498050")}
              ></Icon>
              <Icon
                width="101.42px"
                height="67.27px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 101.42041015625,
                  height: 67.2744140625,
                }}
                paths={[
                  {
                    d: "M50.1437 48.2239C46.7245 44.1179 48.0665 41.9703 45.2039 40.4614C45.2039 40.4613 44.0521 39.8542 35.8081 39.508C33.9623 29.026 31.6582 27.7549 31.6581 27.7548C29.0026 26.2898 25.0617 26.7658 22.61 27.6619C17.4247 29.5569 18.0259 33.6505 14.5346 34.4338C9.71156 35.5159 0.936622 29.4156 0.0721415 22.4319C-0.633005 16.7352 4.0185 11.2023 5.86346 11.495C7.69273 11.7852 12.0723 7.3735 14.4371 7.44155C16.052 7.48802 22.6503 5.22509 24.4254 5.40201C26.3639 5.59526 32.7554 8.22704 33.0217 7.62575C34.8726 3.44742 34.3286 2.2881 35.8991 1.09277C38.6819 -1.02535 43.2344 0.449653 50.3761 1.24152C65.0705 2.87081 67.6351 -0.952228 75.1657 1.63905C78.9698 2.94804 82.1528 6.47823 88.3637 13.4852C97.0495 23.2843 101.392 28.1838 101.42 33.8985C101.449 39.7264 97.8721 39.3564 96.301 47.9841C94.5522 57.5882 98.268 61.9798 94.2086 65.1C91.0713 67.5115 84.6943 68.0839 81.3438 65.9675C75.6073 62.3439 83.1145 53.6003 76.7664 47.2122C72.8698 43.2909 65.0333 41.5461 61.4435 43.4845C57.3845 45.6761 59.6206 52.1091 56.7663 52.7191C54.322 53.2415 50.7396 48.9394 50.1437 48.2239L50.1437 48.2239Z",
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
                {...getOverrideProps(overrides, "Vector35498051")}
              ></Icon>
              <Icon
                width="131.53px"
                height="187.03px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 131.52734375,
                  height: 187.025390625,
                }}
                paths={[
                  {
                    d: "M131.243 111.697C130.042 127.901 125.271 133.017 123.6 152.154C123.235 156.355 123.016 161.232 123.016 167.048C123.016 168.531 123.026 169.965 123.026 171.365C123.026 174.347 122.953 177.165 122.514 180.023C122.181 182.305 121.606 184.604 120.656 187.025L27.9125 187.025C27.9023 187.009 27.9023 186.992 27.8911 186.976C27.3486 185.114 27.004 183.335 26.743 181.63C26.6594 181.086 26.586 180.551 26.5238 180.023C26.4402 179.405 26.3668 178.796 26.2944 178.195C26.012 175.797 25.7305 173.532 25.0617 171.365C24.1645 168.374 22.5352 165.557 19.194 162.839C17.8267 161.727 16.4594 160.862 15.1228 160.104C14.8617 159.964 14.6109 159.824 14.3499 159.684C10.6539 157.682 7.15672 156.24 4.12855 152.154C4.07655 152.096 4.03475 152.03 3.99294 151.973C3.47091 151.256 2.11384 149.378 1.13198 146.874C0.0981207 144.27 -0.527902 141 0.599753 137.655C3.28331 129.73 13.2222 128.939 21.3453 120.932C22.2221 120.067 23.0888 119.111 23.9136 118.049C27.5882 113.336 28.5803 109.185 29.7498 104.25C29.9374 103.451 30.1046 102.66 30.2402 101.894C30.3452 101.317 30.439 100.749 30.5124 100.188C31.1588 95.4845 30.8458 91.4315 30.0842 87.8068C27.5995 75.9357 20.2696 68.5874 25.4481 57.9356C27.0774 54.5913 29.3848 52.0784 31.7125 49.9284C36.6401 45.3726 41.7044 42.4152 40.8276 36.5336C39.9395 30.602 34.239 29.7863 33.6028 24.6045C33.2786 21.9851 34.3644 19.2253 36.4005 16.515L36.4005 16.5069C42.9157 7.78258 59.1822 -0.249496 69.5178 0.00593248C71.4285 0.0473615 73.12 0.384848 74.5291 1.03568C79.6351 3.40814 77.5052 8.58988 85.3255 15.8561C91.1402 21.2518 97.7175 23.4103 100.213 24.4316C110.1 28.5015 118.14 40.5042 123.6 55.8515C123.642 55.967 123.683 56.082 123.725 56.2059C127.098 65.8196 129.479 76.735 130.658 87.8068C131.159 92.4942 131.452 97.2065 131.514 101.869C131.567 105.593 131.462 108.822 131.243 111.697L131.243 111.697Z",
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
                {...getOverrideProps(overrides, "Vector35498052")}
              ></Icon>
              <View
                padding="0px 0px 0px 0px"
                width="100.89px"
                height="151.56px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="32.68%"
                bottom="25.8%"
                left="80.09%"
                right="8.76%"
                {...getOverrideProps(overrides, "Group35498053")}
              >
                <Icon
                  width="29.57px"
                  height="24.72px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 29.56787109375,
                    height: 24.72216796875,
                  }}
                  paths={[
                    {
                      d: "M29.5681 4.90983L27.6777 9.06182L26.4879 11.6648L23.7309 17.7198L20.5365 24.7221L0 24.7221L3.44519 17.7198L5.04288 14.4576L7.69483 9.06182L12.1423 0L29.5681 4.90983Z",
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
                  {...getOverrideProps(overrides, "Vector35498054")}
                ></Icon>
                <Icon
                  width="100.84px"
                  height="151.56px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 100.83544921875,
                    height: 151.5595703125,
                  }}
                  paths={[
                    {
                      d: "M100.835 18.9682C100.783 19.504 100.71 20.0969 100.636 20.7397C99.8227 27.2807 97.9008 38.9869 95.0929 52.3407C93.6104 59.384 91.8771 66.8891 89.9246 74.3444C85.728 90.4331 80.5077 106.275 74.6083 116.688C73.5541 118.566 72.4682 120.263 71.361 121.762C70.5157 122.908 69.6276 124.036 68.6988 125.148C65.692 128.798 62.3192 132.258 58.8221 135.487C58.6865 135.627 58.5294 135.759 58.3734 135.899C57.8096 136.426 57.2244 136.945 56.6401 137.464C53.7792 140.01 50.856 142.382 48.0267 144.557C44.5815 147.21 41.2607 149.558 38.2855 151.559L4.93786 151.559L4.80226 151.51L0 149.829C0 149.829 1.36727 148.561 3.6542 146.164C4.12424 145.677 4.62485 145.142 5.16829 144.557C5.83612 143.84 6.55697 143.049 7.3288 142.193C8.93669 140.397 10.7638 138.288 12.7265 135.899C16.5275 131.277 20.8597 125.593 25.2348 119.011C25.7364 118.245 26.2473 117.47 26.7591 116.688C26.7693 116.663 26.7907 116.638 26.8009 116.614C27.6675 115.279 28.524 113.903 29.3794 112.503C36.6358 100.591 38.7138 90.705 39.3092 87.5007C40.1442 82.9698 41.3025 76.6344 40.9895 69.665C40.7804 65.0686 39.9352 60.2078 37.9205 55.3804L37.9205 55.3724C37.5025 54.3591 37.0324 53.3459 36.5002 52.3406C35.55 50.5366 34.4223 48.757 33.0856 47.0024C27.1873 39.2753 22.3952 38.9539 18.584 30.5344C17.4564 28.0385 14.8982 22.4038 15.6813 16.4558L15.6813 16.4477C15.7761 15.7144 15.9321 14.9731 16.1411 14.2314L16.1411 14.2233C16.1931 14.0174 16.2665 13.8034 16.3399 13.5974C16.9343 11.7768 17.9162 9.97236 19.4089 8.25879C22.3218 4.931 26.2992 2.95354 29.8596 1.77576L29.8709 1.76733C33.9839 0.416578 37.5341 0.128161 38.2233 0.0786921C53.4764 -0.992086 65.3056 9.12402 71.7688 14.6517C74.2637 16.7852 76.5507 18.5732 78.6388 20.031C94.8941 31.4821 99.3527 24.1665 100.511 20.3853C100.688 19.8005 100.783 19.2981 100.835 18.9682L100.835 18.9682Z",
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
                  {...getOverrideProps(overrides, "Vector35498055")}
                ></Icon>
                <Icon
                  width="0.05px"
                  height="0.41px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 0.0517578125,
                    height: 0.412109375,
                  }}
                  paths={[
                    {
                      d: "M0.051999 0C0.051999 0.0410253 0.0417936 0.181014 0 0.411901C0.0203905 0.288009 0.0316027 0.164522 0.0418031 0.0490741C0.0418031 0.0245331 0.0417985 0.00804855 0.051999 0L0.051999 0Z",
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
                  {...getOverrideProps(overrides, "Vector35498056")}
                ></Icon>
              </View>
              <Icon
                width="578.53px"
                height="14.89px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 578.53369140625,
                  height: 14.8857421875,
                }}
                paths={[
                  {
                    d: "M569.105 0L9.43833 0C4.23843 0 0 3.33624 0 7.43916C0 11.5497 4.23843 14.886 9.43833 14.886L569.105 14.886C574.304 14.886 578.534 11.5497 578.534 7.43916C578.534 3.33624 574.304 0 569.105 0Z",
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
                {...getOverrideProps(overrides, "Vector35498057")}
              ></Icon>
              <Icon
                width="330.14px"
                height="14.89px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 330.1416015625,
                  height: 14.8857421875,
                }}
                paths={[
                  {
                    d: "M320.703 0L9.42762 0C4.22823 0 0 3.33623 0 7.43876C0 11.5413 4.22822 14.886 9.42762 14.886L320.703 14.886C325.903 14.886 330.142 11.5413 330.142 7.43876C330.142 3.33624 325.903 0 320.703 0L320.703 0Z",
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
                {...getOverrideProps(overrides, "Vector35498058")}
              ></Icon>
              <Icon
                width="50.4px"
                height="36.41px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 50.40087890625,
                  height: 36.40869140625,
                }}
                paths={[
                  {
                    d: "M0 11.7126L35.2721 0L50.401 24.4714L13.3352 36.4087L0 11.7126Z",
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
                {...getOverrideProps(overrides, "Vector35498059")}
              ></Icon>
              <Icon
                width="50.4px"
                height="36.41px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 50.40087890625,
                  height: 36.40869140625,
                }}
                paths={[
                  {
                    d: "M0 11.7126L35.2721 0L50.401 24.4714L13.3352 36.4087L0 11.7126Z",
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
                {...getOverrideProps(overrides, "Vector35498060")}
              ></Icon>
              <Icon
                width="173.23px"
                height="131.31px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 173.2255859375,
                  height: 131.31005859375,
                }}
                paths={[
                  {
                    d: "M138.429 2.38746L173.226 34.0213C173.226 34.0213 149.02 94.3045 124.813 99.6763C100.607 105.048 55.9769 131.31 55.9769 131.31L0 102.661L27.232 71.0268C27.232 71.0268 93.0426 0 110.441 0C127.839 0 138.429 2.38745 138.429 2.38745L138.429 2.38746Z",
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
                {...getOverrideProps(overrides, "Vector35498061")}
              ></Icon>
              <Icon
                width="126.73px"
                height="111.91px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 126.73095703125,
                  height: 111.912109375,
                }}
                paths={[
                  {
                    d: "M126.731 111.912L45.7311 111.912L40.6099 106.51L19.7018 84.4562L14.8908 79.3829C14.8908 79.3829 -3.26384 53.1209 0.51839 29.2463C4.30062 5.37177 43.6357 0 43.6357 0L45.2545 0L93.4098 33.3885L90.5353 64.4613L105.785 84.4562L126.731 111.912L126.731 111.912Z",
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
                {...getOverrideProps(overrides, "Vector35498062")}
              ></Icon>
              <Icon
                width="21.71px"
                height="25.37px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 21.7099609375,
                  height: 25.36669921875,
                }}
                paths={[
                  {
                    d: "M21.71 25.3667L0 25.3667L0 0L21.71 25.3667Z",
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
                {...getOverrideProps(overrides, "Vector35498063")}
              ></Icon>
              <Icon
                width="144.63px"
                height="78.69px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 144.6337890625,
                  height: 78.6904296875,
                }}
                paths={[
                  {
                    d: "M144.042 40.1809L141.342 51.2349L134.64 78.6906L0 78.6906C1.05138 72.5369 2.48874 63.6795 4.02425 54.1177C4.1756 53.1627 4.33439 52.2018 4.48564 51.2349C8.33602 27.1991 12.5494 0 12.5494 0L30.2502 1.69516L64.5927 4.97791L78.5869 6.31488L116.061 9.90203C134.745 11.6867 147.597 25.5936 144.042 40.1809L144.042 40.1809Z",
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
                {...getOverrideProps(overrides, "Vector35498064")}
              ></Icon>
              <Icon
                width="73.03px"
                height="10.36px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 73.02734375,
                  height: 10.35546875,
                }}
                paths={[
                  {
                    d: "M73.0271 10.3556L0 10.3556C1.11195 9.32307 1.73974 8.7262 1.73974 8.7262L23.6313 5.87319L68.738 0C68.738 0 70.7955 4.19598 73.0271 10.3557L73.0271 10.3556Z",
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
                {...getOverrideProps(overrides, "Vector35498065")}
              ></Icon>
              <Icon
                width="61.34px"
                height="36.74px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 61.34326171875,
                  height: 36.74365234375,
                }}
                paths={[
                  {
                    d: "M29.5849 0L61.3431 35.4383L5.94633 36.7437L0 3.43997L29.5849 0Z",
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
                {...getOverrideProps(overrides, "Vector35498066")}
              ></Icon>
              <Icon
                width="61.34px"
                height="36.74px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 61.34326171875,
                  height: 36.74365234375,
                }}
                paths={[
                  {
                    d: "M29.5849 0L61.3431 35.4383L5.94633 36.7437L0 3.43997L29.5849 0Z",
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
                {...getOverrideProps(overrides, "Vector35498067")}
              ></Icon>
              <Icon
                width="50.66px"
                height="69.88px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 50.66357421875,
                  height: 69.87841796875,
                }}
                paths={[
                  {
                    d: "M28.9704 13.4953C24.8955 4.22006 15.527 -1.63932 8.04636 0.407875C0.565717 2.45508 -2.19334 11.6325 1.88464 20.9107C3.44919 24.6346 6.12124 28.0087 9.67722 30.7507L27.5719 69.8784L50.6637 62.8611L30.5711 25.0331C31.213 21.1415 30.6641 17.1852 28.9704 13.4953L28.9704 13.4953Z",
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
                width="150.15px"
                height="162.86px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 150.15234375,
                  height: 162.8603515625,
                }}
                paths={[
                  {
                    d: "M150.152 33.2751L150.109 69.3913L145.85 82.7313L137.09 110.169L130.714 135.404L125.963 154.206L124.269 160.92C122.99 161.595 121.719 162.239 120.449 162.86L9.8035 162.86C3.51744 159.882 0 157.566 0 157.566C0 157.566 1.73982 156.277 3.72927 154.206C7.08789 150.708 11.15 144.978 8.6613 139.505C8.13936 138.359 8.0032 136.962 8.16202 135.404C9.17568 125.127 22.837 107.746 22.837 107.746L20.008 81.9493L18.7674 70.6448L27.5142 15.5241L56.0246 2.44686L60.9468 2.07109L109.533 0L129.615 0.913145L130.53 1.11016L150.152 33.2752L150.152 33.2751Z",
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
                {...getOverrideProps(overrides, "Vector35498069")}
              ></Icon>
              <View
                padding="0px 0px 0px 0px"
                width="49.07px"
                height="162.08px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="27.88%"
                bottom="27.71%"
                left="56.97%"
                right="37.6%"
                {...getOverrideProps(overrides, "Group35498070")}
              >
                <Icon
                  width="25.3px"
                  height="10.16px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 25.29541015625,
                    height: 10.15869140625,
                  }}
                  paths={[
                    {
                      d: "M25.2955 10.1586L1.0893 10.1586L0.0227177 1.5041L0 1.33101L6.85341 0.960943L24.6829 0L24.9929 5.18074L25.235 9.15595L25.2955 10.1586Z",
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
                  {...getOverrideProps(overrides, "Vector35498071")}
                ></Icon>
                <Icon
                  width="49.07px"
                  height="162.08px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 49.0703125,
                    height: 162.07861328125,
                  }}
                  paths={[
                    {
                      d: "M38.902 41.2254L49.0704 88.3001L40.7723 134.623L39.4788 141.833L37.1943 154.564L36.4908 158.479L36.5136 158.903L36.6875 162.078L7.94265 162.078L6.88353 153.424L6.79285 152.648L4.62934 134.921L4.59159 134.623L0 97.0322L9.00162 69.8629L9.66738 67.8634L9.66738 67.8575L13.5838 21.3379L10.5505 0.197013L10.5203 0C10.5808 0.0298711 10.6338 0.0597451 10.6943 0.0895503C10.8532 0.167144 11.012 0.244734 11.1632 0.328309C28.8338 9.17387 39.3635 24.6923 38.902 41.2254L38.902 41.2254Z",
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
                  {...getOverrideProps(overrides, "Vector35498072")}
                ></Icon>
              </View>
              <Icon
                width="120.69px"
                height="122.84px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 120.69287109375,
                  height: 122.84423828125,
                }}
                paths={[
                  {
                    d: "M120.693 9.02116L109.639 0C109.639 0 85.9761 8.41725 84.7966 13.0871C83.6171 17.7569 41.8373 86.3441 41.8373 86.3441L23.6604 48.0384L0 60.5028C0 60.5028 18.985 119.975 36.7401 122.767C54.4953 125.559 114.002 52.3759 114.002 52.3759L120.693 9.02116L120.693 9.02116Z",
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
                {...getOverrideProps(overrides, "Vector35498073")}
              ></Icon>
              <Icon
                width="905px"
                height="34.87px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 905,
                  height: 34.87158203125,
                }}
                paths={[
                  {
                    d: "M882.897 0L22.0924 0C9.90836 0 0 7.82612 0 17.4398C0 27.0535 9.90835 34.8716 22.0924 34.8716L882.897 34.8716C895.081 34.8716 905 27.0539 905 17.4398C905 7.82571 895.081 0 882.897 0Z",
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
                {...getOverrideProps(overrides, "Vector35498074")}
              ></Icon>
              <Icon
                width="177.41px"
                height="83.56px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 177.41259765625,
                  height: 83.56103515625,
                }}
                paths={[
                  {
                    d: "M177.409 11.2043L175.736 72.8266C175.574 78.7918 169.399 83.5609 161.837 83.5609L18.172 83.5609C10.7889 83.5609 4.69367 79.0072 4.29065 73.1904L0.0211558 11.568C-0.414237 5.28396 5.92639 0 13.9025 0L163.511 0C171.305 0 177.576 5.05553 177.409 11.2043L177.409 11.2043Z",
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
                {...getOverrideProps(overrides, "Vector35498075")}
              ></Icon>
              <Icon
                width="68.74px"
                height="54.24px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 68.74462890625,
                  height: 54.2421875,
                }}
                paths={[
                  {
                    d: "M34.3723 54.2421C53.3556 54.2421 68.7446 42.0996 68.7446 27.1211C68.7446 12.1425 53.3556 0 34.3723 0C15.389 0 0 12.1425 0 27.1211C0 42.0996 15.389 54.2421 34.3723 54.2421Z",
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
                {...getOverrideProps(overrides, "Vector35498076")}
              ></Icon>
              <Icon
                width="64.94px"
                height="124.92px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 64.94384765625,
                  height: 124.9208984375,
                }}
                paths={[
                  {
                    d: "M35.4427 4.77491L39.2249 37.0056L64.944 118.776L42.7245 124.921L5.18492 35.8118L0 0L35.4427 4.77491Z",
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
                {...getOverrideProps(overrides, "Vector35498077")}
              ></Icon>
              <Icon
                width="177.41px"
                height="83.56px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 177.41259765625,
                  height: 83.56103515625,
                }}
                paths={[
                  {
                    d: "M177.409 11.2043L175.736 72.8266C175.574 78.7918 169.399 83.5609 161.837 83.5609L18.172 83.5609C10.7889 83.5609 4.69365 79.0072 4.29063 73.1904L0.0211558 11.568C-0.414237 5.28396 5.92639 0 13.9025 0L163.511 0C171.305 0 177.576 5.05553 177.409 11.2043L177.409 11.2043Z",
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
                {...getOverrideProps(overrides, "Vector35498078")}
              ></Icon>
              <Icon
                width="54.29px"
                height="18.95px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 54.291015625,
                  height: 18.947265625,
                }}
                paths={[
                  {
                    d: "M27.1455 18.9474C42.1376 18.9474 54.291 14.7059 54.291 9.47372C54.291 4.24153 42.1376 0 27.1455 0C12.1535 0 0 4.24153 0 9.47372C0 14.7059 12.1535 18.9474 27.1455 18.9474Z",
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
                {...getOverrideProps(overrides, "Vector35498079")}
              ></Icon>
              <Icon
                width="60.61px"
                height="74.33px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 60.611328125,
                  height: 74.32568359375,
                }}
                paths={[
                  {
                    d: "M0 66.2087L15.5071 0.997861C15.5071 0.997861 58.6244 -3.77706 60.1373 7.56336C61.6502 18.9038 59.0563 74.3259 59.0563 74.3259L0 66.2088L0 66.2087Z",
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
                {...getOverrideProps(overrides, "Vector35498080")}
              ></Icon>
              <Icon
                width="143.72px"
                height="177.91px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 143.71533203125,
                  height: 177.912109375,
                }}
                paths={[
                  {
                    d: "M86.2813 56.4506C86.2813 56.4506 107.544 50.4629 116.513 47.2412C125.482 44.0195 143.3 66.4905 143.697 54.6228C144.093 42.7552 137.936 37.7784 137.936 37.7784C137.936 37.7784 136.399 11.8162 103.249 15.0621C103.249 15.0621 110.541 2.07292 86.606 0.0643813C62.6715 -1.94416 25.4353 43.6608 28.7701 50.4762C32.1048 57.2916 36.1025 62.9262 26.6414 70.2134C17.1803 77.5006 -0.535798 118.628 12.9434 129.695C26.4225 140.762 27.307 145.564 18.0716 152.449C8.8363 159.334 -12.9935 174.305 10.6096 176.904C34.2127 179.503 8.45016 177.561 26.0466 165.349C43.643 153.136 69.3201 153.635 59.7327 134.041C50.1453 114.446 66.8021 86.3677 64.7179 82.1081C62.6337 77.8484 69.3875 50.7995 69.3875 50.7995C69.3875 50.7995 85.1059 48.9774 86.2813 56.4506L86.2813 56.4506Z",
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
                {...getOverrideProps(overrides, "Vector35498081")}
              ></Icon>
              <View
                padding="0px 0px 0px 0px"
                width="97.52px"
                height="102.18px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="72.01%"
                left="47.57%"
                right="41.65%"
                {...getOverrideProps(overrides, "Group35498082")}
              >
                <Icon
                  width="74.83px"
                  height="59.05px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 74.83349609375,
                    height: 59.04638671875,
                  }}
                  paths={[
                    {
                      d: "M37.4167 59.0465C58.0814 59.0465 74.8334 45.8285 74.8334 29.5232C74.8334 13.218 58.0814 0 37.4167 0C16.752 0 0 13.218 0 29.5232C0 45.8285 16.752 59.0465 37.4167 59.0465Z",
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
                  {...getOverrideProps(overrides, "Vector35498083")}
                ></Icon>
                <Icon
                  width="97.52px"
                  height="93.67px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 97.515625,
                    height: 93.6689453125,
                  }}
                  paths={[
                    {
                      d: "M43.5233 22.5042C42.4406 23.0028 40.9904 22.2483 40.6432 21.2978C40.296 20.3473 40.7004 19.3382 41.1014 18.401L43.1203 13.6829C44.5521 10.3368 46.0717 6.8737 49.1726 4.32685C53.8529 0.482792 61.2911 -0.495119 67.9869 0.213343C76.5857 1.12315 85.0697 4.79702 89.0678 10.8722C93.066 16.9475 91.3638 25.4246 84.1394 29.2149C94.4358 38.5266 98.025 48.9043 97.4583 61.2538C96.8915 73.6034 79.8353 84.9691 68.7124 93.6689C66.2284 92.4808 63.9703 86.9129 65.3362 84.8902C66.7022 82.8675 64.7451 80.5242 66.4367 78.6611C68.1284 76.798 69.5437 79.7646 67.8335 77.912C66.7543 76.7431 70.9663 74.0537 69.3622 73.3541C61.6031 69.97 59.0226 62.3389 54.1494 56.4953C48.2714 49.4467 38.2113 44.6734 27.5651 43.8815C21.7004 43.4453 15.506 44.2353 10.699 46.9218C5.89199 49.6083 2.77994 54.409 3.89464 58.973C1.00774 56.6601 -0.429281 53.2706 0.112731 50.0526C0.654743 46.8347 3.16392 43.859 6.71622 42.2213C4.55626 36.5854 6.40664 30.1023 11.42 25.741C16.4333 21.3797 36.7702 22.1225 44.0893 23.2704L43.5233 22.5042L43.5233 22.5042Z",
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
                  {...getOverrideProps(overrides, "Vector35498084")}
                ></Icon>
                <Icon
                  width="30.78px"
                  height="58.13px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 30.78076171875,
                    height: 58.12646484375,
                  }}
                  paths={[
                    {
                      d: "M0 0C9.69394 0.825697 16.6932 7.45134 22.6036 13.5701C26.0101 17.0968 29.5785 20.9915 29.493 25.4252C29.4065 29.9079 25.6081 33.7527 23.7928 38.0009C20.8256 44.9447 23.7174 53.2062 30.7807 57.964C23.8014 59.009 16.2566 54.8799 15.0517 49.3559C13.6491 42.9253 19.8272 36.7187 19.0955 30.2192C18.4509 24.493 12.7319 20.086 7.86991 15.8045C3.00793 11.523 -1.55829 5.84163 0.678472 0.370504L0 0L0 0Z",
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
                  {...getOverrideProps(overrides, "Vector35498085")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="174px"
                height="158.8px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="27.76%"
                bottom="28.73%"
                left="67.17%"
                right="13.6%"
                {...getOverrideProps(overrides, "Group35498086")}
              >
                <Icon
                  width="74.81px"
                  height="43.38px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 74.80810546875,
                    height: 43.3759765625,
                  }}
                  paths={[
                    {
                      d: "M12.2002 22.9387C2.59824 27.2479 -2.36703 34.6501 1.10963 39.4712C4.5863 44.2924 15.1869 44.7064 24.7916 40.3946C28.6582 38.7137 31.9585 36.3266 34.4162 33.4331L74.8079 14.7692L63.3037 0L24.7061 19.9673C20.2965 20.1555 16.0082 21.1744 12.2002 22.9387Z",
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
                  width="139.22px"
                  height="141.56px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 139.22314453125,
                    height: 141.5615234375,
                  }}
                  paths={[
                    {
                      d: "M114.182 1.50277C112.975 1.12532 102.384 -2.03936 92.7148 2.13893C81.6077 6.93864 79.8922 17.8953 79.2905 21.7383C77.9006 30.6156 81.9955 32.6053 82.8599 41.5925C84.4771 58.4064 88.7414 39.2249 81.9313 46.8998C79.574 49.5564 55.4986 90.7244 42.2211 98.7882C16.3979 114.471 0 125.516 0 125.516L18.7204 141.561C18.7204 141.561 48.302 135.342 74.4482 121.946C101.268 108.205 114.678 101.335 125.053 87.8945C125.947 86.7371 147.324 58.0927 135.843 26.4188C133.225 19.1941 128.426 5.95676 114.182 1.50277L114.182 1.50277Z",
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
                  {...getOverrideProps(overrides, "Vector35498088")}
                ></Icon>
              </View>
              <Icon
                width="177.41px"
                height="83.56px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 177.41259765625,
                  height: 83.56103515625,
                }}
                paths={[
                  {
                    d: "M177.409 11.2043L175.736 72.8266C175.574 78.7918 169.399 83.5609 161.837 83.5609L18.1719 83.5609C10.7889 83.5609 4.69363 79.0072 4.29062 73.1904L0.0211559 11.568C-0.414237 5.28396 5.92636 0 13.9025 0L163.511 0C171.305 0 177.576 5.05553 177.409 11.2043L177.409 11.2043Z",
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
                {...getOverrideProps(overrides, "Vector35498089")}
              ></Icon>
            </View>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
