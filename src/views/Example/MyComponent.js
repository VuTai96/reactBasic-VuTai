import React from "react";

class MyComponent extends React.Component {

    state = {
        firstName: 'Tai',
        lastname: 'Vu Van'
    }
    handleOnChangeName = (event) => {

        this.setState({
            firstName: event.target.value
        })
    }
    handleClickButton() {
        console.log('my name: ', this.state.firstName)
        alert(`click me: ${this.state.firstName}`);
    }


    render() {

        return (
            <>
                <div>
                    <input value={this.state.firstName} type="text" onChange={(event) => this.handleOnChangeName(event)}></input>
                    this is first name: {this.state.firstName}
                </div>
                <div>
                    this is last name: {this.state.lastname}
                </div>
                <div>
                    <button onClick={() => this.handleClickButton()}> click me</button>
                </div>
            </>
        )
    }
}
export default MyComponent;