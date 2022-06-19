import React from 'react'
const Footer = () => {
    return (  <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <section className="access-links">
                        <header> دسترسی سریع </header>
                        <ul>
                            <li><a href=""> صفحه اصلی </a></li>
                            <li><a href=""> قوانین سایت  </a></li>
                            <li><a href=""> راهنمای سایت  </a></li>
                            <li><a href=""> پیوندهای سایت </a></li>
                            <li><a href=""> صفحه اصلی </a></li>
                            <li><a href=""> قوانین سایت  </a></li>
                            <li><a href=""> صفحه اصلی </a></li>
                            <li><a href=""> قوانین سایت  </a></li>
                            <li><a href=""> راهنمای سایت  </a></li>
                        </ul>
                    </section>
                </div>
                <div className="col-md-5 col-md-offset-1 col-sm-12 col-xs-12">
                    <div className="socials">
                        <span> شبکه های اجتماعی  سایت</span>
                        <a href=""><i className="fa fa-facebook"></i></a>
                        <a href=""><i className="fa fa-twitter"></i></a>
                        <a href=""><i className="fa fa-paper-plane"></i></a>
                        <a href=""><i className="fa fa-google-plus"></i></a>
                        <div className="clearfix"></div>
                    </div>
                   
                </div>
            </div>
        </div>
    </footer> );
}
 
export default Footer;