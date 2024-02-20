import React from "react";

function Input(props) {
  return (
    <input
      className="w-96 mb-10 shadow-sm shadow-black outline-none  text-xl font-normal py-2 px-5 rounded-[999px] backdrop-blur-sm bg-white/30"
      type="text"
      placeholder={props.placeholder}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
}

export default Input;
