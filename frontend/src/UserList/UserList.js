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
                <TextField value={user.name}>
                </TextField>
                <Box width={200} bgcolor={user.value} m={2} p={2}>
                    {user.value}
                </Box>
            </Grid>
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
                <Container component="main" >
                    <Typography component="h1" variant="h5" >User List</Typography>
                    <div>{childComponent}</div>
                </Container >
            )
        } else {
            return (<div>Loading</div>)
        }
    }
}

export default UserList;