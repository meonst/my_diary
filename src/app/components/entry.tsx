import Media from './media'


export default function Entry(entryProperty: entryProperty) 
{
    let postId: string = "post" + entryProperty.id;
    
    let media = [];

    for (let i = 0; i < entryProperty.mediaSource.length; i++) {
        media.push(Media(entryProperty.mediaSource[i]));
    }
    

    return (
        <div id={postId}>
            <div>
                {entryProperty.content}
            </div>

            <div> 
                {entryProperty.id}
            </div>

        </div>
    )

}
