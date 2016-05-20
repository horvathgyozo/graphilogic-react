import React from 'react';
import Table from './table';
import { connect } from 'react-redux';
import { balszamok, fentszamok } from '../core/index';
import { changeCell } from '../reducer/actions';

class Layout extends React.Component {
  render() {
    return (
      <table id="layout">
        <tbody>
          <tr>
            <td>

            </td>
            <td>
              <Table id="felso" data={ this.props.fentSzamok } />
            </td>
          </tr>
          <tr>
            <td>
              <Table id="bal" data={ this.props.balSzamok } />
            </td>
            <td>
              <Table 
                id="tabla" 
                data={ this.props.matrix }
                szines={true} 
                onClick={this.props.onClick}
              />
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {
    matrix: state.matrix,
    balSzamok: balszamok(state.abra).map(t => [t.join(' ')]),
    fentSzamok: [
      fentszamok(state.abra).map(t => [t.join('\n')])
    ],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (i, j) => {
      dispatch(changeCell(i, j))
    }
  };
}

const LayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);

export default LayoutContainer;