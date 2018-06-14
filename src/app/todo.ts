 export default class Todo {
  constructor(
      public id: number,
      public name: string,
      public dateCreate: string,
      public dateUpdate?: string
  ) {}
 }
