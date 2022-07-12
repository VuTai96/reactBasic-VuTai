import React from "react";
import axios from "axios";
import './ListUser.scss';
import { withRouter } from "react-router-dom"

class ListUser extends React.Component {
    state = {
        ListUsers: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        //console.log(">> check res: ", res.data.data)

        this.setState({
            ListUsers: res?.data?.data || []
        })
        //console.log(this.state)
    }
    handleClickUser = (item) => {
        this.props.history.push(`/user/${item.id}`)
        //console.log(this.props)
    }
    render() {
        let { ListUsers } = this.state;
        //console.log(ListUsers)
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    {ListUsers && ListUsers.length > 0 &&
                        ListUsers.map((item, index) => {
                            return (
                                <div key={item.id} className="child"
                                    onClick={() => this.handleClickUser(item)}
                                >
                                    {index + 1} - {item.first_name} - {item.last_name}
                                </div>
                            )
                        })

                    }
                </div>

            </div>
        )
    }
}

export default withRouter(ListUser);