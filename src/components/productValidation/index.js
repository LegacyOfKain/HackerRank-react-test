import React, {useState} from "react";
import "./index.css";

function ProductValidation () {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [focused1, setFocused1] = React.useState(false)
  const [focused2, setFocused2] = React.useState(false)

  const isProductNameValid = productName.trim() !== "";
  const isQuantityValid = quantity.trim() !== "";

  const isSubmitDisabled = productName.trim() === "" || quantity.trim() === "";

  const onFocus1 = () => setFocused1(true)
  const onFocus2 = () => setFocused2(true)

  const handleNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Your form submission logic goes here
  // };

  return (
    <div className="layout-column justify-contents-center align-items-center">
      <section className="card pa-50">
        <form className="layout-column" noValidate>
          <label>
            <input
              type="text"
              onInput={handleNameChange}
              onBlur={handleNameChange}
              onFocus={onFocus1}
              data-testid="name-input"
              className={`white large outlined error`}
              placeholder="Product name"
            />
            {!focused1 || isProductNameValid ? null : (
              <p className="error-text form-hint" data-testid="name-input-error">
              Product name is required
            </p>
            )}
            
          </label>
          <label>
            <input
              type="number"
              data-testid="quantity-input"
              onInput={handleQuantityChange}
              onBlur={null}
              onFocus={onFocus2}
              className={`white large outlined error`}
              placeholder="Quantity"
            />
            {!focused2 || isQuantityValid ? null : (
               <p className="error-text form-hint" data-testid="quantity-input-error">
               Quantity is required
              </p>
            )}
           
          </label>
          <button className="mt-50" type="submit" data-testid="submit-button" disabled={isSubmitDisabled}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default ProductValidation;
