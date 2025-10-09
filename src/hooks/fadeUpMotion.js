// Bangla: শুরুতে নিচে এবং অদৃশ্য থাকে, scroll করলে উপরে উঠে দৃশ্যমান হয়
export const fadeUp = {
  hidden: { opacity: 0, y: 40 }, // নিচে এবং অদৃশ্য
  visible: {
    opacity: 1, // দৃশ্যমান
    y: 0, // মূল অবস্থানে ফিরে আসে
    transition: {
      duration: 0.6, // অ্যানিমেশন সময়
      ease: "easeOut", // ধীরে ধীরে থামে
    },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
