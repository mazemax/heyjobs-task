import styled from 'styled-components';
import MaterialAvatar from '@material-ui/core/Avatar';
import MaterialList from '@material-ui/core/List';
import MaterialListItem from '@material-ui/core/ListItem';
import MaterialListItemIcon from '@material-ui/core/ListItemIcon';
import MaterialListItemText from '@material-ui/core/ListItemText';
import MaterialListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import MaterialDivider from '@material-ui/core/Divider';
import MaterialBusinessCenterSharpIcon from '@material-ui/icons/BusinessCenterSharp';
import MaterialIconButton from '@material-ui/core/IconButton';
import MaterialArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// Note: Over-ridding Material UI Elements using Styled Components

export const LinkWrapper = styled.a`
  text-decoration: none;
  color: initial;
`;

export const Avatar = styled(MaterialAvatar)`
  && {
    background-color: #d8e0ed;
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

export const ListItemSecondaryAction = styled(MaterialListItemSecondaryAction)`
  && {
  }
`;

export const Divider = styled(MaterialDivider)`
  && {
  }
`;

export const BusinessCenterSharpIcon = styled(MaterialBusinessCenterSharpIcon)`
  && {
  }
`;

export const IconButton = styled(MaterialIconButton)`
  && {
  }
`;

export const ArrowForwardIosIcon = styled(MaterialArrowForwardIosIcon)`
  && {
  }
`;
