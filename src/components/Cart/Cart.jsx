import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { Modal, List } from "antd";
import "antd/dist/reset.css";
import CartItem from "./CartItem";
import { Form, Input, Tooltip, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Cart = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    province: "",
    street: "",
    email: "",
  });

  const handleValues = (e) => {
    setNewUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const checkValues = () => {
    if (!newUser.username || !newUser.province || !newUser.street || !newUser.email) {
      alert("Please, fill in all fields!");
      return;
    } else {
      localStorage.setItem("Cartinfo", JSON.stringify(newUser));
      console.log(newUser);
    }
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { getCart, cart } = useContext(cartContext);

  useEffect(() => {
    getCart();
  }, [getCart]);

  return (
    <div style={{ paddingTop: "100px", paddingBottom: "50px" }}>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={cart?.products}
        footer={<h2>Total: {cart?.totalPrice}$</h2>}
        renderItem={(item) => <CartItem item={item} />}
      />

      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100px",
      }}>
        {cart.totalPrice > 0 && (
          <>
            <Button type="primary" onClick={showModal}>
              Checkout
            </Button>
            <Link to="/pay">
              <div>
                <Button variant="success">Buy</Button>
              </div>
            </Link>
          </>
        )}
      </div>

      <Modal
        title="Payment Method"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="complex-form"
          onFinish={onFinish}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item label="Username" name="username" rules={[{ required: true, message: "Username is required" }]}>
            <Input
              style={{ width: 160 }}
              placeholder="Please input"
              onChange={handleValues}
            />
          </Form.Item>

          <Form.Item label="Province" name="province" rules={[{ required: true, message: "Province is required" }]}>
            <Input
              style={{ width: 160 }}
              placeholder="Please input"
              onChange={handleValues}
            />
          </Form.Item>

          <Form.Item label="Street" name="street" rules={[{ required: true, message: "Street is required" }]}>
            <Input
              style={{ width: 160 }}
              placeholder="Please input"
              onChange={handleValues}
            />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={[{ required: true, message: "Email is required" }]}>
            <Input
              style={{ width: 160 }}
              placeholder="Please input email"
              onChange={handleValues}
            />
          </Form.Item>

          <Form.Item label=" " colon={false}>
            <Button
              onClick={checkValues}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Cart;
