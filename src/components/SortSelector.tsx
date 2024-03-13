import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react'
import { BsChevronDown } from 'react-icons/bs';


interface Props {
    onSelectSortOrder : (sortOrder:string)=> void;
    sortOrder : string ;
}

const SortSelector = ({onSelectSortOrder , sortOrder}: Props) => {
    const sortOrders = [
        {value:"", label:"Relevance"},
        {value:"-added", label:"Date Added"},
        {value:"name", label:"Name"},
        {value:"-released", label:"Release Date"},
        {value:"metacritic", label:"Popularity"},
        {value:"-rating", label:"Average Rating"},

    ]
    // this value are taken from documentation, and " - " used means we want latest



    const currentSortOrder = sortOrders.find(order=> order.value === sortOrder)
// getting element from sortOrder , so we don't have to pass gameQuery
    return (
        <Menu>
             <MenuButton as ={Button} rightIcon={<BsChevronDown/> }>
            {/* Ordery By : Relevance  */}
            Ordery By : {currentSortOrder?.label || "Relevence" } 
            </MenuButton>
           <MenuList>
        {/* <MenuItem>Relevance</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average Rating</MenuItem> */}
      {sortOrders.map(item=><MenuItem key={item.value} onClick={()=> onSelectSortOrder(item.value)}>{item.label}</MenuItem>)}
           </MenuList>
        </Menu>
        )
}

export default SortSelector




 // move list to array then map it to menuItem , it should have `value` and `label`

 // for each MenuItem we should have handle the click event and notify the app.tsx