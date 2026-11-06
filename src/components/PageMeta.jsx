import { useEffect } from "react";
import { company } from "../data/company";

function upsertMeta(selector, attr, key, content) {
  let node = document.head.querySelector(`${selector}[${attr}="${key}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(attr, key);
    document.head.appendChild(node);
  }
  node.setAttribute("content", content);
}

function upsertCanonical(href) {
  let node = document.head.querySelector("link[rel='canonical']");
  if (!node) {
    node = document.createElement("link");
    node.setAttribute("rel", "canonical");
    document.head.appendChild(node);
  }
  node.setAttribute("href", href);
}

export default function PageMeta({ title, description, path = "/" }) {
  useEffect(() => {
    const fullTitle = title.includes("Hunza Technologies")
      ? title
      : `${title} | Hunza Technologies`;
    const url = `${company.siteUrl}${path}`;

    document.title = fullTitle;
    upsertMeta("meta", "name", "description", description);
    upsertMeta("meta", "property", "og:title", fullTitle);
    upsertMeta("meta", "property", "og:description", description);
    upsertMeta("meta", "property", "og:url", url);
    upsertMeta("meta", "property", "og:image", `${company.siteUrl}/og-image.png`);
    upsertMeta("meta", "name", "twitter:title", fullTitle);
    upsertMeta("meta", "name", "twitter:description", description);
    upsertCanonical(url);
  }, [title, description, path]);

  return null;
}
