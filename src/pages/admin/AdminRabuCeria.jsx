import { Button, Flowbite } from "flowbite-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";
import { Editor } from "@tinymce/tinymce-react";
import { useState, useEffect } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function stripTags(html) {
  return html.replace(/<\/?[^>]+(>|$)/g, "");
}

const AdminRabuCeria = () => {
  const [description, setDescription] = useState('');
  const [msg, setMsg] = useState('');
  const [selectedRabuceriaId, setSelectedRabuceriaId] = useState(null); 

  const navigate = useNavigate();

  const [rabuceria, setRabuceria] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const racerResponse = await axios.get("http://localhost:8080/rabuceria");
        setRabuceria(racerResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  const handleEditRabuceria = (selectedRabuceria) => {
    setSelectedRabuceriaId(selectedRabuceria.ID);
    setDescription(selectedRabuceria.description);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('description', description);

    try {
      let response;

      if (selectedRabuceriaId) {
        response = await axios.put(`http://localhost:8080/admin/rabuceria/${selectedRabuceriaId}`, formData);
      } else {
        response = await axios.post('http://localhost:8080/admin/rabuceria', formData);
      }

      if (response.data.Status === 'Success') {
        navigate('/admin/rabuceria');
        setMsg('File Successfully Uploaded');
        setDescription('');
        setSelectedRabuceriaId(null);
      } else {
        setMsg('Error');
      }
      window.location.reload();
    } catch (error) {
      console.error('Error submitting data:', error);
      setMsg('Error' + error.message);
    }
  };

  // const handleEditorChange = (content, editor) => {
  //   const currentCursorPosition = editor.selection.getCursor(content);
  //   setDescription(content);
  //   setTimeout(() => {
  //     editor.selection.setCursorLocation(currentCursorPosition);
  //   }, 100);
  // };

  return (
    <main className="h-screen p-12 font-poppins">
      <form onSubmit={handleSubmit}>
        <div className="h-full">
          <h1 className="mb-8 block text-4xl font-semibold" htmlFor="rabuceria">
            Halaman Rabu Ceria
          </h1>
          <article className="leading-6 mb-5">
            {
              rabuceria.map(rabuceriaItem => (
                <div
                  key={rabuceriaItem.ID}
                  onClick={() => handleEditRabuceria(rabuceriaItem)}>
                    {stripTags(rabuceriaItem.description)}
                </div>
                )
              )
            }
          </article>
          <div className="mb-6">
            <Editor
              value={description}
              textareaName="description"
              apiKey="o0pzftir0e6adwmb92z8ig9705xxtb5i7kurqh1a3j7q41qe"
              init={{
                plugins:
                  "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                resize: false,
                height: "500",
              }}
              onEditorChange={setDescription}
            />
          </div>

          <div className="flex">
            <div className="ml-auto">
              <Flowbite theme={{ theme: customButtonTheme }}>
                <Button color="border-semi-green-fixedWidth" size="lg" type="submit">
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

export default AdminRabuCeria;
