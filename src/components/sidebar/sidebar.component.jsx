import React from 'react';

import windowSize from 'react-window-size';

import NavToggle from '../nav-toggle/nav-toggle.component';
import SidenavHeader from '../sidenav-header/sidenav-header.component';
import SidebarBody from '../sidebar-body/sidebar-body.component';

import { Sidebar, Sidenav, Affix } from 'rsuite';
import 'rsuite/dist/styles/rsuite-dark.css';

const SideBarComponent = ({ expand, handleToggle, windowWidth }) => (
  <Sidebar
    style={{ display: 'flex', flexDirection: 'column' }}
    width={expand && windowWidth > 768 ? 260 : 56}
    collapsible
  >
    <SidenavHeader />
    <Sidenav
      expanded={expand}
      defaultOpenKeys={['3']}
      appearance="subtle"
    >
      <Affix>
        <SidebarBody />
      </Affix>
    </Sidenav>
    {
      windowWidth < 768 ? null
      :
      <NavToggle expand={expand} onChange={handleToggle} /> 
    }
  </Sidebar>
);

export default windowSize(SideBarComponent);