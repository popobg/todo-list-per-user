export interface Todo {
    id: string;
    txt: string;
    done: boolean;
    editable: boolean;
}
  
export type Todos = Todo[];