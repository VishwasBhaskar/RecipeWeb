import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Sidebar({links, close}){
    return(
        <div className = "sidebar" onClick={close}>
            {links.map(link => (
                <a className = "sidebar-link active" href="#!" key={link.name}>
                    <FontAwesomeIcon icon = {link.name} />
                    {link.name}
                </a>
            ))}
        </div>
    )
}