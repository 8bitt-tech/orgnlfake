"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

/**
 * Reusable Portal component that renders its children into the document.body.
 * This is essential for modals to escape parent CSS restrictions like 
 * z-index, overflow: hidden, or pointer-events: none.
 */
export default function Portal({ children }: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Only render on the client
  if (!mounted) return null;

  return createPortal(children, document.body);
}
