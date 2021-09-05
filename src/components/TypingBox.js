import { useEffect, useState } from "react"
import InputAnimationDetail from "./InputAnimationDetail"
import TypingAnimationDisplayer from "./TypingAnimationDisplayer"

function TypingBox(){
    const [inputText, setInputText] = useState('')
    const [appearSeconds, setAppearSeconds] = useState(0)
    const [disappearSeconds, setDisappearSeconds] = useState(0)

    function RenderAnimation(){
        return (
            <TypingAnimationDisplayer text={inputText} displayTime={appearSeconds} disappearTime={disappearSeconds}></TypingAnimationDisplayer>
        )
    }

    return (
        <div>
            <InputAnimationDetail
                inputText = {inputText}
                setInputText = {setInputText}

                appearSeconds = {appearSeconds}
                setAppearSeconds = {setAppearSeconds}

                disappearSeconds = {disappearSeconds}
                setDisappearSeconds = {setDisappearSeconds}
            ></InputAnimationDetail>

            <RenderAnimation></RenderAnimation>
        </div>
        
    )
}

export default TypingBox