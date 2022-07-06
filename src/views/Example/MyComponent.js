import React from "react";

class MyComponent extends React.Component {

    state = {
        firstName: 'Tai',
        lastname: 'Vu Van'
    }
    handleOnChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    render() {

        return (
            <>
                <div>
                    <input value={this.state.firstName} type="text" onChange={(event) => this.handleOnChange(event)}></input>
                    this is first name: {this.state.firstName}
                </div>
                <div>
                    this is last name: {this.state.lastname}
                </div>
            </>
        )
    }
}
export default MyComponent;