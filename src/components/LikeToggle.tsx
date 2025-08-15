import { Heart } from "lucide-react";
import { useState } from "react";

export function LikeToggle({
  liked,
  setLiked,
  puppyId,
}: {
  liked: number[];
  setLiked: Dispatch<SetStateAction<number[]>>;
  puppyId: number;
}) {
  const isLiked = liked.includes(puppyId);

  const handleClick = () => {
    setLiked((prevLiked) =>
      isLiked
        ? prevLiked.filter((id) => id !== puppyId)
        : [...prevLiked, puppyId],
    );
  };

  return (
    <button className="group flex items-center gap-1" onClick={handleClick}>
      <Heart
        className={
          isLiked
            ? "fill-pink-500 stroke-none"
            : "stroke-slate-200 group-hover:stroke-slate-300"
        }
      />
    </button>
  );
}
