import React, { useState } from 'react';
import { Nav, NavLink, NavItem } from 'reactstrap';

function Menu() {

    const [isOpen, setIsOpen] = useState(false);
    const toogle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Nav vertical>
                <NavItem>
                    <NavLink href="/">
                        <img src='./images/temporario.jpg' 
                        alt='Mona Cerâmica logo'
                        style={{ maxWidth: '100%', height: 'auto' }}/>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/MoniqueAndrade">
                       Monique Andrade
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Ceramica">
                        Cerâmica
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Evento">
                        Evento
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Contato">
                        Contato
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Loja">
                       Loja
                    </NavLink>
                </NavItem>

            </Nav>
        </div>
    );

}
export default Menu;