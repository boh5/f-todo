"use client";

export default function Overlay({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="fixed top-0 left-0 m-0 w-full h-full bg-gray-400 bg-opacity-10 z-10"
    ></div>
  );
}
