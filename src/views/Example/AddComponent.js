import React from "react";
class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    handleChangeJob = (event) => {
        this.setState(
            {
                title: event.target.value
            }
        )
    }
    handleChangeSalary = (event) => {
        this.setState(
            {
                salary: event.target.value
            }
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (!this.state.title || !this.state.salary) {
            alert('validate value');
            return;
        }
        let job = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        }
        //console.log(">>> addComponent submit add Job: ", job);
        this.props.addNewJob(job);
        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <>
                <form>
                    <label>title:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangeJob(event)}
                    />
                    <br />
                    <label>salary:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    />
                    <br />
                    <input
                        type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>

            </>
        )
    }
}
export default AddComponent