import React from "react";
import { connect } from "react-redux";
import './style.css'
import  Login from '../../themes/login1';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this.openpopup = this.openpopup.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
  }

  closePopUp(e){
    document.body.style.opacity = 1;
    document.getElementById('PopUp').style.display = "none";
    document.getElementById('PopUp').style.position = "none";
  }

  openpopup(e){
    if(window.location.href.indexOf("signup1") == -1 ){
      document.getElementById('PopUp').style.display = "inline";
      document.getElementById('PopUp').style.position = "fixed";
    }
  }

  render() {
    return (
      <React.Fragment>
        <header className="header" id="top">
          <nav className={"navbar navbar-expand-lg fixed-top " + (this.props.bgColor && this.props.bgColor === 'white' ? 'custom-nav white-bg' : 'bg-transparent')}>
            <div className="container">
              <a className="navbar-brand" className="nav-link page-scroll" href="#top">
                <div className="logo" href="/">
                  <img
                     
                  />
                </div>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="ti-menu"></span>
              </button>

              <div
                className="collapse navbar-collapse main-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#about">
                      Sobre
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#pricing">
                      Preços
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#contact">
                      Contatos
                    </a>
                  </li>
                  <li className="nav-item">
                    <div  className="btnFeatured">
                      <a onClick={this.openpopup}> 
                        login
                      </a>
                    </div>                              
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className="popUp" id="PopUp">
          <div><a className="close" onClick={this.closePopUp}> x </a> </div>
            <Login />
        </div>
      </React.Fragment>
    );
  }
}

export default connect(state => ({}))(Header);
