import PropTypes from "prop-types";
export const Post = ({ imageLink, caption }) => {
  return (
    <div className="mx-auto overflow-hidden">
      <img src={imageLink} className="min-w-[200px] max-h-[300px]" alt="post" />
      <p>{caption}</p>
    </div>
  );
};
Post.propTypes = {
  isCompleted: PropTypes.bool,
  text: PropTypes.string,
  updateTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  updateState: PropTypes.func,
  inputRef: PropTypes.object,
};
