import Entry from "./components/entry"
export default function Home() {

  let datePlaceholder: Date = new Date(2023, 11, 1);
  let entryProperty: entryProperty =
  {
    'id': 31,
    'content': "content placeholder",
    'date': datePlaceholder,
    'mediaSource': ["source 1", "source 2", "source 3", "source 4"]
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {Entry(entryProperty)}
    </main>
  )
}
