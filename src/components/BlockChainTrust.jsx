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
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex flex-col gap-8">
            <h2>Blockchain You <br /> Can Trust</h2>
            <p>
              Major financial institutions—including some of the world’s <br /> biggest
              exchanges, market makers, and trading firms—publish <br /> their data
              directly to the network.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <img className="w-[160px]" src={akuna} alt="" />
            <img className="w-[160px]" src={binance} alt="" />
            <img className="w-[160px]" src={cboe} alt="" />
            <img className="w-[160px]" src={jane} alt="" />
            <img className="w-[160px]" src={okx} alt="" />
            <img className="w-[160px]" src={optiver} alt="" />
            <img className="w-[160px]" src={twosigma} alt="" />
            <img className="w-[160px]" src={wintermute} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlockChainTrust;
