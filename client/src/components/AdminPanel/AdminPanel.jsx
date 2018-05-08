import React, { Component } from 'react';
import {
	Table,
	TableBody,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';

var styles = {
	'.adminPanel': {
		'tableLayout': 'auto'
	},
	'.headerRow th': {
		'fontWeight': 'bold',
		'color': 'black'
	},
	'td.nameCol' : {
		'fontWeight': 'bold',
		'color': 'black'
	},
	'.statusButtons': {
		'marginRight': '5px',
		'color': 'white',
		'backgroundColor': '#007FD6'
	},
	'.editButton': {
		'marginRight': '5px',
		'color': '#5A5A5A',
		'backgroundColor': '#E0E1E2'
	},
	'.skillCol': {
		'height': 'auto',
		'overflow': 'auto',
		'whiteSpace': 'normal'
	},
	'.skillChip': {
		'borderRadius': '0.5em',
		'backgroundColor': '#e8e8e8',
		'display': 'inline-block',
		'margin': '0px 5px 5px 0px'
	}
};

class AdminPanel extends Component {
    
	render() {
		return (
			<Table selectable={false} style={styles['.adminPanel']}>
				<TableBody displayRowCheckbox={false}>
					<TableRow>
						<TableHeaderColumn style={styles['.headerRow th']}>Username</TableHeaderColumn>
						<TableHeaderColumn style={styles['.headerRow th']}>Name</TableHeaderColumn>
						<TableHeaderColumn style={styles['.headerRow th']}>Email</TableHeaderColumn>
						<TableHeaderColumn style={styles['.headerRow th']}>Phone</TableHeaderColumn>
						<TableHeaderColumn style={{...styles['.headerRow th'],...styles['.skillCol']}}>Skills</TableHeaderColumn>
						<TableHeaderColumn style={styles['.headerRow th']}></TableHeaderColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>admin</TableRowColumn>
						<TableRowColumn style={styles['td.nameCol']}>Admin</TableRowColumn>
						<TableRowColumn>admin@example.com</TableRowColumn>
						<TableRowColumn>(xxx) xxx-xxxx</TableRowColumn>
						<TableRowColumn style={styles['.skillCol']}>
							<Chip style={styles['.skillChip']}>
                                javascript
							</Chip>
							<Chip style={styles['.skillChip']}>
                                web development
							</Chip>
							<Chip style={styles['.skillChip']}>
                                web development
							</Chip>
							<Chip style={styles['.skillChip']}>
                                web development
							</Chip>
							<Chip style={styles['.skillChip']}>
                                node.js
							</Chip>
						</TableRowColumn>
						<TableRowColumn>
							<FlatButton label="Mentor" style={styles['.statusButtons']}/>
							<FlatButton label="Admin" style={styles['.statusButtons']}/>
							<FlatButton label="Edit" style={styles['.editButton']}/>
						</TableRowColumn>
					</TableRow>
				</TableBody>
			</Table>
		);
	}
}

export default AdminPanel;