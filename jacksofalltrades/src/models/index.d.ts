import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type SkillCompletedMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SkillprofileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class SkillCompleted {
  readonly id: string;
  readonly userEmail?: string | null;
  readonly skillID: string;
  readonly skillTitle: string;
  readonly isComplete: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SkillCompleted, SkillCompletedMetaData>);
  static copyOf(source: SkillCompleted, mutator: (draft: MutableModel<SkillCompleted, SkillCompletedMetaData>) => MutableModel<SkillCompleted, SkillCompletedMetaData> | void): SkillCompleted;
}

export declare class Users {
  readonly id: string;
  readonly userEmail: string;
  readonly group: string;
  readonly ManyUsersToManySkillCompleted?: SkillCompleted[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
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
  readonly skillId: string;
  readonly skillcompleteds?: SkillCompleted[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Skillprofile, SkillprofileMetaData>);
  static copyOf(source: Skillprofile, mutator: (draft: MutableModel<Skillprofile, SkillprofileMetaData>) => MutableModel<Skillprofile, SkillprofileMetaData> | void): Skillprofile;
}