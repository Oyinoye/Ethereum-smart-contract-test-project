import React, { Component } from 'react';
import logo from '../logo2.png';
// import tokenLogo from '../token-logo.png';
// import ethLogo from '../eth-logo.png';
import BuyForm from './BuyForm';
import SellForm from './SellForm';



class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentForm: 'buy'
        }
    }


  render() {
      let content
      if(this.state.currentForm === 'buy') {
          content = <BuyForm 
          ethBalance={this.props.ethBalance}
          tokenBalance={this.props.tokenBalance}
          buyTokens={this.props.buyTokens}
          />
      }
      else {
        content = <SellForm 
        ethBalance={this.props.ethBalance}
        tokenBalance={this.props.tokenBalance}
        sellTokens={this.props.sellTokens}
        />
      }
    return (
      <div id="content">
          <img src={logo} className="App-logo" alt="logo" style={{padding: "10px"}} />
          
        <p>Exchange your crypto here!</p>
        <div className="card mb-4">
            <div className="d-flex justify-content-between mb-3">
                <button className="btn btn-light" onClick={(event) => {
                    this.setState({ currentForm: 'buy' })
                }}>
                    Buy
                </button>
                <span className="text-muted">&lt; &nbsp; &gt;</span>
                <button className="btn btn-light" onClick={(event) => {
                    this.setState({ currentForm: 'sell' })
                }}>
                    Sell
                </button>
            </div>
            <div className="card-body">
                
                {content}

            </div>
        </div>
      </div>
    );
  }
}

export default Main;
