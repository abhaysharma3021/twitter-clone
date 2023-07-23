import CommentItem from "./CommentItem";

interface Props {
  comments?: Record<string, any>[];
}

const CommentFeed: React.FC<Props> = ({ comments }) => {
  return (
    <>
      {comments?.map((comment) => (
        <CommentItem key={comment.id} data={comment} />
      ))}
    </>
  );
};

export default CommentFeed;
