import { getUser } from "@/features/auth/helpers/get-user";

export default async function DashboardPage() {
  const user = await getUser();

  return (
    <main className="flex h-dvh flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Bảng điều khiển</h1>
      <p>Chào {user.name}</p>
    </main>
  );
}
