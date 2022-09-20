// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Skill } = initSchema(schema);

export {
  Skill
};