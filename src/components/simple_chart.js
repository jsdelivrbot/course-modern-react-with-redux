import React, { Component } from 'react';
import { Sparklines, SparklinesReferenceLine, SparklinesLine } from 'react-sparklines';

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

//Simpler functional variant
export default function ( props ) {
  return (
    <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
      <SparklinesLine color={props.color}/>
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
  );
}
