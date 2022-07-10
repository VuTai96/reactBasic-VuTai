import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'doing homework' },
            { id: 'todo2', title: 'doing homework2' },
            { id: 'todo3', title: 'doing homework3' }
        ]
    }

    addNewTodo = (newTodo) => {
        console.log(">>newtodo", newTodo)
        this.setState({
            listTodos: [...this.state.listTodos, newTodo]
        })
        toast.success("wow! so easy")
    }
    render() {
        let { listTodos } = this.state;
        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div key={item.id} className="todo-child">
                                    <span>{index + 1} - {item.title} </span>
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        )
    }

}
export default ListTodo;