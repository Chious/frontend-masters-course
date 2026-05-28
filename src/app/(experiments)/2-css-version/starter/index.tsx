import style from "./style.module.css";

const TEXT = ["CSS".split(""), "version".split("")];

export default function Page() {
  return (
    <div className="bg-blue-300 text-black">
      <div className="flex h-screen items-end justify-left overflow-hidden">
        <h1 className="title font-black text-[min(20rem,30vw)] leading-none pb-[0.1em] text-left">
          {TEXT[0].map((letter, i) => (
            <span
              key={i}
              className={style.letter}
              style={
                {
                  "--index": i,
                } as React.CSSProperties
              }
            >
              {letter}
            </span>
          ))}
          <br />

          {TEXT[1].map((letter, i) => (
            <span
              key={i}
              className={style.letter}
              style={
                {
                  "--index": i,
                } as React.CSSProperties
              }
            >
              {letter}
            </span>
          ))}
          <br />
        </h1>
      </div>
    </div>
  );
}
