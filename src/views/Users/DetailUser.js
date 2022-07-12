import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios"


class DetailUser extends React.Component {

    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props?.match?.params) {
            let id = this.props.match.params.id;

            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res?.data?.data
            })
            //console.log('>>check res user ', res, this.state.user)
        }
    }
    handleBackbutton = () => {
        this.props.history.push('/user')
    }
    render() {
        let { user } = this.state;
        let isEmpty = Object.keys(user).length === 0;
        return (
            <>
                <div>
                    Hello world from detail user id: {this.props.match.params.id}
                </div>
                {isEmpty ||
                    <>
                        <div>user.id: {user.id}</div>
                        <div>user.email: {user.email}</div>
                        <div>user.first_name: {user.first_name}</div>
                        <div>user.last_name: {user.last_name}</div>
                        <div><img src={user.avatar} alt="user" /> </div>
                        <div><button onClick={() => this.handleBackbutton()}>Back</button></div>
                    </>
                }
            </>

        )
    }
}

export default withRouter(DetailUser);