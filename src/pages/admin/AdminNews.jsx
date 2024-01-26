import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Button, Flowbite, Spinner } from "flowbite-react";
import { Editor } from "@tinymce/tinymce-react";
import { Modal } from "flowbite-react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { customButtonTheme } from "../../themes/flowbiteThemes";

const AdminNews = () => {
  const [openModal, setOpenModal] = useState(false);
  const [sampul, setSampul] = useState('');
  const [judulBerita, setJudulBerita] = useState('');
  const [isiBerita, setIsiBerita] = useState('');
  const [date, setDate] = useState('');
  const [msg, setMsg] = useState('');
  const [selectedNewsId, setSelectedNewsId] = useState(null); // New state variable
  const navigate = useNavigate();

  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsResponse = await axios.get("http://localhost:8080/berita/:id");
        setNews(newsResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  const handleEditNews = (selectedNews) => {
    setSelectedNewsId(selectedNews.ID);
    setSampul(selectedNews.sampul);
    setJudulBerita(selectedNews.judulBerita);
    setIsiBerita(selectedNews.isiBerita);
    setDate(selectedNews.date);

    setOpenModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('sampul', sampul);
    formData.append('judulBerita', judulBerita);
    formData.append('isiBerita', isiBerita);
    formData.append('date', date);

    try {
      let response;

      if (selectedNewsId) {
        // Editing an existing news item
        response = await axios.put(`http://localhost:8080/admin/berita/${selectedNewsId}`, formData);
      } else {
        // Adding a new news item
        response = await axios.post('http://localhost:8080/admin/berita', formData);
      }

      if (response.data.Status === 'Success') {
        navigate('/admin/berita');
        setMsg('File Successfully Uploaded');
        // Close the modal after successful submission
        setOpenModal(false);
        // Clear the form data
        setSampul('');
        setJudulBerita('');
        setIsiBerita('');
        setDate('');
        setSelectedNewsId(null);
      } else {
        setMsg('Error');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      setMsg('Error' + error.message);
    }
  };

  if (news.isLoading)
    return (
      <main className="flex h-screen items-center justify-center">
        <div>
          <Spinner size="xl" />
        </div>
      </main>
    );

  return (
    <main className="h-screen overflow-auto px-24 py-6 font-poppins">
      <p className="mb-8 block text-4xl font-semibold">Halaman Berita</p>

      <div className="flex flex-col-reverse gap-4">
        {news.map((n) => (
          <div
            onClick={() => handleEditNews(n)}
            key={n.ID}
            className="relative h-48 w-full overflow-hidden rounded-xl"
          >
            <img
              className="h-full w-full object-cover"
              src={`http://localhost:8080/${n.sampul}`}
              alt=""
            />
            <p className="absolute bottom-5 left-5 text-3xl font-bold text-white">
              {n.judulBerita}
            </p>
          </div>
        ))}

        <div
          className="flex h-40 w-full items-center justify-center gap-4 rounded-xl border border-solid border-gray-500 text-3xl text-blue-800 hover:cursor-pointer"
          onClick={() => {
            setSelectedNewsId(null); // Reset selected news ID for adding new news
            setOpenModal(true);
          }}
        >
          <PlusIcon className="h-16 w-16" /> Tambahkan Berita
        </div>
      </div>

      <Modal
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        size="full"
      >
        <Modal.Body>
          <form className="px-8 py-2 font-poppins" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-medium">Gambar Sampul</p>
              <label className="flex h-40 w-full items-center justify-center gap-4 rounded-xl border border-solid border-gray-500 text-3xl text-blue-800 hover:cursor-pointer">
                <input
                  type="file"
                  name="sampul"
                  onChange={(e) => setSampul(e.target.files[0])}
                  accept="image/png, image/jpeg"
                  className="hidden"
                />
                <PlusIcon className="h-16 w-16" /> Tambahkan Gambar Sampul
              </label>
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="judulBerita" className="text-2xl font-medium">
                Judul Berita
              </label>
              <input
                type="text"
                name="judulBerita"
                value={judulBerita}
                onChange={(e) => setJudulBerita(e.target.value)}
                id="news title"
                className="rounded-lg border border-solid border-gray-500"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="date" className="text-2xl font-medium">
                Waktu Berita
              </label>
              <input
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                id="date"
                className="rounded-lg border border-solid border-gray-500"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="isiBerita" className="text-2xl font-medium">
                Isi Berita
              </label>
              <Editor
                name="isiBerita"
                apiKey="o0pzftir0e6adwmb92z8ig9705xxtb5i7kurqh1a3j7q41qe"
                init={{
                  plugins:
                    "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                  resize: false,
                  height: "500",
                }}
                onEditorChange={setIsiBerita}
                value={isiBerita}
              />
            </div>

            <Flowbite theme={{ theme: customButtonTheme }}>
              <Button
                color="border-semi-green"
                size="lg"
                type="submit"
              >
                Simpan
              </Button>
            </Flowbite>
          </form>
        </Modal.Body>
      </Modal>
    </main>
  );
};

export default AdminNews;
