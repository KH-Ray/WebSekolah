import { Spinner } from "flowbite-react";
import React, { useState, useEffect } from "react";
import axios from "axios";

function stripTags(html) {
  return html.replace(/<\/?[^>]+(>|$)/g, "");
}

const RabuCeria = () => {
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

  if (rabuceria.isLoading)
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
            rabu ceria
          </h1>
          <p className="text-lg lg:text-xl">Beranda - Rabu Ceria</p>
        </div>
      </div>

      <div className="mx-auto my-12 max-w-7xl px-4 lg:px-6">
        {
          rabuceria.map(rabuceriaItem => (
            <div key={rabuceriaItem.ID}>
              <article className="leading-6 mt-5">
                {stripTags(rabuceriaItem.description)}
              </article>
            </div>
            )
          )
        }
        
      </div>
    </main>
  );
};

export default RabuCeria;
