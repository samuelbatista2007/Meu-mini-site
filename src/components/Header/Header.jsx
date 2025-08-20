import {Link} from "react-router-dom"

export default function Header() {
    return (
        <>
<header>
    <nav>
        <Link to="/Home">Home</Link>
        <Link to="/Contato">Contato</Link>
    </nav>
</header>

        </>
    )
}