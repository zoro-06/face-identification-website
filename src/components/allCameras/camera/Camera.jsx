"use client"
import React, {useRef,useState} from "react"
import Webcam from "react-webcam";
import styles from "./camera.module.css"

const videoConstraints ={
    width: 540,
    facingMode: "enviroment"
}

const Camera = () => {

    const webCamRef = useRef(null)

    const [url,setUrl] = useState(null)

    const capturePhoto = React.useCallback(async() => {
        const imageSrc = webCamRef.current.getScreenshot()

        setUrl(imageSrc)
    },[webCamRef])

    const onUserMedia = (e) => {
        console.log(e)
    }

    return (
        <>
            <Webcam 
                ref={webCamRef}
                audio={false}
                screenshotFormat="image/png"
                videoConstraints = {videoConstraints}
                onUserMedia={onUserMedia}
                mirrored = {true}
            /> 
            <button className={styles.captureBtn}  onClick={capturePhoto}>Capture</button> 
            <button className={styles.deleteBtn}  onClick={() => setUrl(null)}>Delete</button>  

            {url && (
                <div>
                    <img src={url} alt="Screenshot" />
                </div>
            )}
        </>
    )
}

export default Camera; 