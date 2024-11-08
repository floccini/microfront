interface ListProps {
  items: string[];
}

const List = ({ items }: ListProps) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li style={{ textAlign: 'left' }} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
