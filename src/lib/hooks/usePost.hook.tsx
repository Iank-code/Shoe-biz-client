"use client";
import { useEffect, useState } from "react";

const usePost = (email: string, password: string, urlPath: string) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(urlPath, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Could not fetch data from server");
          }
          return res.json();
        })
        .then((data) => {
          //   console.log(data);
          setUserData(data);
        });
    }, 1000);
  }, []);
  //   console.log(userData);
    return { userData };
};

export default usePost;
