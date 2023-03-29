import React, { useState } from "react";
import Axios from "axios";

import "./MakeRoomModal.css";

import logo from "../../../images/logo_black.png";
import MakeRoomLanguageFilter from "./MakeRoomLanguageFilter";
import MakeRoomToolFilter from "../MakeRoomToolFilter";
// import MakeRoomPurposeFilter from "./MakeRoomPurposeFilter";

function MakeRoomModal(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredLanguage, setEnteredLanguage] = useState("");
  const [enteredTool, setEnteredTool] = useState("");
  const [enteredPassWord, setEnteredPassWord] = useState("");
  const [enteredLink, setEnteredLink] = useState("");

  const titleChangeHandler = (event) => {
    console.log("Title Changed");
    setEnteredTitle(event.target.value);
  };

  const languageChangeHandler = (selectLanguage) => {
    setEnteredLanguage(selectLanguage);
  };

  const toolChangeHandler = (selectTool) => {
    setEnteredTool(selectTool);
  };

  const passwordChangeHandler = (event) => {
    console.log("Password Changed");
    setEnteredPassWord(event.target.value);
  };

  const linkChangeHandler = (event) => {
    console.log("Link Changed");
    setEnteredLink(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const makeRoomData = {
      title: enteredTitle,
      language: enteredLanguage,
      tool: enteredTool,
      // purpose: enteredPurpose,
      password: enteredPassWord,
      link: enteredLink,
    };

    props.onSaveRoomData(makeRoomData);
    setEnteredTitle("");
    setEnteredLanguage("");
    setEnteredTool("");
    // setEnteredPurpose("");
    setEnteredPassWord("");
    setEnteredLink("");
    // 임시 전송할 데이터
  };

  // document.querySelector('button').addEventlistener('click', (e) => {
  //   e.stopPropagation(); // 이벤트 전파 방지
  //   console.log('버튼 클릭');
  //   e.target.setAttribute('type', 'submit');
  // });


  return (
    <div className="RoomModals">
      <div>
        <img src={logo} alt="로고" className="RoomModal-logo" />
      </div>

      <form onSubmit={submitHandler}>
        <div className="RoomModal-control">
          <p>방 이름</p>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="RoomModal-control">
          <p>사용 언어</p>
          <MakeRoomLanguageFilter
            selected={enteredLanguage}
            onChangeFilter={languageChangeHandler}
          />
          {/* <input
            type="text"
            value={enteredLanguage}
            onChange={languageChangeHandler}
          /> */}
        </div>
        {/* 언어가 너무 다양한데 이거 그냥 글로 쓰는게 낫지 않을까? */}
        <div className="RoomModal-control">
          <p>사용 도구</p>
          <MakeRoomToolFilter
            selected={enteredTool}
            onChangeFilter={toolChangeHandler}
          />
          {/* <input
            type="text"
            value={enteredTool}
            onChange={toolChangeHandler}
          /> */}
        </div>
        {/* <div className="RoomModal-control">
          <p>사용 목적</p>
          <MakeRoomPurposeFilter />
        </div> */}
        <div className="RoomModal-control">
          <p>비밀번호</p>
          <input
            type="password"
            value={enteredPassWord}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className="RoomModal-control">
          <p>링크</p>
          <input type="text" value={enteredLink} onChange={linkChangeHandler} />
        </div>

        <div className="RoomModal-actions">
          <button type="submit">생성하기</button>
        </div>
      </form>
    </div>
  );
}

export default MakeRoomModal;
