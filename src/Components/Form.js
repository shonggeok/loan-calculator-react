import React from 'react';

class Form extends React.Component
{
  onFieldChange(event) {
    let fieldName = event.target.id;
    let fieldValue = event.target.value;
    this.props.onChange(fieldName, fieldValue);
  }

  render() {
    return (
      <form>
        <div className="form-group text-info">
          <label htmlFor="loanAmount">Loan Amount</label>
            <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">RM</span>
            </div>
            <input type="number" inputMode="numeric" className="form-control" id="loanAmount" name="loan_amount" placeholder="Loan Amount" value={this.props.loanAmount} onChange={this.onFieldChange.bind(this)} />
          </div>
        </div>
        <div className="form-group text-info">
          <label htmlFor="loanPeriod">Loan Period</label>       
            <div className="input-group">
            <input type="number" inputMode="numeric" className="form-control" id="loanPeriodInYears" name="loan_period" placeholder="Loan Period" value={this.props.loanPeriodInYears} onChange={this.onFieldChange.bind(this)} />
            <div className="input-group-append">
              <span className="input-group-text">Year(s)</span>
            </div>
          </div>
        </div>
        <div className="form-group text-info">
          <label htmlFor="interestRatePct">Interest Rate</label>
            <div className="input-group">
            <input type="number" step=".01" inputMode="numeric" className="form-control" id="interestRatePct" name="interest_rate" placeholder="Interest Rate" value={this.props.interestRatePct} onChange={this.onFieldChange.bind(this)} />
            <div className="input-group-append">
              <span className="input-group-text">%</span>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
