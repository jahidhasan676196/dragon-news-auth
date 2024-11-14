import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-12 '>
            <img className=' mx-auto mb-5' src={logo} alt="" />
            <p className='text-lg text-[#706F6F] font-normal'>Journalism Without Fear or Favour</p>
            <p className='text-[#403F3F] text-xl font-medium mt-3'>{moment().format('LLLL')}</p>
        </div>
    );
};

export default Header;