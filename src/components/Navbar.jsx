import React from 'react'
import { Link } from 'wouter'

class Navbar extends React.Component {
  render() {
    return (
        <div className='navbar'>
            <Link href='/'>
                <a className='homeLink'>Home</a>
            </Link>
            <Link href='/game'>
                <a className='gameLink'>Play Game</a>
            </Link>
            <Link href='/score'>
                <a className='scoreLink'>Scoreboard</a>
            </Link>
        </div>
    )
  }
}

export default Navbar