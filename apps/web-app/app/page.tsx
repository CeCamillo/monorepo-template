"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [status, setStatus] = useState("Loading...");
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/health`)
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(err => setStatus("Error: " + err.message));
  }, []);

  return (
    <div>
      <p>API Status: {status}</p>
    </div>
  );
}
