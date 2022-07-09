import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent"

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: "abc1", title: "html", salary: "1000" },
            { id: "abc2", title: "CSS", salary: "2000" },
            { id: "abc3", title: "JS", salary: "3000" }
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
        console.log('MC addNewJob: ', this.state.arrJobs)
    }

    deleteJob = (job) => {
        let newarrJob = this.state.arrJobs.filter((item) => item.id !== job.id)
        console.log('MC deleteJob: ', newarrJob);
        this.setState({
            arrJobs: newarrJob
        })
    }

    componentDidMount() {
        console.log(">>>> Run component dit mount")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(">>> Run componet dit update: ", "prevState: ", prevState, "current state: ", this.state)
    }

    render() {
        console.log('>>> Call Render: ', this.state);
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />

            </>
        )
    }
}
export default MyComponent;