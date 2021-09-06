import { Schema as MongooseSchema } from 'mongoose';
import { Hobby } from '../hobby/hobby.model';

export class CreatePersonInput {
  name: string;
  hobbies: Hobby[];
}

export class ListPersonInput {
  _id?: MongooseSchema.Types.ObjectId;
  name?: string;
  hobbies?: Hobby[];
}

export class UpdatePersonInput {
  _id: MongooseSchema.Types.ObjectId;
  name?: string;
  hobbies?: Hobby[];
}
