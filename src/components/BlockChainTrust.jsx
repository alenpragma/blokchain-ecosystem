import React from "react";
import Container from "./shared/Container";
import akuna from '../assets/icon/share/akuna.svg';
import binance from '../assets/icon/share/binance.svg';
import cboe from '../assets/icon/share/cboe.svg';
import jane from '../assets/icon/share/jane.svg';
import okx from '../assets/icon/share/okx.svg';
import optiver from '../assets/icon/share/optiver.svg';
import twosigma from '../assets/icon/share/twosigma.svg';
import wintermute from '../assets/icon/share/wintermute.svg';

const BlockChainTrust = () => {
  return (
    <div className="w-full bg-[#F3F3F3] px-5 py-20">
      <Container>
        <div className="w-full grid grid-cols-12 gap-10">
          <div className="flex flex-col gap-8  md:col-span-6 col-span-12">
            <h2>Blockchain You <br /> Can Trust</h2>
            <p>
              Major financial institutions—including some of the world’s <br /> biggest
              exchanges, market makers, and trading firms—publish <br /> their data
              directly to the network.
            </p>
          </div>
          <div className="gap-8 md:col-span-6 col-span-12 grid grid-cols-12 gap-5">
            <img className="w-[160px] col-span-3" src={akuna} alt="" />
            <img className="w-[160px] col-span-3" src={binance} alt="" />
            <img className="w-[160px] col-span-3" src={cboe} alt="" />
            <img className="w-[160px] col-span-3" src={jane} alt="" />
            <img className="w-[160px] col-span-3" src={okx} alt="" />
            <img className="w-[160px] col-span-3" src={optiver} alt="" />
            <img className="w-[160px] col-span-3" src={twosigma} alt="" />
            <img className="w-[160px] col-span-3" src={wintermute} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlockChainTrust;
