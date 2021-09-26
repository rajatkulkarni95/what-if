interface ResultProps {
  data: unknown;
  stopFetch: Function;
}

export const MinimalResult: React.FC<ResultProps> = ({ data, stopFetch }) => {
  console.log(data);
  if (!data) return <h2>Loading...</h2>;
  if (data) {
    stopFetch();
    return <h1>Rsult</h1>;
  }

  return null;
};
