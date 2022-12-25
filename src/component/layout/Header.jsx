import React from "react";
import {AiFillTwitterSquare ,AiFillDingtalkSquare ,AiFillRedditSquare,} from 'react-icons/ai'
import {BsFillInfoSquareFill}from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
import{TbRobot} from 'react-icons/tb'
import {BiPaperPlane,BiCoffee} from 'react-icons/bi'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-black py-4 fixed-top  fw-bold border-bottom border-success  " id="head">
      <div className="container">
 <button className="btn btn-success safuu fw-bold  btn-lg px-5">SAFUU</button>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active icon text-white" aria-current="page" href="#">
                <FaTwitter size={20} />
              </a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link icon text-white" href="#">
               <TbRobot size={25}/>
              </a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link icon  text-white" href="#">
              <BiPaperPlane size={25}/>
              </a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link icon text-white" href="#">
             <BiCoffee size={25}/>
              </a>

            </li> </ul>
       
            <a className='border py-2 px-4 saf text-white text-decoration-none fw-bold' id="saf" href=""> SAFUU</a> <br />

            
           
            <li className="nav-item">
            <a className='btn walletbtn btn-success py-2 px-4 fw-bold' href=""> Connect Wallet</a> <br />

            </li>
         
          

        
        </div>
      </div>
    </nav>
  );
}
