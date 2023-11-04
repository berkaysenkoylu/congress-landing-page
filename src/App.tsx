import { useState, useEffect, createContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
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
import Program from './pages/Program/Program';

export const Context = createContext<any[]>([]);

const App = () => {
    const { i18n } = useTranslation();
    const [isReady, setIsReady] = useState(false);
    const [pageName, setPageName] = useState('Home');

    useEffect(() => {
        const currLang = localStorage.getItem('CurrentLang');
        if (currLang && currLang !== '') {
            i18n.changeLanguage(currLang);
        }
        setIsReady(true);
    }, [i18n]);

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
        case 'Program':
            content = <Program />;
            break;
        default:
            content = <Home />;
            break;
    }

    return (
        <Context.Provider value={[pageName, setPageName]}>
            {isReady ? <Layout isComittee={pageName === "Committees"}>
                <HelmetProvider>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>4. ULUSLARARASI HAYVAN BESLEME KONGRESİ</title>
                        <meta name="description" content="Hayvan Besleme Bilim Derneği Kongre sayfası"></meta>
                        <link rel="canonical" href="https://www.hayvanbesleme.org.tr/congress/" />
                    </Helmet>
                </HelmetProvider>

                {content}
            </Layout> : null}
        </Context.Provider>
    )
}

export default App