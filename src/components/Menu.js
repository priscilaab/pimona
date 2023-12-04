import React, { useState } from 'react';
import { Nav, NavItem } from 'reactstrap';
import logo from '../images/logograndebranco.png';
import logoContato from '../images/logopnggdeitado.png';
import { Link, useLocation } from 'react-router-dom';
import '../css/Menu.css';
function Menu() {

    const [isOpen, setIsOpen] = useState(false);
    const toogle = () => setIsOpen(!isOpen);
    const [paginaContato, mudaPagina] = useState(false);
    const loc = useLocation().pathname;
    const logoAtual = loc === "/Contato" ? logoContato : logo;

    return (
        <div>
            <img className="logo" src={logoAtual}
                alt='Mona Cerâmica logo'
                style={{
                    maxWidth: '60%', height: 'auto', margin: '0', alignSelf: 'flex-start', top: '30px',
                    left: '30px'
                }} />
            <Nav vertical>
                <NavItem>
                    <Link to="/">

                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/MoniqueAndrade">
                        Monique Andrade
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/Ceramica">
                        Cerâmica
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/Evento">
                        Evento
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/Contato" >
                        Contato
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/Loja">
                        Loja
                    </Link>
                </NavItem>

            </Nav>
        </div>
    );

}
export default Menu;