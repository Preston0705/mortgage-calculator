import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      balance: '',
      interest: '',
      term: 15,
      payment: '',
    }
    this.updateBalance = this.updateBalance.bind(this);
    this.updateInterest = this.updateInterest.bind(this);
    this.updateTerm = this.updateTerm.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  updateBalance(e) {
    this.setState({
      balance: e.target.value
    })
  }

  updateInterest(e) {
    this.setState({
      interest: e.target.value
    })
  }

  updateTerm(e) {
    this.setState({
      term: e.target.value
    })
  }
  
  calculate(e) {
    e.preventDefault();
    let balance = (this.state.balance);
    let interest = (this.state.interest);
    let term = (this.state.term);
    //let payment = '';
console.log(balance);
console.log(interest);
console.log(term);


    let intRate = interest / 100 / 12;
    let totalMonths = term * 12;
    let top = intRate * Math.pow((1 + intRate), totalMonths);
    let bottom = Math.pow(1 + intRate, totalMonths) - 1;
    let total = balance * (top / bottom);
    let result = total.toFixed(2);
    // .toLocaleString(undefined, {
    //   minimumFractionDigits: 2,
    //   maximumFractionDigits: 2
    // });
    let payment = "$" + result + " is your payment.";
 
  console.log(top);
  console.log(bottom);
  console.log(intRate);
  console.log(totalMonths);
  console.log(total);
  console.log(result);
    this.setState(
     {payment}
    )
  }

  render() {
    return (
      <div className='container'>
        <div className="col-md-offset-2 col-md-10">
        <h3>Mortgage Calculator</h3>
            <hr />
          </div>
          <form className="form-horizontal" onSubmit={this.calculate}>
            <div className="form-group">
              <label htmlFor='balance' className="col-sm-2 control-label"><strong>Loan Balance</strong></label>
              <div className="col-sm-10">
                <input type="number" className="form-control" name='balance' placeholder="Enter amount" value={this.state.balance} onChange={this.updateBalance}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor='rate' className="col-sm-2 control-label"><strong>Interest Rate (%)</strong></label>
              <div className="col-sm-10">
                <input type="number" className="form-control" name="rate" step='0.01' placeholder="Enter amount" value={this.state.interest} onChange={this.updateInterest}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor='rate' className="col-sm-2 control-label"><strong>Loan Term (years)</strong></label>
              <div className="col-sm-10">
                <select type="number" className="form-control" name="term" value={this.state.term} onChange={this.updateTerm}>
                <option value="15">15 years</option>
                <option value="30">30 years</option>
                </select>
             </div>
            </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" name='submit' className="btn btn-primary">Submit</button>
            </div>
            <h3 name="output" id="output">
              <p>{this.state.payment}</p>
            </h3>
          </div>
        </form>
      </div>
     
    );
  }
}
