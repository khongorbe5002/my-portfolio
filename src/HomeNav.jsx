import { Link } from 'react-router-dom';

export default function HomeNav() {
  return (
    <nav className="home-navigation">
      <ul className="nav-links">
        <li><Link to="/resume">resume_pdf</Link></li>
        <li><Link to="/about">about(me)</Link></li>
        <li><Link to="/projects">projects</Link></li>
        <li><Link to="/experiences">experiences</Link></li>
        <li><Link to="/everything-else">everything else...</Link></li>
      </ul>
    </nav>
  );
}