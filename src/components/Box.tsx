import { useData } from "./../contexts/DataContext";

const Box = ({ num, int }: any) => {
  const { opened, setOpened, status, setStatus, searchNum }: any = useData();
  const include = opened.includes(num);

  return (
    <div
      className={`box ${status !== 0 && num === searchNum ? "pnum" : ""} ${
        include ? "open" : ""
      }`}
      onClick={() => {
        if (status !== 0) return;
        if (searchNum === num) setStatus(1);
        if (opened.length < 49) {
          if (!include) {
            setOpened((prev: any) => [...prev, num]);
          }
        } else {
          setStatus(2);
        }
      }}
    >
      <div className="int">{int}</div>
      {include && <div className="num">{num}</div>}
    </div>
  );
};

export default Box;
