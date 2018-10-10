import React from 'react';

const MyInput = ({ value = '', onChange }) => (
  <input value={value} onChange={onChange} />
);

class Demo extends React.Component {
  state = {
    text: '',
  }

  onTextChange = (event) => {
    this.setState({ text: event.target.value });
  }

  onTextReset = () => {
  this.setState({ text: '' });
  }

  render() {
    return (<div>
      基础表单
      </div>
    );
  }
}

export default Demo;

