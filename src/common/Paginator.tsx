import React from 'react';
import {
  Box,
  Button,
} from "@chakra-ui/react";


type PaginatorType = {
  totalUsersCount: number
  pageSize: number
  currentPage:number
  onPageChanged:(page:number)=>void
}
const Paginator = (props: PaginatorType) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (

            <Box>
              {pages.map((p, i) => props.currentPage === p ?
                <Button colorScheme={'teal'} key={i}>{p}</Button> :
                <Button onClick={() => props.onPageChanged(p)} key={i}>{p}</Button>
              )}
            </Box>

  )
}
export default Paginator

