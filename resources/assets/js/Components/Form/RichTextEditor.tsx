import { memo, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "../../Utils/rich_text";

const RichTextEditor = ({ data, onChange, editorblock }) => {
  const ref = useRef<EditorJS>();
  //Initialize editorjs
  useEffect(() => {
    //Initialize editorjs if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: editorblock,
        placeholder: "Begin writing your amazing piece of art here ✨",
        tools: EDITOR_JS_TOOLS,
        data: {
          time: new Date().getTime(),
          blocks: data,
        },
        async onChange(api) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor!;
    }

    //Add a return function to handle cleanup
    return () => {
      if (ref.current && (ref.current as { destroy?: () => void }).destroy) {
        (ref.current as { destroy: () => void }).destroy();
      }
    };
  }, []);
  return <div id={editorblock} />;
};

export default memo(RichTextEditor);