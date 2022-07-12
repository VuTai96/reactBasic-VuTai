import React from "react";
//import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/Yasuo.png";


class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo');
    //         console.log(this.props)
    //     }, 3000)

    // }

    render() {
        console.log(">>> prop: ", this.props)
        return (
            <>
                <div>
                    Hello world from Homepage &amp; with TaiVu-babyShark
                </div>
                <div >
                    <img style={{ width: 900 }} src={logo} />
                </div>
            </>
        )
    }
}
// export default withRouter(Home);
export default Color(Home);
