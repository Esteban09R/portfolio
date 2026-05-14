import "server-only";

export const PRIVATE_PROFILE = {
  email: process.env.EMAIL || "",
  fromEmail: process.env.FROM_EMAIL || "",
  phone: process.env.PHONE || "",
  location: process.env.LOCATION || "",
};
