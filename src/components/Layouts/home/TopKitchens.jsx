import { Col, Row, Typography } from 'antd';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { mustTryAndRecommendedChef } from '../../../redux/actions/chef/chefAction';
import axiosClient from '../../../utils/axios-config';
const { Text } = Typography;

function TopKitchens() {

    const [topKitchens, settopKitchens] = useState('');
	const dispatch = useDispatch();

	useEffect(async () => {
		const url = "https://cheffyus-api.herokuapp.com/kitchens/"
        try{
        const res = await axiosClient(url);
        settopKitchens(res);
    }catch(e){
        console.log(e)
    }
	}, []);

	return (
		<>
			<Row className="food-grid mt-16 mb-4 md:mb-10" gutter={32} justify="start" align="middle">
				<Col className="my-5">
					<label className="font-extrabold text-3xl sm:text-4xl lg:text-5xl">Kitchens You Should see</label>
				</Col>
			</Row>
			<Row className="food-grid" justify="center" gutter={32} align="middle">
				{topKitchens &&
					topKitchens.map((item, index) => {
                        console.log(item)
						return index < 6 ? (
							<Col className="gutter-row h-64" xs={12} sm={8} md={6} lg={4} xl={4} xxl={4} key={item["kitchen"].id}>
								<Link href={`/kitchen/${encodeURIComponent(item["kitchen"]["name"])}/${encodeURIComponent(item["kitchen"].id)}`}>
									<a>
										<div className="flex flex-col py-6 px-3 items-center">
											<img className="category-icon mb-4" src={item["kitchen"]["image_urls"][0]} alt="" />
											<label className="category-label cursor-pointer">{item["kitchen"]["name"]}</label>
										</div>
									</a>
								</Link>
							</Col>
						) : (
							''
						);
					})}
				{topKitchens && (<Col>
					<Link href="/kitchen">
						<a>
							<Text className="text-xl bg-primary px-4 text-white rounded-md py-1" strong>View More Kitchens</Text>
						</a>
					</Link>
				</Col>)}
			</Row>
		</>
	);
};

export default TopKitchens
