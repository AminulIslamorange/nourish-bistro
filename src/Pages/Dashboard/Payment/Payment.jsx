import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./checkOutForm";
// ToDo need a key
const stripePromise = loadStripe(import.meta.env.VITE_PAYEMENT_API);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading={'PAYMENT'}></SectionTitle>
            <Elements stripe={stripePromise}>
      <CheckOutForm/>
    </Elements>
        </div>
    );
};

export default Payment;