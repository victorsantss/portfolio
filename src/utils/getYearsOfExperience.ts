export default function getYearsOfExperience() {
  const year = new Date().getFullYear();
  const startYear = new Date(2020, 0, 1).getFullYear();
  const yearsOfExp = year - startYear;

  return yearsOfExp;
}
