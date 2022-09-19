import React from "react";
import Logo from '../../Images/logo.jpeg';

import { Wrapper, Content, LogoImg } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={Logo} alt='rmdb logo'></LogoImg>
            <div>
                <span>Menu Items here</span>
            </div>
            <div>Steve CricInfo Test Site</div>
        </Content>
    </Wrapper>
);

export default Header;