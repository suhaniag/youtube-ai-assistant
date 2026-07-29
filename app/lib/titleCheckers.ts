export function hasQuestionMark(title: string): boolean {
  return title.includes("?");
}

const groupNames = [
  "BTS",
  "BLACKPINK",
  "TWICE",
  "EXO",
  "Red Velvet",
  "NCT",
  "SEVENTEEN",
  "ITZY",
  "Stray Kids",
  "ATEEZ",
];

export function hasGroupName(title: string): boolean {
  return groupNames.some((groupName) =>
    title.toLowerCase().includes(groupName.toLowerCase())
  );
}
