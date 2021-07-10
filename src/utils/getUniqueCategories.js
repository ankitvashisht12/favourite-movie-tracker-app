export default function getUniqueCategories(movies) {
  const uniqueCategorySet = new Set();
  movies.forEach((movie) => {
    if (!uniqueCategorySet.has(movie.classification)) {
      uniqueCategorySet.add(movie.classification);
    }
  });

  return Array.from(uniqueCategorySet);
}
