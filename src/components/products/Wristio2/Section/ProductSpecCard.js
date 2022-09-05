import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import charging from '../../../../components/assets/product/Wristio2/Icons/charging.png';
import voiceAssistants from '../../../../components/assets/product/Wristio2/Icons/voiceAssistants.png';
import Message from '../../../../components/assets/product/Wristio2/Icons/Message.png';
import Multitasking from '../../../../components/assets/product/Wristio2/Icons/Multitasking.png';
import nfc from '../../../../components/assets/product/Wristio2/Icons/nfc.png';
import SplitScreen from '../../../../components/assets/product/Wristio2/Icons/SplitScreen.png';




function ProductSpecCard() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <div className='bg-gray' style={{ height: '50vh', paddingTop: '6%' }}>

                <Container>
                    <Row className='text-center'>
                        <Col>
                            <img
                                className="" style={{ width: '60px', height: '60px' }}
                                src={matches ? (
                                    SplitScreen
                                ) : (
                                    SplitScreen
                                )}
                                alt="First slide" />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Split-screen mode
                            </Typography>
                        </Col>
                        <Col>
                            <img
                                className="" style={{ width: '60px', height: '60px' }}
                                src={matches ? (
                                    nfc
                                ) : (
                                    nfc
                                )}
                                alt="First slide" />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                NFC
                            </Typography>
                        </Col>
                        <Col>
                            <img
                                className="" style={{ width: '60px', height: '60px' }}
                                src={matches ? (
                                    charging
                                ) : (
                                    charging
                                )}
                                alt="First slide" />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Wireless Charging
                            </Typography>
                        </Col>


                    </Row>

                    <Row className='text-center'>
                        <Col>
                            <img
                                className="" style={{ width: '60px', height: '60px' }}
                                src={matches ? (
                                    Multitasking
                                ) : (
                                    Multitasking
                                )}
                                alt="First slide" />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Multi-tasking
                            </Typography>
                        </Col>
                        <Col>
                            <img
                                className="" style={{ width: '60px', height: '60px' }}
                                src={matches ? (
                                    voiceAssistants
                                ) : (
                                    voiceAssistants
                                )}
                                alt="First slide" />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Virtual Assistant
                            </Typography>
                        </Col>
                        <Col>
                            <img
                                className="" style={{ width: '60px', height: '60px' }}
                                src={matches ? (
                                    Message
                                ) : (
                                    Message
                                )}
                                alt="First slide" />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Messages
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ProductSpecCard