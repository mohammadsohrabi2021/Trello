import { hash, compare } from "bcryptjs";

async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  console.log(hashedPassword);
  return hashedPassword;
}

async function verifyPassword(password, hashPassword) {
  const isValid = await compare(password, hashPassword);
  console.log(isValid);
  return isValid;
}
export { hashPassword, verifyPassword };
