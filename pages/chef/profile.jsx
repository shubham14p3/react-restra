import { Tabs } from "antd";
import { ChefLayout } from "../../src/components/Layouts/chef";
// import withAuthSync from '../../src/components/Layouts/chef/ProtectedChef';
import EarningComponent from "../../src/components/Layouts/chef/ChefEarning";
import { AiOutlineUser } from "react-icons/ai";
// import Image from 'next/image'
const { TabPane } = Tabs;
import { useSession } from "next-auth/client";
import ChefPlatesComponent from "../../src/components/Layouts/chef/ChefPlates";

const ChefProfile = (props) => {
  const [session, loading] = useSession();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const tabs = { 1: "Profile", 2: "Earning", 3: "Plates", 4: "Settings" };
  const onChange = (key) => {
    if (key == "2") {
      return;
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="chef-bg w-full">
        <div
          className="bg-gray-900 opacity-90"
          style={{
            backgroundImage: "url('/images/chef/chef-banner.png')",
            backgroundSize: "cover",
            height: "170px",
          }}
        >
          <h1 className="text-white px-10 py-16 text-2xl">
            Hey,{" "}
            <p className="inline-block text-4xl font-semibold">
              {session && session.user.name + "!"}
            </p>{" "}
            | Profile
          </h1>
        </div>
        <div className="profile-block py-10 px-32">
          <div className="lg:px-32 px-20">
            <p className="text-xl pb-4 font-semibold">
              <AiOutlineUser className="text-red-500 text-3xl pb-1 inline-block" />
              My Profile
            </p>
            <hr />
          </div>
          <div className="lg:px-32 px-20">
            <Tabs tabBarStyle={{ borderColor: "black" }} onTabClick={onChange}>
              <TabPane
                className="h-full"
                tab={<p className="font-semibold">Profile</p>}
                key="1"
              >
                My Profile
              </TabPane>
              <TabPane tab={<p className="font-semibold">Earning</p>} key="2">
                <EarningComponent />
              </TabPane>
              <TabPane tab={<p className="font-semibold">My Plates</p>} key="3">
                <ChefPlatesComponent />
              </TabPane>
              <TabPane tab={<p className="font-semibold">Settings</p>} key="4">
                Settings
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

// const ChefProfileComponent = withAuthSync(ChefProfile);
const ChefProfileComponent = ChefProfile;
ChefProfileComponent.Layout = ChefLayout;
export default ChefProfileComponent;
