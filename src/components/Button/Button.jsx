export const Button = ({ onLoadMore }) => {
  return (
    <div onClick={onLoadMore}>
      <button type="button" class="button_more">
        Load more
      </button>
    </div>
  );
};
