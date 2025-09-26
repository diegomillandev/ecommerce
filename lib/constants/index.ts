const getEnv = (key: string, defaultValue: string) => {
  const value = process.env[key] || defaultValue;

  if (value === undefined) {
    throw new Error(`Environment variable ${key} is not set`);
  }

  return value;
};

export const APP_NAME = getEnv("NEXT_PULBIC_APP_NAME", "E-Commerce");
export const SITE_DESCRIPTION = getEnv(
  "NEXT_PULBIC_APP_DESCRIPTION",
  "A simple e-commerce application built with Next.js"
);
export const SERVER_URL = getEnv(
  "NEXT_PUBLIC_SITE_URL",
  "http://localhost:3000"
);
