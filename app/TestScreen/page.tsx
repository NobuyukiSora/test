// pages/index.tsx
"use client";
import "./styles.css";

import { useEffect, useState } from "react";

interface Data {
  id: number;
  name: string;
}

export default function TestScreen() {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchData1() {
    setLoading(true);
  
    try {
      const response = await fetch("http://127.0.0.1:8000/sharepoint/read_action_1", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ /*payload*/ }),
        credentials: 'include' 
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      setData(result);
      console.log('response: ', result);
    } catch (error) {
      console.error('Fetch error: ', error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchData2() {
    setLoading(true);
  
    try {
      const response = await fetch("http://127.0.0.1:8000/sharepoint/read_action_2", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ /*payload*/ }),
        credentials: 'include'
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      setData(result);
      console.log('response: ', result);
    } catch (error) {
      console.error('Fetch error: ', error);
    } finally {
      setLoading(false);
    }
  }
  
  

  const loadingComponent =  () => {
    if (loading) {
      return <p className="text-black">{'loading'}</p>;
    }
  }
  


  return (
    <div className="screen">
      <h1 className="text-black">Data sharepoint xls</h1>
      <div className="flex flex-row justify-between my-10">
      <button className="exportButton" onClick={() => fetchData1()}>
      Action 1</button>
        <button className="exportButton" onClick={() => fetchData2()}>
          Action 2
        </button>
      </div>
      {loadingComponent()}
    </div>
  );
}
