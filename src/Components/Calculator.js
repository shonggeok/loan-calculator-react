import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';

class Calculator extends React.Component
{
  state = {
    loanAmount: 0,
    interestRatePct: 0,
    loanPeriodInYears: 0,
    monthlyInstalment: '',
    totalInterestPayable: ''
  }

  baseState = this.state;

  timer = null;

  onChange(field, value) {
    clearTimeout(this.timer);
    this.setState({[field]: value});
    setTimeout(this.calcPayable, 500);
  }

  calcPayable = () => {
    if (this.state.loanAmount != '' && this.state.interestRatePct != '' && this.state.loanPeriodInYears != '') {
      let P = this.state.loanAmount;
      let r = this.state.interestRatePct;
      let n = this.state.loanPeriodInYears * 12;

      let M = this.pmt(r, n, P);
      let ip = (M * n) - P;

      this.setState({
        monthlyInstalment: M.toFixed(2),
        totalInterestPayable: ip.toFixed(2)
      });
    } else {
      this.setState({
        monthlyInstalment: this.baseState.monthlyInstalment,
        totalInterestPayable: this.baseState.totalInterestPayable
      });
    }
  }

  pmt = (rate, nper, pv) => {
    /**
     * rate - Interest rate for the loan
     * nper - Total number of monthly payments for the loan
     * pv   - The present value; Also known as the principal
     */

    let r = rate / 1200;
    let amount = r * -pv * Math.pow((1 + r), nper) / (1 - Math.pow((1 + r), nper));
    return amount;
  }

  render() {
    return (
      <div class="container min-vh-100 min-vw-100 bg-dark">
        <div class="row min-vh-100">
          <div class="col-md-6 mx-auto my-auto">
            <div class="card bg-light">
              
              <div class="card-header text-center bg-info text-white">
                <h2>Loan Calculator</h2>
              </div>

              <div class="card-body font-weight-bold">
                <Form onChange={this.onChange.bind(this)} />
              </div>
              <div class="card-body font-weight-bold bg-white text-dark">
                <Result monthlyInstalment={this.state.monthlyInstalment} totalInterestPayable={this.state.totalInterestPayable} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
