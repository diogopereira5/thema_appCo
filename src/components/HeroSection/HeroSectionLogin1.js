import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/index";
import './style.css';



class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: {},
      email: "",
      password: "",
      disableBtn: false,
      btnText: "Acessar",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeBtnText = btnText => {
    this.setState({ btnText });
  };

  handleFormValueChange(inputName, event) {
    let stateValue = {};
    stateValue[inputName] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(stateValue);
  }

  handleSubmit(event) {
    event.preventDefault();

    // disable the button
    this.setState({ disableBtn: true });

    // // get action
    const loginAction = login(this.state);

    // // Dispatch the contact from data
    this.props.dispatch(loginAction);

    // // added delay to change button text to previous
    setTimeout(
      function() {
        // enable the button
        this.setState({ disableBtn: false });

        // change to button name
        this.changeBtnText("Sign In");

        // get action again to update state
        const loginAction = login(this.state);

        // Dispatch the contact from data
        this.props.dispatch(loginAction);

        // clear form data
        this.setState({
          email: "",
          password: ""
        });
      }.bind(this),
      3000
    );
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
          <div className="container">
            <div className="row align-items-center justify-content-between pt-5 pt-sm-5 pt-md-5 pt-lg-0">
              <div className="col-md-7 col-lg-6">
                <div className="hero-content-left text-white">
                  <h1 className="text-white"></h1>
                  <p className="lead">
                    
                  </p>
                </div>
              </div>
              <div className="col-md-5 col-lg-5" className="contents">
                <div className="card login-signup-card">
                  <div className="card-body px-md-5 py-5">
                    <div className="mb-5">
                      <h5 className="h3">Login</h5>
                      <p className="text-muted mb-0">
                        Acesse com sua conta.
                      </p>
                    </div>

                    <form
                      className="login-signup-form"
                      method="post"
                      onSubmit={this.handleSubmit}
                    >
                      <div className="form-group">
                        <label className="pb-1">Email</label>
                        <div className="input-group input-group-merge">
                          <div className="input-icon">
                            <span className="ti-email color-primary"></span>
                          </div>
                          <input
                            value={this.state.email}
                            onChange={e =>
                              this.handleFormValueChange("email", e)
                            }
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="email@dominio.com"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col">
                            <label className="pb-1">Senha</label>
                          </div>
                          <div className="col-auto">
                            <a
                              href="password-reset.html"
                              className="form-text small text-muted"
                            >
                              Esqueceu sua senha?
                            </a>
                          </div>
                        </div>
                        <div className="input-group input-group-merge">
                          <div className="input-icon">
                            <span className="ti-lock color-primary"></span>
                          </div>
                          <input
                            value={this.state.password}
                            onChange={e =>
                              this.handleFormValueChange("password", e)
                            }
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="senha"
                            required
                          />
                        </div>
                      </div>
                      <button
                        className="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3"
                        id="signIn"
                        disabled={this.state.disableBtn}
                        onClick={() => {
                          this.changeBtnText("Acessando...");
                        }}
                      >
                        {this.state.btnText}
                      </button>
                    </form>
                  </div>
                  <div className="card-footer bg-transparent border-top px-md-5">
                    <small>Ainda não é registrado? crie sua conta</small>
                    <a href="signup1" className="small">
                      {" "}
                      clicando aqui
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-img-absolute">
            <img
              src="img/hero-bg-shape-1.svg"
              alt="wave shape"
              className="img-fluid"
            />
          </div>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state,
}))(HeroSection);
