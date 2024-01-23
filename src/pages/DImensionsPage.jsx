import { Spinner } from "flowbite-react";
import React, { useState, useEffect } from "react";
import axios from "axios";

function stripTags(html) {
  return html.replace(/<\/?[^>]+(>|$)/g, "");
}

const DimensionsPage = () => {
  const [dikmensi, setDikmensi] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dikmensiResponse = await axios.get("http://localhost:8080/dikmensi");
        setDikmensi(dikmensiResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  if (dikmensi.isLoading)
    return (
      <main className="flex h-screen items-center justify-center">
        <div>
          <Spinner size="xl" />
        </div>
      </main>
    );  
  return (
    <main className="font-poppins">
      <div className="bg-main-gray">
        <div className="mx-auto flex h-96 max-w-7xl flex-col items-start justify-center gap-4 px-4 lg:px-6">
          <h1 className="text-4xl font-semibold uppercase lg:text-6xl">
            dikmensi
          </h1>
          <p className="text-lg lg:text-xl">Beranda - Dikmensi</p>
        </div>
      </div>

      <div className="mx-auto my-12 max-w-7xl px-4 lg:px-6">
        <article className="leading-6">
          {
            dikmensi.map((dikmensiItem, id) => (
              <div key={id}>
                  {stripTags(dikmensiItem.isiDikmensi)}
              </div>
              )
            )
          }
        </article>
      </div>
    </main>
  );
};

export default DimensionsPage;
