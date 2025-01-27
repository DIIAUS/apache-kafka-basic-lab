const NavBar=() => {
    return (
        <nav className="flex text-5l text-center border-2 m-4 rounded-full" >
            <a className="w-36 flex-auto" href="/producer">Producer</a>
            <a className="w-36 flex-auto" href="/consumer">Consumer</a>
            <a className="w-10 flex-auto" href="/">Admin</a>
        </nav>
    )
}
export default NavBar