"use client";

import Link from "next/link";

export default function PasswordResetPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow rounded-lg p-8 w-full max-w-md">
        {/* Title */}
        <h2 className="text-center text-xl font-semibold">Password reset</h2>
        <p className="text-center text-gray-500 mt-2 text-sm">
          Enter your email address and we will send you a verification code.
        </p>

        {/* Form */}
        <form className="mt-6 space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md py-2 font-medium hover:bg-blue-700 transition"
          >
            Get reset code
          </button>
        </form>

        {/* Footer link */}
        <div className="text-center mt-6 text-sm text-gray-600">
          Already know it?{" "}
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
