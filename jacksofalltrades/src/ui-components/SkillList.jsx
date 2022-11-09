import React from "react";
import { SortDirection } from "@aws-amplify/datastore";
import { SkillCompleted, Skillprofile } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import SkillLinkFinal from "./SkillLinkFinal";
import { Collection } from "@aws-amplify/ui-react";
export default function SkillList(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.title(SortDirection.ASCENDING) };
  const skillCompletedItems = useDataStoreBinding({
    type: "collection",
    model: SkillCompleted,
  }).items;
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
    <Collection
      type="list"
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={5}
      direction="column"
      alignItems="stretch"
      justifyContent="center"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "SkillList")}
    >
      {(item, index) => (
        <SkillLinkFinal
          skillprofile={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></SkillLinkFinal>
      )}
    </Collection>
  );
}
