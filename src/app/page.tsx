import { auth, signOut, signIn } from "~/server/auth";

export default async function HomePage() {
  const session = await auth();
  return (
    <div className="bg-back flex h-screen w-screen flex-col items-center justify-center">
      <form
        action={async () => {
          "use server";
          session ? await signOut() : await signIn();
        }}
      >
        <button className="rounded-3xl bg-indigo-500 px-3 py-2 text-gray-200 shadow-purple-300">
          {session ? "Sign Out" : "Sign In"}
        </button>
      </form>
    </div>
  );
}
