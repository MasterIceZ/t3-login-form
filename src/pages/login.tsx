import { type NextPage } from "next";
import Head from "next/head";

import PageLayout from "@/components/Layout/PageLayout";
import { LoginForm } from "@/components/LoginForm";

const Login: NextPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Login</title>
      </Head>
      <main className="bg-gradient-to-br from-purple-600 to-blue-400 dark:bg-gradient-to-br dark:from-purple-900 dark:to-blue-900 ">
        <section className="flex h-screen items-center justify-center">
          <LoginForm />
        </section>
      </main>
    </PageLayout>
  );
};

export default Login;
