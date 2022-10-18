import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, getUsers } from "../redux/actions";
import Header from "./Header";

const Home = () => {
  const { users: data } = useSelector((state) => state.data);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record ?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <>


    <div className="wrapper-user-list">
    <Header/>

    <div className="content">
      <h2>Users</h2>
    </div>
    <div className="table-container">
      <div className="resp-table">
        <div className="resp-table-header">
          <div className="table-header-cell">Name</div>
          <div className="table-header-cell">User Email Id</div>
          <div className="table-header-cell"></div>
        </div>
        <div className="resp-table-body">
     
        {Object.keys(data).map((id, index) => {
          console.log(data.users)
                return (
                  <div className="resp-table-row" key={id}>
                    <div className="table-body-cell">
                      <span>{data[id].fullName}</span>
                    </div>
                    <div className="table-body-cell">
                      <span>{data[id].email}</span>
                    </div>
                    <div className="table-body-cell">
                    <Link to={`/update/${id}`} className="btn">
                    EDIT
                   </Link>
                   <span
                     className="btn"
                     onClick={() => onDelete(id)}
                   >
                     DELETE
                   </span>
                    </div>
                  </div>
                );
              })
            }
        </div>
      </div>
    </div>
  </div>
    









     
    </>
  );
};

export default Home;
