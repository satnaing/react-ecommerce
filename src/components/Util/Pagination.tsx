import { FC } from "react";
import NextArrow from "../../assets/icons/NextArrow";
import PrevArrow from "../../assets/icons/PrevArrow";

type Props = {
  totalPosts: number;
  postPerPage: number;
  handlePage: (number: number) => void;
  activePage: number;
  handleNext: (number: number) => void;
  handlePrev: () => void;
};

const Pagination: FC<Props> = ({
  totalPosts,
  postPerPage,
  handlePage,
  activePage,
  handleNext,
  handlePrev,
}) => {
  // const [haha, setHAHA] = useState(false);
  let midPageNumbers = false;
  let startPageNumbers = false;
  let endPageNumbers = false;
  let pageNumbers: number[] = [];
  let numOfPagniation = Math.ceil(totalPosts / postPerPage);

  for (let i = 1; i <= numOfPagniation; i++) {
    pageNumbers = [...pageNumbers, i];
  }

  if (activePage <= 2) {
    pageNumbers = [1, 2, 3];
    startPageNumbers = true;
    midPageNumbers = false;
    endPageNumbers = false;
  } else if (activePage >= numOfPagniation - 1) {
    pageNumbers = [numOfPagniation - 2, numOfPagniation - 1, numOfPagniation];
    endPageNumbers = true;
    midPageNumbers = false;
    startPageNumbers = false;
  } else {
    pageNumbers = [activePage - 1, activePage, activePage + 1];
    midPageNumbers = true;
    startPageNumbers = false;
    endPageNumbers = false;
  }

  // if (activePage >= numOfPagniation - 2) {
  //   pageNumbers = [numOfPagniation - 2, numOfPagniation - 1, numOfPagniation];
  // } else {
  //   pageNumbers = [activePage - 1, activePage, activePage + 1];
  // }

  return (
    <div className="w-full">
      <ul className="flex justify-center">
        <button
          onClick={handlePrev}
          className={`${
            activePage === 1
              ? "pointer-events-none cursor-not-allowed text-gray400"
              : "cursor-pointer"
          } focus:outline-none flex justify-center items-center h-10 w-16 px-3 border mx-1 hover:bg-gray500 hover:text-gray100`}
        >
          <PrevArrow />
        </button>
        {(midPageNumbers || endPageNumbers) && (
          <span className="flex items-end text-3xl">...</span>
        )}
        {/* {endPageNumbers && <span className="flex items-end text-3xl">...</span>} */}
        {pageNumbers.map((num) => {
          return (
            <li key={num} className="">
              <button
                onClick={() => handlePage(num)}
                className={`${
                  num === activePage && "bg-gray500 text-gray100"
                } focus:outline-none cursor-pointer flex justify-center items-center w-10 h-10 border mx-1 hover:bg-gray500 hover:text-gray100`}
              >
                {num}
              </button>
            </li>
          );
        })}
        {(midPageNumbers || startPageNumbers) && (
          <span className="flex items-end text-3xl">...</span>
        )}
        <button
          onClick={() => handleNext(numOfPagniation)}
          className={`${
            activePage === numOfPagniation
              ? "pointer-events-none cursor-not-allowed text-gray400"
              : "cursor-pointer"
          } focus:outline-none flex justify-center items-center h-10 w-16 px-3 border mx-1 hover:bg-gray500 hover:text-gray100`}
        >
          <NextArrow />
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
