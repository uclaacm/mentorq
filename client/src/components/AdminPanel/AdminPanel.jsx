import React, { Component } from 'react';
import Table, { TableBody, TableCell, TableRow, TableHead } from 'material-ui/Table';
import Chip from 'material-ui/Chip';
import Button from 'material-ui/Button';

class AdminPanel extends Component {
	render() {
		return (
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Username</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Email</TableCell>
						<TableCell>Phone</TableCell>
						<TableCell>Skills</TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>admin</TableCell>
						<TableCell>Admin</TableCell>
						<TableCell>admin@example.com</TableCell>
						<TableCell>(xxx) xxx-xxxx</TableCell>
						<TableCell>
							<Chip label="javascript" />
							<Chip label="web development" />
							<Chip label="node.js" />
						</TableCell>
						<TableCell>
							<Button>Mentor</Button>
							<Button>Admin</Button>
							<Button color="primary">Edit</Button>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		);
	}
}

export default AdminPanel;
