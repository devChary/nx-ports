import React, { useEffect, useRef } from 'react';

import { EmptyState } from '../empty-state/empty-state';
import EmptyIcon from '../../assets/empty_folder.png';

/* Packages */
import * as d3 from 'd3';

/* Styles */
import './styles.scss';

const LineChart = ({
  marketRates,
  portsSelected,
  noMarketRates,
  marketPostions,
}) => {
  console.log('🚀 ~ LineChart ~ dynamicMarketPrices:', {
    ...marketPostions,
  });
  const svgRef = useRef(null);

  /* Generates Line chart */
  const generateGraph = async () => {
    const parseTime = d3.timeParse('%Y-%m-%d');

    const data = marketRates.map((d) => {
      return {
        date: parseTime(d.day),
        high: +d.high,
        low: +d.low,
        mean: +d.mean,
      };
    });

    /* set the dimensions and margins of the graph */
    const margin = { top: 20, right: 20, bottom: 50, left: 70 },
      width = 1160 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    /* append the svg object to the defined ref */
    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    /* add X axis and Y axis */
    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    const valueline = d3
      .line()
      .x(function (d) {
        return x(d.date);
      })
      .y(function (d) {
        return y(d.low);
      });

    // gridlines in y axis function
    const createYGridlines = () => {
      return d3.axisLeft(y).ticks(5);
    };

    x.domain(
      d3.extent(data, (d) => {
        return d.date;
      })
    );
    y.domain([
      0,
      d3.max(data, function (d) {
        return Math.max(d.high, d.low);
      }),
    ]);

    /* add the Y gridlines */
    svg
      .append('g')
      .attr('class', 'grid')
      .call(createYGridlines().tickSize(-width).tickFormat(''));

    /* Add the valueline path. */
    svg
      .append('path')
      .data([data])
      .attr('class', 'line')
      .attr('fill', 'none')
      .style('stroke', '#F7CE74')
      .attr('stroke-width', 1.5)
      .attr('d', valueline);

    svg
      .append('g')
      .attr('class', 'axisGray')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x).ticks(data.length / 12));

    /* Convert value to two decimal dollar format */
    // const dollarFormat = (d) => d3.format('($.2f')(d);

    // svg
    //   .append('g')
    //   .attr('class', 'axisGray')
    //   .call(d3.axisLeft(y).ticks(3).tickFormat(dollarFormat));

    // Add the dollar format function
    const dollarFormat = d3.format('($.2f');

    // Rest of the code...

    // Add the Y axis
    svg
      .append('g')
      .attr('class', 'axisGray')
      .call(d3.axisLeft(y).ticks(3).tickFormat(dollarFormat));

    /* Add the X Axis */
    svg
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x).ticks(3));
  };

  useEffect(() => {
    if (marketRates?.length > 0 && !noMarketRates) {
      generateGraph();
    }
  }, [marketRates, noMarketRates]);

  if (noMarketRates && portsSelected) {
    return (
      <div className="empty-wrapper">
        <EmptyState
          icon={EmptyIcon}
          title="No data found!"
          subTitle="No market prices avaialable for the selected ports. Please try again by selecting different ports."
        />
      </div>
    );
  }

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default LineChart;
