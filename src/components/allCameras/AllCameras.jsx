"use client"
import React, {useRef,useEffect} from "react"
import Webcam from "react-webcam";

const AllCameras = () => {
    const [deviceId, setDeviceId] = React.useState({});
    const [devices, setDevices] = React.useState([]);
  
    const handleDevices = React.useCallback(
      mediaDevices =>
        setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
      [setDevices]
    );
  
    React.useEffect(
      () => {
        navigator.mediaDevices.enumerateDevices().then(handleDevices);
      },
      [handleDevices]
    );
  
    return (
      <>
        {devices.map((device, key) => (
            <div key={key}>
              <Webcam 
              audio={false} 
              videoConstraints={{ deviceId: device.deviceId }} />
              {device.label || `Device ${key + 1}`}
            </div>
  
          ))}
      </>
    );
  };

export default AllCameras;