import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Form, Input, Button, Select } from "antd";

const CARD_OPTIONS = {
  hidePostalCode: true,
  style: {
    base: {
      fontSize: "16px",
      color: "#424770",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

const MyCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <Form onFinish={handleSubmit}>
      <CardElement options={CARD_OPTIONS} />
      <Button
        type="primary"
        disabled={!stripe}
        htmlType="submit"
        block
        className="text-2xl h-auto mt-6"
      >
        Pay
      </Button>
    </Form>
  );
};

export default MyCheckoutForm;
