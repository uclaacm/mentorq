import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

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
