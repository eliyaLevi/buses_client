import React, { useState } from "react";

export const Test = () => {
  const [isMobile, setisMobile] = useState(window.innerWidth);
  return <div>Test</div>;
};
