import React, { ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setId, setNickName, setPassword } from "../../store/loginSlice";

function Login() {
  const dispatch = useDispatch();
  const { id, password, nickName } = useSelector((state: RootState) => {
    return {
      id: state.login.id,
      password: state.login.password,
      nickName: state.login.nickName,
    };
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // dispatch(setId(event.currentTarget.Id.value));
    // dispatch(setPassword(event.currentTarget.password.value));
    // dispatch(setNickName(event.currentTarget.nickName.value));
  };

  const changeId = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setId(event.currentTarget.value));
  };

  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(event.currentTarget.value));
  };

  const changeNickName = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setNickName(event.currentTarget.value));
  };

  return (
    <div>
      <h1> This is Login Page </h1>
      <form onSubmit={handleSubmit}>
        <input name={"Id"} onChange={changeId} value={id} />
        <input name={"password"} onChange={changePassword} value={password} />
        <input name={"nickName"} onChange={changeNickName} value={nickName} />
        <button type={"submit"}>로그인</button>
      </form>
    </div>
  );
}

export default Login;
