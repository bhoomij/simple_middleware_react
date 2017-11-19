import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Users extends Component {

    renderUsers() {
        return this.props.users.map( (user) => {
            return (
                <div className="card card-block" key={user.name}>
                    <h4 className="card-title">{user.name}</h4>
                    <p className="card-text">{user.company.name}</p>
                    <a className="btn btn-primary" href={user.website}>Website</a>
                </div>
            );
        })
    }

    componentWillMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div className="user-list">
                {this.renderUsers()}
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return { users };
}

export default connect(mapStateToProps, actions)(Users);