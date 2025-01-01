"use client";
import { cookies } from "next/headers";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Home = (): React.JSX.Element => {
  const searchParams = useSearchParams();
  const search = searchParams.get("keyword");

  useEffect(() => {
    const fetchList = async () => {
      const cookieList = cookies();
      console.log(cookieList);
    };
    fetchList();
  }, [search]);
  return <div>page</div>;
};

export default Home;
