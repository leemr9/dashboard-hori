import { Box, Card, CardHeader, Flex, List, ListItem, Text } from "@chakra-ui/react"
import { faEllipsis, faGripVertical, faSquareCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Tasks = () => {
    const dataTasks = [
        {
            checked: true,
            name: 'Landing Page Design',
            icon: <FontAwesomeIcon icon={faGripVertical} />,
        },
        {
            checked: false,
            name: 'Dashboard Builder',
            icon: <FontAwesomeIcon icon={faGripVertical} />,
        },
        {
            checked: false,
            name: 'Mobile App Design',
            icon: <FontAwesomeIcon icon={faGripVertical} />,
        },
        {
            checked: true,
            name: 'Illustrations',
            icon: <FontAwesomeIcon icon={faGripVertical} />,
        },
        {
            checked: false,
            name: 'Promotional LP',
            icon: <FontAwesomeIcon icon={faGripVertical} />,
        },
    ];

    return (
        <Card>
            <CardHeader p={0}>
                <Flex
                    justifyContent={'space-between'}
                    alignItems={'center'} 
                    padding={'0'}
                    mb={'30px'}
                >
                    <Flex
                        fontSize={'20px'}
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
            {dataTasks.map((item, index) => {
                <ListItem key={index}>
                    <Flex>
                        {item.checked} {item.name}
                    </Flex>
                    {item.icon}
                </ListItem>
            })}
        </Card>
    )
}

export default Tasks