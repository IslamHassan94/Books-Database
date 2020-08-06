import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader } from '@fortawesome/free-solid-svg-icons'
 

function Header() {
    
    return (
       <header>
             
           <div className="header"> 
           <FontAwesomeIcon icon={faBookReader} className="iconn" />
           <h1 className="headerTitle">Books Database  </h1>
           </div>

       </header>
    )
}

export default Header
