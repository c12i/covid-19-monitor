import React from 'react';

import { Footer } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { FooterText } from './footer.styles';

const FooterComponent = () => (
    <Footer style={{padding: '20px'}}>
        <FooterText>Copyright &copy; 2020</FooterText>
    </Footer>
);

export default FooterComponent;