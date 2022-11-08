// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SkillCompleted, Users, Skillprofile } = initSchema(schema);

export {
  SkillCompleted,
  Users,
  Skillprofile
};