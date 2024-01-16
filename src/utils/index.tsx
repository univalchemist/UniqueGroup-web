import { ReactElement } from "react";

function underlineName(name: string) {
  const [f, l] = name.split(" ");
  return (
    <>
      {f} {l ? <u>{l}</u> : null}
    </>
  );
}

export { underlineName };
