import { Heart } from "lucide-react";

export function LikeToggle() {
  let likedStatus = false;

  const handleClick = () => {
    likedStatus = !likedStatus;
  };

  return (
    <button className="group" onClick={handleClick}>
      <Heart
        className={
          likedStatus
            ? "fill-pink-500 stroke-none"
            : "stroke-slate-200 group-hover:stroke-slate-300"
        }
      />
    </button>
  );
}
