import React from "react";
import Link from "next/link";
function Links({ label }) {
  return (
    <Link className="text-sm font-medium" href={"/"}>
      {label}
    </Link>
  );
}

export default Links;
