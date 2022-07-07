import React from "react";

class ChildComponent extends React.Component {

    render() {
        console.log(this.state);
        console.log(this.props);
        const { name, age, arrJobs } = this.props;
        console.log(arrJobs)
        return (
            <>
                <div>
                    child Component {name} - {age}
                </div>
                <div>
                    {
                        arrJobs.map((elem, index) => {
                            return (
                                <div key={elem.id}>
                                    {index} - {elem.job} - {elem.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}
export default ChildComponent;