import LeftText from './LeftText';
import RightImage from './RightImage';

import AOS from 'aos';
AOS.init();

const RiskAssessmentOne = () => {
    return (
        <div className='text-img-section'>
            <div data-aos="fade-right" data-aos-duration="1500"><LeftText /></div>
            <div data-aos="fade-left" data-aos-duration="1500"><RightImage /></div>
        </div>
    );
};

export default RiskAssessmentOne;