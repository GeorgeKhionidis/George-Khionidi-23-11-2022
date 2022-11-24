export const formattedDate = (date?: string): string => {
  const currentDate = new Date(date || new Date());

  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  return `${day}/${month + 1}/${year}`;
};
