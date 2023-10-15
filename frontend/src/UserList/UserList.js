import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
class UserComponent extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <Grid>
                <TextField value={user.name} sx={{ backgroundColor: user.value }}>
                </TextField>
            </Grid>
        )
    }
}

class UserList extends React.Component {

    validateUsers(userData) {
        if (!Array.isArray(userData)) {
            throw ("Users type is not an array")
        }
        return true
    }

    render() {
        const { userData } = this.props;

        if (!userData) {
            return (<div>Loading</div>)
        }

        try {
            this.validateUsers(userData)
        } catch (error) {
            return (<div>Error with Users. {error}</div>)
        }

        const childComponent = userData.map(user => (
            <UserComponent key={user.name} user={user} />
        ))
        return (
            <Container component="main" >
                <Typography component="h1" variant="h5" >User List</Typography>
                <div>{childComponent}</div>
            </Container >
        )

    }
}

export default UserList;