"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import data from "../datatest/Data.json";

export default function Dta() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/compnents/datatest/${data[0].id}`);
  }, [router]);

  return null;
}
