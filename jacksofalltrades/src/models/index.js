// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SkillCompleted, Users, Skillprofile, UsersSkillCompleted, SkillCompletedSkillprofile, UsersSkillprofile } = initSchema(schema);

export {
  SkillCompleted,
  Users,
  Skillprofile,
  UsersSkillCompleted,
  SkillCompletedSkillprofile,
  UsersSkillprofile
};