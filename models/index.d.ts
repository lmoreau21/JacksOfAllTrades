import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type SkillMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Skill {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly video?: string | null;
  readonly time?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Skill, SkillMetaData>);
  static copyOf(source: Skill, mutator: (draft: MutableModel<Skill, SkillMetaData>) => MutableModel<Skill, SkillMetaData> | void): Skill;
}