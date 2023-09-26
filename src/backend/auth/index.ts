import { type User } from "@/context/reducer";
import { axios_server } from "..";

export async function loginWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const res = await axios_server.post<User>("/auth/login", data);
  return res.data;
}
