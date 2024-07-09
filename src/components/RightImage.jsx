import React from 'react';
import imageMan from "../assets/imageofman.jpg"
import LeftBox from './BoxAndCircle/LeftBox';
import ReghtBox from './BoxAndCircle/ReghtBox';


const RightImage = () => {
    const animationDuration = 7; // Total duration for one cycle of all boxes
    const boxCount = 6; // Total number of boxes
    const delayBetweenBoxes = (animationDuration / (boxCount * 3));

    return (
        <div style={{position:"relative", zIndex:1}}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ height: "300px", width: "300px", backgroundColor: "#E2E8F0", padding: "30px", borderRadius: "50%" }}>
                    <img src={imageMan} alt="" style={{ width: "100%", borderRadius: "50%" }} />
                </div>
            </div>
             <div>
                <LeftBox color="#2C235A" top="30px" left="0px" animationDelay={0 * delayBetweenBoxes} duration={animationDuration}>SMB Solution</LeftBox>
                <ReghtBox color="#FF7222" top="80px" right="0px" animationDelay={2 * delayBetweenBoxes} duration={animationDuration}>Enterprise Security</ReghtBox>
                <LeftBox color="#FF7222" top="135px" left="0px" animationDelay={4 * delayBetweenBoxes} duration={animationDuration}>Turkey Security Solution</LeftBox>
                <ReghtBox color="#2C235A" top="180px" right="0px" animationDelay={1 * delayBetweenBoxes} duration={animationDuration}>Managed Cloud Security</ReghtBox>
                <LeftBox color="#2C235A" top="230px" left="0px" animationDelay={3 * delayBetweenBoxes} duration={animationDuration}>Managed Security Solution</LeftBox>
                <ReghtBox color="#FF7222" top="280px" right="0px" animationDelay={5 * delayBetweenBoxes} duration={animationDuration}>Bug Bounty Program</ReghtBox>
            </div>
        </div>
    );
};

export default RightImage;