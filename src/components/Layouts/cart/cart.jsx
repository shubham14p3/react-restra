import { Row, Col, Typography, Button, Table, message, Drawer } from "antd";
import React from "react";
import {
  HomeFilled,
  ClockCircleOutlined,
  InfoCircleFilled,
  DeleteFilled,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { asyncLocalStorage } from "../../../utils/localStorage";
import { getPlateByID } from "../../../redux/actions/food";
import {
  getUserBasket,
  increaseItemToCart,
  decreaseItemToCart,
  removeInCart,
} from "../../../redux/actions/cart/cartAction";
import { VscLoading } from "react-icons/vsc";
import { session, useSession } from "next-auth/client";
import LoginPage1 from "../../Layouts/Header/Login/LoginPage1";
import LoginPage2 from "../../Layouts/Header/Login/LoginPage2";
import { useRouter } from 'next/router'

const { Text } = Typography;
const ClockIcon = () => {
  return <img src="/images/clock.png" className="w-3 h-3" alt="clock" />;
};

const TruckIcon = () => {
  return <img src="/images/truck.png" alt="truck" className="h-3 w-auto" />;
};

const CartIcon = () => {
  return <img src="/images/cart.png" alt="cart" className="w-4 h-4" />;
};

const StarIcon = () => {
  return <img className="w-3 h-3" src="/images/star-yellow.png" alt="rating" />;
};

const Item = ({ price, name, orderCount, plateID, basketItemId }) => {
  
  const [session, loading] = useSession();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(orderCount);
  const router = useRouter()
  console.log("router");
  console.log(router.pathname);

  const updateDOM = async (basketItemId, plateId, type) => {
    let cartitems = await asyncLocalStorage.getItem("cartitems");
    cartitems = JSON.parse(cartitems)["items"];
    if (cartitems.length > 0) {
      cartitems.forEach((item) => {
        if (item["plateId"] == plateId) {
          console.log("found");
          if (type === "add") {
            item["ordered"] = item["ordered"] + 1;
          } else {
            item["ordered"] = item["ordered"] - 1;
          }
          console.log(item);
        }
      });
      console.log(cartitems);
      await asyncLocalStorage.setItem(
        "cartitems",
        JSON.stringify({ items: cartitems })
      );
      console.log("items set");

      if (session) {
        let deliveryType = "user";
        if (type === "add") {
          await dispatch(increaseItemToCart(basketItemId, deliveryType));
        } else {
          await dispatch(decreaseItemToCart(basketItemId, deliveryType));
        }
      }
      window.location.reload();
    }
  };
  const AddOne = (basketItemId, plateID) => {
    console.log("AddOne");
    console.log(quantity);
    if (quantity < 10) {
      setQuantity(quantity + 1);
      updateDOM(basketItemId, plateID, "add");
    }
  };
  const removeOne = (basketItemId, plateID) => {
    console.log("removeOne");
    console.log(quantity);
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateDOM(basketItemId, plateID, "remove");
    }
  };

  const removeItemInCart = async (basketItemId, plateID) => {
    let deliveryType = "user";
    await dispatch(removeInCart(basketItemId, deliveryType, plateID));

    let cartitems = await asyncLocalStorage.getItem("cartitems");
    cartitems = JSON.parse(cartitems)["items"];
    cartitems = cartitems.filter(
      (e) => e.plateId.toString() !== plateID.toString()
    );
    if (cartitems.length > 0) {
      await asyncLocalStorage.setItem(
        "cartitems",
        JSON.stringify({ items: cartitems })
      );
    } else {
      await asyncLocalStorage.removeItem("cartitems");
    }
    // setCartData(cartitems);
    window.location.reload();
  };

  return (
    <>
      <hr />
      <Row gutter={2} className="py-4 px-2 items-center">
        <Col span={16} className="flex items-center">
          <DeleteFilled
            onClick={() => removeItemInCart(basketItemId, plateID)}
            className="mr-3 text-lg pb-1 cursor-pointer"
          />
          <p>{name}</p>
        </Col>
        <Col
          md={3}
          lg={2}
          span={4}
          className="lg:ml-auto py-1 border-b-2 border-gray-400 bg-gray-300"
        >
          <div className="flex items-center justify-center">
            <button onClick={() => AddOne(basketItemId, plateID)}>+</button>
            <p className="mx-2">{orderCount}</p>
            <button onClick={() => removeOne(basketItemId, plateID)}>-</button>
          </div>
        </Col>
        <Col span={2} className="text-right ml-auto">
          $ {price}
        </Col>
      </Row>
    </>
  );
};

