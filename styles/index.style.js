import styled from 'styled-components';
import MaterialCard from '@material-ui/core/Card';
import MaterialContainer from '@material-ui/core/Container';
import MaterialCardHeader from '@material-ui/core/CardHeader';
import MaterialCardContent from '@material-ui/core/CardContent';
import MaterialDivider from '@material-ui/core/Divider';

// Note: Over-ridding Material UI Elements using Styled Components

export const NoJobsWrapper = styled.p`
  margin-left: 15px;
`;

export const Card = styled(MaterialCard)`
  margin-top: 10px;

  && {
    width: 100%;
    background-color: ${props => props.theme.palette.background.paper}
  }
`;

export const Container = styled(MaterialContainer)`
  && {
  }
`;

export const CardHeader = styled(MaterialCardHeader)`
  && {
  }
`;

export const CardContent = styled(MaterialCardContent)`
  && {
  }
`;

export const Divider = styled(MaterialDivider)`
  && {
  }
`;
