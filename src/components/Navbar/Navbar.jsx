import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar is-link'>
      <div className='navbar-brand'>
        <a to='/' className='m-2 pl-4'>
          <svg id='Layer_1' viewBox='0 0 512 512' width='45'>
            <g id='XMLID_1_'>
              <path
                id='XMLID_4_'
                fill='#ffff'
                d='M415.2,405c-25.5,0-45.9,17.8-51.8,40.8H196.1c-2.5-13.6-10.2-24.6-20.4-32.3l21.2-66.2h263.2L512,118.9
		l-416.1-56L62.8,40.8l1.7-7.6c0-17.8-14.4-32.3-32.3-32.3S0,15.3,0,33.1s14.4,32.3,32.3,32.3l5.9-1.7L77.3,90l65.4,256.4h19.5
		l-17,55.2h-1.7c-30.6,0-54.3,24.6-54.3,55.2s24.6,54.3,54.3,54.3c22.1,0,41.6-13.6,50.1-33.1h173.2c7.6,19.5,27.2,33.1,49.2,33.1
		c29.7,0,53.5-23.8,53.5-53.5S444.9,405,415.2,405z'
              />
            </g>
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
