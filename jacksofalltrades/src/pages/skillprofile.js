import React from "react";
import { SortDirection } from "@aws-amplify/datastore";
import { Skillprofile } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { DataStore } from "@aws-amplify/datastore";
import SkillProfile from "../ui-components/SkillProfile";
import { Collection, View } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";
import Amplify, { API } from "aws-amplify";
import { createDataStorePredicate } from "@aws-amplify/ui-react/internal";
import { withAuthenticator, Button, Heading, AmplifyProvider } from '@aws-amplify/ui-react';

//This function will display will call the skillprofile component using the skill id
function SkillDisplay (props){
  
  //pulls the skillid by using the url call
  const {skillid} = useParams()
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  
  //creats a filter that looks for skillprofile whith matching id
  const itemsFilterObj = { field: "id", operand: skillid, operator: "eq" };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  //creates the list of objects that match (it will only be one but I have no idea how to do it)
  const itemsDataStore = useDataStoreBinding({
    type: "Collection",
    model: Skillprofile,
    criteria: itemsFilter,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  
  return (
    //creates a collection that will display the matching skill
    <View className="background" paddingTop="20px" minHeight="100vh">
    <Collection
      type="list"   
      direction="column"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "SkillProfileCollection")}
    >
      
      {(item, index) => (
        //for every item it will override the text (there is only one item)
        <SkillProfile
          skillprofile={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        >
          
        </SkillProfile>
        
      )}
    </Collection>
    </View>
  );
}

//withAuthenticator forces the user to be signed in to see this page
export default withAuthenticator(SkillDisplay);