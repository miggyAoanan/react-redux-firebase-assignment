import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { isEmpty } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { addUser, editUser } from "../redux/actions";
import Header from "./Header";

const AddEdit = () => {
  const values = {
    fullName: "",
    email: "",
  };
  const [initialState, setState] = useState(values);
  const { users: data } = useSelector((state) => state.data);
  const { fullName, email } = initialState;
  let dispatch = useDispatch();
  const currentId = useParams();
  const navigate = useNavigate();

  const { id } = currentId;

  useEffect(() => {
    if (isEmpty(id)) {
      console.log("initialState", initialState);
      setState({ ...values });
    } else {
      setState({ ...data[id] });
    }
  }, [id, data]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...initialState,
      [name]: value,
    });
  };

  const handleSubmit = (e, obj) => {
    e.preventDefault();

    if (isEmpty(id)) {
      dispatch(addUser(initialState));
    } else {
      dispatch(editUser(initialState, id));
    }
    navigate("/");
  };

  return (
    <>
      <Header />

      <h2 className="mt-5 mb-5">Add User</h2>
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group ">
            <label htmlFor="fullName">Fullname</label>
            <input
              type="text"
             value={fullName}
              id="fullName"
              name="fullName"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group ">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={email}
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="button-div">
            <button className="btn btn-default" onClick={() => navigate("/")}>
              Cancel
            </button>
            <button type="submit" className="button-register btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEdit;
