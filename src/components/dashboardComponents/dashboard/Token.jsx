const Token = () => {
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-400">
            <th className="text-[14px] font-normal p-5">Token</th>
            <th className="text-[14px] font-normal p-5">Portfolio %</th>
            <th className="text-[14px] font-normal p-5">Price(24H)</th>
            <th className="text-[14px] font-normal p-5">Balance</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="text-center border-b border-slate-500">
            <td className="p-5">MindChain</td>
            <td className="p-5">Mind $20</td>
            <td className="p-5">$ 20</td>
            <td className="p-5">220</td>
          </tr>
          <tr className="text-center  border-b border-slate-500">
            <td className="p-5">MindChain</td>
            <td className="p-5">Mind $20</td>
            <td className="p-5">$ 20</td>
            <td className="p-5">220</td>
          </tr>
          <tr className="text-center border-b border-slate-500">
            <td className="p-5">MindChain</td>
            <td className="p-5">Mind $20</td>
            <td className="p-5">$ 20</td>
            <td className="p-5">220</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Token;
