import { Button, Flowbite } from "flowbite-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";
import { Editor } from "@tinymce/tinymce-react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function stripTags(html) {
  return html.replace(/<\/?[^>]+(>|$)/g, "");
}

const AdminProfile = () => {
  const [kataPen, setKataPen] = useState('');
  const [visimisi, setVisimisi] = useState('');
  const [struktur, setStruktur] = useState('');
  const [msg, setMsg] = useState('');
  const [selectedProfilId, setSelectedProfilId] = useState(null); 

  const navigate = useNavigate();

  const [profil, setProfil] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const profilResponse = await axios.get("http://localhost:8080/profil/");
        setProfil(profilResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  const handleEditProfil = (selectedProfil) => {
    setSelectedProfilId(selectedProfil.ID);
    setKataPen(selectedProfil.kataPen);
    setVisimisi(selectedProfil.visimisi);
    setStruktur(selectedProfil.struktur);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('kataPen', kataPen);
    formData.append('visimisi', visimisi);
    formData.append('struktur', struktur);

    try {
      let response;

      if (selectedProfilId) {
        response = await axios.put(`http://localhost:8080/admin/profil/${selectedProfilId}`, formData);
      } else {
        response = await axios.post('http://localhost:8080/admin/profil', formData);
      }

      if (response.data.Status === 'Success') {
        navigate('/admin/profil');
        setMsg('File Successfully Uploaded');
        setKataPen('');
        setVisimisi('');
        setStruktur('');
        setSelectedProfilId(null);
      } else {
        setMsg('Error');
      }
      window.location.reload();
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
            <div className="mb-5">
              {
                profil.map(introItem => (
                  <div
                    key={introItem.ID}
                    onClick={() => handleEditProfil(introItem)}>
                    <div>{stripTags(introItem.kataPen)}</div>
                  </div>
                  )
                )
              }
            </div>
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
                value={kataPen}
                onEditorChange={setKataPen}
              />
            </div>
          </div>
          <div className="h-full">
            <p className="mb-4 block font-semibold" htmlFor="rabuceria">
              Visi dan Misi
            </p>
            <div className="mb-5">
              {
                profil.map(visimisiItem => (
                  <div
                    key={visimisiItem.ID}
                    onClick={() => handleEditProfil(visimisiItem)}>
                    <div>{stripTags(visimisiItem.visimisi)}</div>
                  </div>
                  )
                )
              }
            </div>
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
                value={visimisi}
                onEditorChange={setVisimisi}
              />
            </div>
          </div>
          <div className="h-full">
            <p className="mb-4 block font-semibold" htmlFor="rabuceria">
              Struktur Organisasi
            </p>
            <div className="mb-5">
              {
                profil.map(strukturItem => (
                  <div
                    key={strukturItem.ID}
                    onClick={() => handleEditProfil(strukturItem)}>
                  <img src={`http://localhost:8080/${strukturItem.struktur}`} alt="Struktur Organisasi" />
                </div>
                )
                )
              }
            </div>
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
