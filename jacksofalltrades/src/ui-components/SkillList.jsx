import React from "react";
import { SortDirection } from "@aws-amplify/datastore";
import { SkillCompleted, Skillprofile } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import SkillLinkFinal from "./SkillLinkFinal";
import { Collection, Flex } from "@aws-amplify/ui-react";

//This function creates a collection of all the skill profiles in the db and displays them to users on the skill list page
export default function SkillList(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  //sorts the page so the skill are displayed in ascending order
  const itemsPagination = { sort: (s) => s.title(SortDirection.ASCENDING) };
  //pulls skillcompleted which is used to display when the skill is completed
  const skillCompletedItems = useDataStoreBinding({
    type: "collection",
    model: SkillCompleted,
  }).items;
  //pulls skillprofile which is the content of each skill
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Skillprofile,
    pagination: itemsPagination,
  }).items.map((item) => ({
    ...item,
    skillcompleteds: skillCompletedItems.filter(
      (model) => model.skillprofileID === item.id
    ),
  }));
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;

  return (
    //creats a aws collection that will display a list of all of the the skill profiles in the db
    <Flex alignContent={"center"} minHeight="100vh">
    <Collection
      type="list"
      isPaginated={true}
      itemsPerPage={5}
      display="flex"
      direction="column"
      alignItems="stretch"
      justifyContent="center"
      alignContent="center"
      isSearchable="true"
      searchPlaceholder="Search..."
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "SkillList")}
    >
      {(item, index) => (
        //overrides the SkillLinkFinal set variables to specifically display each instance
        <SkillLinkFinal
          skillprofile={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></SkillLinkFinal>
      )}
    </Collection>
    </Flex>
  );
}
