import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class DetailUser extends React.Component {
    state = {
        detailUser: {}
    }

    componentDidMount = async () => {
        if (this.props && this.props.match) {
            let id = this.props.match.params.id
            console.log(id);
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                detailUser: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }
    handleBack = () => {
        this.props.history.push('/user')
    }
    render() {
        let { detailUser } = this.state
        let isEmptyObject = Object.keys(detailUser).length === 0
        console.log(detailUser)
        return (
            <>
                <div>detail user</div>
                {isEmptyObject === false &&
                    <>
                        <div>user name: {detailUser.first_name} - {detailUser.last_name}</div>
                        <div>Email : {detailUser.email}</div>
                        <img src={detailUser.avatar} alt="" />
                    </>
                }
                <button type="button" onClick={() => this.handleBack()}> back</button>
            </>
        )
    }
}

export default withRouter(DetailUser)