import { MailOutlined, SendOutlined } from "@ant-design/icons";
import { Card, Col, Input, Row } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Meta from "antd/lib/card/Meta";
import Link from "next/link";
import React from "react";
import { BiMailSend } from "react-icons/bi";
import "../../../../styles/footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const MainFooter = () => {
  return (
    <div className="footer-food">
      <div className="flex px-20 py-16">
        <div className="w-10/12 md:w-5/12 mr-8 text-gray-600 lg:pl-20">
          <div className="md:flex cursor-pointer red pl-8">
            <Link href="/">
              <img src="/images/logo.png" className="footer-logo" />
            </Link>
          </div>
          <div className="justify-center align-center">
            <Card
              style={{
                width: "100%",
                marginTop: 16,
                borderRadius: "7px",
              }}
              className="blackcard"
            >
              <Meta
                style={{ color: "#fff" }}
                avatar={
                  <Avatar src="data:image/png;base64,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" />
                }
                title="Download on the app store"
              />
            </Card>
            <Card style={{ width: "100%", marginTop: 16, borderRadius: "7px" }}>
              <Meta
                avatar={
                  <Avatar src="https://e7.pngegg.com/pngimages/474/563/png-clipart-black-android-android-icon-logo-mobile-app-android-logo-computer-wallpaper-mobile-app-development-thumbnail.png" />
                }
                title="Get it on play store"
              />
            </Card>
          </div>
        </div>
        <div className="w-10/12 md:w-4/12 mr-8 lg:pl-20 footer-list">
          <div className="flex">
            <div className="md:w-6/12">
              <h3>About</h3>
              <ul>
                <li>About Cheffy</li>
                <li>Read our blog</li>
                <li>Careers</li>
                <li>All cities</li>
              </ul>
            </div>
            <div className="md:w-6/12">
              <h3>More</h3>
              <ul>
                <li>Rent a Kitchen</li>
                <li>Read FAQs</li>
                <li>Get Help</li>
                <li>Privacy Policy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-10/12 md:w-4/12 mr-8 lg:pl-20 footer-news">
          <h3>Newsletter Subscription</h3>
          <Input
            placeholder="Enter your email"
            prefix={<MailOutlined className="site-form-item-icon" />}
            suffix={<SendOutlined />}
          />
        </div>
      </div>
      <div className="flex px-52 py-8">
        <div className="w-10/12 md:w-6/12">
          Copyright © 2021, Oluha Company. All rights reserved.
        </div>
        <div className="w-10/12 md:w-6/12 float-right">
          <div className="flex float-right">
            <div className="mr-6 cursor-pointer text-3xl">
              <a>
                <FaInstagram />
              </a>
            </div>
            <div className="mr-6 cursor-pointer text-3xl">
              <a>
                <FaTwitter />
              </a>
            </div>
            <div className="mr-6 cursor-pointer text-3xl">
              <a>
                <FaFacebook />
              </a>
            </div>
            <div className="mr-6 cursor-pointer text-3xl">
              <a>
                <BiMailSend />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
