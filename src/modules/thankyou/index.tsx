import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Costs from "./costs/costs";

export default function Thankyou() {
  const router = useRouter();
  const [cost, updateCost] = useState(0);

  const init = () => {
    const urlParams = new URLSearchParams(window.location.search);

    const slug = urlParams.get("cost");
    console.log(typeof Number(slug))
    if (typeof slug === "string" && typeof Number(slug) === "number") {
      updateCost(Number(slug))
    } else {
      //     no slug
      router.back()
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Costs
      finalPrice={cost}
      onBack={() => router.back()}
      onNext={() => router.push("/", "/")}
    />
  );
}
