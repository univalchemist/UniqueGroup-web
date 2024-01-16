import { useState, useEffect, useRef } from "react";

const useUpload = ({ accept, id }: any, callback: any) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const freeRef = useRef(null);
  const [value, setValue] = useState<File | null>(null);
  

  const [isLoading, toggleLoading] = useState(false);
  const onChange = (ev: any) => {
    //     toggleLoading(true);
    //     debugger;

    if (ev.target.files.length) {
      setValue(ev.target.files[0]);
      callback(ev.target.files[0]);
    } else {
        //     setValue(null)
    }
  };

  const setRef = (r: HTMLInputElement) => {
    ref.current = r;
  };
  const trigger = (customData: any) => {
    //   debugger;
//     setValue(null);
    if (ref.current) {
      ref.current.value = "";
      ref?.current?.click();
    }
    if (!customData) {
      freeRef.current = customData;
    }
  };

  const isFileStaging = value !== null;
  return {
    ref,
    freeRef,
    accept,
    setRef,
    id,
    isFileStaging,
    onChange,
    trigger,
    isLoading,
    value,
    toggleLoading,
  };
};

export default useUpload;
