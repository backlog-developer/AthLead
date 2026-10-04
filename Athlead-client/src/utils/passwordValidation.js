export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 64;

export const PASSWORD_REQUIREMENTS = [
  "at least 8 characters",
  "at most 64 characters",
  "at least one uppercase letter",
  "at least one lowercase letter",
  "at least one number",
  "at least one special character",
  "no spaces",
];

export const PASSWORD_PATTERN =
  /^(?=\S+$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,64}$/;

export const PASSWORD_ERROR_MESSAGE =
  "Use 8-64 characters with uppercase, lowercase, number, and special character. Spaces are not allowed.";

export const isValidPassword = (password) =>
  typeof password === "string" && PASSWORD_PATTERN.test(password);
