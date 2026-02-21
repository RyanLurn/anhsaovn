"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Trang chủ</h1>
      <Button onClick={() => toast.success("Xin chào!")} size="lg">
        Nhấn tôi!
      </Button>
    </div>
  );
}
