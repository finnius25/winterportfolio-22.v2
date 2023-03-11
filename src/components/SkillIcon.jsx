import React from "react";

function SkillIcon({ src, title }) {
  return (
    <div className="flex gap-1">
      <div className="font-bold text-sm">{title}</div>
      <img src={src} alt={src} className="object-contain w-5 h-5" />
    </div>
  );
}

export default SkillIcon;
