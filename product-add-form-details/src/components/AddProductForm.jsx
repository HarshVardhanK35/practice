import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useProductContext } from "../context/ProductContext";
import { nanoid } from "nanoid";
import axios from "axios";

const AddProductForm = () => {
  const { addProduct } = useProductContext();

  const initialValues = {
    productName: "",
    quantity: "",
    price: "",
  };

  const validationSchema = Yup.object({
    productName: Yup.string().required("Product Name is required"),
    quantity: Yup.number().required("Quantity is required"),
    price: Yup.number().required("Price is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    const newProduct = { ...values, id: nanoid(10) };
    addProduct(newProduct);

    try {
      // Send the data to the server using Axios
      await axios.post("http://localhost:3001/products", newProduct);
    } catch (error) {
      console.error("Error adding product to the server:", error);
    }

    resetForm();
  };

  return (
    <>
      <div>
        <h1>Add Products</h1>
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div>
              <Field
                type="text"
                id="productName"
                name="productName"
                placeholder="Enter Product Name"
              />
              <ErrorMessage name="productName"/>
            </div>
            <br></br>

            <div>
              <Field
                type="number"
                id="quantity"
                name="quantity"
                placeholder="Enter Quantity"
              />
              <ErrorMessage name="quantity" />
            </div>
            <br></br>

            <div>
              <Field
                type="number"
                id="price"
                name="price"
                placeholder="Enter Price"
              />
              <ErrorMessage name="price" />
            </div>
            <br></br>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default AddProductForm;
