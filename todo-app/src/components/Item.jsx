import React from "react";

function Item({
  id,
  title,
  contents,
  isComplete,
  completeItem,
  cancelItem,
  deleteItem,
}) {
  return (
    <li>
      <span>{title}</span>
      <p>{contents}</p>
      <input type="hidden" name="target-id" className="target-id" value={id} />
      <div className="btn-box">
        {isComplete == true ? (
          <button type="button" onClick={cancelItem} className="com-btn">
            취소
          </button>
        ) : (
          <button type="button" onClick={completeItem} className="com-btn">
            완료
          </button>
        )}
        <button type="button" onClick={deleteItem} className="del-btn">
          삭제
        </button>
      </div>
    </li>
  );
}

export default Item;
