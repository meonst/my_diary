'use client'
import Entry from "../components/Entry";
import MakeEntry from "../components/MakeEntry";

export default function Home() {
  
  let datePlaceholder: Date = new Date(2023, 11, 1, 13, 32, 33);
  let entryProperty: entryProperty = {
    id: 31,
    content: "content placeholder",
    date: datePlaceholder,
    mediaSource: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg"
    ],
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {MakeEntry()}

      {Entry(entryProperty)}
    </main>
  );
}
