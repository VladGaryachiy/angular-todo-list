import {TodoInterface} from './interfaces';

export class Todo implements TodoInterface {
  constructor(
    public id: number,
    public name: string,
    public dateCreate: string,
    public dateUpdate?: string
  ) {}
}
