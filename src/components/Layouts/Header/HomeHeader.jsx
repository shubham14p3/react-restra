import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Dropdown, Button, Drawer, Badge } from "antd";
import { signOut, useSession } from "next-auth/client";
import { DownOutlined } from "@ant-design/icons";
import { FaUser } from "react-icons/fa";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import LeftMenu from "../menu/LeftMenu";
import { FaShoppingBag } from "react-icons/fa";
import { asyncLocalStorage } from "../../../utils/localStorage";
import { useLocalStorageState } from "ahooks";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  setCartItems,
  setCartItemsWithSessionFlag,
  setCartItemsWithoutSessionFlag,
  getUserBasket,
  addItemsToCart,
} from "../../../redux/actions/cart/cartAction";
import PredictionsOnInputChange from "../../auto-complete/index";

const FoodHeader = ({ cart }) => {
  const [session, loading] = useSession();
  const [searchValue, setSearchValue] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [basketItems, setBasketItems] = useState([]);
  const isChef = session?.role === "chef";
  const isDriver = session?.role === "driver";
  const isUser = session?.role === "user";
  const [items, setItems] = useLocalStorageState("cartitems");
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      console.log("SESSION: ==>>");
      console.log(session);
      let localBasketItems = items ? items["items"] : [];
      let platesArray = [];
      let cartItemsArray = [];
      let deliveryType = "user";
      if (session) {
        if (!cart.cartItemSetWithSessionFlag) {
          console.log("1");
          let userBasketItemsBefore = await dispatch(getUserBasket(deliveryType));

          //
          localBasketItems.map((item) => {
            console.log("2");
            if (
              !userBasketItemsBefore.items.some(
                (basket) => basket.plate.id.toString() === item.plateId.toString()
              )
            ) {
              console.log("not match: "+item.plateId);
              platesArray.push({
                quantity: 1,
                plateId: item.plateId,
                note: "Special Instructions goes here",
              });
            }
          });
          console.log("3");
          if (platesArray.length > 0) {
            let reqBasket = {
              deliveryType: "user",
              plates: platesArray,
            };
            console.log("4");
            await dispatch(addItemsToCart(reqBasket));
          }

          // get user basket items
          let userBasketItemsAfter = await dispatch(getUserBasket(deliveryType));
          console.log("5");
          console.log(userBasketItemsAfter);

          // if both basket is not empty
          userBasketItemsAfter.items.map((item) => {
            console.log("6");
            cartItemsArray.push({
              ordered: item.quantity,
              plateId: item.plate.id,
            });
          });
          console.log("7");
          await asyncLocalStorage.setItem(
            "cartitems",
            JSON.stringify({ items: cartItemsArray })
          );
          dispatch(setCartItems(cartItemsArray));
          dispatch(setCartItemsWithSessionFlag());
          console.log("8");
        }
      } else {
        if (!cart.cartItemSetWithoutSessionFlag) {
          dispatch(setCartItems(localBasketItems));
          dispatch(setCartItemsWithoutSessionFlag());
        }
      }
      console.log("9");
      setCartCount(cart.itemCount);
    } catch (e) {
      console.log(e);
    }
  }, [cart, session]);

  const DropdownMobile = () => {
    return (
      <Menu className="mt-4">
        <Menu.Item key="0" className="py-6 px-8">
          {!session ? (
            <Signup isMobile={true} />
          ) : (
            <Link href={`${isChef ? "/chef" : isDriver ? "/driver" : "/user"}`}>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Dashboard
              </a>
            </Link>
          )}
        </Menu.Item>
        <Menu.Item key="1" className="py-6 px-8">
          {!session ? (
            <Login isMobile={true} />
          ) : (
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
                href="#"
                className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Profile
              </a>
            </Link>
          )}
        </Menu.Item>
        <Menu.Item key="2" className="py-6 px-8">
          <Link href="/about">
            <a className="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm rounded-md">
              About
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="3" className="py-6 px-8">
          <Link href="/contact">
            <a className="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm rounded-md">
              Contact us
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="4" className="py-6 px-8">
          <Link href="/cart">
            <p className="cursor-pointer flex items-center">
              Cart ({cartCount})
            </p>
          </Link>
        </Menu.Item>
        {session ? (
          <Menu.Item key="4" className="py-6 px-8">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={(e) => {
                e.preventDefault();
                signOut({ callbackUrl: "/" });
              }}
            >
              Sign out
            </a>
          </Menu.Item>
        ) : null}
      </Menu>
    );
  };

  const ImgIcon = () => {
    // console.log(session.user.image)
    if (session.user.image == "null") {
      return <FaUser className="text-2xl h-8 w-8 rounded-full mr-2" />;
    } else {
      return (
        <img
          src={session.user.image}
          className="user-img h-8 w-8 rounded-full mr-6"
          alt=""
        />
      );
    }
    return <FaUser />;
  };

  const DropdownMenu = () => {
    return (
      <Menu className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
        <Menu.Item key="0">
          <Link href={`${isChef ? "/chef" : isDriver ? "/driver" : "/#"}`}>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Dashboard
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="1">
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
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Profile
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            onClick={(e) => {
              e.preventDefault();
              signOut({ callbackUrl: "/" });
            }}
          >
            Sign out
          </a>
        </Menu.Item>
      </Menu>
    );
  };

  return session ? (
    <nav
      style={{ backgroundColor: "#F7FCFF", boxShadow: "0 0 5px #ddd" }}
      className="dark:bg-gray-800 stickey"
    >
      <div className="mx-auto py-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center px-8 md:px-0">
            {/* LEFT MENU */}
            <div className="hidden md:block">
              <LeftMenu />
            </div>

            <div className="hidden md:flex cursor-pointer red pl-12">
              <Link href="/">
                <img src="/images/logo.png" />
              </Link>
            </div>
            <div className="md:hidden cursor-pointer red">
              <Link href="/">
                <img src="/images/mobile-logo.png" />
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <LeftMenu />
              {/* <Dropdown
                overlayClassName="fixed w-screen"
                className="flex flex-row justify-center items-center md:mt-0"
                overlay={DropdownMobile}
                trigger={["click"]}
                placement="bottomRight"
              >
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  </svg>
                </button>
              </Dropdown> */}
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div className="hidden md:flex md:items-center md:justify-between flex-1">
            <div className="hidden md:flex md:items-center md:justify-between flex-1">
              <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                <Link href="/about">
                  <a>About</a>
                </Link>
                <Link href="/contact">
                  <a className="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm rounded-md">
                    Contact us
                  </a>
                </Link>
              </div>

              <div className="mr-32 w-52">
                <PredictionsOnInputChange
                  searchValue={searchValue}
                  setSearchValue={(e) => setSearchValue(e)}
                  onChange={(value) => {
                    setSearchValue(value);
                  }}
                />
              </div>

              <div className="flex items-center">
                <Badge count={cartCount}>
                  <Link href="/cart">
                    <p className="cursor-pointer flex items-center">
                      <FaShoppingBag className="text-2xl" />
                    </p>
                  </Link>
                </Badge>
                <Dropdown
                  className="flex flex-row justify-center items-center mt-4 md:mt-0"
                  overlay={DropdownMenu}
                  trigger={["click"]}
                  placement="bottomRight"
                >
                  <Button
                    style={{ backgroundColor: "transparent" }}
                    className="px-6 flex flex-row justify-center items-center"
                    type="text"
                    icon={<ImgIcon />}
                  >
                    {session.user.name} <DownOutlined className="ml-2" />
                  </Button>
                  {/* <a
										className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
										onClick={(e) => e.preventDefault()}
									>
										<img className="h-8 w-8 rounded-full" src={session.user.image} alt="" />
									</a> */}
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  ) : (
    <nav
      style={{ backgroundColor: "#F7FCFF", boxShadow: "0 0 5px #ddd" }}
      className="dark:bg-gray-800 stickey"
    >
      <div className="mx-auto py-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center px-8 md:px-0">
            {/* LEFT MENU */}
            <div className="hidden md:block">
              <LeftMenu />
            </div>

            <div className="hidden md:flex cursor-pointer red pl-8">
              <Link href="/">
                <img src="/images/logo.png" />
              </Link>
            </div>
            <div className="md:hidden cursor-pointer red">
              <Link href="/">
                <img src="/images/mobile-logo.png" />
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <LeftMenu />
              {/* <Dropdown
                overlayClassName="fixed w-screen"
                className="flex flex-row justify-center items-center md:mt-0"
                overlay={DropdownMobile}
                trigger={["click"]}
                placement="bottomRight"
              >
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  </svg>
                </button>
              </Dropdown> */}
            </div>
          </div>
          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div className="hidden md:flex md:items-center md:justify-between flex-1">
            <div className="hidden md:flex md:items-center md:justify-between flex-1">
              <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                <Link href="/about">
                  <a>About</a>
                </Link>
                <Link href="/contact">
                  <a className="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm rounded-md">
                    Contact us
                  </a>
                </Link>
              </div>
              <div className="mr-32 w-52">
                <PredictionsOnInputChange
                  searchValue={searchValue}
                  setSearchValue={(e) => setSearchValue(e)}
                  onChange={(value) => {
                    setSearchValue(value);
                  }}
                />
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                {/* <Link href="/kitchen">
									<a className="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm">Rent Kitchen</a>
								</Link>
								<Link href="/chef">
									<a className="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm">Chef</a>
								</Link>
								<Link href="/driver">
									<a className="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm">Driver</a>
								</Link> */}
                <Badge count={cartCount}>
                  <Link href="/cart">
                    <p className="cursor-pointer">
                      <FaShoppingBag className="text-2xl" />
                    </p>
                  </Link>
                </Badge>
                <Signup />
                <Login />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapToProps = (state) => {
  // console.log(state)
  return {
    cart: state.cart,
  };
};
export default connect(mapToProps)(FoodHeader);
