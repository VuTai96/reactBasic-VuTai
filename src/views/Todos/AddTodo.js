import React from "react";
import { toast } from 'react-toastify';


class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleOnchangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
        //console.log(">>> data added: ", this.state)
    }
    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error(`Missing title's todo`, {
                theme: toast.dark
            })
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleOnchangeTitle(event)}
                />
                <button type="button" className="add"
                    onClick={() => this.handleAddTodo()}>
                    add
                </button>
            </div>
        )
    }

}
export default AddTodo;