import classes from './Layout.module.scss';
import Toolbar from '../../components/Toolbar/Toolbar';
import Sidebar from '../../components/Sidebar/Sidebar';

const Layout = (props: any) => {
    const { isComittee, isProgram } = props;

	return (
		<div className={classes.Layout}>
			<Toolbar />

            <main className={classes.Layout__Main}>
                <Sidebar />

                <section style={isComittee || isProgram ? { width: "100%" } : {}}>
                    {props.children}
                </section>
            </main>
		</div>
	);
}



export default Layout;