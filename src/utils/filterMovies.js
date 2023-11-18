const sortByName = (data, query) => {
  data.filter(({ results: { title } }) => {
    title === query;
  });
};
export default sortByName;
