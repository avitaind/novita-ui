import React from 'react'
import Row from 'react-bootstrap/Row';
import mob1 from '../../../../components/assets/product/Wristio2/mob1.jpg';
import web1 from '../../../../components/assets/product/Wristio2/web1.jpg';
import mob2 from '../../../../components/assets/product/Wristio2/mob2.jpg';
import web2 from '../../../../components/assets/product/Wristio2/web2.jpg';
import mob3 from '../../../../components/assets/product/Wristio2/mob3.jpg';
import web3 from '../../../../components/assets/product/Wristio2/web3.jpg';
import mob4 from '../../../../components/assets/product/Wristio2/mob4.jpg';
import web4 from '../../../../components/assets/product/Wristio2/web4.jpg';
import mob5 from '../../../../components/assets/product/Wristio2/mob5.jpg';
import web5 from '../../../../components/assets/product/Wristio2/web5.jpg';
import mob6 from '../../../../components/assets/product/Wristio2/mob6.jpg';
import web6 from '../../../../components/assets/product/Wristio2/web6.jpg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import { Container } from 'react-bootstrap';


function ProductFeatureDark() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <div className='bg-dark text-white'>
        <Container>
        <Row className='text-center'>

            <Typography variant='p' component='p' mt={4} mb={4} pt={4}>
              <span className='text-white' style={{ fontFamily: 'roboto!important' }}>The perfect partner to hold on to your wrist is here. Introducing the all-new Smart watch Wristio 2, with 250+ watch faces, 8-12 days of battery life on a single charge, split screen display, and an aesthetic to engulf into. Re-imagine your smartwatch experience with the Wristio 2.</span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              width='100%'
              height='100%'
              src={matches ? (
                mob1
              ) : (
                web1
              )}
              alt="First slide" />
          </Row>
          <Row className='text-center'>

            <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} style={{
              background: "-webkit-linear-gradient(30deg, #8C928D 40%, #FF8E53 60%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            Bezel-free Display 

            </Typography>
            <Typography variant='p' component='p' mt={4} mb={4} pt={4}>
              <span className='text-white'>The mightiest display to give revolutionizing visuals. A bezel-free 1.9 HD display with crystal-clear resolutions ensures 50% more screen area and gives an eye-pleasing experience to legit push your limits beyond the horizon.</span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              src={matches ? (
                mob2
              ) : (
                web2
              )}
              alt="First slide" />
          </Row>
          <Row className='text-center'>

            <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} style={{
              background: "-webkit-linear-gradient(30deg, #8C928D 40%, #FF8E53 60%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            Watch faces that reflect you
            </Typography>
            <Typography variant='p' component='p' mt={4} mb={4} pt={4}>
              <span className='text-white'>250+ watch faces, now that's something which will give a rush to your dopamine. No matter where you go or what your OOTD is, Wristio 2 has got it all. Be the head-turner of the day everywhere, every time.</span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              src={matches ? (
                mob3
              ) : (
                web3
              )}
              alt="Second slide" />
          </Row>
          <Row className='text-center'>

            <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} style={{
              background: "-webkit-linear-gradient(30deg, #8C928D 40%, #FF8E53 60%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            Motivates the fitness freak in you

            </Typography>
            <Typography variant='p' component='p' mt={4} mb={4} pt={4}>
              <span className='text-white'>Exercise, Walk, and be Motivated. Wristio 2 automatically tracks all your movements and reminds you to keep yourself pumped up throughout the day. Stay active from start to finish line.</span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              src={matches ? (
                mob4
              ) : (
                web4
              )}
              alt="Third slide" />
          </Row>
          <Row className='text-center'>

            <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} style={{
              background: "-webkit-linear-gradient(30deg, #8C928D 40%, #FF8E53 60%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            Expansive 30 Days Battery Life
            </Typography>
            <Typography variant='p' component='p' mt={4} mb={4} pt={4}>
              <span className='text-white'>With a battery life of ___ and ___ on standby, Wristio 2 is the constant companion that you can rely on. Go days for being active and never miss a bit of your movement or work.</span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              src={matches ? (
                mob5
              ) : (
                web5
              )}
              alt="Fourth slide" />
          </Row>
          <Row className='text-center'>

            <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} style={{
              background: "-webkit-linear-gradient(30deg, #8C928D 40%, #FF8E53 60%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            Precise health tracking powered by AI 
            </Typography>
            <Typography variant='p' component='p' mt={4} mb={4} pt={4}>
              <span className='text-white'>The sensors like never before to measure your blood oxygen level. Never miss a beat of your heart. The revolutionary innovation to keep your body healthy from top to bottom.</span>
            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              src={matches ? (
                mob6
              ) : (
                web6
              )}
              alt="Fifth slide" />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ProductFeatureDark