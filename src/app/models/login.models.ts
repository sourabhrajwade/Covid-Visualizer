export interface Login {
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
