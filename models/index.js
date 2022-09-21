import {SkillLink} from '../src/ui-components';

import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Skill } = initSchema(schema);

export default function Home() {
  return(
    <div>
      <SkillLink/>
    </div>

  )
};
