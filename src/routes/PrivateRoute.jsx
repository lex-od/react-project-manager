import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { authSls } from '../redux/auth';

export default function PrivateRoute({ redirectTo, children, ...routeProps }) {
    const isLoggedIn = true;
    // const isLoggedIn = useSelector(authSls.getIsAuth);

    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect to={redirectTo} />}
        </Route>
    );
}
