
import React from "react";
import { withRouter } from "react-router";
import { connect, Connect } from "react-redux";

class Home extends React.Component {
    // componentDidMount = () => {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     }, 3000)
    // }
    handleDeleteUser = (user) => {
        this.props.deletUserRedux(user)
    }

    handleCreateUser = () => {
        this.props.createUserRedux()
    }
    render() {

        console.log(">>>>> check props", this.props)
        let { reduxData } = this.props
        let listUserRedux = reduxData
        return (
            <div className="listUser">
                {listUserRedux && listUserRedux.length > 0 &&
                    listUserRedux.map((item, index) => {
                        return (
                            <div className="itemUser" key={item.id}>
                                {index + 1} - {item.name}
                                &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>

                            </div>
                        )
                    })
                }
                <button type="button" onClick={() => this.handleCreateUser()}> add new</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        reduxData: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        createUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))