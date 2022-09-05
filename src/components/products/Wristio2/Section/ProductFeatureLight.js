import React from 'react'
import Row from 'react-bootstrap/Row';
import mob7 from '../../../../components/assets/product/Wristio2/mob7.jpg';
import web7 from '../../../../components/assets/product/Wristio2/web7.jpg';
import mob8 from '../../../../components/assets/product/Wristio2/mob8.jpg';
import web8 from '../../../../components/assets/product/Wristio2/web8.jpg';
import mob9 from '../../../../components/assets/product/Wristio2/mob9.jpg';
import web9 from '../../../../components/assets/product/Wristio2/web9.jpg';
import mob10 from '../../../../components/assets/product/Wristio2/mob10.jpg';
import web10 from '../../../../components/assets/product/Wristio2/web10.jpg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import { Container } from 'react-bootstrap';


function ProductFeatureLight() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <div className='bg-light text-black'>
        <Container>
          <Row className='text-center'>

            <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} style={{
              background: "-webkit-linear-gradient(30deg, #8C928D 40%, #4E4F4E 60%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Uncompromised Calling just like your Phone

            </Typography>
            <Typography variant='p' component='p' mt={4} mb={4} pt={4}>
              <span className='text-dark'>Forgot your phone at home or don't feel like carrying it everywhere? Now answer all your calls effortlessly with easy Bluetooth connectivity. Send texts to your friends conveniently even when you're super-duper busy. All with the mightiest Wrsitio 2.</span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              src={matches ? (
                mob7
              ) : (
                web7
              )}
              alt="First slide" />
          </Row>
          <Row className='text-center'>

            <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} style={{
              background: "-webkit-linear-gradient(30deg, #8C928D 40%, #4E4F4E 60%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Your Mood. Your Music
            </Typography>
            <Typography variant='p' component='p' mt={4} mb={4} pt={4}>
              <span className='text-dark'>Wristio 2 gives you the power to move around with millions of musical tunes on your wrist. Listen to crystal-clear music with an embedded speaker and dual-channel microphone.</span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              src={matches ? (
                mob8
              ) : (
                web8
              )}
              alt="Second slide" />
          </Row>
          <Row className='text-center'>

            <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} style={{
              background: "-webkit-linear-gradient(30deg, #8C928D 40%, #4E4F4E 60%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Tougher & Durable watch ever built
            </Typography>
            <Typography variant='p' component='p' mt={4} mb={4} pt={4}>
              <span className='text-dark'>Splash around in the rain or dive into the pool without any worries. Wristio 2 with a rating of IP68 water resistance, is built to ditch damages in the rain or in the pool.</span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              src={matches ? (
                mob9
              ) : (
                web9
              )}
              alt="Third slide" />
          </Row>
          <Row className='text-center'>

            <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} style={{
              background: "-webkit-linear-gradient(30deg, #8C928D 40%, #4E4F4E 60%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            Weather check always

            </Typography>
            <Typography variant='p' component='p' mt={4} mb={4} pt={4}>
              <span className='text-dark'>Track detailed present weather forecasts or how they will be changing throughout the day in real time around the world.</span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              src={matches ? (
                mob10
              ) : (
                web10
              )}
              alt="Third slide" />
          </Row>
          <Row className='text-center'>

            <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} style={{
              background: "-webkit-linear-gradient(30deg, #8C928D 40%, #4E4F4E 60%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              We have more for you

            </Typography>
            <Typography variant='p' component='p' mt={4} mb={4} pt={4}>
              <span className='text-dark'>It doesn't end here. Wristio 2 has a lot in store to make multi-tasking more convenient and efficient.</span>

            </Typography>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ProductFeatureLight