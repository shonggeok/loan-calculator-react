import React, { Component } from 'react';

class Form extends React.Component
{
  constructor(props) {
    super(props);
  }

  onFieldChange(event) {
    let fieldName = event.target.id;
    let fieldValue = event.target.value;
    this.props.onChange(fieldName, fieldValue);
  }

  render() {
    return (
      <form>
        <div class="form-group text-info">
          <label for="loanAmount">Loan Amount</label>       
            <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">RM</span>
            </div>
            <input type="text" class="form-control" id="loanAmount" name="loan_amount" placeholder="Loan Amount" value={this.props.loanAmount} onChange={this.onFieldChange.bind(this)} />
          </div>
        </div>
        <div class="form-group text-info">
          <label for="loanPeriod">Loan Period</label>       
            <div class="input-group">
            <input type="text" class="form-control" id="loanPeriodInYears" name="loan_period" placeholder="Loan Period" value={this.props.loanPeriodInYears} onChange={this.onFieldChange.bind(this)} />
            <div class="input-group-append">
              <span class="input-group-text">Year(s)</span>
            </div>
          </div>
        </div>
        <div class="form-group text-info">
          <label for="interestRatePct">Interest Rate</label>       
            <div class="input-group">
            <input type="text" class="form-control" id="interestRatePct" name="interest_rate" placeholder="Interest Rate" value={this.props.interestRatePct} onChange={this.onFieldChange.bind(this)} />
            <div class="input-group-append">
              <span class="input-group-text">%</span>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
