export default function SearchBar(props) {

   const handleClick = () => {
      console.log('props', props);
      props.onSearch();
   }

   return (
      <div>
         <input type='search' />
         <button onClick={handleClick}>Agregar</button>
      </div>
   );
}
