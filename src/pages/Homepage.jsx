import { useEffect, useState } from "react";
import { fetchDataPhones } from "../data/data";
import Carousel from "../components/Carousel";
import CardPhone from "../components/CardPhone";
import { ChevronRight } from "react-feather";

export default function Homepage() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getPhones() {
      try {
        const phonesData = await fetchDataPhones();
        if (phonesData) {
          const mappedPhonesData = phonesData.map((data) => ({
            id: data.id,
            name: data.name,
            image: data.image,
            imageURL: data.imageURL,
            price: data.price,
            discount: data.discount,
          }));

          setPhones(mappedPhonesData);
          setLoading(false);
        } else {
          console.error("Dados não encontrados");
        }
      } catch (error) {
        console.error("Erro ao buscar os celulares:", error);
      }
    }

    getPhones();
  }, []);

  return (
    <>
      <Carousel />
      <section id="smartphones" className="w-11/12 mx-auto mt-16">
       
        <div className="flex justify-between font-semibold text-xl border-b-2 border-gray items-center">
          <p className="text-colorText border-b-2 border-blue pb-5">
            Grab the best deal on <span className="text-blue">Smartphones</span>
          </p>
          <div className="flex gap-2 items-center pb-5">
            <p className="text-colorText text-base">View All</p>
            <ChevronRight color="#008ECC" size={20} />
          </div>
        </div>

        <div className="flex gap-6 justify-center flex-wrap my-5">
          {loading ? ( // Verifica se os dados estão sendo carregados
            <p>Carregando...</p>
          ) : (
            <>
              {phones.slice(0, 5).map((item) => (
                <CardPhone key={item.id} phone={item} />
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
}
