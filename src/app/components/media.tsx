
export default function Media(source: string)
{
    return 
    (
        <div>
            <video src={source}>
                {source}
            </video>
        </div>
    )
}
