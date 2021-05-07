import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer, authSls } from './auth';
import { projectsReducer } from './projects';
import { sprintsReducer } from './sprints';
import { tasksReducer } from './tasks';
import { api } from '../services';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['user', 'tokens'],
};

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        projects: projectsReducer,
        sprints: sprintsReducer,
        tasks: tasksReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store, null, () => {
    const token = authSls.getAccessToken(store.getState());
    if (token) api.setToken(token);
});

export { store, persistor };
