import { Card, CardHeader, Checkbox, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import styled from "styled-components"
import { tableDataCheck } from "../../../variables/tables"

const CheckTable = () => {
    
    return (
        <Card>
            <CardHeader p={'0 5px 12px'}>
                <Flex justifyContent={'space-between'}>
                    <Text fontSize='22px' fontWeight={700} lineHeight={'100%'} color={'#1B2559;'}>
                        Check Table
                    </Text>
                    <FontAwesomeIcon icon={faEllipsis} />
                </Flex>
            </CardHeader>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>NAME</Th>
                            <Th>PROGRESS</Th>
                            <Th>QUANTITY</Th>
                            <Th>DATE</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {/* element.map() */}
                        {tableDataCheck.map((item, index) => (
                            <Tr key={index}>
                                <Flex>
                                    <Checkbox isChecked={item.checked} />
                                    <Td p={0}>{item.name}</Td>
                                </Flex>
                                <Td>{item.progress}</Td>
                                <Td>{item.quantity}</Td>
                                <Td>{item.date}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Card>
    )
}

// const fontAIStyled = styled(FontAwesomeIcon)`
//     height: 37px;
//     width: 37px;
//     background-color: 'bgDefault';
// `

export default CheckTable