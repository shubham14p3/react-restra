import { useEffect, useState } from "react";
import Link from "next/link";
import { Drawer, Collapse } from "antd";
import { useLocalStorageState } from "ahooks";
import { FiAlignLeft } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import {
  FaBroadcastTower,
  FaComments,
  FaEdit,
  FaGripHorizontal,
  FaQuestionCircle,
  FaShoppingBag,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import {
  BarsOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import Login from "../Header/Login/Login";
import Signup from "../Header/Signup/Signup";
import { signOut, useSession } from "next-auth/client";

const { Panel } = Collapse;

const UserMenu = ({ onClose }) => {
  const [session, loading] = useSession();
  const [cartCount, setCartCount] = useState(0);
  const [items, setItems] = useLocalStorageState("cartitems");
  const isChef = session?.role === "chef";
  const isDriver = session?.role === "driver";
  const isUser = session?.role === "user";

  useEffect(async () => {
    try {
      setCartCount(items["items"].length);
      // console.log("Count has been set")
    } catch (e) {
      console.log(e);
    }
  }, [items]);

  return (
    <Collapse
      accordion
      bordered={false}
      ghost
      expandIconPosition="right"
      className="px-0 mt-8"
    >
      <Panel
        header={
          <li
            style={{
              borderBottom: "1px solid #A0AEC0",
            }}
            className="px-0 py-4"
          >
            <a style={{ fontSize: 18 }} className="flex align-center disable">
              <FaUser
                style={{ color: "#d73d36", fontSize: "1.8em" }}
                color="#d73d36"
                className="mr-5"
                size={30}
              />
              {session?.user?.name}
            </a>
          </li>
        }
        className="text-lg"
        key="1"
      >
        <li style={{ borderBottom: "1px solid #A0AEC0" }} className="pt-5 pb-5">
          <Link href={`${isChef ? "/chef" : isDriver ? "/driver" : "/#"}`}>
            <a
              style={{ fontSize: 18 }}
              className="flex align-center disable"
              onClick={onClose}
            >
              <MdDashboard color="#d73d36" className="mr-5" size={30} />
              Dashboard
            </a>
          </Link>
        </li>
        <li style={{ borderBottom: "1px solid #A0AEC0" }} className="pt-5 pb-5">
          <Link
            href={`${
              isChef
                ? "/chef/profile"
                : isDriver
                ? "/driver/profile"
                : "/user/profile"
            }`}
          >
            <a
              style={{ fontSize: 18 }}
              className="flex align-center disable"
              onClick={onClose}
            >
              <CgProfile color="#d73d36" className="mr-5" size={30} />
              Profile
            </a>
          </Link>
        </li>
        <li style={{ borderBottom: "1px solid #A0AEC0" }} className="pt-5 pb-5">
          <Link href="/cart">
            <a
              style={{ fontSize: 18 }}
              className="flex align-center"
              onClick={onClose}
            >
              <FaShoppingBag color="#d73d36" className="mr-5" size={30} />
              Cart ({cartCount})
            </a>
          </Link>
        </li>
        <li style={{ borderBottom: "1px solid #A0AEC0" }} className="pt-5 pb-5">
          <Link href="/help">
            <a
              href="#"
              className="flex align-center"
              role="menuitem"
              onClick={(e) => {
                e.preventDefault();
                signOut({ callbackUrl: "/" });
              }}
            >
              <AiOutlineLogout color="#d73d36" className="mr-5" size={30} />
              Sign out
            </a>
          </Link>
        </li>
      </Panel>
    </Collapse>
  );
};

const LeftMenu = ({ login, signup }) => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [session, loading] = useSession();

  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    window.screen.width < 780 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return (
    <div>
      {/* LEFT MENU */}
      <button
        type="button"
        className="text-dark-500 pl-12 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
        aria-label="toggle menu"
        onClick={() => setVisible(true)}
      >
        <FiAlignLeft size={30} />
      </button>

      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        width={isMobile ? "100%" : "35%"}
        visible={visible}
        drawerStyle={{
          width: "85%",
          margin: "0 auto",
        }}
        keyboard={true}
      >
        <img
          src="/images/close.png"
          alt="close"
          className="h-4 w-4 mb-4 cursor-pointer float-right"
          onClick={onClose}
        />
        <ul className="sidebar flex flex-col h-full">
          {session && <UserMenu onClose={onClose} />}
          <li
            style={{ borderBottom: "1px solid #A0AEC0" }}
            className="pt-5 pb-5"
          >
            <Link href="/new-on-cheffy">
              <a
                style={{ fontSize: 18 }}
                className="flex align-center"
                onClick={onClose}
              >
                <FaBroadcastTower color="#d73d36" className="mr-5" size={30} />
                New in cheffy
              </a>
            </Link>
          </li>
          <li
            style={{ borderBottom: "1px solid #A0AEC0" }}
            className="pt-5 pb-5"
          >
            <Link href="/category">
              <a
                style={{ fontSize: 18 }}
                className="flex align-center"
                onClick={onClose}
              >
                <FaGripHorizontal color="#d73d36" className="mr-5" size={30} />
                Categories
              </a>
            </Link>
          </li>
          <li
            style={{ borderBottom: "1px solid #A0AEC0" }}
            className="pt-5 pb-5"
          >
            <Link href="/chef">
              <a
                style={{ fontSize: 18 }}
                className="flex align-center"
                onClick={onClose}
              >
                <img src="/images/chef/chef.svg" alt="" className="mr-7" />
                Chef
              </a>
            </Link>
          </li>
          <li
            style={{ borderBottom: "1px solid #A0AEC0" }}
            className="pt-5 pb-5"
          >
            <Link href="/kitchen">
              <a
                style={{ fontSize: 18 }}
                className="flex align-center"
                onClick={onClose}
              >
                <FaUtensils color="#d73d36" className="mr-5" size={30} />
                Rent a kitchen
              </a>
            </Link>
          </li>

          <Collapse
            accordion
            bordered={false}
            ghost
            expandIconPosition="right"
            className="px-0"
          >
            <Panel
              header={
                <li
                  style={{
                    borderBottom: "1px solid #A0AEC0",
                  }}
                  className="px-0 py-4"
                >
                  <a
                    style={{ fontSize: 18 }}
                    className="flex align-center disable"
                  >
                    <BarsOutlined
                      style={{
                        color: "#d73d36",
                        fontSize: "1.8em",
                      }}
                      color="#d73d36"
                      className="mr-5"
                      size={30}
                    />
                    More
                  </a>
                </li>
              }
              className="text-lg"
              key="1"
            >
              <li
                style={{ borderBottom: "1px solid #A0AEC0" }}
                className="pt-5 pb-5"
              >
                <Link href="/blog">
                  <a
                    style={{ fontSize: 18 }}
                    className="flex align-center disable"
                    onClick={onClose}
                  >
                    <FaEdit color="#d73d36" className="mr-5" size={30} />
                    Blog
                  </a>
                </Link>
              </li>
              <li
                style={{ borderBottom: "1px solid #A0AEC0" }}
                className="pt-5 pb-5"
              >
                <Link href="/faq">
                  <a
                    style={{ fontSize: 18 }}
                    className="flex align-center"
                    onClick={onClose}
                  >
                    <FaComments color="#d73d36" className="mr-5" size={30} />
                    Faq
                  </a>
                </Link>
              </li>
              <li
                style={{ borderBottom: "1px solid #A0AEC0" }}
                className="pt-5 pb-5"
              >
                <Link href="/help">
                  <a
                    style={{ fontSize: 18 }}
                    className="flex align-center"
                    onClick={onClose}
                  >
                    <FaQuestionCircle
                      color="#d73d36"
                      className="mr-5"
                      size={30}
                    />
                    Help
                  </a>
                </Link>
              </li>
            </Panel>
          </Collapse>
          {!session && isMobile && (
            <>
              <li
                style={{ borderBottom: "1px solid #A0AEC0" }}
                className="pt-5 pb-5 mt-auto"
              >
                <a
                  style={{ fontSize: 18 }}
                  className="flex align-center"
                  onClick={onClose}
                >
                  <UserAddOutlined
                    style={{
                      color: "#d73d36",
                      fontSize: "1.7em",
                    }}
                    color="#d73d36"
                    className="mr-5"
                    size={30}
                  />
                  <Signup isMobile />
                </a>
              </li>
              <li
                style={{ borderBottom: "1px solid #A0AEC0" }}
                className="pt-5 pb-5 mb-20"
              >
                <a
                  style={{ fontSize: 18 }}
                  className="flex align-center"
                  onClick={onClose}
                >
                  <LoginOutlined
                    style={{
                      color: "#d73d36",
                      fontSize: "1.7em",
                    }}
                    className="mr-5"
                  />
                  <Login isMobile />
                </a>
              </li>
            </>
          )}
        </ul>
      </Drawer>
    </div>
  );
};

export default LeftMenu;
