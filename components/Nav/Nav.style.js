import styled from 'styled-components';
import MaterialAppBar from '@material-ui/core/AppBar';
import MaterialToolbar from '@material-ui/core/Toolbar';
import MaterialIconButton from '@material-ui/core/IconButton';
import MaterialMenuIcon from '@material-ui/icons/Menu';
import MaterialTypography from '@material-ui/core/Typography';
import MaterialList from '@material-ui/core/List';
import MaterialListItem from '@material-ui/core/ListItem';
import MaterialListItemIcon from '@material-ui/core/ListItemIcon';
import MaterialListItemText from '@material-ui/core/ListItemText';
import MaterialDrawer from '@material-ui/core/Drawer';
import MaterialDivider from '@material-ui/core/Divider';
import MaterialHomeIcon from '@material-ui/icons/Home';

// Note: Over-ridding Material UI Elements using Styled Components

export const NavWrapper = styled.div`
  flex-grow: 1;
`;

export const SidebarWrapper = styled.div`
  width: 250px;
`;

export const LinkWrapper = styled.a`
  text-decoration: none;
  color: initial;
`;

export const AppBar = styled(MaterialAppBar)`
  && {
  }
`;

export const Toolbar = styled(MaterialToolbar)`
  && {
  }
`;

export const IconButton = styled(MaterialIconButton)`
  && {
    margin-right: ${props => props.theme.spacing(2)}
  }
`;

export const MenuIcon = styled(MaterialMenuIcon)`
  && {
  }
`;

export const Typography = styled(MaterialTypography)`
  && {
    flex-grow: 1;
  }
`;

export const List = styled(MaterialList)`
  && {
  }
`;

export const ListItem = styled(MaterialListItem)`
  && {
  }
`;

export const ListItemIcon = styled(MaterialListItemIcon)`
  && {
  }
`;

export const ListItemText = styled(MaterialListItemText)`
  && {
  }
`;

export const Drawer = styled(MaterialDrawer)`
  && {
  }
`;

export const Divider = styled(MaterialDivider)`
  && {
  }
`;

export const HomeIcon = styled(MaterialHomeIcon)`
  && {
  }
`;
