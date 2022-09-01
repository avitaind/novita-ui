import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CameraControl from '../../../../components/assets/product/Wristio1/Icons/CameraControl.png';
import MultiLingualSupport from '../../../../components/assets/product/Wristio1/Icons/MultiLingualSupport.png';
import PushNotification from '../../../../components/assets/product/Wristio1/Icons/PushNotification.png';
import SedentayReminder from '../../../../components/assets/product/Wristio1/Icons/SedentayReminder.png';
import TheatreMode from '../../../../components/assets/product/Wristio1/Icons/TheatreMode.png';
import WaterReminder from '../../../../components/assets/product/Wristio1/Icons/WaterReminder.png';




function ProductSpecCard() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <div className='bg-gray' style={{ height: '50vh', paddingTop: '5%' }}>

                <Container>
                    <Row className='text-center'>
                        <Col>
                            <img
                                className="" style={{ width: '50px', height: '50px' }}
                                src={matches ? (
                                    CameraControl
                                ) : (
                                    CameraControl
                                )}
                                alt="First slide" />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Camera Control
                            </Typography>
                        </Col>
                        <Col>
                            <img
                                className="" style={{ width: '50px', height: '50px' }}
                                src={matches ? (
                                    WaterReminder
                                ) : (
                                    WaterReminder
                                )}
                                alt="First slide" />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Drink Water Reminder
                            </Typography>
                        </Col>
                        <Col>
                            <img
                                className="" style={{ width: '50px', height: '50px' }}
                                src={matches ? (
                                    MultiLingualSupport
                                ) : (
                                    MultiLingualSupport
                                )}
                                alt="First slide" />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Multi Lingual Support
                            </Typography>
                        </Col>


                    </Row>

                    <Row className='text-center'>
                        <Col>
                            <img
                                className="" style={{ width: '50px', height: '50px' }}
                                src={matches ? (
                                    PushNotification
                                ) : (
                                    PushNotification
                                )}
                                alt="First slide" />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Push Notifications
                            </Typography>
                        </Col>
                        <Col>
                            <img
                                className="" style={{ width: '50px', height: '50px' }}
                                src={matches ? (
                                    SedentayReminder
                                ) : (
                                    SedentayReminder
                                )}
                                alt="First slide" />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Sedentary Reminder
                            </Typography>
                        </Col>
                        <Col>
                            <img
                                className="" style={{ width: '50px', height: '50px' }}
                                src={matches ? (
                                    TheatreMode
                                ) : (
                                    TheatreMode
                                )}
                                alt="First slide" />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Theatre Mode
                            </Typography>
                        </Col>


                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ProductSpecCard