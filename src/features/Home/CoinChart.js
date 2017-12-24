import React from 'react';
import { map } from 'sanctuary';
import { Table } from 'react-bootstrap';

export default (props) => (
    <div>
        <Table hover responsive striped>
        <thead>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>symbol</th>
                <th>Price [USD]</th>
                <th>24hr Volume [USD] </th>
                <th>24hr Change</th>
            </tr>
        </thead>
                <tbody>
                {
                    map(value => (
                        <tr key={ value.name }>
                            <td>{ value.rank }</td>
                            <td>{ value.name }</td>
                            <td>{ value.symbol }</td>

                            <td>{ `$ ${value.price_usd}` } </td>

                            <td style={
                                value['percent_change_24h'] > 0
                                ? { color : 'green' }
                                : { color: 'red' }
                            }>{ `${value.percent_change_24h} %` } </td>

                            <td style={ value['value.percent_change_24h' ] > 0
                                ? { color: 'green' }
                                : { color: 'red' } }>{ `${ value.percent_change_24h } %` }</td>
                        </tr>
                    ), props.coins)
                }
            </tbody>
        </Table>
    </div>
)
