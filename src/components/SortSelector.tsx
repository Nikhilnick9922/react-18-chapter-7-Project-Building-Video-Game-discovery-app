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
 


    const currentSortOrder = sortOrders.find(order=> order.value === sortOrder)
     return (
        <Menu>
             <MenuButton as ={Button} rightIcon={<BsChevronDown/> }>
             Ordery By : {currentSortOrder?.label || "Relevence" } 
            </MenuButton>
           <MenuList>
 
      {sortOrders.map(item=><MenuItem key={item.value} onClick={()=> onSelectSortOrder(item.value)}>{item.label}</MenuItem>)}
           </MenuList>
        </Menu>
        )
}

export default SortSelector



 