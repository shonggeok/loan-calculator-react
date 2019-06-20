import React, { Component } from 'react';

class Result extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render() {
    return (
      <form>
        <div class="form-group">
          <label for="monthlyInstalment">Monthly Instalment</label>       
            <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">RM</span>
            </div>
            <input type="text" class="form-control" id="monthlyInstalment" name="monthly_instalment" placeholder="Monthly Instalment" disabled="disabled" value={this.props.monthlyInstalment} />
          </div>
        </div>
        <div class="form-group">
          <label for="totalInterestPayable">Total Interest Payable</label>       
            <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">RM</span>
            </div>
            <input type="text" class="form-control" id="totalInterestPayable" name="total_interest_payable" placeholder="Total Interest Payable" disabled="disabled" value={this.props.totalInterestPayable} />
          </div>
        </div>
      </form>
    );
  }
}

export default Result;
