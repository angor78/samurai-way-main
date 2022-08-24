import React, {useState} from 'react';
import {
  Box,
  Button,
} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";


type PaginatorType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (page: number) => void
}
const Paginator = (props: PaginatorType) => {
  let portionSize = 5
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  // let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize


  return (
    <Box maxW={'250px'}>
      <Box display={'flex'} justifyContent={'space-between'} mb={'1'}>
        <Button onClick={() => setPortionNumber(portionNumber - 1)} colorScheme={'blue'}><ChevronLeftIcon/>Prev</Button>
        <Button onClick={() => setPortionNumber(1)} colorScheme={'gray'}>Start</Button>
        <Button onClick={() => setPortionNumber(portionNumber + 1)}
                colorScheme={'blue'}>Next<ChevronRightIcon/></Button>
      </Box>
      <Box maxW={'250px'} minW={'250px'} width={'100%'} display={'flex'} justifyContent={'space-between'}>
        {pages
          .filter((p) =>
            p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map((p, i) =>
            props.currentPage === p ?
              <Button colorScheme={'teal'} key={i}>{p}</Button> :
              <Button onClick={() => props.onPageChanged(p)} key={i}>{p}</Button>
          )}
      </Box>
    </Box>


  )
}
export default Paginator

