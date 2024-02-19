import { Box, Card, CardHeader, Checkbox, Flex, List, ListItem, Text } from "@chakra-ui/react"
import { faEllipsis, faGripVertical, faSquareCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"

const Tasks = () => {

    return (
        <Card>
            <CardHeader p={0}>
                <Flex
                    justifyContent={'space-between'}
                    alignItems={'center'} 
                    padding={'0'}
                    mb={'20px'}
                >
                    <Flex
                        fontSize={'18px'}
                        fontWeight={700}
                        lineHeight={'100%'}
                        color={'#1B2559'}
                    >
                        <FontAwesomeIcon icon={faSquareCheck} />
                        <Text ml={'12px'}>Tasks</Text>
                    </Flex>
                    <Box
                        bg={'bgDefault'}
                        w={'40px'}
                        h={'37px'}
                        borderRadius={'10px'}
                        display={'inline-flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        px={'16px'}
                    >
                        <FontAwesomeIcon icon={faEllipsis} />
                    </Box>
                </Flex>
            </CardHeader>
            <Box>
                <Flex justifyContent={'space-between'} mb={'20px'}>
                    <Flex>
                        <Checkbox mr={'16px'} />
                        <Text fontWeight={700}>Landing Page Design</Text>
                    </Flex>
                    <FontAwesomeIcon icon={faGripVertical} />
                </Flex>
                <Flex justifyContent={'space-between'} mb={'20px'}>
                    <Flex>
                        <Checkbox mr={'16px'} />
                        <Text fontWeight={700}>Dashboard Builder</Text>
                    </Flex>
                    <FontAwesomeIcon icon={faGripVertical} />
                </Flex>
                <Flex justifyContent={'space-between'} mb={'20px'}>
                    <Flex>
                        <Checkbox mr={'16px'} />
                        <Text fontWeight={700}>Mobile App Design</Text>
                    </Flex>
                    <FontAwesomeIcon icon={faGripVertical} />
                </Flex>
                <Flex justifyContent={'space-between'} mb={'20px'}>
                    <Flex>
                        <Checkbox mr={'16px'} />
                        <Text fontWeight={700}>Illustrations</Text>
                    </Flex>
                    <FontAwesomeIcon icon={faGripVertical} />
                </Flex>
                <Flex justifyContent={'space-between'}>
                    <Flex>
                        <Checkbox mr={'16px'} />
                        <Text fontWeight={700}>Promotional LP</Text>
                    </Flex>
                    <FontAwesomeIcon icon={faGripVertical} />
                </Flex>
            </Box>
        </Card>
    )
}

export default Tasks