function Cart() {
  const [session, loading] = useSession();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isCart, setisCart] = useState(false);
  const [sessionFlag, setSessionFlag] = useState(false);
  const [total, setTotal] = useState(0.0);
  const [isMobile, setIsMobile] = useState(false);

  const [visible, setVisible] = useState(false);
  const [state, setState] = useState({
    customer: "",
    page1: true,
    page2: false,
  });

  const moveToPage2 = () => {
    setState({
      ...state,
      page1: false,
      page2: true,
    });
  };

  const goToPage1 = () => {
    setState({
      ...state,
      page1: true,
      page2: false,
    });
  };

  const onClose = () => {
    setTimeout(() => {
      setState({
        ...state,
        page1: true,
        page2: false,
      });
    }, 500);
    setVisible(false);
  };

  useEffect(async () => {
    window.screen.width < 780 ? setIsMobile(true) : setIsMobile(false);
    if (!isCart) {
      let cartitems = await asyncLocalStorage.getItem("cartitems");
      cartitems = JSON.parse(cartitems);
      if (cartitems) {
        let deliveryType = "user";
        //get basket items here
        if (session) {
          let basketData = await dispatch(getUserBasket(deliveryType));
          setData((data) => basketData.items);
          setTotal((total) => basketData.total);
          setSessionFlag(true);
        } else {
          for (const itemKey in cartitems["items"]) {
            const item = cartitems["items"][itemKey];
            const plateId = item["plateId"];
            let plateData = await dispatch(getPlateByID(plateId));
            const plateDataToPush = {
              plate_id: plateId,
              count: item["ordered"],
              plate_name: plateData.data.name,
              plate_price: (plateData.data.price * item["ordered"]).toFixed(2),
            };
            console.log("Pushded", plateDataToPush);
            // console.log(data)
            console.log(total + plateData.data.price * item["ordered"]);
            setTotal((total) => total + plateData.data.price * item["ordered"]);
            setData((data) => [...data, plateDataToPush]);
          }
          setSessionFlag(false);
        }
      }
      setisCart(true);
    }
  }, []);

  const setCartData = async (cartitems) => {
    for (const itemKey in cartitems["items"]) {
      const item = cartitems["items"][itemKey];
      const plateId = item["plateId"];
      let plateData = await dispatch(getPlateByID(plateId));
      const plateDataToPush = {
        plate_id: plateId,
        count: item["ordered"],
        plate_name: plateData.data.name,
        plate_price: (plateData.data.price * item["ordered"]).toFixed(2),
      };
      console.log("Pushded", plateDataToPush);
      // console.log(data)
      console.log(total + plateData.data.price * item["ordered"]);
      setTotal((total) => total + plateData.data.price * item["ordered"]);
      setData((data) => [...data, plateDataToPush]);
    }
  };

  return (
    <div>
      <div className="cart-banner">
        <Row className="mt-20 pt-2 pb-4 mx-auto w-3/5" align="middle">
          <Col span={24} className="flex justify-start items-center">
            <HomeFilled />
            <Text strong className="text-black ml-4">
              Cart
            </Text>
          </Col>
        </Row>
        <Row
          className="w-full bg-fixed bg-cover bg-no-repeat bg-center relative"
          style={{
            backgroundImage: "url(/images/cartbg.jpg)",
            height: "40vh",
            backgroundSize: "100%",
            filter: "brightness(50%)",
          }}
          justify="center"
          align="middle"
        ></Row>
        <Row
          className="absolute w-full"
          style={{ height: "40vh", transform: "translateY(-100%)" }}
          justify="center"
          align="middle"
        >
          <Col>
            <Text strong className="block text-white text-3xl">
              Cart
            </Text>
          </Col>
        </Row>
      </div>
      <div className="cart-main lg:px-36 md:px-20 px-2 py-20">
        <Text className="lg:px-36 md:px-20 px-2 text-2xl" strong>
          Items
        </Text>
        <div className="lg:px-36 md:px-20 px-2 py-4">
          {isCart === true && data.length > 0 ? (
            <>
              {session && sessionFlag ? (
                <>
                  {data.map((basket, index) => {
                    return (
                      <Item
                        key={index}
                        basketItemId={basket.basketItemId}
                        plateID={basket.plate.id}
                        name={basket.plate.name}
                        price={basket.total_value}
                        orderCount={basket.quantity}
                      />
                    );
                  })}
                </>
              ) : (
                <>
                  {data.map((plate_data, index) => {
                    return (
                      <Item
                        key={index}
                        plateID={plate_data["plate_id"]}
                        name={plate_data["plate_name"]}
                        price={plate_data["plate_price"]}
                        orderCount={plate_data["count"]}
                      />
                    );
                  })}
                </>
              )}

              {/* <Item price={'1.99'} orderCount={1} name="Test Plate" plateID={1} />
							<Item price={'1.9'} orderCount={1} name="Test Plate" plateID={1} /> */}

              <hr />
              <div className="py-4 cart-info ">
                <div className="flex cart-info justify-between pt-1">
                  <div className="cart-total order-last">
                    <p className="font-semibold text-base">${total}</p>
                  </div>
                  <span className="font-semibold text-lg">
                    Subtotal
                    <p className="flex items-center text-xs">
                      <InfoCircleFilled className="mr-1 text-red-500" /> Extra
                      charges may apply
                    </p>
                  </span>
                </div>
              </div>
              {session ? (
                <>
                  <div className="flex flex-row-reverse checkout-btn">
                    <p className="py-4 px-10 text-center bg-red-500 text-white font-semibold">
                      <Link href="/payments">
                        <a> Checkout &#8594;</a>
                      </Link>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="flex flex-row-reverse checkout-btn"
                    onClick={() => setVisible(true)}
                  >
                    <p className="py-4 px-10 text-center bg-red-500 text-white font-semibold">
                    <a> Checkout &#8594;</a>
                    </p>
                  </div>
                </>
              )}

              <Drawer
                destroyOnClose
                placement="left"
                closable={false}
                onClose={onClose}
                visible={visible}
                width={isMobile ? "100%" : "35%"}
                drawerStyle={{
                  width: "83%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                keyboard={true}
              >
                {state.page1 && (
                  <LoginPage1
                    onClick={() => setVisible(false)}
                    onPartnerSignInClick={moveToPage2}
                    onUserSignInClick={moveToPage2}
                  />
                )}
                {state.page2 && (
                  <LoginPage2
                    onClick={onClose}
                    goBack={goToPage1}
                    customer={state.customer}
                  />
                )}
              </Drawer>
            </>
          ) : (
            <>
              {isCart && data.length < 1 ? (
                <p className="text-center text-3xl py-6">
                  Your Cart is empty
                  <Link href="/">
                    <a className="block text-xl pt-4">Goto Home &#8594;</a>
                  </Link>
                </p>
              ) : (
                <div className="flex pt-20 flex-col items-center justify-center">
                  <p className="text-3xl">Loading</p>
                  <VscLoading className="text-4xl animate-spin" />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
