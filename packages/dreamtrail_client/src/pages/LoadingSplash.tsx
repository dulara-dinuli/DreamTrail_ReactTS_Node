// src/pages/Splash.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingSplash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      void navigate("/home");
    }, 3000); // 3 seconds splash
    return () => {clearTimeout(timer)};
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to DreamTrail</h1>
      <p>Loading...</p>
    </div>
  );
}
