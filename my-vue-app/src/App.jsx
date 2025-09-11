import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  const handleGetUsers = async () => {
    try {
      const { data } = await axios.get("https://api.github.com/users");
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>👋 My Friends</h1>
      <div style={styles.userList}>
        {users.map((user) => (
          <div key={user.id} style={styles.card}>
            <img src={user.avatar_url} alt={user.login} style={styles.avatar} />
            <p style={styles.name}>{user.login}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f0f4ff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "1.8rem",
    marginBottom: "15px",
    color: "#2b2b52",
  },
  userList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: "15px",
    width: "100%",
    maxWidth: "600px",
    overflowY: "auto",
    maxHeight: "70vh",
    padding: "10px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    transition: "transform 0.2s",
    cursor: "pointer",
  },
  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    marginBottom: "8px",
  },
  name: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    wordWrap: "break-word",
  },
};

export default App;
