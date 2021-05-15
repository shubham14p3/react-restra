import React from 'react';
import DriverHeader from './DriverHeader';
import DriverFooter from './DriverFooter';

class DriverLayout extends React.Component {
	render() {
		const { children } = this.props;
		return (
			<>
				<DriverHeader />
				<div className="bg-gray-100 mx-auto">{children}</div>
				<DriverFooter />
			</>
		);
	}
}

export default DriverLayout;
