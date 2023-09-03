import { useState, createContext } from 'react';
import './App.scss';
import Layout from './hoc/Layout/Layout';
import Committees from './pages/Committees/Committees';
import CongressRegistration from './pages/CongressRegistration/CongressRegistration';
import Home from './pages/Home/Home';
import Accomodation from './pages/Accomodation/Accomodation';
import Sponsorship from './pages/Sponsorship/Sponsorship';
import Contact from './pages/Contact/Contact';

export const Context = createContext<any[]>([]);

const App = () => {
    const [pageName, setPageName] = useState('Home');

    let content = <Home />;

    switch(pageName) {
        case 'Committees':
            content = <Committees />;
            break;
        case 'CongressRegistration':
            content = <CongressRegistration />;
            break;
        case 'Accomodation':
            content = <Accomodation />;
            break;
        case 'Sponsorship':
            content = <Sponsorship />;
            break;
        case 'Contact':
            content = <Contact />;
            break;
        default:
            content = <Home />;
            break;
    }

    return (
        <Context.Provider value={[pageName, setPageName]}>
            <Layout>
                {content}
            </Layout>
        </Context.Provider>
    )
}

export default App