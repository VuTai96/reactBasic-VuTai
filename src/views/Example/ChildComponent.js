import React from "react";
import './Demo.scss';

/* this is statefull (class component) */
class ChildComponent extends React.Component {
    state = {
        show: false
    }

    handleShowState = () => {
        this.setState({
            show: !this.state.show
        })
    }

    handleOnclickDelete = (job) => {
        //console.log('child handleOnclickDelete item: ', job);
        this.props.deleteJob(job);
    }

    render() {
        let { arrJobs } = this.props;
        let { show } = this.state;
        return (
            <>
                {show === false ?
                    <div>
                        <button className="btn-show"
                            onClick={() => this.handleShowState()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="job-list">
                            {
                                arrJobs.map((elem, index) => {
                                    return (
                                        <div key={elem.id}>
                                            {index} - {elem.title} - {elem.salary} <></>
                                            <span onClick={() => this.handleOnclickDelete(elem)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowState()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

/* this is stateless (funtion component) */
// const ChildComponent = (props) => {
//     const { arrJobs } = props;
//     console.log(arrJobs)
//     return (
//         <>
//             <div>
//                 {
//                     arrJobs.map((elem, index) => {
//                         return (
//                             <div key={elem.id}>
//                                 {index} - {elem.job} - {elem.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;