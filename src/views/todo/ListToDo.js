import React from "react";
import AddTodo from "./AddTodo";
import ShowListTodo from "./ShowListTodo";

class ListtoDo extends React.Component {

    state = {
        arrayJob: [
            { id: `todo1`, title: `deverlop` },
            { id: `todo2`, title: `manager` },
            { id: `todo3`, title: `project` }
        ]
    }

    handerAddTodo = (job) => {
        this.setState({
            arrayJob: [...this.state.arrayJob, job]
        })
    }
    handerDeleteJob = (job) => {
        let currentJob = this.state.arrayJob
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrayJob: currentJob
        })
    }

    handleUpdate = (job) => {
        this.setState({
            arrayJob: job
        })

    }

    render() {
        return (
            <>
                <h1>List Todo MC</h1>
                <AddTodo
                    handerAddTodo={this.handerAddTodo}
                />
                <ShowListTodo
                    arrayJob={this.state.arrayJob}
                    handerDeleteJob={this.handerDeleteJob}
                    handleUpdate={this.handleUpdate}
                />
            </>
        )
    }
}

export default ListtoDo