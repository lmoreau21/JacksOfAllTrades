// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SkillCompleted, Users, ExistingUser, SignIn, Skillprofile, SignUp, SkillCompletedUsers, SkillCompletedSkillprofile, UsersExistingUser, SignInUsers, UsersSkillprofile } = initSchema(schema);

export {
  SkillCompleted,
  Users,
  ExistingUser,
  SignIn,
  Skillprofile,
  SignUp,
  SkillCompletedUsers,
  SkillCompletedSkillprofile,
  UsersExistingUser,
  SignInUsers,
  UsersSkillprofile
};