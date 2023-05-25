import React from 'react'
import { useContext } from 'react'
import {contextAPI} from "./context"
function Navbar() {
  let data=useContext(contextAPI)
  return <nav className="navbar  fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="javascript void">Url-Shortener</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header" >
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Url-Shortener</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="javascript void" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              My links
            </a>
            <ul className="dropdown-menu">
              {data.map((e)=>{
                  const url=`https://url-shortener-u2jl.onrender.com/${e.Shorturl}`
                  const Fullurl=`https://${e.Fullurl.slice(8)}/favicon.ico`
              return<>
             
             <li>
                <hr className="dropdown-divider"/>
              </li>
              <li ><img src={Fullurl} width="20px" alt="url-favicon"></img>&nbsp;<a href={url} style={{fontSize:"14px"}}target='_blank' rel="noreferrer">{url}</a>
              </li>
             
              </>
            })
          }
           </ul>

          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  
}

export default Navbar
