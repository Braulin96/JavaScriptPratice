import React, { useState } from "react";
import BlackListener from "../assets/blackListener.png";
import Escutador from "../assets/escutador.png";
import Mobile from "../assets/mobile.png";

const arrayTest = [
  {
    title: "Image 1",
    description: "description for Image 1",
    Image: BlackListener,
  },
  {
    title: "Image 2",
    description: "description for Image 2",
    Image: Escutador,
  },
  {
    title: "Image 3",
    description: "description for Image 3",
    Image: Mobile,
  },
];

const Position = () => {
  const [infoIndex, setInfoIndex] = useState(0); 

  const handleChange = (index) => {
    setInfoIndex(index); // Set infoIndex to the clicked index
    console.log("infoIndex:", index);
  };
  

  return (
    <>
      <div className="flex p-20 text-center">
        <div className="bg-green-200 flex items-center justify-center rounded-2xl w-[300px] aspect-square">
          <ul className="space-y-5">
            {arrayTest.map((item, index) => (
              <li
                key={index}
                onClick={() => handleChange(index)} // Pass the index to handleChange
                className={`focus:text-red-400 ${
                    infoIndex === index ? "text-red-400" : ""
                  }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-green-400 w-[600px] rounded-2xl">
            {arrayTest[infoIndex].description}
        </div>
      </div>
    </>
  );
};
export default Position;


{
  /* 
<div className="p-20 flex">
        <div className="container relative p-5 bg-white w-[300px] aspect-square rounded-2xl space-y-5 overflow-scroll">
          <div className="circle bg-blue-500 w-[400px] aspect-square bottom-2 blur-2xl absolute py-10 text-center rounded-full opacity-20 "></div>
        </div>
      </div>
 <p>Position</p>

          <p>
            As plataformas digitais da RTP utilizam cookies próprios e de
            terceiros (Fornecedores) para melhorar o respetivo desempenho e a
            experiência do utilizador, melhorar a segurança, evitar fraudes e
            corrigir erros, armazenando e/ou acedendo a informações no seu
            dispositivo, e também processando dados pessoais (em detalhe
            consultar "Política de Cookies" da RTP).
          </p>
*/
}
