import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Layout = () => {
    return (
        <div className='page'>
            <main className='flex-shrink-0'>
                <div className='container'>
                    <Outlet />
                </div>
            </main>
            <footer className='footer mt-auto py-3 bg-body-tertiary'>
                <div className='container'>
                    <span className='text-body-secondary'><Link to='/terms'>Terms</Link></span>
                </div>
            </footer>
        </div>
    )
}

export default Layout