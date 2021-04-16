
import React from 'react';
import './Header.scss';


function Header() {
  return (
    <header className="Header">
			<nav>
				<ul className="nav"> 
					<li> <a href="/" className="nav-font">Comments</a> </li>		
					<li> <a href="/search" className="nav-font">Search</a> </li>				
				</ul>
			</nav>
		</header>
  );
}

export default Header;
