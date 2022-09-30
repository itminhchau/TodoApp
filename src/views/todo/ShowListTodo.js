import React from "react";
import { toast } from "react-toastify";
import './showList.scss';

class ShowListTodo extends React.Component {
    state = {
        editJob: {}
    }

    handleDelete = (job) => {
        this.props.handerDeleteJob(job)
        toast.success("Delete success")
    }
    handleEdit = (job) => {
        let isEmpty = Object.keys(job).length === 0
        let { editJob } = this.state
        let { arrayJob } = this.props
        //save
        if (isEmpty === false && editJob.id === job.id) {
            //Find index of specific object using findIndex method.    
            let copyArrayJob = [...arrayJob]
            let objIndex = copyArrayJob.findIndex((job => editJob.id === job.id));
            //Update object's name property.
            copyArrayJob[objIndex].title = editJob.title
            this.props.handleUpdate(copyArrayJob)
            this.setState({
                editJob: {}
            })
            return
        }
        //edit
        this.setState({
            editJob: job
        })
    }

    handleOnchangeInput = (event) => {
        let editJobCopy = { ...this.state.editJob };
        editJobCopy.title = event.target.value;
        this.setState({
            editJob: editJobCopy
        })
    }
    render() {
        let { arrayJob } = this.props
        let { editJob } = this.state
        let isEmpty = Object.keys(editJob).length === 0
        console.log(isEmpty)
        return (
            <>
                <div className="wrap-content-list" >
                    {arrayJob && arrayJob.length > 0 &&
                        arrayJob.map((item, index) => {
                            return (
                                <div className="content-item" key={item.id}>
                                    {isEmpty === true ?
                                        <span className="content-item__job"> {index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {editJob.id === item.id ?
                                                <span>
                                                    {index + 1} -
                                                    <input
                                                        onChange={(event) => this.handleOnchangeInput(event)}
                                                        value={editJob.title} />
                                                </span>
                                                :
                                                <span > {index + 1} - {item.title}</span>
                                            }
                                        </>
                                    }



                                    <div className="control">

                                        <button className="btn-edit" onClick={() => this.handleEdit(item)}>
                                            {
                                                isEmpty === false && editJob.id === item.id ?
                                                    "Save" : "Edit"
                                            }
                                        </button>
                                        <button className="btn-delete" onClick={() => this.handleDelete(item)}>Delete</button>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>



            </>
        )
    }
}

export default ShowListTodo