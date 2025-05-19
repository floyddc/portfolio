import './css/Footer.css'; 
import reactlogo from '/react.svg';
import htmllogo from '/html_footer.ico';
import csslogo from '/css_footer.ico';
import jslogo from '/js_footer.ico';

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