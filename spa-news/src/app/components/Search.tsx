'use client'

import { useRouter } from "next/navigation";
import { FormEvent } from "react"

export function Search() {
  const router = useRouter();

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJSON = Object.fromEntries(formData.entries());
    if(formJSON.name) router.push(`/search/${formJSON.name}`);
  }

  return (
    <section className="rounded-2xl bg-slate-500 m-2 p-2">
      <form className="flex justify-center" name="myInput" onSubmit={handleSearch}>
        <input type="text" name="name" />
        <button type="submit">Search</button>
      </form>
    </section>
  )
}