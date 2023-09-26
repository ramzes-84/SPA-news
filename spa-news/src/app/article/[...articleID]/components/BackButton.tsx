'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button className="p-2 m-2 rounded-2xl bg-slate-500 text-white" onClick={() => router.back()}>
      Back to main
    </button>
  );
}
