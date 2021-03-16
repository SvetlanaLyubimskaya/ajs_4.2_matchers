// здесь функция, сортировка
export default function sortHealth(arr) {
  const result = arr.sort((a, b) => b.health - a.health);
  return result;
}
