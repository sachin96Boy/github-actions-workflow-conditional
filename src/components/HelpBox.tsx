import React from "react";

type IHelpBoxProps = {
  title: string;
  text: string;
};

function HelpBox(props: IHelpBoxProps) {
  const { title, text } = props;

  return (
    <article className="p-4 border rounded shadow-lg m-2 bg-white flex-1">
      <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>
      <p className="text-gray-700">{text}</p>
      <hr className="my-4" />
    </article>
  );
}

export default HelpBox;
