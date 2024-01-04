import PhotoBox from "../../components/PhotoBox";
import NewsCard from "../../components/NewsCard";
import React from "react";
import Notice from "../../components/Notice";
import { useState, useEffect} from "react";

import { Button, Flowbite, Spinner } from "flowbite-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";
import { Carousel} from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {

  const [bHeadImg, setbHeadImg] = useState('');
  const [kImg, setKimg] = useState('');
  const [description, setDescription] = useState('');
  const [msg, setMsg] = useState('');

  const [home, setHome] = useState([])
  const [news, setNews] = useState([])
  const [notice, setNotice] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homeResponse = await axios.get("http://localhost:8080");
        setHome(homeResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
    
    
    axios.get('http://localhost:8080/berita')
      .then(res => setNews(res.data))
      .catch(err => console.log(err));
    
    axios.get('http://localhost:8080/pengumuman')
      .then(res => setNotice(res.data))
      .catch(err => console.log(err));
  }, [])
 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('bHeadImg', bHeadImg);
    formData.append('kImg', kImg);
    formData.append('description', description);

    try {
      const response = await axios.post('http://localhost:8080/admin/beranda', formData);

      console.log(response.data);

      if (response.data.Status === 'Success') {
        navigate('/');
        setMsg('File Successfully Uploaded');
      } else {
        setMsg('Error');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      setMsg('Error');
    }
  };

  

  if (home.isLoading)
    return (
      <main className="flex h-screen items-center justify-center">
        <div>
          <Spinner size="xl" />
        </div>
      </main>
    );

  return (
    <main className="form p-6 font-poppins" >

      <form onSubmit={handleSubmit}>
        <div>
          <h1 className="mb-8 block text-4xl font-semibold">Halaman Beranda</h1>
            <Carousel
            className="mb-4 h-[76px] w-full overflow-hidden md:h-[153px] lg:h-[306px] xl:h-[408px]">
              {
              home.map((homeItem) =>
                <div key={homeItem.ID}>
                  <img src={`http://localhost:8080/${homeItem.bHeadImg}`} alt="" />
                </div>
                )
              }
            </Carousel>

          <p className="flex items-center gap-4 font-medium text-blue-800 hover:cursor-pointer">
            {<PlusIcon className="h-6 w-6" />} Tambahkan Gambar
            <input
              type="file"
              name="bHeadImg"
            onChange={(e) => setbHeadImg(e.target.files[0])}/>
          </p>
        </div>
          
       
        <div className="space-y-32">
          <div className="max-w-7xl space-y-32 px-12 pt-12 lg:mx-auto">
            <div>
              <div className="mb-4 grid grid-cols-[250px_1fr] grid-rows-[250px] gap-8 xl:grid-cols-[1fr_2fr]">
                <PhotoBox  
                    styles="text-white xl:text-3xl text-xl flex items-center justify-center"
                >
                  {
                  home.map((homeItem) =>
                    <div key={homeItem.ID}>
                      <img src={`http://localhost:8080/${homeItem.kImg}`} alt="" />
                    </div>
                    )
                  }
                  <input className="text-black xl:text-sm text-sm flex items-center justify-center"
                    type="file"
                    onChange={(e) => setKimg(e.target.files[0])}
                    name="kImg"/>
                </PhotoBox>
                <div className="h-full w-full">
                  <input
                    className="h-full w-full resize-none rounded-xl focus:border-main-blue"
                    placeholder="Sambutan Selamat Datang"
                    onChange={(e) => setDescription(e.target.value)}
                    name="description"
                    type="text"
                  ></input>
                </div>
              </div>

              <div className="flex">
                <div className="ml-auto">
                  <Flowbite theme={{ theme: customButtonTheme }}>
                  <Button color="dark-gray" size="lg"
                    type="submit"
                    >
                      Simpan
                      <h1 style={{ fontSize: '15px', textAlign: 'center', marginTop: '20px' }}>{msg}</h1>
                    </Button>
                    
                  </Flowbite>
                </div>
              </div>
            </div>
  

            <div>
              <div className="mb-24 flex h-14 flex-col justify-between gap-4 sm:mb-10 sm:flex-row">
                <h2 className="flex flex-col justify-between text-3xl font-bold">
                  Berita
                  <span className="hid text-sm font-normal text-gray-500 sm:text-base">
                    Berita dan informasi terbaru
                  </span>
                </h2>
                <Flowbite theme={{ theme: customButtonTheme }}>
                  <Button color="dark-gray" size="lg">
                    Lihat Semua
                  </Button>
                </Flowbite>
              </div>

              <div className="mx-auto flex flex-col items-center gap-6 md:grid md:grid-cols-2 xl:grid-cols-4">
                {news.map((news, i) => (
                  <NewsCard
                    key={i}
                    title={news.head}
                    subtitle={news.subHead}
                    imgSrc={news.headImg}
                    imgAlt='Loading...'
                  />
                ))}
              </div>
            </div>

            <div className="!mb-40">
              <div className="mb-24 flex h-14 flex-col justify-between gap-4 sm:mb-10 sm:flex-row">
                <h2 className="flex flex-col justify-between text-3xl font-bold">
                  Pengumuman
                  <span className="hid text-sm font-normal text-gray-500 sm:text-base">
                    Pengumuman dan informasi terbaru
                  </span>
                </h2>
                <Flowbite theme={{ theme: customButtonTheme }}>
                  <Button color="dark-gray" size="lg">
                    Lihat Semua
                  </Button>
                </Flowbite>
              </div>

              <div className="divide-y divide-solid divide-gray-400">
                {
                notice.map((notice, i) => (
                  <Notice
                    key={i}
                    title={notice.headNotice}
                    date={notice.date}
                    subtitle={notice.descNotice}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default AdminHome;
