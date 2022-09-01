import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import charging from '../../../../components/assets/product/Wristio2/Icons/charging.png';




function ProductSpecCard() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <div className='bg-gray' style={{ height: '50vh', paddingTop: '2%' }}>

                <Container>
                    <Row className='text-center'>
                        <Col>
                            <img
                                className="" style={{ width: '50px', height: '50px' }}
                                src={matches ? (
                                    charging
                                ) : (
                                    charging
                                )}
                                alt="First slide" />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                UHD TrueHue™ display
                            </Typography>
                        </Col>
                        <Col>
                            <img
                                className="" style={{ width: '50px', height: '50px' }}
                                src={matches ? (
                                    charging
                                ) : (
                                    charging
                                )}
                                alt="First slide" />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Always-On Enabled
                            </Typography>
                        </Col>
                        <Col>
                            <img
                                className="" style={{ width: '50px', height: '50px' }}
                                src={matches ? (
                                    charging
                                ) : (
                                    charging
                                )}
                                alt="First slide" />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Wireless Charging with SnapCharge™
                            </Typography>
                        </Col>


                    </Row>

                    <Row className='text-center'>
                        <Col>
                            <img
                                className="" style={{ width: '50px', height: '50px' }}
                                src={matches ? (
                                    charging
                                ) : (
                                    charging
                                )}
                                alt="First slide" />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Bluetooth voice calling
                            </Typography>
                        </Col>
                        <Col>
                            <img
                                className="" style={{ width: '50px', height: '50px' }}
                                src={matches ? (
                                    charging
                                ) : (
                                    charging
                                )}
                                alt="First slide" />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Voice Assistants
                            </Typography>
                        </Col>
                        <Col>
                            <img
                                className="" style={{ width: '50px', height: '50px' }}
                                src={matches ? (
                                    charging
                                ) : (
                                    charging
                                )}
                                alt="First slide" />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Up to 15 Days Battery
                            </Typography>
                        </Col>


                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ProductSpecCard