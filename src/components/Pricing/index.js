import React from "react";
import _data from "../../data";

export default class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {}
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      price: _data.price
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="overflow-hidden">
          <section
            id="pricing"
            className={"package-section ptb-100 " + (this.props.bgColor && this.props.bgColor === 'gray' ? 'gray-light-bg' : 'background-shape-right')} >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="section-heading text-center mb-5">
                    {this.props.showTitle && this.props.showTitle === true && (
                      <span className="badge badge-primary badge-pill">
                        Nossos preços
                      </span>
                    )}
                    <h2>
                      Pacotes de preços Acessíveis <br />
                      <span>Escolha seu plano</span>
                    </h2>
                    <p className="lead">
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                {(this.state.price.packages || []).map((_package, index) => {
                  return (
                    <div className="col-lg-4 col-md" key={index}>
                      <div
                        className={
                          "card text-center single-pricing-pack " +
                          (_package.isFeatured ? "popular-price" : "")
                        }
                      >
                        <div className="pt-4">
                          <h5>{_package.license}</h5>
                        </div>
                        <div className="pricing-img mt-4">
                          <img
                            src="img/basic.svg"
                            alt="pricing img"
                            className="img-fluid"
                          />
                        </div>
                        <div className="card-header py-4 border-0 pricing-header">
                          <div className="h1 text-center mb-0">
                            <span className="price font-weight-bolder">
                              {_package.price}
                            </span>
                          </div>
                        </div>
                        <div className="card-body">
                          <ul className="list-unstyled text-sm mb-4 pricing-feature-list">
                            {(_package.features || []).map(feature => {
                              return <li key={feature}>{feature}</li>;
                            })}
                          </ul>
                          <a
                            href="/#"
                            className={
                              "btn mb-3 " +
                              (_package.isFeatured
                                ? "solid-btn"
                                : "outline-btn")
                            }
                            target="_blank"
                          >
                            ADQUIRIR
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
             

              {!(this.props.hideFaq && this.props.hideFaq === true) && this.props.theme === "four" && (
                <div className="row pt-5">
                  <div className="col-md-6">
                    <div className="single-faq">
                      <h5>How can I pay for this?</h5>
                      <p>
                        Intrinsicly implement high standards in strategic theme
                        areas via inexpensive solutions. Assertively
                        conceptualize prospective bandwidth whereas client-based
                        imperatives.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-faq">
                      <h5>Is it possible to pay yearly?</h5>
                      <p>
                        Assertively iterate user friendly innovation without
                        open-source markets. Monotonectally extend resource
                        sucking manufactured products without high-payoff
                        paradigms. Objectively customize ubiquitous information
                        before economically sound relationships.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-faq">
                      <h5>Do you offer discounts on multiple items?</h5>
                      <p>
                        Dramatically target focused testing procedures after
                        holistic ideas. Collaboratively maximize high-payoff ROI
                        and value-added products. Distinctively deliver
                        cooperative collaboration and idea-sharing whereas
                        customized
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-faq">
                      <h5>Is VAT included in plan prices?</h5>
                      <p>
                        Distinctively simplify high-quality initiatives for
                        highly efficient applications. Monotonectally repurpose
                        integrated customer service after magnetic e-services.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-faq">
                      <h5>Will I pay more for some features?</h5>
                      <p>
                        Enthusiastically pontificate resource-leveling supply
                        chains whereas scalable markets. Authoritatively
                        streamline resource maximizing methods of empowerment
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-faq">
                      <h5>
                        Why are there no limits on the number of messages?
                      </h5>
                      <p>
                        Assertively target turnkey ideas for market-driven
                        portals. Appropriately e-enable world-class intellectual
                        capital whereas 2.0 mindshare.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
