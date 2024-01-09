import { Button, Flowbite } from "flowbite-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLearning = () => {
  const [org, setOrg] = useState('');
  const [msg, setMsg] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('org', org);

    try {
      const response = await axios.post('http://localhost:8080/admin/learning', formData);

      console.log(response.data);

      if (response.data.Status === 'Success') {
        navigate('/organisasi');
        setMsg('File Successfully Uploaded');
      } else {
        setMsg('Error');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      setMsg('Error' + error.message);
    }
  };

  return (
    <main className="h-screen p-12 font-poppins">
      <form onSubmit={handleSubmit}>
        <div className="h-full">
          <p className="mb-6 block text-4xl font-semibold">
            Halaman Program Kerja
          </p>
          <p className="mb-4 block font-semibold" htmlFor="rabuceria">
            Perorganisasian Pembelajaran
          </p>
            <div className="mb-6">
              <Editor
                textareaName="organisasi"
                apiKey="hmjkmqo8ghn49src4q3ywlysr8iepj4xq2pumlshqma4ahx2"
                init={{
                  plugins:
                  "tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
                  toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                  tinycomments_mode: "embedded",
                  tinycomments_author: "Author name",
                  resize: false,
                  height: "550",
                  mergetags_list: [
                    { value: "First.Name", title: "First Name" },
                    { value: "Email", title: "Email" },
                  ],
                  ai_request: (request, respondWith) =>
                  respondWith.string(() =>
                  Promise.reject("See docs to implement AI Assistant"),
                  ),
                }}
                onEditorChange={setOrg}
              />
            </div>

            <div className="flex">
              <div className="ml-auto">
                <Flowbite theme={{ theme: customButtonTheme }}>
                  <Button color="dark-gray" size="lg" type="submit">
                    Simpan
                  </Button>
                </Flowbite>
              </div>
            </div>
        </div>
      </form>
    </main>
  );
};

export default AdminLearning;
