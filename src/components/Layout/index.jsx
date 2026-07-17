import { Outlet, Link } from "react-router";

import styles from "./Layout.module.css"

const Layout = ({ children }) => {
    return(
    <div className={styles.container}>
        <Link 
            to= "/"
            className={styles.containerLink}>
            <h1>Seo Mall</h1>
        </Link>
        <Outlet/>
    </div>
    )
}

export default Layout;