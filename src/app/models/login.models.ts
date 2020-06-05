export interface Login {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  token?: string;
}

export interface Register {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}


export interface Auth {
  firstName: string;
  lastName: string;
  email: string;
  createdDate: string;
  id: string;
  token: string;
}

export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public createdDate: string,
    public id: string,
    private token: string,
  ) {}
  get _token() {
    return this.token;
  }
}
