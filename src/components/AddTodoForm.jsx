import React from "react";
import { Formik, Form, Field } from "formik";
import "./AddTodoForm.css";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../slices/myTodoSlice";
import { v4 as uuidv4 } from "uuid";

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const submitHandler = (values) => {
    const data = {
      id: uuidv4(),
      ...values,
    };
    dispatch(addTodoItem(data));
  };
  return (
    <Formik initialValues={{ description: "" }} onSubmit={submitHandler}>
      <Form className="form-container">
        <div className="input-task">
          <label htmlFor="description">Enter Task</label>
          <Field name="description" type="text" />
        </div>
        <button type="click" className="add-btn">
          Add Task
        </button>
      </Form>
    </Formik>
  );
};

export default AddTodoForm;
