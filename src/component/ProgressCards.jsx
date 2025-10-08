import React from "react";

const ProgressCards = ({ items }) => {
  const { title, value, note } = items;
  return (
    <div>
      <div className="rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-3xl font-bold">{value}</p>
        <p className="mt-1">{note}</p>
      </div>
    </div>
  );
};

export default ProgressCards;
