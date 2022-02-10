import "./menu.scss";

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menuA "+ (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Menu</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#works">Works</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#testimonials">Testimonials</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
