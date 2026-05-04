import 'server-only';

export const PRIVATE_PROFILE = {
  email: process.env.EMAIL || "",
  phone: process.env.PHONE || "",
  location: process.env.LOCATION || "",
};
