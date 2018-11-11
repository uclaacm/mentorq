import React from 'react';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';

import { serverBaseURL } from '../../config';

export const authURL = String(new URL('auth/google', serverBaseURL));

const googleIcon = 'M21.35,11.1H12.18V13.83H18.69C18.36,17.64 ' +
'15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 ' +
'12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 1' +
'2.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,2' +
'2 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z';

function Login() {
	return (
		<Button component='a' href={authURL} color="primary" variant="contained" fullWidth={true}>
			<SvgIcon style={{ padding: '5px' }}>
				<path d={googleIcon}/>
			</SvgIcon>
			LOGIN WITH GOOGLE
		</Button>
	);
}

export default Login;
