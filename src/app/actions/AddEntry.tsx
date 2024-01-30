'use server'
export default function AddEntry()
{
    async function AddEntry(entryData: FormData)
    {

        const rawEntryData = 
        {
            content: entryData.get('content'),
            media: entryData.get('media'),
            date: entryData.get('date')
        }
    }

    return <form action={AddEntry}></form>
}