import React from 'react';

const Footer = () => (

<footer className="page-footer font-small blue pt-4 mt-4">

    {/**Footer Links*/}
    <div className="container-fluid text-center text-md-left">
        <div className="row">

            {/**First column*/}
            <div className="col-md-6">
                <h5 className="text-uppercase">Footer Content</h5>
                <div className="bottom"> Clicky Game! <div className="bottom">Clicky Game! <img alt="react" src="assets/images/react.svg"></img></div> </div>
                <p>Here you can use rows and columns here to organize your footer content.</p>
            </div>
            {/**.First column */}

            {/**Second column*/}
            <div className="col-md-6">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li>
                        <a href="#!">Link 1</a>
                    </li>
                    <li>
                        <a href="#!">Link 2</a>
                    </li>
                    <li>
                        <a href="#!">Link 3</a>
                    </li>
                    <li>
                        <a href="#!">Link 4</a>
                    </li>
                </ul>
            </div>
            {/**.Second column */}
        </div>
    </div>
    {/**.Footer Links*/}

    {/**Copyright*/}
    <div className="footer-copyright py-3 text-center">
        © 2018 Copyright:
        <a href="https://mdbootstrap.com/material-design-for-bootstrap/"> MDBootstrap.com </a>
    </div>
    {/**.Copyright*/}

</footer>
)
export default Footer;
