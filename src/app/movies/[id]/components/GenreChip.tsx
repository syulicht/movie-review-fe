type Props = {
  name: string;
};

export const GenreChip = ({ name }: Props): React.JSX.Element => {
  return (
    <div className="inline-flex items-center py-1 px-3 text-white bg-gray-500 rounded-2xl font-bold">
      {name}
    </div>
  );
};
