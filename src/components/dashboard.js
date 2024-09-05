import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        dispatch(setPosts(data));
        console.log(data);
        setLoading(false);
      } catch {
        // setError("Failed to fetch posts. Please try again.");
        setLoading(false);
      }
    };

    fetchApi();
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <div className="logout-button-container">
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h2>Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
