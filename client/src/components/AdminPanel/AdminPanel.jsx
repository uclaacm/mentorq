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
import './AdminPanel.css';

class AdminPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {};
        
	}
    
	render() {
		return (
			<Table className="adminPanel" selectable={false}>
				<TableBody displayRowCheckbox={false}>
					<TableRow className="headerRow">
						<TableHeaderColumn>Username</TableHeaderColumn>
						<TableHeaderColumn>Name</TableHeaderColumn>
						<TableHeaderColumn>Email</TableHeaderColumn>
						<TableHeaderColumn>Phone</TableHeaderColumn>
						<TableHeaderColumn>Skills</TableHeaderColumn>
						<TableHeaderColumn></TableHeaderColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>admin</TableRowColumn>
						<TableRowColumn className="nameCol">Admin</TableRowColumn>
						<TableRowColumn>admin@example.com</TableRowColumn>
						<TableRowColumn>(xxx) xxx-xxxx</TableRowColumn>
						<TableRowColumn>
							<Chip className="skillChip">
                                javascript
							</Chip>
							<Chip className="skillChip">
                                web development
							</Chip>
							<Chip className="skillChip">
                                web development
							</Chip>
							<Chip className="skillChip">
                                web development
							</Chip>
							<Chip className="skillChip">
                                node.js
							</Chip>
						</TableRowColumn>
						<TableRowColumn>
							<FlatButton label="Mentor" backgroundColor="#007FD6" className="editButtons" style={{ color: 'white'}}/>
							<FlatButton label="Admin" backgroundColor="#007FD6" className="editButtons" style={{ color: 'white'}}/>
							<FlatButton label="Edit" backgroundColor="#E0E1E2" className="editButtons" style={{ color: '#5A5A5A'}}/>
						</TableRowColumn>
					</TableRow>
				</TableBody>
			</Table>
		);
	}
}

export default AdminPanel;