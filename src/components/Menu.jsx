import './css/Menu.css';

function Menu() {
    return (
        <ul>
            <li>
                <a href='#skills'><button>SKILLS<img src='/skills.ico'></img></button></a>
            </li>
            <li>
                <a href='#experiences'><button>EXPERIENCES<img src='/experiences.ico'></img></button></a>
            </li>
            <li>
                <a href='#contacts'><button>CONTACTS<img src='/contacts.ico'></img></button></a>
            </li>
        </ul>
    )
}

export default Menu