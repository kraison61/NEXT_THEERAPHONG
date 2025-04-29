"use client";

import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

interface SanitizeOptions {
  ALLOWED_TAGS?: string[];
  ALLOWED_ATTR?: string[];
  FORCE_BODY?: boolean;
}

const defaultConfig: SanitizeOptions = {
  ALLOWED_TAGS: [
    "b", "i", "em", "strong", "a", "ul", "ol", "li", "p", "br",
    "h1", "h2", "h3", "h4", "h5", "span",
    "table", "thead", "tbody", "tr", "th", "td",
  ],
  ALLOWED_ATTR: ["href", "target", "rel", "class"],
  FORCE_BODY: true,
};

export const useSanitize = (dirty: string) => {
  const [clean, setClean] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setClean(DOMPurify.sanitize(dirty, defaultConfig));
    }
  }, [dirty]);

  return clean;
};
