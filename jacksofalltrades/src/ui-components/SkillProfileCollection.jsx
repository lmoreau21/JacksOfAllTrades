/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { SkillCompleted, Skillprofile, Users } from "../models";
import SkillProfile from "./SkillProfile";
import { Collection } from "@aws-amplify/ui-react";
export default function SkillProfileCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = { field: "id", operand: "3", operator: "eq" };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const usersItems = useDataStoreBinding({
    type: "collection",
    model: Users,
  }).items;
  const skillCompletedItems = useDataStoreBinding({
    type: "collection",
    model: SkillCompleted,
  }).items;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Skillprofile,
    criteria: itemsFilter,
  }).items.map((item) => ({
    ...item,
    userss: usersItems.filter((model) => model.skillprofile === item.id),
    skillcompleteds: skillCompletedItems.filter(
      (model) => model.skillprofile === item.id
    ),
  }));
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={1}
      direction="column"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "SkillProfileCollection")}
    >
      {(item, index) => (
        <SkillProfile
          skillprofile={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></SkillProfile>
      )}
    </Collection>
  );
}
