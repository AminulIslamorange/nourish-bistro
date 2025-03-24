import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";


const CheckOutForm = () => {
  const [error,setError]=useState('');
  const [clientSecret,setClientSecret]=useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure=useAxiosSecure();
    const [cart]=useCart();
    const totalPrice=cart.reduce((total,item)=>total+item.price,0)
    useEffect(()=>{
     axiosSecure.post('/create-payment-intent',{price:totalPrice})
     .then(res=>{
      console.log(res.data.clientSecret)
      setClientSecret(res.data.clientSecret)
     })

    },[axiosSecure,totalPrice])




    const handleSubmit = async (event) =>{
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }

          const card = elements.getElement(CardElement);

          if (card === null) {
            return;
          }
           // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log('[error]', error);
      setError(error.message);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError('')
    }

    }
    return (
        <div className="mx-12">
             <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-sm btn-outline"  type="submit" disabled={!stripe ||!clientSecret}>
        Pay
      </button>
      <p className="text-red-700">{error}</p>
    </form>
            
        </div>
    );
};

export default CheckOutForm;