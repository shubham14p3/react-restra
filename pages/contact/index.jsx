import { MailOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Layout, Select } from "antd";
import MainFooter from "../../src/components/Layouts/Footer/MainFooter";
import HomeHeader from "../../src/components/Layouts/Header/HomeHeader";
import "../../styles/contact.css";

const { Option } = Select;

const { Content, Footer } = Layout;

const layout = {
    labelCol: {},
    wrapperCol: {},
};

function handleChange(value) {
    console.log(`selected ${value}`);
}

const Contact = (props) => {
    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="about-page">
            <HomeHeader />
            <Content className="pb-20">
            <div className="text-center mt-5 px-10 md:px-32 text-3xl sm:text-5xl font-extrabold text-white banner-about">
                    We would love to hear from you
                </div>
                <Form className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 gap-x-12 mt-6 md:mt-12 grid grid-cols-2">
                    <Form.Item
                        className="col-span-2 md:col-span-1"
                        name="option"
                        rules={[{ required: true, message: "Please select an option!" }]}
                    >
                        <Select placeholder="Select an option" className="form-input-contact" size="large" onChange={handleChange}>
                            <Option value="opt1">Option 1</Option>
                            <Option value="opt2">Option 2</Option>
                            <Option value="opt3">Option 3</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        className="col-span-2 md:col-span-1"
                        name="name"
                        rules={[{ required: true, message: "Please enter your name!" }]}
                    >
                        <Input size="large" className="form-input-contact" placeholder="Full Name" prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item
                        className="col-span-2 md:col-span-1"
                        name="email"
                        rules={[{ required: true, message: "Please enter your email address!" }]}
                    >
                        <Input size="large" className="form-input-contact" placeholder="Email" prefix={<MailOutlined />} />
                    </Form.Item>
                    <Form.Item
                        className="col-span-2 md:col-span-1"
                        name="phone"
                        rules={[{ required: true, message: "Please enter phone!" }]}
                    >
                        <Input size="large" className="form-input-contact" placeholder="Phone" prefix={<MobileOutlined />} />
                    </Form.Item>
                    <Form.Item
                        name="message"
                        className="col-span-2"
                        rules={[{ required: true, message: "Please enter a message!" }]}
                    >
                        <Input.TextArea rows={3} size="large" className="form-input-contact" placeholder="Message" prefix={<MobileOutlined />} />
                    </Form.Item>
                    <Button
                        type="primary"
                        size="large"
                        htmlType="submit"
                        className="rounded max-w-xs mt-8"
                    >
                        Submit
                </Button>

                </Form>
            </Content>
            <MainFooter />
        </div>
    );
};

export default Contact;
