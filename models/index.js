// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Roles, UserRolesReference, Logins, Users, SkillProfile } = initSchema(schema);

export {
  Roles,
  UserRolesReference,
  Logins,
  Users,
  SkillProfile
};