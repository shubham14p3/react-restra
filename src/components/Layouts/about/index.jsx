import { Layout, Carousel, Image } from "antd";
import { BiArrowToRight, BiArrowToLeft } from "react-icons/bi";

const About = () => {
  const { Content } = Layout;
  const images = [
    "https://thecheffy.com/images/gallery/screen-01.png",
    "https://thecheffy.com/images/gallery/screen-02.png",
    "https://thecheffy.com/images/gallery/screen-03.png",
    "https://thecheffy.com/images/gallery/screen-04.png",
    "https://thecheffy.com/images/gallery/screen-05.png",
    "https://thecheffy.com/images/gallery/screen-06.png",
    "https://thecheffy.com/images/gallery/screen-07.png",
    "https://thecheffy.com/images/gallery/screen-08.png",
    "https://thecheffy.com/images/gallery/screen-09.png",
  ];

  const renderImages = () => {
      return images.map((imageUrl, index) => {
        return (
            <div key={index}>
                <Image preview={false} src={imageUrl} className="w-80" height={400}  />
            </div>
        )  
      });
  };

  return (
    <>
        <Content className="pb-20">
        <div className="text-center px-10 md:px-32 text-5xl py-24 font-semibold text-gray-700">
            About US
            <p className="text-xl mt-2 italic">"Team Cheffy"</p>
        </div>
        <div className="flex md:flex-row justify-between items-center flex-col px-10 md:px-32">
            <div className="w-10/12 md:w-5/12 mr-8 text-gray-600 lg:pl-20">
                <p className="text-3xl lg:text-5xl font-bold mb-4">This is our story.</p>
                <p className="text-base">TEAM Cheffy, we aim to bring opportunities to every people with any backgrounds. Because our app supports all different food categories for different health conditions, people with special dietary requirements can use Cheffy to meet their custom food needs. Plus, We do this by empowering local businesses and in turn, generate new ways for people to earn, work and live. We started this in 5 states including Washington, D.C., Virginia, Maryland, Pennsylvania, New York and with more coming soon..</p>
        
            </div>
            <div className="w-11/12 md:w-5/12 flex justify-center items-center pt-10">
                <Carousel autoplaySpeed={1500} prevArrow={<BiArrowToLeft color={"red"} />} nextArrow={<BiArrowToRight color={"red"}/>} arrows={true} dotPosition={"bottom"} autoplay={true} className="md:w-80 w-56">
                    {renderImages()}
                </Carousel>
            </div>
        </div>
        </Content>
    </>
  );
};

export default About;
