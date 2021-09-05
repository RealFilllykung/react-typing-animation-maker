
import { Col, FloatingLabel, Form, Row } from "react-bootstrap"

function InputAnimationDetail(props){

    const setInputText = props.setInputText

    const setAppearSeconds = props.setAppearSeconds

    const setDisappearSeconds = props.setDisappearSeconds


    function handleChange(e,type){
        const value = e.target.value
        const number = parseInt(value)

        if (type === 'inputText') setInputText(value)
        else if (type === 'appearSeconds') setAppearSeconds(number*1000)
        else if (type === 'disappearSeconds') setDisappearSeconds(number*1000)
    }

    return (
        <div>
            <Row>
                <Col md>
                    <FloatingLabel label="Text">
                        <Form.Control placeholder="Text" type="text" as="textarea" rows={3} onChange={(e) => handleChange(e,'inputText')}></Form.Control>
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col md>
                    <FloatingLabel label="Appear second(s)">
                        <Form.Control placeholder="seconds" type="number" onChange={(e) => handleChange(e,'appearSeconds')}></Form.Control>
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel label="Disappear second(s)">
                        <Form.Control placeholder="seconds" type="number" onChange={(e) => handleChange(e,'disappearSeconds')}></Form.Control>
                    </FloatingLabel>
                </Col>
            </Row>
        </div>
    )
}

export default InputAnimationDetail