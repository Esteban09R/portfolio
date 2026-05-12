import "server-only";

export const PRIVATE_PROFILE = {
  phone: process.env.PHONE || "",
  location: process.env.LOCATION || "",
};
