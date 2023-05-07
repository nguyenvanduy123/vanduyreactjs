
import { Provider } from 'react-redux';
import MainRouter from 'router/MainRouter';
import initStore from './redux/store';
import './index.css';
const store = initStore()
function App (props) {
    return (
        <Provider store={store}>
            <MainRouter />
        </Provider>
    )
}

export default App
