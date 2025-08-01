import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 70 }}
    >
      <motion.div className="logo" whileHover={{ scale: 1.1 }}>
        <Link to="/">WYF</Link>
      </motion.div>

      <motion.ul className="nav-links">
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/">Home</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/recipes">Recipes</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/about">About</Link>
        </motion.li>
      </motion.ul>

      <motion.div className="auth-links">
        <motion.span
          className="login-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/login">Login</Link>
        </motion.span>
        <motion.span
          className="register-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          
        </motion.span>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
