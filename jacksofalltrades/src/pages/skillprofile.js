import React from "react";
import { SortDirection } from "@aws-amplify/datastore";
import { Skillprofile } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import SkillProfile from "../ui-components/SkillProfile";
import { Collection } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";
import Amplify from "aws-amplify";
import { createDataStorePredicate } from "@aws-amplify/ui-react/internal";

function SkillDisplay(props) {
  const {skillid} = useParams()
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = { field: "id", operand: skillid, operator: "eq" };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Skillprofile,
    criteria: itemsFilter,
  }).items;
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
        >
          
        </SkillProfile>
        
      )}
    </Collection>
  );
}
export default SkillDisplay;