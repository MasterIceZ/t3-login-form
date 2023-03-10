import Link from "next/link";

export function LoginForm() {
  return (
    <div className="w-1/3 rounded-[30px] border bg-white text-center dark:border-none dark:bg-gray-800">
      <div className="flex flex-col py-5">
        <h1 className="my-10 text-5xl font-semibold text-black dark:text-white">
          Login
        </h1>
        <form>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="mt-3 h-12 w-3/4 rounded-md border bg-transparent text-xl dark:border-gray-700"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="mt-3 h-12 w-3/4 rounded-md border bg-transparent text-xl dark:border-gray-700"
          />
          <button className="mt-3 h-10 w-3/4 rounded-md bg-sky-500 text-white">
            <span className="text-xl">Login</span>
          </button>
          <Link href="/register">
            <p className="mt-2 text-gray-400">Signup</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
