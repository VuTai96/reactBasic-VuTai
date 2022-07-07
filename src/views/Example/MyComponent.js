import React from "react";

class MyComponent extends React.Component {

    state = {
        firstName: 'Tai',
        lastName: 'Vu Van'
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
                firstName: event.target.value
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
            </>
        )
    }
}
export default MyComponent;