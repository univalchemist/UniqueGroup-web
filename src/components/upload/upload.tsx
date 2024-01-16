import React from "react";

interface UploadProps {}
const Upload = (props: any) => {
  // debugger;
  return (
    <input
      ref={props.setRef}
      name={props.name}
      onChange={props.onChange}
      id={props.id}
      accept={props.accept}
//       value={props.value}
      type="file"
      style={{
        visibility: "hidden",
        width: 0,
        height: 0,
        position: "absolute",
      }}
    />
  );
};

export default Upload;
