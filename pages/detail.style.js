import styled from 'styled-components';
import MaterialCard from '@material-ui/core/Card';
import MaterialCardContent from '@material-ui/core/CardContent';
import MaterialCardHeader from '@material-ui/core/CardHeader';
import MaterialCardMedia from '@material-ui/core/CardMedia';
import MaterialCardActions from '@material-ui/core/CardActions';
import MaterialAvatar from '@material-ui/core/Avatar';
import MaterialContainer from '@material-ui/core/Container';
import MaterialDivider from '@material-ui/core/Divider';
import MaterialTypography from '@material-ui/core/Typography';
import MaterialIconButton from '@material-ui/core/IconButton';
import MaterialGrid from '@material-ui/core/Grid';
import MaterialBusinessCenterSharpIcon from '@material-ui/icons/BusinessCenterSharp';
import MaterialShareIcon from '@material-ui/icons/Share';
import MaterialMoreVertIcon from '@material-ui/icons/MoreVert';
import MaterialArrowBackIcon from '@material-ui/icons/ArrowBack';

// Note: Over-ridding Material UI Elements using Styled Components

export const Card = styled(MaterialCard)`
  margin-top: 10px;

  && {
    width: 100%;
    background-color: ${props => props.theme.palette.background.paper}
  }
`;

export const CardContent = styled(MaterialCardContent)`
  && {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

export const CardHeader = styled(MaterialCardHeader)`
  && {
  }
`;

export const CardMedia = styled(MaterialCardMedia)`
  && {
    height: 300px;
    background-size: contain;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

export const CardActions = styled(MaterialCardActions)`
  && {
  }
`;

export const Avatar = styled(MaterialAvatar)`
  && {
    background-color: #C8DCFD;
  }
`;

export const Container = styled(MaterialContainer)`
  && {
  }
`;

export const Divider = styled(MaterialDivider)`
  && {
  }
`;

export const Typography = styled(MaterialTypography)`
  && {
  }
`;

export const Grid = styled(MaterialGrid)`
  && {
  }
`;

export const ShareIcon = styled(MaterialShareIcon)`
  && {
  }
`;

export const MoreVertIcon = styled(MaterialMoreVertIcon)`
  && {
  }
`;

export const ArrowBackIcon = styled(MaterialArrowBackIcon)`
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
