import { Link } from 'react-router-dom';
import './menu.css';

const routes = [{
  label: 'Characters',
  to: '/characters'
}, {
  label: 'Planets',
  to: '/planets'
}, {
  label: 'Vehicles',
  to: '/vehicles'
}];

export default function Menu() {
  return (
    <nav>
      <ul className='menu'>
        {routes.map((route, index) => (
          <li key={index} className="link">
            <Link to={route.to}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}