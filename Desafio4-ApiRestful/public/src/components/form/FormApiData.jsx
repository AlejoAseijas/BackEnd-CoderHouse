import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import "./formStyle.css";
function FormApiData(e) {
  console.log(e);
  return (
    <Formik
      initialValues={{
        title: "",
        price: "",
        thumbnail: "",
      }}
      validate={(data) => {
        let err = {};
        if (!data.title) {
          err.title = "Enter title";
        }
        if (!data.price) {
          err.price = "Enter price";
        }
        if (!data.thumbnail) {
          err.thumbnail = "Enter url";
        }
        return err;
      }}
      onSubmit={(data, { resetForm }) => {
        resetForm();
        axios.post("http://localhost:8080/api/productos", {
          title: data.title,
          price: data.price,
          thumbnail: data.thumbnail,
        });
        window.location.reload();
      }}
    >
      {({ errors }) => (
        <Form className="form-container border border-dark p-2 w-auto">
          <h1 className="text-center">Add new Aircraft</h1>
          <label className="form-label">Title</label>
          <Field
            type="text"
            className="input-field "
            id="title"
            name="title"
            placeholder="Enter title"
          />
          <ErrorMessage
            name="emailUser"
            component={() => <div className="error"> {errors.title} </div>}
          />

          <label className="form-label">Price</label>
          <Field
            type="number"
            className="input-field "
            id="price"
            name="price"
            placeholder="Enter price"
          />
          <ErrorMessage
            name="passwordUser"
            component={() => <div className="error"> {errors.price} </div>}
          />

          <label className="form-label">Image</label>
          <Field
            type="url"
            className="input-field "
            id="url"
            name="thumbnail"
            placeholder="Enter url"
          />
          <ErrorMessage
            name="passwordUser"
            component={() => <div className="error"> {errors.thumbnail} </div>}
          />

          <button type="submit" className="submit-btn">
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormApiData;
