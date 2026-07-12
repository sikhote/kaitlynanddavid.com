"use client";

import { useEffect } from "react";

export default function Page({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <div>Something went wrong.</div>;
}
