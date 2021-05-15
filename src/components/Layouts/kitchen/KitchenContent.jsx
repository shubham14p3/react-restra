import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  Row,
  Col,
  Button,
  Grid,
  Input,
  Space,
  Divider,
  Tabs,
  Skeleton,
} from "antd";
import {
  HomeFilled,
  MenuOutlined,
  StarFilled,
  ClockCircleFilled,
} from "@ant-design/icons";
import { IoMdArrowDropdown } from "react-icons/io";
import axiosClient from "../../../utils/axios-config";
import Link from "next/link";
import { useRouter } from "next/router";

const { TabPane } = Tabs;

const KitchenCol = ({ name, rating, count, price, price_type, imgURL }) => {
  return (
    <>
      <div className="flex flex-col w-full" dir="ltr">
        <img src={imgURL} className="w-full h-64 md:h-48 object-cover rounded" />
        <p className="pt-3 sm:pt-4 font-semibold text-lg">{name}</p>
        <p className="flex items-center text-base pt-2">
          <StarFilled className="pr-1 text-yellow-500" />
          {`${rating} (${count})`}
          <p className="flex items-center pl-6" dir="ltr">
            <ClockCircleFilled className="pr-1" />
            {`$${price}`} - {price_type}
          </p>
        </p>
      </div>
    </>
  );
};

const KitchenContent = () => {
  const { Title, Paragraph, Text } = Typography;
  const [kitchens, setKitchens] = useState([]);
  const [loading, setLoading] = useState(true)
  const router = useRouter();

  useEffect(async () => {
    try {
      const url = "https://cheffyus-api.herokuapp.com/kitchens/";
      const res = await axiosClient.get(url);
      setKitchens(res);
      console.log("Added");
    } catch (e) {
      console.log(e);
    }
    setLoading(false)
  }, []);

  const showKitchen = (kname, kId) => {
    console.log(kId);
    router.push(`/kitchen/${kname}/${kId}`);
  };

  return (
    <>
      <Row className="mt-20 pt-6 lg:pt-2 pb-4 mx-auto max-w-7xl px-5 md:px-9" align="middle">
        <Col span={24} className="flex justify-start items-center">
          <HomeFilled />
          <Text strong className="text-black ml-4">
            Rent Kitchen
          </Text>
        </Col>
      </Row>
      <Row
        className="w-full bg-fixed bg-cover bg-no-repeat bg-center relative"
        style={{
          backgroundImage: `url(/images/background.jpg)`,
          height: "30vh",
          filter: "brightness(50%)",
        }}
        justify="center"
        align="middle"
      ></Row>
      <Row
        className="absolute w-full"
        style={{ height: "30vh", transform: "translateY(-100%)" }}
        justify="center"
        align="middle"
      >
        <Col>
          <Text level={1} strong className="block text-white text-4xl sm:text-5xl">
            Rent a Kitchen
          </Text>
        </Col>
      </Row>

      <div className="py-20 max-w-7xl px-5 md:px-9 mx-auto">
        <hr />
        <Tabs
          defaultActiveKey={"relavence"}
          className="font-bold"
          size="large"
          direction="rtl"
          moreIcon={<MenuOutlined />}
        >
          <TabPane key="filters" tab="Filters">
            Filters Tab            
          </TabPane>
          <TabPane key="ratings" tab="Ratings">
            Ratings Tab
            <div className="kitchen-item mt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-y-12 lg:gap-x-8" dir="ltr">
              console.log(loading);                 
              {
                           loading &&
                      [1,2,3,4,5,6].map(() => (
                        <div className="flex flex-col w-full" dir="ltr">
                            <div className="flex flex-col gap-2">
                                <Skeleton.Avatar shape="square" className="w-full" style={{height: "12rem", width: "100%"}} />
                                <Skeleton.Avatar shape="square" className="w-full" style={{height: "1.5rem", width: "70%"}} />
                                <Skeleton.Avatar shape="square" className="w-full" style={{height: "1.5rem", width: "40%"}} />
                            </div>
                        </div>
                      ))
                  }
                {kitchens &&
                  kitchens.map((item, index) => {
                    return (
                      <div
                        onClick={() =>
                          showKitchen(
                            item["kitchen"]["name"],
                            item["kitchen"]["id"]
                          )
                        }
                        className="cursor-pointer"
                        span={8}
                      >
                        <KitchenCol
                          name={item["kitchen"]["name"]}
                          imgURL={item["kitchen"]["image_urls"][0]}
                          rating={"4.3"}
                          count={item["kitchen"]["likes"]}
                          price={item["kitchen"]["price_per_time"]}
                          price_type={item["kitchen"]["time_type"]}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div
              dir="ltr"
              className="flex items-center justify-center pt-10 load-more"
            >
              <p className="text-white flex items-center bg-red-500 py-4 px-10 text-lg">
                Load More <IoMdArrowDropdown className="text-3xl" />
              </p>
            </div>
         </TabPane>
          <TabPane key="relavence" tab="Relavence">
            <div className="kitchen-item mt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-y-12 lg:gap-x-8" dir="ltr">
                  {
                      loading &&
                      [1,2,3,4,5,6].map(() => (
                        <div className="flex flex-col w-full" dir="ltr">
                            <div className="flex flex-col gap-2">
                                <Skeleton.Avatar shape="square" className="w-full" style={{height: "12rem", width: "100%"}} />
                                <Skeleton.Avatar shape="square" className="w-full" style={{height: "1.5rem", width: "70%"}} />
                                <Skeleton.Avatar shape="square" className="w-full" style={{height: "1.5rem", width: "40%"}} />
                            </div>
                        </div>
                      ))
                  }
                {kitchens &&
                  kitchens.map((item, index) => {
                    return (
                      <div
                        onClick={() =>
                          showKitchen(
                            item["kitchen"]["name"],
                            item["kitchen"]["id"]
                          )
                        }
                        className="cursor-pointer"
                        span={8}
                      >
                        <KitchenCol
                          name={item["kitchen"]["name"]}
                          imgURL={item["kitchen"]["image_urls"][0]}
                          rating={"4.3"}
                          count={item["kitchen"]["likes"]}
                          price={item["kitchen"]["price_per_time"]}
                          price_type={item["kitchen"]["time_type"]}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div
              dir="ltr"
              className="flex items-center justify-center pt-10 load-more"
            >
              <p className="text-white flex items-center bg-red-500 py-4 px-10 text-lg">
                Load More <IoMdArrowDropdown className="text-3xl" />
              </p>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default KitchenContent;
