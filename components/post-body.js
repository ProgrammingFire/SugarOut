import postStyles from "./post-styles.module.css";

export default function PostBody({ content, videoUrl }) {
  return (
    <>
      <div
        className={`max-w-4xl mx-auto post ${postStyles.post}`}
        dangerouslySetInnerHTML={{ __html: content?.html }}
      />
      <iframe src={videoUrl} frameborder="0"></iframe>
    </>
  );
}
