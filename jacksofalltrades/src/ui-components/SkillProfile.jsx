
import React from "react";
import { DataStore} from "aws-amplify";
import { getOverrideProps, useDataStoreBinding, useStateMutationAction, useNavigateAction, useAuth } from "@aws-amplify/ui-react/internal";
import { SkillCompleted } from "../models";
import { Button, Divider, Flex, Text, View } from "@aws-amplify/ui-react";

//This is the graphics for the SkillProfile page which displays the information on a per skill basis
export default function SkillProfile(props) {
  const { skillprofile, skillCompleted, items: itemsProp, overrideItems, overrides, ...rest } = props;
  //pulls user info
  const authAttributes = useAuth().user?.attributes ?? {};
  //links return button to the skillist page
  const returnButtonClick = useNavigateAction({ type: "url", url: "/skilllist" });
  //creates variable buttonColor and setterMethod setButtonColor
  const [buttonColor, setButtonColor] = useStateMutationAction("#808080");
  //creates variable skillWord and setterMethod setSkillWord
  const [skillWord, setSkillWord]=useStateMutationAction("Complete Skill");

  //When page is loded, the complete reflects whether the user has completed a skill by calling the first index in the skillcomplete model
  const completeModel = DataStore.query(SkillCompleted, c => c.skillID('eq',  skillprofile.skillId).userEmail('eq',authAttributes["email"])).
  then((results)=>{
    console.log(results[0])
    if(results[0].isComplete){
      completeSkill();
    }else if (!results[0].isComplete){
      incompleteSkill();
    } 
  }
  );

  //updates color and text on isComplete button
  function completeSkill(){
    setButtonColor("#FFFFFF");
    setSkillWord("Congrats! Skill is completed!")
  }
  function incompleteSkill(){
    setButtonColor("#808080");
    setSkillWord("Complete Skill")
  }

  /*button on click is called when the user clicks the completed button
    updated the skill complete model with the isComplete or created a skill complete instance if none exist
    updated coloring of the button to reflect status
  */
  async function buttonOnClick() {
    //retrives SkillCompleted
    const completeModel = DataStore.query(SkillCompleted, c => c.userEmail('eq',authAttributes["email"])).then((results)=>{
      console.log(results[0]);
      //if skillcomplete exists it will flip the boolean and colors
      try{
        //changes status from complete to incomplete
        if(results.skillID('eq',  skillprofile.skillId)[0].isComplete){
          incompleteSkill();
          DataStore.save(SkillCompleted.copyOf(results[0], updated => {
            updated.isComplete = false
            console.log(updated);
          }));
        }else if(!results.skillID('eq',  skillprofile.skillId)[0].isComplete){
          completeSkill();
          DataStore.save(SkillCompleted.copyOf(results[0], updated => {
            updated.isComplete = true
            console.log(updated);
          }
        ));
      }
    } catch(error) //if the data model doesnt exist it will create a new skill
    {
        try{
          completeSkill();
          DataStore.save(
            new SkillCompleted({
            userEmail: authAttributes["email"],
            skillID: skillprofile.skillId,
            skillTitle: skillprofile.title,
            isComplete: true
          })
        );
        console.log("Skill successfully Completed!");
        } catch (error) {
          console.log("Error Completing Skill!", error)
        }
    }
    });
  }

  //graphics (yes it is ugly but this was the first time doing this)
  return (
  <Flex
    gap="25px"
    direction="column"
    width="100vw"
    height="unset"
    justifyContent="center"
    padding="0px 0px 35px 0px"
    alignItems="center"
  >
    <View
      width="90vw"
      height="400px"
      alignSelf="center"
      position="relative"
      border="5x SOLID rgba(255,255,255,1)"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
    >
      <iframe 
        width="100%" 
        height="100%"
        //replace video link with the datamodel for video
        src= {skillprofile?.video} 
        frameborder="10" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen" > 
      </iframe>
    </View>
    <Flex
      gap="8px"
      direction="column"
      width="90vw"
      height="59px"
      justifyContent="center"
      alignItems="center"
      shrink="0"
      alignSelf="center"
      position="relative"
      padding="20px 0px 0px 0px"
    >
      <Text
        className="text"
        fontFamily="Flamenco"
        fontSize="48px"
        fontWeight="400"
        lineHeight="20px"
        textAlign="center"
        direction="column"
        //replaces title with skillprofile title
        children={skillprofile?.title}
      ></Text>
    </Flex>
    <Button
      className="button"
      fontFamily="Inter"
      fontSize="18px"
      textAlign="center"
      color="#000000"
      children={skillWord}
      backgroundColor= {buttonColor}
      //calls the function at the top that modifies whether a skill is completed or not
      onClick={() => {
        buttonOnClick();
      }}
    >
    </Button>
    <Flex
      gap="22px"
      direction="column"
      width="90vw"
      height="unset"
      justifyContent="center"
      alignItems="center"
      shrink="0"
      position="relative"
      padding="0px 10px 0px 10px"
    >
      <Divider
        width="90vw"
        height="1px"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(174,179,183,1)"
      ></Divider>
      <Flex
        gap="8px"
        direction="column"
        width="90vw"
        height="unset"
        shrink="0"
        position="relative"
        padding="0px 20px 0px 20px"
      >
        <Text
          className="text"
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="600"
          lineHeight="30px"
          textAlign="left"
          display="flex"
          direction="column"
          width="90vw"
          children="Skill Description"
        ></Text>
        <Text
          className="text"
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          width="90vw"
          //change the description to the specific skillprofile description 
          children={skillprofile?.description}
        ></Text>
      </Flex>
      <Divider
        width="90vw"
        height="1px"
        display="flex"
      ></Divider>
      <Flex
        gap="8px"
        direction="column"
        width="90vw"
        height="unset"
        padding="0px 20px 0px 20px"
      >
        <Text
          className="text"
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="800"
          lineHeight="20px"
          textAlign="left"
          direction="column" 
          width="100%"
          children="Instructions"
        ></Text>
        <Text
          className="text"
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          width="100%"
          //changes instructions to the skill profile instance of instructions
          children={skillprofile?.instructions}
        ></Text>
      </Flex>
      <Divider
        width="90vw"
        height="1px"
        display="flex"
        size="small"
        orientation="horizontal"
      ></Divider>
      <Flex
        gap="8px"
        direction="column"
        width="90vw"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        padding="0px 0px 0px 20px"
      >
        <Text
          className="text"
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="800"
          lineHeight="20px"
          children="Content Provided by:"
        ></Text>
        <Text
          className="text"
          fontFamily="Inter"
          fontSize="16px"
          //displays skill profile video rights
          children={skillprofile?.videoRights}
        ></Text>
        <Text
          className="text"
          fontFamily="Inter"
          fontSize="16px"
          //displays skill profile instruction rights
          children={skillprofile?.instructionRights}
        ></Text>
        <Text
          className="text"
          fontFamily="Inter"
          fontSize="16px"
          //displays skill profile photo rights
          children={skillprofile?.photoRights}
        ></Text>
      </Flex>
    </Flex>
      <Button
        className="button"
        fontFamily="Inter"
        fontSize="18px"
        textAlign="center"
        children="Back to List"
        //calls the function at the top that redirects the user to the skill list bage
        onClick={() => {
          returnButtonClick();
        }}
      >
      </Button>
  </Flex>    
  );
};