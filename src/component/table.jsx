import React from 'react';

export default class Table extends React.Component {
  render() {
    
    const szines = (this.props.szines ? true : false);
    
    const szinek = [
      'white',
      'black',
      'gray',
    ];
    
    var sorok = this.props.data.map(
      (sor, i) => 
        (
        <tr key={`row_${i}`}>
          { sor.map((cell, j) => (
            <td 
              key={`${i}_${j}`}
              style={{
                backgroundColor: szines ? szinek[cell] : 'white'
              }}
              onClick={() => this.props.onClick && this.props.onClick(i, j)}       
            >
              { szines ? '' : cell }
            </td>
          )) }
        </tr>
        ) 
    );
    
    return (
      <table id={ this.props.id }>
        <tbody>
          { sorok }
        </tbody>
      </table>
    )
  }
}