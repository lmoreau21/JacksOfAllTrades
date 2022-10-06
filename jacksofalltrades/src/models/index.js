// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SignIn, Users, ExistingUser, SignUp, Skillprofile, SignInUsers, UsersExistingUser } = initSchema(schema);

export {
  SignIn,
  Users,
  ExistingUser,
  SignUp,
  Skillprofile,
  SignInUsers,
  UsersExistingUser
};