"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  if (!user) {
    return (
      <main className="p-8">
        <h1 className="text-2xl mb-4">Welcome to the Shopping List App</h1>
        <button
          className="bg-cyan-500 text-white px-4 py-2 rounded"
          onClick={gitHubSignIn}
        >
          Sign in with GitHub
        </button>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl mb-4">Welcome, {user.displayName}</h1>
      <p className="mb-4">{user.email}</p>
      <div className="flex gap-4">
        {/* Updated link to Week 10 */}
        <Link href="/week-10/shopping-list" className="bg-green-500 text-white px-4 py-2 rounded">
          Go to Shopping List
        </Link>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={firebaseSignOut}
        >
          Logout
        </button>
      </div>
    </main>
  );
}
