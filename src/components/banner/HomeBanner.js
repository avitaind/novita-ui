import mobBanner1 from '../assets/mobBanner/1.jpg';
import webBanner1 from '../assets/webBanner/1.jpg';
import Row from 'react-bootstrap/Row';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';


function HomeBanner() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Row className='scarousel'>
        <Link to='/'>
          <img
            className="d-block w-100"
            src={matches ? (
              mobBanner1
            ) : (
              webBanner1
            )}
            alt="NOVITA "
          />
          </Link>
    </Row>
  );
}

export default HomeBanner;