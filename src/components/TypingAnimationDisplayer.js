import Typical from 'react-typical'

function TypingAnimationDisplayer(props){
    const text = props.text
    const displayTime = props.displayTime
    const disappearTime = props.disappearTime

    return(
        <div style={{fontSize:"80px"}} className="mt-5">
            <Typical
                loop={Infinity}
                steps={[
                    text,
                    displayTime,
                    '',
                    disappearTime
                ]}
            >
            </Typical>
        </div>
    )
}

export default TypingAnimationDisplayer