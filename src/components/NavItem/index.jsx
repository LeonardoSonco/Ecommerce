import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";

export default function NavItem({ title, options, hamburguer, closeNavBar }) {
  const [showOptions, setShowOptions] = useState({});
  const [isAPISubmenuOpen, setIsAPISubmenuOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Fecha todas as opções quando clicar fora delas
      if (!event.target.closest(".nav-item")) {
        setShowOptions({});
      }
    };

    // Adiciona um ouvinte de evento ao corpo da página
    document.body.addEventListener("click", handleClickOutside);

    // Remove o ouvinte de evento quando o componente é desmontado
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleOptions = (clickedTitle) => {
    //usado para abrir as opções do nav
    setShowOptions((prevState) => {
      const newState = {};
      // Define o estado da opção clicada para o oposto do estado atual
      newState[clickedTitle] = !prevState[clickedTitle];
      // Define o estado de todas as outras opções para false
      Object.keys(prevState).forEach((option) => {
        if (option !== clickedTitle) {
          newState[option] = false;
        }
      });
      return newState;
    });
  };

  const handleOptionClick = (e) => {
    e.stopPropagation(); // Impede a propagação do evento de clique para o contêiner pai
    setShowOptions({}); // Fecha todas as opções
  };

  const handleCloseNavBar = () => {
    closeNavBar();
  };


  return (
    <>
      {hamburguer ? (
        <li
          className="border-b border-gray my-5  uppercase cursor-pointer font-bold w-full pr-2 "
          onClick={() => setIsAPISubmenuOpen(!isAPISubmenuOpen)}
        >
          <div className="flex justify-between px-2">
            <p className="text-black">{title}</p>
            {isAPISubmenuOpen ? (
              <ChevronUp color="#008ECC" />
            ) : (
              <ChevronDown color="#008ECC" />
            )}{" "}
          </div>

          {isAPISubmenuOpen && (
            <ul className="submenu text-sm font-medium">
              {options.map((item, index) => (
                <li className="" key={index} onClick={handleCloseNavBar}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </li>
      ) : (
        <div className="nav-item">
          <div
            className="flex flex-col items-end gap-2 bg-gray rounded-3xl py-2 px-4"
            onClick={() => toggleOptions(title)}
          >
            <div className="flex gap-2">
              <p>{title}</p>
              <ChevronDown color="#008ECC" />
            </div>

            {showOptions[title] && (
              <div className=" flex flex-col w-full items-end ">
                {options.map((option, index) => (
                  <p
                    key={index}
                    className="hover:border-2 cursor-pointer w-full "
                    onClick={handleOptionClick}
                  >
                    {option}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
