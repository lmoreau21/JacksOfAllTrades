import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type SkillCompletedMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ExistingUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SignInMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SkillprofileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SignUpMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SkillCompletedUsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SkillCompletedSkillprofileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersExistingUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SignInUsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersSkillprofileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerSkillCompleted = {
  readonly id: string;
  readonly isComplete?: boolean | null;
  readonly UsersSkillComplete?: (SkillCompletedUsers | null)[] | null;
  readonly SkillprofilesCompleted?: (SkillCompletedSkillprofile | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySkillCompleted = {
  readonly id: string;
  readonly isComplete?: boolean | null;
  readonly UsersSkillComplete: AsyncCollection<SkillCompletedUsers>;
  readonly SkillprofilesCompleted: AsyncCollection<SkillCompletedSkillprofile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SkillCompleted = LazyLoading extends LazyLoadingDisabled ? EagerSkillCompleted : LazySkillCompleted

export declare const SkillCompleted: (new (init: ModelInit<SkillCompleted, SkillCompletedMetaData>) => SkillCompleted) & {
  copyOf(source: SkillCompleted, mutator: (draft: MutableModel<SkillCompleted, SkillCompletedMetaData>) => MutableModel<SkillCompleted, SkillCompletedMetaData> | void): SkillCompleted;
}

type EagerUsers = {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly userEmail: string;
  readonly existingUsers?: (UsersExistingUser | null)[] | null;
  readonly signins?: (SignInUsers | null)[] | null;
  readonly group?: string | null;
  readonly UsersToSKillprofiles?: (UsersSkillprofile | null)[] | null;
  readonly skillcompleteds?: (SkillCompletedUsers | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly userEmail: string;
  readonly existingUsers: AsyncCollection<UsersExistingUser>;
  readonly signins: AsyncCollection<SignInUsers>;
  readonly group?: string | null;
  readonly UsersToSKillprofiles: AsyncCollection<UsersSkillprofile>;
  readonly skillcompleteds: AsyncCollection<SkillCompletedUsers>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users, UsersMetaData>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}

type EagerExistingUser = {
  readonly id: string;
  readonly userName?: string | null;
  readonly userEmail?: string | null;
  readonly isTrue?: boolean | null;
  readonly isCurrentUser?: UsersExistingUser[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExistingUser = {
  readonly id: string;
  readonly userName?: string | null;
  readonly userEmail?: string | null;
  readonly isTrue?: boolean | null;
  readonly isCurrentUser: AsyncCollection<UsersExistingUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ExistingUser = LazyLoading extends LazyLoadingDisabled ? EagerExistingUser : LazyExistingUser

export declare const ExistingUser: (new (init: ModelInit<ExistingUser, ExistingUserMetaData>) => ExistingUser) & {
  copyOf(source: ExistingUser, mutator: (draft: MutableModel<ExistingUser, ExistingUserMetaData>) => MutableModel<ExistingUser, ExistingUserMetaData> | void): ExistingUser;
}

type EagerSignIn = {
  readonly id: string;
  readonly userEmail: string;
  readonly userPassword: string;
  readonly userConfirmPassword: string;
  readonly usersSignIns?: (SignInUsers | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySignIn = {
  readonly id: string;
  readonly userEmail: string;
  readonly userPassword: string;
  readonly userConfirmPassword: string;
  readonly usersSignIns: AsyncCollection<SignInUsers>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SignIn = LazyLoading extends LazyLoadingDisabled ? EagerSignIn : LazySignIn

export declare const SignIn: (new (init: ModelInit<SignIn, SignInMetaData>) => SignIn) & {
  copyOf(source: SignIn, mutator: (draft: MutableModel<SignIn, SignInMetaData>) => MutableModel<SignIn, SignInMetaData> | void): SignIn;
}

type EagerSkillprofile = {
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
  readonly userss?: (UsersSkillprofile | null)[] | null;
  readonly skillcompleteds?: (SkillCompletedSkillprofile | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySkillprofile = {
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
  readonly userss: AsyncCollection<UsersSkillprofile>;
  readonly skillcompleteds: AsyncCollection<SkillCompletedSkillprofile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Skillprofile = LazyLoading extends LazyLoadingDisabled ? EagerSkillprofile : LazySkillprofile

export declare const Skillprofile: (new (init: ModelInit<Skillprofile, SkillprofileMetaData>) => Skillprofile) & {
  copyOf(source: Skillprofile, mutator: (draft: MutableModel<Skillprofile, SkillprofileMetaData>) => MutableModel<Skillprofile, SkillprofileMetaData> | void): Skillprofile;
}

type EagerSignUp = {
  readonly id: string;
  readonly userEmail: string;
  readonly userPassword: string;
  readonly userConfirmPassword: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySignUp = {
  readonly id: string;
  readonly userEmail: string;
  readonly userPassword: string;
  readonly userConfirmPassword: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SignUp = LazyLoading extends LazyLoadingDisabled ? EagerSignUp : LazySignUp

export declare const SignUp: (new (init: ModelInit<SignUp, SignUpMetaData>) => SignUp) & {
  copyOf(source: SignUp, mutator: (draft: MutableModel<SignUp, SignUpMetaData>) => MutableModel<SignUp, SignUpMetaData> | void): SignUp;
}

type EagerSkillCompletedUsers = {
  readonly id: string;
  readonly skillCompleted: SkillCompleted;
  readonly users: Users;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySkillCompletedUsers = {
  readonly id: string;
  readonly skillCompleted: AsyncItem<SkillCompleted>;
  readonly users: AsyncItem<Users>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SkillCompletedUsers = LazyLoading extends LazyLoadingDisabled ? EagerSkillCompletedUsers : LazySkillCompletedUsers

export declare const SkillCompletedUsers: (new (init: ModelInit<SkillCompletedUsers, SkillCompletedUsersMetaData>) => SkillCompletedUsers) & {
  copyOf(source: SkillCompletedUsers, mutator: (draft: MutableModel<SkillCompletedUsers, SkillCompletedUsersMetaData>) => MutableModel<SkillCompletedUsers, SkillCompletedUsersMetaData> | void): SkillCompletedUsers;
}

type EagerSkillCompletedSkillprofile = {
  readonly id: string;
  readonly skillCompleted: SkillCompleted;
  readonly skillprofile: Skillprofile;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySkillCompletedSkillprofile = {
  readonly id: string;
  readonly skillCompleted: AsyncItem<SkillCompleted>;
  readonly skillprofile: AsyncItem<Skillprofile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SkillCompletedSkillprofile = LazyLoading extends LazyLoadingDisabled ? EagerSkillCompletedSkillprofile : LazySkillCompletedSkillprofile

export declare const SkillCompletedSkillprofile: (new (init: ModelInit<SkillCompletedSkillprofile, SkillCompletedSkillprofileMetaData>) => SkillCompletedSkillprofile) & {
  copyOf(source: SkillCompletedSkillprofile, mutator: (draft: MutableModel<SkillCompletedSkillprofile, SkillCompletedSkillprofileMetaData>) => MutableModel<SkillCompletedSkillprofile, SkillCompletedSkillprofileMetaData> | void): SkillCompletedSkillprofile;
}

type EagerUsersExistingUser = {
  readonly id: string;
  readonly users: Users;
  readonly existingUser: ExistingUser;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsersExistingUser = {
  readonly id: string;
  readonly users: AsyncItem<Users>;
  readonly existingUser: AsyncItem<ExistingUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsersExistingUser = LazyLoading extends LazyLoadingDisabled ? EagerUsersExistingUser : LazyUsersExistingUser

export declare const UsersExistingUser: (new (init: ModelInit<UsersExistingUser, UsersExistingUserMetaData>) => UsersExistingUser) & {
  copyOf(source: UsersExistingUser, mutator: (draft: MutableModel<UsersExistingUser, UsersExistingUserMetaData>) => MutableModel<UsersExistingUser, UsersExistingUserMetaData> | void): UsersExistingUser;
}

type EagerSignInUsers = {
  readonly id: string;
  readonly users: Users;
  readonly signIn: SignIn;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySignInUsers = {
  readonly id: string;
  readonly users: AsyncItem<Users>;
  readonly signIn: AsyncItem<SignIn>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SignInUsers = LazyLoading extends LazyLoadingDisabled ? EagerSignInUsers : LazySignInUsers

export declare const SignInUsers: (new (init: ModelInit<SignInUsers, SignInUsersMetaData>) => SignInUsers) & {
  copyOf(source: SignInUsers, mutator: (draft: MutableModel<SignInUsers, SignInUsersMetaData>) => MutableModel<SignInUsers, SignInUsersMetaData> | void): SignInUsers;
}

type EagerUsersSkillprofile = {
  readonly id: string;
  readonly users: Users;
  readonly skillprofile: Skillprofile;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsersSkillprofile = {
  readonly id: string;
  readonly users: AsyncItem<Users>;
  readonly skillprofile: AsyncItem<Skillprofile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsersSkillprofile = LazyLoading extends LazyLoadingDisabled ? EagerUsersSkillprofile : LazyUsersSkillprofile

export declare const UsersSkillprofile: (new (init: ModelInit<UsersSkillprofile, UsersSkillprofileMetaData>) => UsersSkillprofile) & {
  copyOf(source: UsersSkillprofile, mutator: (draft: MutableModel<UsersSkillprofile, UsersSkillprofileMetaData>) => MutableModel<UsersSkillprofile, UsersSkillprofileMetaData> | void): UsersSkillprofile;
}