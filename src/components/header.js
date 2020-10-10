import { Link } from 'gatsby'
import React from 'react'


export default function Header(){

    return(
        <div>
            <Link to="/" >Home </Link>
            <Link to="/about" >About </Link>
            <Link to="/contact" >Contact Us </Link>
        </div>
    )
}