import React from "react";
import { Todo } from "./model";
import {AiFillEdit,AiFillDelete }  from 'react-icons/ai'
import {MdDone } from 'react-icons/md'

type Props = {
  item: Todo;
  items: Todo[];
  setItems: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ item, items, setItems }: Props): JSX.Element => {
  return (
    <>
      <div className="single-class">

            
            <div className="list">
                   <div>{item.task}</div>
                  <div>
                      <span>
                          <AiFillEdit />
                      </span>
                      <span>
                          <AiFillDelete />
                      </span>
                      <span>
                             <MdDone  />
                      </span>
                  </div>
          </div>
      </div>
    </>
  );
};

export default SingleTodo;
