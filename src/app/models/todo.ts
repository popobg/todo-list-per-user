export interface Todo {
    id: string;
    txt: string;
    done: boolean;
    editable: boolean;
    userId: string;
}

export type Todos = Todo[];