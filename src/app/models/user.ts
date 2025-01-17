export interface User {
    id: string;
    nom: string;
    description: string;
    admin?: boolean;
}

export type Users = User[];