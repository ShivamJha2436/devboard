import { cookies } from "next/headers";

// Check if user is authenticated based on the presence of an auth token cookie
export function isAuthenticated() {
  const cookieStore = cookies();
  return cookieStore.get("devboard_auth")?.value === "true";
}

// Login user (mock implementation)
export function loginUser(){
    cookies().set("devboard_auth", "true", { path: "/" });
}

// Logout user (mock implementation)
export function logoutUser(){
    cookies().delete("devboard_auth");
}