import { useContext } from 'react';

import { Context } from '../../../App';
import classes from './NavigationItem.module.scss';

const NavigationItem = (props: any) => {
    const [pageName, setPageName] = useContext(Context);

    let classList = [classes.NavigationItem];

    if (pageName === props.pageName) {
        classList = [classes.NavigationItem, classes.NavigationItem__Active];
    }

    return (
        <button className={classList.join(' ')} onClick={() => setPageName(props.pageName)}>{props.label}</button>
    )
}

export default NavigationItem;