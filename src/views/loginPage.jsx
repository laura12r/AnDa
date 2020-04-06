import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import Login from '../components/login.js'
import Dashboard from '../pages/dashboard.jsx';

function LoginPage({ dispatch, isLogged }) {
    return (
        <Fragment>
            {isLogged ? (<Dashboard />)
                : (
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Link to="/">Back to Home AnDa</Link>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Login />
                        </Grid>
                    </Grid>
                )
            }
        </Fragment>
    )
}
const mapStateToProps = state => ({
    isLogged: state.Client.isLogged,
})
export default connect(mapStateToProps)(LoginPage);