import React from 'react';

class Result extends React.Component
{
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="monthlyInstalment">Monthly Instalment</label>       
            <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">RM</span>
            </div>
            <input type="text" className="form-control" id="monthlyInstalment" name="monthly_instalment" placeholder="Monthly Instalment" disabled="disabled" value={this.props.monthlyInstalment} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="totalInterestPayable">Total Interest Payable</label>       
            <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">RM</span>
            </div>
            <input type="text" className="form-control" id="totalInterestPayable" name="total_interest_payable" placeholder="Total Interest Payable" disabled="disabled" value={this.props.totalInterestPayable} />
          </div>
        </div>
      </form>
    );
  }
}

export default Result;
