import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Reserve Table</Link></li>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Orders</Link></li>
        <li><Link to="/">Reservation</Link></li>
        <li><Link to="/">Find a store</Link></li>
        <li><Link to="/">Login</Link></li>
      </ul>
    </nav>
  );
}
