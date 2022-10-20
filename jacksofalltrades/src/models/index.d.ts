import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type SignInMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ExistingUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SignUpMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SkillprofileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SignInUsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersExistingUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class SignIn {
  readonly id: string;
  readonly userEmail: string;
  readonly userPassword: string;
  readonly userConfirmPassword: string;
  readonly usersSignIns?: (SignInUsers | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SignIn, SignInMetaData>);
  static copyOf(source: SignIn, mutator: (draft: MutableModel<SignIn, SignInMetaData>) => MutableModel<SignIn, SignInMetaData> | void): SignIn;
}

export declare class Users {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly userEmail: string;
  readonly existingUsers?: (UsersExistingUser | null)[] | null;
  readonly signins?: (SignInUsers | null)[] | null;
  readonly group?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}

export declare class ExistingUser {
  readonly id: string;
  readonly userName?: string | null;
  readonly userEmail?: string | null;
  readonly isTrue?: boolean | null;
  readonly isCurrentUser?: UsersExistingUser[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ExistingUser, ExistingUserMetaData>);
  static copyOf(source: ExistingUser, mutator: (draft: MutableModel<ExistingUser, ExistingUserMetaData>) => MutableModel<ExistingUser, ExistingUserMetaData> | void): ExistingUser;
}

export declare class SignUp {
  readonly id: string;
  readonly userEmail: string;
  readonly userPassword: string;
  readonly userConfirmPassword: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SignUp, SignUpMetaData>);
  static copyOf(source: SignUp, mutator: (draft: MutableModel<SignUp, SignUpMetaData>) => MutableModel<SignUp, SignUpMetaData> | void): SignUp;
}

export declare class Skillprofile {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly instructions?: string | null;
  readonly instructionRights?: string | null;
  readonly category?: string | null;
  readonly difficultyLevel?: string | null;
  readonly materialsRequired?: boolean | null;
  readonly timeEstimate?: string | null;
  readonly photo?: string | null;
  readonly photoRights?: string | null;
  readonly video?: string | null;
  readonly videoRights?: string | null;
  readonly creator?: string | null;
  readonly skillId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Skillprofile, SkillprofileMetaData>);
  static copyOf(source: Skillprofile, mutator: (draft: MutableModel<Skillprofile, SkillprofileMetaData>) => MutableModel<Skillprofile, SkillprofileMetaData> | void): Skillprofile;
}

export declare class SignInUsers {
  readonly id: string;
  readonly signIn: SignIn;
  readonly users: Users;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SignInUsers, SignInUsersMetaData>);
  static copyOf(source: SignInUsers, mutator: (draft: MutableModel<SignInUsers, SignInUsersMetaData>) => MutableModel<SignInUsers, SignInUsersMetaData> | void): SignInUsers;
}

export declare class UsersExistingUser {
  readonly id: string;
  readonly users: Users;
  readonly existingUser: ExistingUser;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UsersExistingUser, UsersExistingUserMetaData>);
  static copyOf(source: UsersExistingUser, mutator: (draft: MutableModel<UsersExistingUser, UsersExistingUserMetaData>) => MutableModel<UsersExistingUser, UsersExistingUserMetaData> | void): UsersExistingUser;
}