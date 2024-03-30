"use client";

const DCBtn = ({
  title,
  content,
  setContentChanger,
  colorChanger,
  setColorChanger,
}) => {
  return (
    <button
      onClick={() => {
        setContentChanger(content);
        setColorChanger(content);
      }}
      className={
        colorChanger == content
          ? "rounded-md w-40 h-12 flex justify-center items-center bg-indigo-600 text-white transition-all duration-500 hover:bg-indigo-500"
          : "rounded-md w-40 h-12 flex justify-center items-center bg-orange-500 text-white transition-all duration-500 hover:bg-indigo-500"
      }
    >
      {title}
    </button>
  );
};

export default DCBtn;
