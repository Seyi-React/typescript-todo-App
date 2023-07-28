import React, { FC, useState } from "react";
import Input from "./work/input";
import { Order,TodoList } from "./work/input";
import { Todo } from "./work/model";

 

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [items, setItems] = useState<Todo[]>([]);
  // const [list,setList]= useState<boolean>(true);

  const Submit = (event: React.FormEvent) => {
    event.preventDefault();

    if (task) {
      setItems([...items, { id: Date.now (),task,isDone:false }]); 

      setTask("");
    } 
  };
  return (
    <div className="App">
      <div>
        <Input />
        <Order task={task} setTask={setTask} submit={Submit} />
        <TodoList items={items} setItems={setItems}/>
      </div>
    </div>
  );
};

export default App;
