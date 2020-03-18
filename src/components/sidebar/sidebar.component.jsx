import React from 'react';

import NavToggle from '../nav-toggle/nav-toggle.component';
import SidenavHeader from '../sidenav-header/sidenav-header.component';
import SidebarBody from '../sidebar-body/sidebar-body.component';

import { Sidebar, Sidenav } from 'rsuite';
import 'rsuite/dist/styles/rsuite-dark.css';

const SideBarComponent = ({ expand, handleToggle }) => (
  <Sidebar
    style={{ display: 'flex', flexDirection: 'column' }}
    width={expand ? 260 : 56}
    collapsible
  >
    <SidenavHeader />
    <Sidenav
      expanded={expand}
      defaultOpenKeys={['3']}
      appearance="subtle"
    >
      <SidebarBody />
    </Sidenav>
    <NavToggle expand={expand} onChange={handleToggle} />
  </Sidebar>
);

export default SideBarComponent;