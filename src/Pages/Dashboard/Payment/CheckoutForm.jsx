import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
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
    } else {
      console.log('[PaymentMethod]', paymentMethod);
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
      <button className="btn btn-sm btn-outline"  type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
            
        </div>
    );
};

export default CheckOutForm;