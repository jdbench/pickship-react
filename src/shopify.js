import { Shopify, ApiVersion } from "@shopify/shopify-api";

Shopify.Context.initialize({
    API_KEY: process.env.REACT_APP_SHOPIFY_API_KEY,
    API_SECRET_KEY: process.env.REACT_APP_SHOPIFY_API_SECRET,
    SCOPES: process.env.SCOPES.split(","),
    HOST_NAME: process.env.HOST.replace(/https?:\/\//, ""),
    HOST_SCHEME: process.env.HOST.split("://")[0],
    API_VERSION: ApiVersion.April22,
    IS_EMBEDDED_APP: true
  });