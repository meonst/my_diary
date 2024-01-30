"use client";
import Media from "./Media";
import { FormEvent } from "react";
export default function MakeEntry() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("http://127.0.0.1:5000/insert", {
      method: "POST",
      body: formData,
    });
  }

  return (
    <form method="post" onSubmit={onSubmit}>
      <input
        type="text"
        name="content"
        className="m-2 box-border h-64 w-96 border border-solid border-black p-1"
      ></input>

      <input
        type="file"
        name="file"
        multiple
        className="m-2 box-border h-10 w-64 border border-solid border-black p-1"
      ></input>

      <input
        type="submit"
        className="m-2 box-border h-10 w-32 border border-solid border-black p-1"
        value="Submit"
        role="button"
      ></input>
    </form>
  );
}
