import React from 'react';
import Link from './Link';

const Header = () => {
  return (

    <div className="ui secondary pointing menu" style={{backgroundColor:"lightblue"}}>
        <h3 style={{position:"relative", top:"7px",left:"3px"}}>Food review!</h3>
      <Link href="/" className="item">
        Food List
      </Link>
      <Link href="/Reviewer_statistics" className="item">
        Reviewer statistics
      </Link>
      <Link href="/Food_statistics" className="item">
        Food statistics
      </Link>
      
    </div>
  );
};

export default Header;
