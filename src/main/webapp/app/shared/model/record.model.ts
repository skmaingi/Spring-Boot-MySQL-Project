export interface IRecord {
  id?: number;
  date?: Date;
  title?: string;
  detail?: string;
}

export class Record implements IRecord {
  constructor(public id?: number, public date?: Date, public title?: string, public detail?: string) {}
}
