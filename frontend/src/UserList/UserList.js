import React from 'react';


class UserComponent extends React.Component {
    render() {
        const { user } = this.props;

        return (
            <div>
                {user.name}
                <input type='text' value={user.value} onChange={() => { }} />
            </div>
        )

    }
}

class UserList extends React.Component {

    render() {
        const { userData } = this.props;

        if (userData) {

            const childComponent = userData.map(user => (
                <UserComponent key={user.name} user={user} />
            ))
            return (
                <div>
                    <h3>User List</h3>
                    <div>{childComponent}</div>
                    <h3>------</h3>
                </div>
            )
        } else {
            return (<div>Loading</div>)
        }
    }
}

export default UserList;