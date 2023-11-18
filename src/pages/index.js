import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Go to{" "}
        <Link href="/movies" className="hover:text-red-900">
          /movies
        </Link>
      </h1>
    </main>
  );
}
