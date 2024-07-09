import React from 'react';

const LeftBox = ({ children, color, top, left, animationDelay , duration }) => {
    const styles = {
        container: {
            display: "flex",
            alignItems: "center",
            width: "270px",
            position: "absolute",
            top: top,
            left: left,
            opacity: 0,
            animation: `fadeInOut ${duration}s ease-in-out ${animationDelay}s infinite`,
        },
        box: {
            display: 'flex',
            alignItems: 'center',
            padding: '8px 20px',
            border: `3px solid ${color}`,
            borderRadius: '10px',
            backgroundColor: 'white',
            fontFamily: 'Arial, sans-serif',
            fontSize: '12px',
            fontWeight: "bold",
            color: color,
            zIndex: 3,
        },
        line: {
            flexGrow: 1,
            height: '3px',
            backgroundColor: color,
            zIndex: 1,
        },
        outerCircle: {
            // backgroundColor: '#8080804f',
            backgroundColor: '#FAFCFD',
            padding: '5px',
            borderRadius: '50%',
            zIndex: 5,
        },
        circle: {
            width: '20px',
            height: '20px',
            border: `3px solid ${color}`,
            borderRadius: '50%',
            backgroundColor: 'white',
        },
    };
    return (
        <div>
            <div className="container" style={styles.container}>
                <div className="box" style={styles.box}>
                    <span className="icon">✔</span>
                    <span className="text">{children}</span>
                </div>
                <div className="line-container">
                    <div className="line" style={styles.line}></div>
                </div>
                <div className='outer-circle' style={styles.outerCircle}>
                    <div className="circle" style={styles.circle}></div>
                </div>
            </div>
        </div>
    );
};

export default LeftBox;