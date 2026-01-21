import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card>
        <div className="w-80 space-y-6">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              Welcome back
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Sign in to your DevBoard
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4 text-gray-700">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              required
            />

            <Button type="submit" variant="primary">
              Sign in
            </Button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              href="/auth/register"
              className="font-medium text-gray-900 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
