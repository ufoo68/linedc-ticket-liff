import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TicketMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Ticket {
  readonly id: string;
  readonly liff_user_id?: string;
  readonly user_name?: string;
  readonly user_qr?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Ticket, TicketMetaData>);
  static copyOf(source: Ticket, mutator: (draft: MutableModel<Ticket, TicketMetaData>) => MutableModel<Ticket, TicketMetaData> | void): Ticket;
}