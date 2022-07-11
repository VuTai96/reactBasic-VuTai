import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
import Color from "../HOC/Color";

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'doing homework' },
            { id: 'todo2', title: 'doing homework2' },
            { id: 'todo3', title: 'doing homework3' }
        ],
        editTodo: {}
    }

    addNewTodo = (newTodo) => {
        //console.log(">>newtodo", newTodo)
        this.setState({
            listTodos: [...this.state.listTodos, newTodo]
        })
        toast.success("Add Success full")
    }
    handleDeleteTodo = (todo) => {
        let curent = this.state.listTodos.filter((item) => item.id !== todo.id)
        this.setState({
            listTodos: curent
        })
        toast.success("Delete success!")
    }
    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //click save
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...listTodos];
            let indexObj = listTodosCopy.findIndex(item => item.id === todo.id)
            listTodosCopy[indexObj].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success('update successfull')
            return;
        }
        //click edit
        this.setState({
            editTodo: todo
        })

        console.log('>>> Choosing todo: ', todo)
    }
    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //console.log(">>> check editTodo empty", isEmptyObj)
        return (
            <>
                <div>Simple list todo with TaiVu &amp; baby shark</div>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />

                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div key={item.id} className="todo-child">
                                        {isEmptyObj === true ?
                                            <span>{index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input
                                                            value={editTodo.title}
                                                            onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>{index + 1} - {item.title} </span>
                                                }
                                            </>
                                        }

                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}>
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'
                                            }
                                        </button>

                                        <button className="delete"
                                            onClick={() => this.handleDeleteTodo(item)}>
                                            Delete
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }

}
export default Color(ListTodo);