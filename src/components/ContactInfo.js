import React from 'react'
import style from 'styled-components';
import {MdPhone, MdLocationPin, MdEmail} from 'react-icons/md';
// import Map from './Map';
// import credentials from './credential';

function ContactInfo() {
    return (
        <Container>
            <Card>
                <Title>NUESTRO CORREO</Title>
                <Bar/>
                <Contents>
                    Si surgio algun error mientras hacias tu pedido o cualquier otra duda que tengas, por favor haznolo saber en nuestro correo. Llena el siguiente campo y dale click a "ENVIAR".
                    <MailSender>
                        <form>
                            <input type="text" className="form-address" placeholder="Your Email Address" name="email"/>
                            <input type="text" className="form-subject" placeholder="Subject" name="subject"/>
                            <textarea className="form-message" id="" rows="15" placeholder="Your Message" name="message"/>
                            <input type="submit" className="btn-snd-email" value="SEND"/>
                        </form>
                    </MailSender>
                </Contents>
            </Card>
            <Card>
                <Title>CONTACTANOS:</Title>
                <Bar/>
                <Contents>
                    <p>Nuestro equipo estara respondiendo los correos <span>tan rapido</span> como podamos. Sin embargo, si es algo urgente puedes mandarnos mensaje por Whatsapp o marcarnos.</p>
                    <InfoSubCards>
                        <Card className="subCard">
                            <StyledMailIcon style={{ fontSize: 30}}/>
                            <SubTitle>
                                <div>EMAIL</div>
                                <p>aldocelis22@gmai.com</p>
                            </SubTitle>
                        </Card>
                        <Card className="subCard">
                            <StyledPhoneIcon style={{ fontSize: 30}}/>
                            <SubTitle>
                                <div>TELEFONO</div>
                                <p>Phone: +52 (777) 305-9465</p>
                            </SubTitle>
                        </Card>
                    </InfoSubCards>
                    <Card className="subCard">
                        <StyledLocationOnIcon style={{ fontSize: 30}}/>
                        <SubTitle>
                            <div>DONDE ESTAMOS?</div>
                            <p>Av. Eugenio Garza Sada 2501 Sur,</p>
                            <p>Tecnológico, 64849 Monterrey, N.L.</p>
                        </SubTitle>
                    </Card>
                </Contents>
            </Card>
        </Container>
    )
}

export default ContactInfo

const Container = style.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 800px;
    padding: 2%;
    box-sizing: border-box;
    text-align: left;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.body};

    /* Animations and Other */
`

const Card = style.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 98%;
    width: 50%;
    padding: 1%;
    padding-top: 2%;
    box-sizing: border-box;

    /* Color, Background & Text */

    /* Animations and Other */
    .subCard {
        display: flex;
        padding-top: 7%;
    }
`

const Title = style.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    padding-bottom: 2%;

    /* Color, Background & Text */
    font-size: 1.4rem;
    font-weight: bold;

    /* Animations and Other */
`

const Bar = style.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 4px;
    width: 30%;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.color5};

    /* Animations and Other */
`

const Contents = style.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    padding-top: 2%;

    /* Color, Background & Text */
    color: ${({ theme }) => theme.transpText};
    font-size: 0.8rem;
    span {
        font-weight: bold;
    }

    /* Animations and Other */
`

const MailSender = style.div`
    /* Positioning */
    position: relative;


    /* Display & Box Model | Sizing */
    padding: 2%;

    /* Color, Background & Text */
    color: ${({ theme }) => theme.text};

    /* Animations and Other */
    input, textarea {
        width: 100%;
        box-sizing: border-box;
        margin-top: 5%;
        padding: 2%;
        border: 1px solid ${({ theme }) => theme.text};
        border-radius: 6px;

        background-color:  ${({ theme }) => theme.lightColor2};
        color: ${({ theme }) => theme.darkColor2};
        font-weight: bold;

        ::placeholder { /* works for Chrome, Safaru, Opera, Firefox*/
            color: ${({ theme }) => theme.darkColor2};
            opacity: 1; /* for Firefox */
        }
    }

    .form-message {
        margin-bottom: 45px;
    }

    .btn-snd-email {
        position: absolute;
        bottom: 0;
        right: 0;

        border: none;
        width: 30%;

        background-color: ${({ theme }) => theme.color3};
        color: ${({ theme }) => theme.body};
        
        box-shadow: -1px 1px 0 1px ${({ theme }) => theme.color10};
    }

    .btn-snd-email:active {
        border: none;
        translate(-1px, 1px); /* CHECK HOW TO SIMPLE ANIMATE IT */
    }
`

const InfoSubCards = style.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;

    /* Color, Background & Text */

    /* Animations and Other */
`

const SubTitle = style.div`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */

    /* Animations and Other */

    div {
        padding-top: 5px;
        padding-bottom: 15px;

        color: ${({ theme }) => theme.lessTranspText};
        font-size: 1rem;
        font-weight: bold;
    }
`

const StyledLocationOnIcon = style(MdLocationPin)`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */
    color: ${({ theme }) => theme.color5};

    /* Animations and Other */
`

const StyledPhoneIcon = style(MdPhone)`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */
    padding-right: 5px;
    color: ${({ theme }) => theme.color5};

    /* Animations and Other */
`

const StyledMailIcon = style(MdEmail)`
    /* Positioning */

    /* Display & Box Model | Sizing */
    padding-right: 5px;
    color: ${({ theme }) => theme.color5};

    /* Color, Background & Text */

    /* Animations and Other */
`
