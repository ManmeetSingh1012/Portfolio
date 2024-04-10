
import { HashLink as Link } from "react-router-hash-link"

export default function Header() {
   return (
      <header className="mx-auto   w-5/6  flex flex-row justify-between font-normal pt-3">


         <span>Manmeet Singh</span>

         <ul className="flex flex-row ">
            <li className="ml-5"><Link to="#home">Home</Link></li>
            <li className="ml-5"><Link to="#about">About</Link></li>
            <li className="ml-5"><Link to="#skills">Skills</Link></li>
            <li className="ml-5"><Link to="#project">Project</Link></li>
            <li className="ml-5"><Link to ="#contact">Contact Me</Link></li>
         </ul>


      </header>
   )
}