import React from "react";
//import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/Yasuo.png";
import { connect } from 'react-redux';

class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo');
    //         console.log(this.props)
    //     }, 3000)

    // }

    handleClickDelete = (item) => {
        //console.log('>>>item delete: ', item)
        this.props.deleteUserRedux(item);
    }
    handleClickAdd = () => {
        this.props.addUserRedux();
    }
    render() {
        //console.log(">>> prop: ", this.props)
        let listUser = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello world from Homepage &amp; with TaiVu-babyShark
                </div>
                <div >
                    <img style={{ width: '400px' }} src={logo} alt="logo Yasu" />
                </div>
                {listUser && listUser.length > 0 &&
                    listUser.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index} - {item.name} <span onClick={() => this.handleClickDelete(item)}>x</span>
                            </div>
                        )
                    })
                }
                <button onClick={() => this.handleClickAdd()}>Add</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: "DELETE_USER", payload: userDelete }),
        addUserRedux: () => dispatch({ type: "ADD_USER" })
    }
}

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
