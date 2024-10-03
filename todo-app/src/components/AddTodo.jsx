import React, { useState } from "react";
import List from "./List";
function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState([
    {id: 0, title:'포트폴리오', contents:'포트폴리오 완료하기', isComplete: false},
  ]);

  // 타이틀 변경
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  // 내용 변경
  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addItem = () => {
    if (title.trim() == "") {
      alert("제목을 입력해주세요.");
      document.querySelector("#title").focus();
      return;
    }
    if (contents.trim() == "") {
      alert("내용을 입력해주세요");
      document.querySelector("#contents").focus();
      return;
    }


    // 아이디 랜덤 지정
    let newId = crypto.randomUUID();
    // 데이터 넣기
    let addData = {
        id: newId,
        title: title,
        contents: contents,
        isComplete: false,
    };
    // 데이터 상태변수 변경
    setData([...data, addData]);
    setTitle("");
    setContents("");
    setId(newId);
  };

  return (
    <div className="todo-box">
      <div className="add-todo-area">
        <div className="todo-wrap">
          <label>
            제목
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={changeTitle}
            />
          </label>
          <label>
            내용
            <input
              type="text"
              name="title"
              id="contents"
              value={contents}
              onChange={changeContents}
            />
          </label>
        </div>
        <button type="button" className="add-btn" onClick={addItem}>
          추가하기
        </button>
      </div>
      <List data={data} />
    </div>
  );
}

export default AddTodo;
