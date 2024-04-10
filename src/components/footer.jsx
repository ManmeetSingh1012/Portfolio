
import { HashLink as Link } from "react-router-hash-link"


export default function Footer() {

   return(
      

<footer class=" mt-14 border-t-2 border-black ">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-black sm:text-center ">© 2023 <a href="https://flowbite.com/" class="hover:underline">Manmmet Singh™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-black sm:mt-0">
        <li>
            <Link to="#about" class="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
            <Link to="#skills" class="hover:underline me-4 md:me-6">Skills</Link>
        </li>
        <li>
            <Link to="#project" class="hover:underline me-4 md:me-6">Project</Link>
        </li>
        <li>
            <Link to="#contact" class="hover:underline">Contact</Link>
        </li>
    </ul>
    </div>
</footer>

   )
}
