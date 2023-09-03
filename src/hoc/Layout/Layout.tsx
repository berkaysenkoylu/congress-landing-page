import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidebar from '../../components/Sidebar/Sidebar';

const Layout = (props: any) => {

	return (
		<div className={classes.Layout}>
			<Toolbar />

            <main className={classes.Layout__Main}>
                <Sidebar />

                <section>
                    {/* <Gallery /> */}

                    {props.children}
                </section>
            </main>
		</div>
	);
}



export default Layout;