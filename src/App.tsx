import { useState, createContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.scss';
import Layout from './hoc/Layout/Layout';
import Committees from './pages/Committees/Committees';
import CongressRegistration from './pages/CongressRegistration/CongressRegistration';
import Home from './pages/Home/Home';
import Accomodation from './pages/Accomodation/Accomodation';
import Sponsorship from './pages/Sponsorship/Sponsorship';
import Contact from './pages/Contact/Contact';
import Paper from './pages/Paper/Paper';
import Sponsors from './pages/Sponsors/Sponsors';
import Invitation from './pages/Invitation/Invitation';
import InvitedSpeakers from './pages/InvitedSpeakers/InvitedSpeakers';

export const Context = createContext<any[]>([]);

const App = () => {
    const [pageName, setPageName] = useState('Home');

    let content = <Home />;

    switch(pageName) {
        case 'Committees':
            content = <Committees />;
            break;
        case 'Paper':
            content = <Paper />;
            break;
        case 'CongressRegistration':
            content = <CongressRegistration />;
            break;
        case 'Accomodation':
            content = <Accomodation />;
            break;
        case 'Sponsors':
            content = <Sponsors />;
            break;
        case 'Sponsorship':
            content = <Sponsorship />;
            break
        case 'Invitation':
            content = <Invitation />;
            break;
        case 'Contact':
            content = <Contact />;
            break;
        case 'InvitedSpeakers':
            content = <InvitedSpeakers />;
            break;
        default:
            content = <Home />;
            break;
    }

    return (
        <Context.Provider value={[pageName, setPageName]}>
            <Layout isComittee={pageName === "Committees"}>
                <HelmetProvider>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>4. ULUSLARARASI HAYVAN BESLEME KONGRESİ</title>
                        <meta name="description" content="Hayvan Besleme Bilim Derneği Kongre sayfası"></meta>
                        <link rel="canonical" href="https://www.hayvanbesleme.org.tr/congress/" />
                    </Helmet>
                </HelmetProvider>

                {content}
            </Layout>
        </Context.Provider>
    )
}

export default App