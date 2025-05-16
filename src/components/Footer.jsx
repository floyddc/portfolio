import './css/Footer.css'; 
import reactlogo from '/react.svg';
import htmllogo from '/html.png';
import csslogo from '/css.png';
import jslogo from '/js.png';

function Footer() {
    return (
        <div className='footer'>     
            <p className='p1'>developed in</p>
            <div className='divlogos'>
                <a className='logobutton' href='https://en.wikipedia.org/wiki/HTML'><img src={htmllogo} alt='html'/></a>
                <a className='logobutton' href='https://en.wikipedia.org/wiki/CSS'><img src={csslogo} alt='css'/></a>
                <a className='logobutton' href='https://en.wikipedia.org/wiki/JavaScript'><img src={jslogo} alt='js'/></a>
            </div>
            <div className='powered-by'>
                <p className='p2'>powered by</p>
                <a href='https://react.dev/'><img src={reactlogo} alt="react" className="footer-logo" /></a>
            </div>
        </div>
    )
}

export default Footer