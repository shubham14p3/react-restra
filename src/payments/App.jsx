import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import MyCheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_Ey2p2N4zmrg5nqZrLTpcPg4h00MJSdtjP2");
const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <MyCheckoutForm />
    </Elements>
  );
};

export default App;