// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Ticket } = initSchema(schema);

export {
  Ticket
};