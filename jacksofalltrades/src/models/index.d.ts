import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type RolesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserRolesReferenceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LoginsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SkillProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Roles {
  readonly id: string;
  readonly roleName: string;
  readonly description: string;
  readonly isEnabled: boolean;
  readonly displayName: string;
  readonly visable: boolean;
  readonly userRolesReferenceID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Roles, RolesMetaData>);
  static copyOf(source: Roles, mutator: (draft: MutableModel<Roles, RolesMetaData>) => MutableModel<Roles, RolesMetaData> | void): Roles;
}

export declare class UserRolesReference {
  readonly id: string;
  readonly userID: string;
  readonly roleID: string;
  readonly userRoles?: (Roles | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserRolesReference, UserRolesReferenceMetaData>);
  static copyOf(source: UserRolesReference, mutator: (draft: MutableModel<UserRolesReference, UserRolesReferenceMetaData>) => MutableModel<UserRolesReference, UserRolesReferenceMetaData> | void): UserRolesReference;
}

export declare class Logins {
  readonly id: string;
  readonly userName: string;
  readonly userPassword: string;
  readonly Users?: Users | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly loginsUsersId?: string | null;
  constructor(init: ModelInit<Logins, LoginsMetaData>);
  static copyOf(source: Logins, mutator: (draft: MutableModel<Logins, LoginsMetaData>) => MutableModel<Logins, LoginsMetaData> | void): Logins;
}

export declare class Users {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly userName: string;
  readonly userEmail: string;
  readonly UserRolesReference?: UserRolesReference | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usersUserRolesReferenceId?: string | null;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}

export declare class SkillProfile {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly time: string;
  readonly photo: string;
  readonly difficulty: string;
  readonly category: string;
  readonly userInteraction?: string | null;
  readonly videoRights?: string | null;
  readonly authorAccountID: string;
  readonly video?: string | null;
  readonly instructions: string;
  readonly materialsList?: string | null;
  readonly requiresMaterials: boolean;
  readonly photoRights?: string | null;
  readonly instructionRights?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SkillProfile, SkillProfileMetaData>);
  static copyOf(source: SkillProfile, mutator: (draft: MutableModel<SkillProfile, SkillProfileMetaData>) => MutableModel<SkillProfile, SkillProfileMetaData> | void): SkillProfile;
}