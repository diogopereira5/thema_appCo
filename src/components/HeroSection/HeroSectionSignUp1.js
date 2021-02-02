import React from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions/index";
import './style.css';

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: {},
      name: "",
      email: "",
      password: "",
      isAgreed: false,
      disableBtn: false,
      btnText: "CRIAR CONTA",
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
    const signUpAction = signUp(this.state);

    // // Dispatch the contact from data
    this.props.dispatch(signUpAction);

    // // added delay to change button text to previous
    setTimeout(
      function() {
        // enable the button
        this.setState({ disableBtn: false });

        // change to button name
        this.changeBtnText("CRIAR CONTA");

        // get action again to update state
        const signUpAction = signUp(this.state);

        // Dispatch the contact from data
        this.props.dispatch(signUpAction);

        // clear form data
        this.setState({
          name: "",
          email: "",
          password: "",
          isAgreed: false
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
        <section
          className="hero-section ptb-100 background-img full-screen"
          style={{
            backgroundImage: "url('img/hero-bg-1.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-between pt-5 pt-sm-5 pt-md-5 pt-lg-0">
              <div className="col-md-5 col-lg-5" className="contentSingIn">
                <div className="card login-signup-card shadow-lg mb-0">
                  <div className="card-body px-md-5 py-5">
                    <div className="mb-5">
                      <h6 className="h3">Crie sua conta</h6>
                      <p className="text-muted mb-0">
                        
                      </p>
                    </div>
                    <form
                      className="login-signup-form"
                      method="post"
                      onSubmit={this.handleSubmit}
                    >
                      <div className="form-group">
                        <label className="pb-1">seu nome</label>
                        <div className="input-group input-group-merge">
                          <div className="input-icon">
                            <span className="ti-user color-primary"></span>
                          </div>

                          <input
                            value={this.state.name}
                            onChange={e =>
                              this.handleFormValueChange("name", e)
                            }
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Seu nome"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="pb-1">E-mail</label>
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
                        <label className="pb-1">Senha</label>
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

                      <div className="my-4">
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            checked={this.state.isAgreed}
                            onChange={e =>
                              this.handleFormValueChange("isAgreed", e)
                            }
                            type="checkbox"
                            name="isAgreed"
                            className="custom-control-input"
                            id="ckbAgree"
                          />
                          <label className="custom-control-label" htmlFor="ckbAgree">
                            Concordo com <a href="/#">os termos e condições de uso</a>
                          </label>
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
                  <div className="card-footer px-md-5 bg-transparent border-top">
                    <small>Já possui um conta? </small>
                    <a href="/" className="small">
                      Acesse
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-img-absolute">
            <img src="img/wave-shap.svg" alt="wave shape" className="img-fluid" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state,
}))(HeroSection);
