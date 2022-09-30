import React from "react";
import "./listUser.scss";
import axios from "axios";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
    state = {
        listUser: []
    }

    componentDidMount = async () => {
        let res = await axios.get("https://reqres.in/api/users?page=2")
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
    }
    handerMoveDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }
    render() {
        let { listUser } = this.state
        return (
            <div className="wrap-user">
                <ul className="list-user">
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <li className="list-user__item" key={item.id} onClick={() => this.handerMoveDetailUser(item)}>
                                    <span>{index + 1} -{item.first_name} - {item.last_name}</span>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        )
    }
}
export default withRouter(ListUser)