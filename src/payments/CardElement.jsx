import { CardElement } from "@stripe/react-stripe-js";

export default function MyCardElement() {
  return (
    <CardElement
      options={{
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
      }}
    />
  );
}