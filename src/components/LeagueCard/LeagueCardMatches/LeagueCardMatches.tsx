import clockImg from "../../../assets/images/clock.jpg";
import esteghlalLogo from "../../../assets/images/esteghlal.png";
import sepahanLogo from "../../../assets/images/sepahan.png";

interface Props {
  isOpen: boolean;
}

const LeagueCardMatches = (props: Props) => {
  return (
    <div>
      <div
        className={`${
          props.isOpen ? "flex justify-between items-center" : "hidden"
        }  rounded-b-md mt-[2px] bg-white py-4 flex justify-between items-center px-4 text-xs md:text-base`}
      >
        <div className="md:flex hidden">
          <img src={clockImg} className="max-w-[24px]" alt="" />
          <p className="mx-2">League</p>
        </div>

        <div className="flex flex-1 justify-center">
          <div className="flex-1 justify-end flex items-center ml-2">
            <p>استقلال</p>
            <img src={esteghlalLogo} className="w-8 h-8 mr-1" alt="" />
          </div>
          <p className="mt-2">{"34" + " : " + "12"}</p>
          <div className="flex-1 flex  items-center mr-2">
            <img src={sepahanLogo} className="w-8 h-8 ml-2" alt="" />
            <p>سپاهان</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueCardMatches;
