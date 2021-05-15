import React, { useEffect } from 'react';
import { Row, Col, Typography } from 'antd';
import Link from 'next/link';
import { shallowEqual, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
const { Text } = Typography;

const FoodGrid = ({ category }) => {
    const data = useSelector(foodSelector, shallowEqual);
    return (
        <>
            <div className="font-extrabold px-8 md:px-12 xl:px-16 my-6 md:my-8 md:text-5xl text-3xl sm:text-4xl">
                Categories
            </div>
            <Row
                className="food-grid"
                justify="center"
                gutter={[32, 48]}
                align="middle"
            >
                {category &&
                    category.map((plate, index) => {
                        return index < 6 ? (
                            <Col
                                xs={12}
                                sm={8}
                                md={6}
                                lg={4}
                                xl={4}
                                xxl={4}
                                className="gutter-row"
                                key={plate.id}
                            >
                                {/* <Link href={`/category/${encodeURIComponent(plate.id)}`}> */}
                                <Link href="/category">
                                    <a>
                                        <div className="flex flex-col food-card h-56">
                                            <img
                                                className="category-icon object-cover"
                                                src={plate.url}
                                                alt=""
                                            />
                                            <label className="category-label cursor-pointer">
                                                {plate.name}
                                            </label>
                                        </div>
                                    </a>
                                </Link>
                            </Col>
                        ) : (
                            ''
                        );
                    })}
                {category && (<Col>
                    <Link href="/category">
                        <a>
                            <Text className="text-xl bg-primary px-4 text-white rounded-md py-1" strong>View More Categories</Text>
                        </a>
                    </Link>
                </Col>)}
            </Row>
        </>
    );
};

const foodSelector = createSelector(
    (state) => state.food.collection,
    (data) => data,
);

export default FoodGrid;
