"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];
  return (
    <div>
      <h2>
        Review {reviewId} not found for Product {productId}
      </h2>
    </div>
  );
}

// Not found doesn't accept props
