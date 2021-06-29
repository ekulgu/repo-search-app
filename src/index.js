import React, {useState, createContext} from 'react';
import ReactDOM from 'react-dom';
import { useRoutes } from "hookrouter";
import './index.css';
import routes from "./Routes/Routes";
import Home from './Pages/Home';
import reducer from './Reducers/reducer'

// Using React createContext()  to manage state
export const RepositoryContext = createContext();

// Initializing state into Provider value
const initialState = {repositories: [], loading: false}

function App() {
    const [result, setResult] = useState({});

    // Use hookrouter to switch between pages
    // 'routes' are predefined in Routes file
    const routeResult = useRoutes(routes);
    return (
        <RepositoryContext.Provider value={{
            reducer,
            initialState,
            result,
            setResult
        }}>
            {routeResult ? routeResult : <Home/>}
        </RepositoryContext.Provider>

    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);