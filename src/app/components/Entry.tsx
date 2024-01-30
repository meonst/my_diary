import Media from "./Media";

export default function Entry(entryProperty: entryProperty) {
  let postId: string = "post" + entryProperty.id;

  let media = [];

  for (let i = 0; i < entryProperty.mediaSource.length; i++) {
    media.push(Media(entryProperty.mediaSource[i]));
  }
  let mediaSource: string = "asdasf";

  return (
    <div
      id={postId}
      className="border-spacing-10 border border-black border-opacity-50"
    >
      <div>{entryProperty.content}</div>

      {media}
      <div>{entryProperty.id}</div>

      <div>
        {entryProperty.date.toLocaleDateString()} {" "}
        {entryProperty.date.toLocaleTimeString()}
      </div>
    </div>
  );
}
