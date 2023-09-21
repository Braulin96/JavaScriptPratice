import React from "react";
import BlackListener from "../assets/blackListener.png";
import Escutador from "../assets/escutador.png";
import Mobile from "../assets/mobile.png";

const arrayTest = [
  {
    title: "Image 1",
    Image: BlackListener,
  },
  {
    title: "Image 2",
    Image: Escutador,
  },
  {
    title: "Image 3",
    Image: Mobile,
  },
];

const Position = () => {
  return (
    <>
      <div className="flex p-20 text-center">
        <div className="bg-green-200 flex items-center justify-center rounded-2xl w-[300px] aspect-square">
          <ul>
            {arrayTest.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        </div>
        <div className="bg-green-400 w-[600px] rounded-2xl">image</div>
      </div>
      <div className="p-20 flex">
        <div className="container relative p-5 bg-white w-[300px] aspect-square rounded-2xl space-y-5 overflow-scroll">
          <p>Position</p>
          <p>
            As plataformas digitais da RTP utilizam cookies próprios e de
            terceiros (Fornecedores) para melhorar o respetivo desempenho e a
            experiência do utilizador, melhorar a segurança, evitar fraudes e
            corrigir erros, armazenando e/ou acedendo a informações no seu
            dispositivo, e também processando dados pessoais (em detalhe
            consultar "Política de Cookies" da RTP).
          </p>
          <div className="circle bg-blue-500 w-[400px] aspect-square bottom-2 blur-2xl absolute py-10 text-center rounded-full opacity-20 "></div>
        </div>
      </div>
    </>
  );
};
export default Position;
