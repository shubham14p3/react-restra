import React from 'react';
import { Tabs, Col, Divider, Row, Typography } from 'antd';

const ChefProfileTab = () => {
	const { TabPane } = Tabs;

	return (
		<Row justify="space-between w-2/3 mx-auto mt-16" align="middle">
			<Col>
				<Tabs defaultActiveKey="1">
					<TabPane tab="Profile" key="1">
						Content of Tab Pane 1
					</TabPane>
					<TabPane tab="Earnings" key="2">
						Content of Tab Pane 2
					</TabPane>
					<TabPane tab="My Plates" key="3">
						Content of Tab Pane 3
					</TabPane>
					<TabPane tab="Settings" key="4">
						Content of Tab Pane 4
					</TabPane>
				</Tabs>
			</Col>
			<Divider className="bg-gray-400" />
		</Row>
	);
};

export default ChefProfileTab;
