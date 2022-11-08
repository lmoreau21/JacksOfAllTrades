import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type SkillCompletedMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SkillprofileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersSkillCompletedMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SkillCompletedSkillprofileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersSkillprofileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerSkillCompleted = {
  readonly id: string;
  readonly userEmail?: string | null;
  readonly skillID: string;
  readonly userss?: UsersSkillCompleted[] | null;
  readonly ManySkillCompletedToManySkillProfile?: SkillCompletedSkillprofile[] | null;
  readonly skillTitle: string;
  readonly isComplete: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySkillCompleted = {
  readonly id: string;
  readonly userEmail?: string | null;
  readonly skillID: string;
  readonly userss: AsyncCollection<UsersSkillCompleted>;
  readonly ManySkillCompletedToManySkillProfile: AsyncCollection<SkillCompletedSkillprofile>;
  readonly skillTitle: string;
  readonly isComplete: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SkillCompleted = LazyLoading extends LazyLoadingDisabled ? EagerSkillCompleted : LazySkillCompleted

export declare const SkillCompleted: (new (init: ModelInit<SkillCompleted, SkillCompletedMetaData>) => SkillCompleted) & {
  copyOf(source: SkillCompleted, mutator: (draft: MutableModel<SkillCompleted, SkillCompletedMetaData>) => MutableModel<SkillCompleted, SkillCompletedMetaData> | void): SkillCompleted;
}

type EagerUsers = {
  readonly id: string;
  readonly userEmail: string;
  readonly group: string;
  readonly ManyUsersToManySkillProfiles?: UsersSkillprofile[] | null;
  readonly ManyUsersToManySkillCompleted?: UsersSkillCompleted[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly id: string;
  readonly userEmail: string;
  readonly group: string;
  readonly ManyUsersToManySkillProfiles: AsyncCollection<UsersSkillprofile>;
  readonly ManyUsersToManySkillCompleted: AsyncCollection<UsersSkillCompleted>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users, UsersMetaData>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
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
  readonly skillId: string;
  readonly userss?: UsersSkillprofile[] | null;
  readonly skillcompleteds?: SkillCompletedSkillprofile[] | null;
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
  readonly skillId: string;
  readonly userss: AsyncCollection<UsersSkillprofile>;
  readonly skillcompleteds: AsyncCollection<SkillCompletedSkillprofile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Skillprofile = LazyLoading extends LazyLoadingDisabled ? EagerSkillprofile : LazySkillprofile

export declare const Skillprofile: (new (init: ModelInit<Skillprofile, SkillprofileMetaData>) => Skillprofile) & {
  copyOf(source: Skillprofile, mutator: (draft: MutableModel<Skillprofile, SkillprofileMetaData>) => MutableModel<Skillprofile, SkillprofileMetaData> | void): Skillprofile;
}

type EagerUsersSkillCompleted = {
  readonly id: string;
  readonly skillCompleted: SkillCompleted;
  readonly users: Users;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsersSkillCompleted = {
  readonly id: string;
  readonly skillCompleted: AsyncItem<SkillCompleted>;
  readonly users: AsyncItem<Users>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsersSkillCompleted = LazyLoading extends LazyLoadingDisabled ? EagerUsersSkillCompleted : LazyUsersSkillCompleted

export declare const UsersSkillCompleted: (new (init: ModelInit<UsersSkillCompleted, UsersSkillCompletedMetaData>) => UsersSkillCompleted) & {
  copyOf(source: UsersSkillCompleted, mutator: (draft: MutableModel<UsersSkillCompleted, UsersSkillCompletedMetaData>) => MutableModel<UsersSkillCompleted, UsersSkillCompletedMetaData> | void): UsersSkillCompleted;
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