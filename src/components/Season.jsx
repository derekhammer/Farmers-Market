import React from 'react';

class Season extends React.Component {
  constructor(props) {
    super(props);
    this.state = {monthString: props.monthString};
  }
  render() {
    return(
      <div>
        <style jsx>
        {`  
        `}
        </style>
        <h3>Current Month</h3>
        <p>{this.props.monthString}</p>
      </div>
    );
  }
}

export default Season;