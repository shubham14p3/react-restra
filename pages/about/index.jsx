import { Tabs, Layout, Row, Card, Col } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useState } from "react";

import { useRouter } from "next/router";
import "../../styles/about.css";
import HomeHeader from "../../src/components/Layouts/Header/HomeHeader";
import MainFooter from "../../src/components/Layouts/Footer/MainFooter";

const { Content } = Layout;

const values = [
  {
    img:
      "data:image/png;base64,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",
    heading: "Resilience",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of the page when looking at its layout.",
  },
  {
    img:
      "data:image/png;base64,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",
    heading: "Resilience",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of the page when looking at its layout.",
  },
  {
    img:
      "data:image/png;base64,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",
    heading: "Resilience",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of the page when looking at its layout.",
  },
];

const About = (props) => {
  const router = useRouter();
  const changeRoute = (routeString) => {
    router.push(routeString);
  };

  return (
    <div className="about-page">
      <HomeHeader />
      <Content className="pb-20">
      <div className="text-center mt-5 px-10 md:px-32 text-4xl md:text-5xl font-semibold text-white banner-about">
          About us
        </div>
        <div className="flex md:flex-row justify-between items-center flex-col max-w-7xl px-5 md:px-9 mx-auto py-10">
          <div className="md:mr-8 text-gray-600 ab-text">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              This is our story.
            </p>
            <p className="text-base mt-6 md:pr-12 md:mt-8">
              TEAM Cheffy, we aim to bring opportunities to every people with
              any backgrounds. Because our app supports all different food
              categories for different health conditions, people with special
              dietary requirements can use Cheffy to meet their custom food
              needs. Plus, We do this by empowering local businesses and in
              turn, generate new ways for people to earn, work and live. We
              started this in 5 states including Washington, D.C., Virginia,
              Maryland, Pennsylvania, New York and with more coming soon..
            </p>
          </div>
          <div className="justify-center items-center pt-10 ab-img">
            <img
              src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2016/10/foodJointPainRelief-142336977-770x533-1.jpg"
              alt="About"
            />
          </div>
        </div>
        <div className="promo-about d-flex justify-content-center align-center flex-col md:flex-row">
          <div className="flex items-center">
            <img
              src="https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/8c/c1/e8/8cc1e8ac-bc27-e8c1-1b07-6d5a8a4a3437/source/256x256bb.jpg"
              alt="App Promo"
              className="chef-l w-12 mr-2 md:mr-4 md:w-16"
            />
            <span className="text-lg sm:text-xl md:text-3xl">There is more to love in the app</span>
          </div>
          <div className="flex md:ml-4 gap-4 filter-invert">
            <a href="#" className="block">
              {" "}
              <img
                src="https://cdn3.iconfinder.com/data/icons/picons-social/57/56-apple-512.png"
                alt="apple store"
                className="w-11 md:w-14 mx-2 md:mx-4"
              />{" "}
            </a>
            <a href="#">
              {" "}
              <img
                src="https://image.flaticon.com/icons/png/512/104/104122.png"
                alt="play store"
                className="w-11 md:w-14 mx-2 md:mx-4"
              />{" "}
            </a>
          </div>
        </div>
        <div className="site-card-wrapper max-w-7xl md:grid gap-12 mt-8 md:mt-16 grid-cols-3 px-5 md:px-9 mx-auto">
          {values.map((value) => (
            <Col>
              <img src={value.img} className="w-9 mx-6" alt={value.heading} />
              <Card title={value.heading} bordered={false}>
                {value.text} kk
                </Card>
            </Col>
          ))}
        </div>
      </Content>

      <MainFooter />
    </div>
  );
};

export default About;