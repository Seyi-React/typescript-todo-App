import React from "react";
import { Todo } from "./model";
import SingleTodo from "./singletodo";
import { IProps } from "./model";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  submit: (event:React.FormEvent) => void;
}


const Input: React.FC = () => {
  return (
    <>
      <div>
        <div className="taskify-div">
          <h1>TASKIFY</h1>
        </div>
      </div>
    </> 
  );
};

const Order: React.FC<Props> = ({ task, setTask ,submit}) => {
  return (
    <>
      <div className="input-work">
        <div>
          <input
            type="text"
            name=""
            id=""
            className="input-box"
            placeholder="Enter Task"
            value={task}
            onChange={(e)=> setTask(e.target.value)}
          />
          <button className="btn" onClick={submit}>Go</button>
        </div>
      </div>
    </>
  );
};


const TodoList: React.FC<IProps>  = ({items,setItems}) => {
         return ( 
            <>
                <div>
                        {items.map((item)=> {
                            return (
                                <SingleTodo item={item} key={item.id} items={items} setItems={setItems} />
                            )
                        })}
                </div>
            </>
         )
}



export default Input;
export { Order,TodoList  };
