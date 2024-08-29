import { useData } from '../App';

const Child = () => {
  const { nama, kota, hobby } = useData();

  return (
    <div>
      <h2>Nama: {nama}</h2>
      <h3>Kota: {kota}</h3>
      <h4>Hobby: {hobby}</h4>
    </div>
  );
};

export default Child;
