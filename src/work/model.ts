 export interface Todo {
    id:number;
    task:string;
    isDone:boolean;
}

export interface IProps {
    items:Todo[];
    setItems:React.Dispatch<React.SetStateAction<Todo[]>>;
}
