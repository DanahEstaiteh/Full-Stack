
import { Category } from '../../Types';

export const getCategoryNames = (categoryData: Category[]) => {
  let count = 0;
  let titles = categoryData.map((category) => ({
    id: count++,
    title: category['categoryName']
  }));
  return titles;
};

export const getCategoryName = (index: number, data : Category[]) => {
  const name = getCategoryNames(data).find(
    (category) => category.id === index
  )?.title;
  return name;
};

export const getCategoryNamePosPage = (categoryData: Category[]) => {
  let count = 1;
  let titles = categoryData.map((category) => ({
    id: count++,
    title: category['categoryName']
  }));
  titles.unshift({ id: 0, title: 'home' });
  console.log(titles);
  return titles;
};
