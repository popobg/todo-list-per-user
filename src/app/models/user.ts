export interface User {
  id: string;
  name: string;
  description: string;
  admin?: boolean;
}

export type Users = User[];
