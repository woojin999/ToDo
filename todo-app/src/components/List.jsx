import React, { useState } from "react";
import Item from "./Item";

function List({ data }) {
  const [currData, setCurrData] = useState(data);

  // 완료 데이터
  const completeData = data.filter((ele) => {
    return ele.isComplete == true;
  });

  // 미완료 데이터
  const incompleteData = data.filter((ele) => {
    return ele.isComplete == false;
  });

  // 완료 기능
  const completeItem = () => {
    // console.log("완료");
    // data에서 해당 id 찾아서 값 변경
    return function (e) {
      // event target의 조상
      const parent = e.target.parentElement.parentElement;
      // 조상의 자식중에 target-id의 value 값
      const id = parent.querySelector(".target-id").value;
      console.log(parent);

      // 현재 데이터와 같은 id를 가진 데이터 가져오기
      let findData = data.find((ele) => {
        return ele.id == id;
      });
      findData.isComplete = true; // 완료 상태로 변경
      setCurrData((prevData) => [findData, ...prevData]); //업데이트
    };
  };

  // 취소 기능
  const cancelItem = () => {
    // console.log("완료");
    // data에서 해당 id 찾아서 값 변경
    return function (e) {
      // event target의 조상
      const parent = e.target.parentElement.parentElement;
      // 조상의 자식중에 target-id의 value 값
      const id = parent.querySelector(".target-id").value;
      console.log(parent);

      // 현재 데이터와 같은 id를 가진 데이터 가져오기
      let findData = data.find((ele) => {
        return ele.id == id;
      });
      findData.isComplete = false; // 취소 상태로 변경
      setCurrData((prevData) => [findData, ...prevData]); //업데이트
    };
  };

  // 삭제 기능
  const deleteItem = () => {
    return function (e) {
      // event target의 조상
      const parent = e.target.parentElement.parentElement;
      // 조상의 자식중에 target-id의 value 값
      const id = parent.querySelector(".target-id").value;
      console.log(data);
      
      let findData = data.findIndex((ele) => {
        return ele.id == id;
      });
      let replaceData = data.splice(findData, 1);
      setCurrData(replaceData);
    };
  };

  return (
    <div className="todo-list">
      <h3>앞으로 할 일</h3>
      <ul className="working">
        {incompleteData.map((ele) => {
          return (
            <Item
              id={ele.id}
              contents={ele.contents}
              title={ele.title}
              isComplete={ele.isComplete}
              key={ele.id}
              completeItem={completeItem()}
              deleteItem={deleteItem()}
            />
          );
        })}
      </ul>
      <h3>완료</h3>
      <ul className="working">
        {completeData.map((ele) => {
          return (
            <Item
              id={ele.id}
              contents={ele.contents}
              title={ele.title}
              isComplete={ele.isComplete}
              key={ele.id}
              cancelItem={cancelItem()}
              deleteItem={deleteItem()}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default List;
