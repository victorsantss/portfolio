export default function getYearsOld() {
  const today = new Date();
  const birthDate = new Date(1997, 7, 24);
  const yearsOld = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    return yearsOld - 1;
  }

  return yearsOld;
}
