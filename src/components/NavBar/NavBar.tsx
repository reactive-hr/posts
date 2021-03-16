import { Link } from 'react-router-dom'

import styles from './NavBar.module.css'

function NavBar() {
  return (
    <div className={`${styles.nav} container`}>
      <Link className={styles.item} to="/">Home</Link>
      <Link className={styles.item} to="/posts">Posts</Link>
    </div>
  )
}

export default NavBar
