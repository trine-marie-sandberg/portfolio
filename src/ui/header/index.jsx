import { Link } from "react-router-dom"
import { NavBar } from "../navbar"
import { Head, Logo } from "./style"

export default function Header() {

    return(
        <Head>
            <Link to="/portfolio">
                <Logo src="logo.svg" alt="logo"/>
            </Link>
            <NavBar />
        </Head>
    )
}