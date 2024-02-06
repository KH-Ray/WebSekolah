import { Button, Flowbite } from "flowbite-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";
import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import "../../revert.css";

const AdminRabuCeria = () => {
  const [text, setText] = useState("");

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setText(editorRef.current.getContent());
    }
  };

  return (
    <main className="max-h-full min-h-screen p-12 font-poppins">
      <div className="h-full">
        <h1 className="mb-8 block text-4xl font-semibold" htmlFor="rabuceria">
          Halaman Rabu Ceria
        </h1>
        <div className="mb-6">
          <div
            className="our-app-wrapper block break-all font-poppins"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>

          <Editor
            apiKey="o0pzftir0e6adwmb92z8ig9705xxtb5i7kurqh1a3j7q41qe"
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
              height: 500,
              plugins:
                "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>

        <div className="flex">
          <div className="ml-auto">
            <Flowbite theme={{ theme: customButtonTheme }}>
              <Button color="dark-green" size="lg" onClick={log}>
                Simpan
              </Button>
            </Flowbite>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminRabuCeria;
