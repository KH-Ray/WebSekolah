import { Button, Flowbite } from "flowbite-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";
import { Editor } from "@tinymce/tinymce-react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
  const [kataPen, setKataPen] = useState('');
  const [visimisi, setVisimisi] = useState('');
  const [struktur, setStruktur] = useState('');
  const [msg, setMsg] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('kataPen', kataPen);
    formData.append('visimisi', visimisi);
    formData.append('struktur', struktur);

    try {
      const response = await axios.post('http://localhost:8080/admin/profil', formData);

      console.log(response.data);

      if (response.data.Status === 'Success') {
        navigate('/profile');
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
    <main className="h-screen overflow-auto p-12 font-poppins">
      <h1 className="mb-8 block text-4xl font-semibold">
        Halaman Profil Sekolah
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex h-full flex-col gap-2">
          <div className="h-full">
            <p className="mb-4 block font-semibold" htmlFor="rabuceria">
              Kata Pengantar
            </p>
            <div className="mb-8">
              <Editor
                textareaName="kataPen"
                apiKey="o0pzftir0e6adwmb92z8ig9705xxtb5i7kurqh1a3j7q41qe"
                init={{
                  plugins:
                    "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                  resize: false,
                  height: "500",
                }}
                // initialValue={setKataPen}
                onEditorChange={setKataPen}
              />
            </div>
          </div>
          <div className="h-full">
            <p className="mb-4 block font-semibold" htmlFor="rabuceria">
              Visi dan Misi
            </p>
            <div className="mb-8">
              <Editor
                textareaName="visimisi"
                apiKey="o0pzftir0e6adwmb92z8ig9705xxtb5i7kurqh1a3j7q41qe"
                init={{
                  plugins:
                    "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                  resize: false,
                  height: "500",
                }}
                // initialValue={setKataPen}
                onEditorChange={setVisimisi}
              />
            </div>
          </div>
          <div className="h-full">
            <p className="mb-4 block font-semibold" htmlFor="rabuceria">
              Struktur Organisasi
            </p>
            <div className="mb-8">
              <div className="flex h-96 w-full items-center justify-center rounded-lg border-2 border-solid border-gray-200/75 hover:cursor-pointer">
                <p className="flex items-center gap-4 text-3xl font-medium text-blue-800">
                  {<PlusIcon className="h-6 w-6" />} Tambahkan Gambar
                  <input
                  type="file"
                  name="struktur"
                  onChange={(e) => setStruktur(e.target.files[0])} />
                </p>
              </div>
            </div>
          </div>

          <div className="ml-auto pb-6">
            <Flowbite theme={{ theme: customButtonTheme }}>
              <Button color="border-semi-green-fixedWidth" size="lg" type="submit">
                Simpan
              </Button>
            </Flowbite>
          </div>
        </div>
      </form>
    </main>
  );
};

export default AdminProfile;
