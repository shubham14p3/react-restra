import { useState, useEffect } from 'react';
import { Row, Col, Typography } from 'antd';
import Link from 'next/link';
import { mustTryAndRecommendedChef } from '../../../redux/actions/chef/chefAction';
import { useDispatch } from 'react-redux';

const {Text} = Typography

const MustTryChef = () => {
	const [mustTry, setMustTry] = useState('');
	const dispatch = useDispatch();

	useEffect(async () => {
		const getMustTryAndRecommended = await dispatch(mustTryAndRecommendedChef());
		const data = getMustTryAndRecommended.data;
		setMustTry(data['mustTryChefs']);
	}, []);

	return (
		<>
			<Row className="food-grid mt-16 mb-4 md:mb-10" gutter={32} justify="start" align="middle">
				<Col className="my-5">
					<label className="font-extrabold text-3xl sm:text-4xl lg:text-5xl">Chef You Must Try</label>
				</Col>
			</Row>
			<Row className="food-grid" justify="center" gutter={32} align="middle">
				{mustTry &&
					mustTry.map((chef, index) => {
						return index < 6 ? (
							<Col className="gutter-row h-64" xs={12} sm={8} md={6} lg={4} xl={4} xxl={4} key={chef.id}>
								<Link href={`/food-detail/${encodeURIComponent(chef.id)}`}>
									<a>
										<div className="flex flex-col py-6 px-3 items-center">
											<img className="category-icon mb-4" src={chef.imagePath} alt="" />
											<label className="category-label cursor-pointer">{chef.name}</label>
										</div>
									</a>
								</Link>
							</Col>
						) : (
							''
						);
					})}
					{mustTry && (<Col>
					<Link href="/chefs">
						<a>
							<Text className="text-xl bg-primary px-4 text-white rounded-md py-1" strong>View More Chefs</Text>
						</a>
					</Link>
				</Col>)}
			</Row>
		</>
	);
};

export default MustTryChef;
