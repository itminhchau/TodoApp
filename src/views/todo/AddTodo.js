import React from "react";
import { toast } from 'react-toastify';
class AddTodo extends React.Component {
    state = {
        title: ``
    }
    handerOnchangeInput = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    onClickAdd = () => {
        if (!this.state.title) {
            toast.error("missing info , please enter")
            return

        }
        this.props.handerAddTodo({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        })
        this.setState({
            title: ""
        })
        toast.success("congratulations, you add infor success")
    }
    render() {
        return (
            <div className="addTodo">
                <input type="text" value={this.state.title} onChange={(event) => this.handerOnchangeInput(event)} />
                <button onClick={() => this.onClickAdd()} > add</button>
            </div>
        )
    }
}

export default AddTodo