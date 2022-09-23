/* @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';
*/
import {HeroLayout1} from "../ui-components";

export default function Home (){
  return (
    <div>
      <HeroLayout1/>
    </div>
  )
}

/*
const { Roles, UserRolesReference, Logins, Users, SkillProfile } = initSchema(schema);

export {
  Roles,
  UserRolesReference,
  Logins,
  Users,
  SkillProfile
};
*/