import logo1 from "../../assets/MegaMart.svg";
import logo2 from "../../assets/Group 2.svg";
import {
  List,
  MapPin,
  Percent,
  Search,
  ShoppingCart,
  Truck,
  User,
} from "react-feather";
import NavItem from "../NavItem";
import { useEffect, useState } from "react";

const menuData = [
  {
    title: "Mantimentos",
    subItems: ["Option 1", "Option 2", "Option 3"],
  },
  {
    title: "Frutas",
    subItems: ["maçã", "banana", "laranja"],
  },
  {
    title: "Sala & Cozinha",
    subItems: ["Option 1", "Option 2", "Option 3"],
  },
  {
    title: "Moda",
    subItems: ["Option 1", "Option 2", "Option 3"],
  },
  {
    title: "Eletronicos",
    subItems: ["Option 1", "Option 2", "Option 3"],
  },
  {
    title: "Beleza",
    subItems: ["Option 1", "Option 2", "Option 3"],
  },
  {
    title: "Melhorias da Casa",
    subItems: ["Option 1", "Option 2", "Option 3"],
  },
  {
    title: "Esportes, brinquedos e bagagem",
    subItems: ["Option 1", "Option 2", "Option 3"],
  },
  // Adicione mais itens conforme necessário
];

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [menuHamburguer, setMenuHamburguer] = useState(false);
  const [iconSize, setIconSize] = useState(40);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 920) {
        setMenuHamburguer(true);
      } else {
        setMenuHamburguer(false);
      }

      if (window.innerWidth <= 500) {
        setIconSize(25);
      } else {
        setIconSize(40);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isNavOpen) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavOpen]);

  const closeNavBar = () => {
    setIsNavOpen(false);
  };
  return (
    <>
      {menuHamburguer ? (
        <header>
          <div
            className={`flex bg-gray_header justify-between items-center px-5 pt-5 pb-3 animate-fade animate-once animate-ease-in animate-delay-150 mb-4
        ${isNavOpen ? "showMenu " : ""}
      `}
          >
            <nav>
              <section className="MOBILE-MENU flex lg:hidden">
                <div
                  className="HAMBURGER-ICON space-y-2 bg-gray p-3 rounded-2xl"
                  onClick={() => setIsNavOpen((prev) => !prev)}
                >
                  <span className="block h-0.5 w-8 bg-blue"></span>
                  <span className="block  h-0.5 w-6 bg-blue"></span>
                  <span className="block  h-0.5 w-4 bg-blue"></span>
                </div>

                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                  <div
                    className="CROSS-ICON absolute top-0 right-0 pl-8 pb-8 pr-3 pt-6"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <svg
                      className="h-8 w-8 text-blue"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center min-h-[250px] text-black px-1">
                    {menuData.map((item, index) => (
                      <NavItem
                        title={item.title}
                        options={item.subItems}
                        hamburguer={true}
                        key={index}
                        closeNavBar={closeNavBar}
                      />
                    ))}
                  </ul>
                  <div
                    className="overlay"
                    onClick={() => setIsNavOpen(false)}
                  ></div>
                  <style>{`
            .hideMenuNav {
              display: none;
              
            }
            .showMenuNav {
              display: block;
              position: absolute;
              width: 70%;
              height: 100vh;
              top: 0;
              right:30%;
              background: #ffffff;
              z-index: 10;
              display: flex;
              flex-direction: column;
              //justify-content: start;
              padding-top: 70px;
              //align-items: center;
              text-align:start;
              
            }



            .overlay {
              position: fixed;
              top: 0;
              left: 70%; /* metade da tela */
              width: 100%; /* metade da tela */
              height: 100%;
              background-color: rgba(124, 124, 124, 0.5); /* cor cinza com 50% de opacidade */
              z-index: 5;
            }
            
            @media (max-width: 550px) {
              .showMenuNav {
                width: 90%;
                right:10%;
              }
              
              .overlay {
                left: 90%; 
              }
            }

            .submenu {
              width: 100%;
              padding: 10px 0px 10px 10px;
             

            }
            
            .submenu li {
              list-style-type: none;
              padding: 5px 0;
              cursor: pointer;
              
            }
            
          `}</style>
                </div>
              </section>
            </nav>

            <img src={logo1} alt="" className="w-40 max-2sm:w-32" />

            <div className="flex items-center font-bold gap-5 max-2sm:gap-2">
              <User color="#008ECC" size={iconSize} />
              <ShoppingCart color="#008ECC" size={iconSize} />
            </div>
          </div>
          <div className="flex justify-between items-center bg-gray px-4 py-4 gap-4 text-lg w-full">
            <input
              type="text"
              name="inputSearch"
              id="inputSearch"
              className="w-full bg-gray focus:outline-none "
              placeholder="O que você está procurando?"
            />
            <label htmlFor="inputSearch">
              <Search color="#008ECC" size={26} />
            </label>
          </div>
        </header>
      ) : (
        <header className="mb-8">
          <div className="flex justify-between py-3 px-10 font-light text-sm bg-colorBgHeaderUp text-colorText">
            <p>Bem-vindo ao Megamart mundial!</p>
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <MapPin color="#008ECC" size={15} />
                <p>
                  Entregar para <span className="font-bold">423651</span>
                </p>
              </div>
              <span>|</span>
              <div className="flex items-center gap-2">
                <Truck color="#008ECC" size={15} />
                <p>Acompanhe seu pedido</p>
              </div>
              <span>|</span>
              <div className="flex items-center gap-2">
                <Percent color="#008ECC" size={15} />
                <p>Todas as Ofertas</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between mx-10 my-5 text-colorText">
            <div className="flex items-center gap-4">
              <img src={logo2} alt="" className="w-10" />
              <img src={logo1} alt="" />
            </div>

            <div className="flex gap-10">
              <div className="flex justify-between items-center bg-gray rounded-lg px-2 gap-4 text-sm w-98 max-2lg:w-80">
                <label htmlFor="inputSearch">
                  <Search color="#008ECC" />
                </label>
                <input
                  type="text"
                  name="inputSearch"
                  id="inputSearch"
                  className="w-full bg-gray focus:outline-none "
                  placeholder="Pesquise itens essenciais, mantimentos e muito mais..."
                />
                <List color="#008ECC" />
              </div>
              <div className="flex items-center font-bold gap-4">
                <div className="flex items-center gap-2">
                  <User color="#008ECC" />
                  <a href="#">Sign Up/Sign In</a>
                </div>
                <span className="text-neutral-400 font-extralight">|</span>
                <div className="flex items-center gap-2">
                  <ShoppingCart color="#008ECC" />
                  <a href="#">Carrinho</a>
                </div>
              </div>
            </div>
          </div>

          <nav className="flex justify-center gap-4 flex-wrap items-baseline border-b-2 border-t-2 py-4 border-gray">
            {menuData.map((item, index) => (
              <NavItem
                title={item.title}
                options={item.subItems}
                hamburguer={false}
                key={index}
              />
            ))}
          </nav>
        </header>
      )}
    </>
  );
}
