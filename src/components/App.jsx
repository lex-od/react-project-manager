import { lazy, Suspense } from 'react';

import { Redirect, Switch } from 'react-router';
import { routes, PrivateRoute, PublicRoute } from '../routes';
import { AppBar } from './header';
import { Container } from './common';

const { REGISTER, LOGIN, TASKS, SPRINTS, PROJECTS } = routes;

const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));
const TasksView = lazy(() => import('../views/TasksView'));
const SprintsView = lazy(() => import('../views/SprintsView'));
const ProjectsView = lazy(() => import('../views/ProjectsView'));

export default function App() {
    return (
        <>
            <header>
                <Container>
                    <AppBar />
                </Container>
            </header>

            <main>
                <Suspense fallback={<p>Загрузка страницы...</p>}>
                    <Switch>
                        <PublicRoute
                            restricted
                            path={REGISTER}
                            redirectTo={PROJECTS}
                        >
                            <RegisterView />
                        </PublicRoute>

                        <PublicRoute
                            restricted
                            path={LOGIN}
                            redirectTo={PROJECTS}
                        >
                            <LoginView />
                        </PublicRoute>

                        <PrivateRoute path={TASKS} redirectTo={LOGIN}>
                            <TasksView />
                        </PrivateRoute>

                        <PrivateRoute path={SPRINTS} redirectTo={LOGIN}>
                            <SprintsView />
                        </PrivateRoute>

                        <PrivateRoute path={PROJECTS} redirectTo={LOGIN}>
                            <ProjectsView />
                        </PrivateRoute>

                        <Redirect to={LOGIN} />
                    </Switch>
                </Suspense>
            </main>
        </>
    );
}
