import React from "react";
import { Home, Grid, CreditCard, User } from "lucide-react";
import "../BottomNav.css";
import { Link } from "react-router-dom";


export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {/*<Link to='/' className='Link-lists'>
        <button className="nav-item">
          <Home size={24} />
          <span>Home</span>
        </button>
      </Link>*/}

      
      <Link to='/register'>
        <button className="nav-item">
          <Grid size={24} />
          <span>Dashboard</span>
        </button>
      </Link>
      <button className="nav-item">
        <CreditCard size={24} />
        <span>Wallet</span>
      </button>
      <button className="nav-item">
        <User size={24} />
        <span>Profile</span>
      </button>
    </nav>
  );
}