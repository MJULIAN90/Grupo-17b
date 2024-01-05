import { Button, ContainerNav, Input } from "./misEstilos";

export default function SearchBar(props) {

   const handleClick = () => {
      console.log('props', props);
      props.onSearch();
   }

   return (
      <ContainerNav>
         <Input type='search' placeholder="id.."/>
         <Button onClick={handleClick}>Agregar</Button>
      </ContainerNav>
   );
}
