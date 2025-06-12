"use client";

import { signInWithGoogle } from "../../lib/supabase";
import { FaGoogle } from "react-icons/fa";
import Button from "../components/Button";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Button color="red" onClick={signInWithGoogle} size="large">
        <div className="flex flex-row justify-center items-center">
          <span className="mr-2">
            <FaGoogle />
          </span>
          Sign in with Google
        </div>
      </Button>
    </div>
  );
}
