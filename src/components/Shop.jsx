
import { Box, Button, Heading, Input, SimpleGrid, Spacer, Tag, Image, Center, GridItem , Spinner } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import Header from './Header';
const ShopItem = ({title,price,image})=>{
    return (
        <Box p={4} borderRadius="lg" borderWidth="1px">
                <Center>  
                    <Image src={image} w={24}/>
                </Center>
                <Heading mt={4} noOfLines={2} size="sm" fontWeight="normal">
                            {title}
                </Heading>
                <Spacer/> 
            <Tag mt={4} >ksh{price}</Tag>

        </Box>
    )
}
function Shop({items, onItemAdd, loading}) {
    const [searchedItems,setSearchedItems]= useState(items);
    const ItemNameRef =useRef();
    const ItemPriceRef =useRef();
    useEffect(()=>{
        setSearchedItems(items);
    }, [items])

  return (
    <Box p={4}>
        <Header title='Fake React Shop'/>
        {loading ? (
        <Center mt={6}>
            <Spinner/>
        </Center>) :(
        <Box p={2}>
        <Input onChange={e =>{
            let f =items.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
            setSearchedItems(f);

        }} placeholder='Search'mt={4} />
        

        <SimpleGrid columns={3} spacing={4} mt={4} p={2}>
        {searchedItems.map((item) =>{
            return(
                <GridItem>
                    <ShopItem {...item}/>
                </GridItem>
                
            );
        })}
        </SimpleGrid>
        <Input ref={ItemNameRef} mt={10} placeholder='Item name'/>
        <Input ref={ItemPriceRef} mt={2} placeholder='price' type="number"/>

        <Button mt={2} onClick={()=>{
            onItemAdd({
                title: ItemNameRef.current.value,
                price: ItemPriceRef.current.value,

            });
        }} 
        >Add Item</Button>
        </Box>
)}
    </Box>
  );
}

export default Shop;