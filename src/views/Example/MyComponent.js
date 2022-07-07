import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

    state = {
        firstName: 'Tai',
        lastName: 'Vu Van',
        adress: 'Nghe an',
        arrJobs: [
            { id: "abc1", job: "html", salary: "1000 $" },
            { id: "abc2", job: "CSS", salary: "2000 $" },
            { id: "abc3", job: "JS", salary: "3000 $" }
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState(
            {
                firstName: event.target.value
            }
        )
    }
    handleChangeLastName = (event) => {
        this.setState(
            {
                lastName: event.target.value
            }
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(">>> ", this.state)
    }

    render() {
        console.log(this.state);
        return (
            <>
                <form>
                    <label>firstName</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label>lastName</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br />
                    <input
                        type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
                <ChildComponent
                    name={this.state.lastName + ' ' + this.state.firstName}
                    age={'26'}
                    arrJobs={this.state.arrJobs}
                />

            </>
        )
    }
}
export default MyComponent;