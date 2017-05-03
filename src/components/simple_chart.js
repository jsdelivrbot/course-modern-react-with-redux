import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

/*
export default class SimpleChart extends Component {
  render() {
    return (
      <Sparklines data={this.props.data} width={180} height={120} margin={5}>
        <SparklinesLine color="blue"/>
      </Sparklines>
    );
  }
}
*/

function average( data ) {
  return _.round( _.sum( data ) / data.length );
}

//Simpler functional variant
export default function ( props ) {
  return (
    <div>
      <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>{average( props.data )}{props.units}</div>
    </div>
  );
}
