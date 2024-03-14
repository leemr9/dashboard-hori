import {
    Avatar,
    Button,
    ButtonGroup,
    Flex,
    // HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Spacer,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCircleExclamation, faPalette } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Util = () => {
    return (
        <Flex
            alignItems={'center'}
            h={61}
            mt={{ base: 2, md: 0 }}
            px={2}
            borderRadius={61}
            bg={'white'}
            boxShadow={'0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color)'}
        >
            <InputGroup w={'50%'}>
                <Input variant="outline" placeholder="Search" bg={'bgDefault'} h={45} borderRadius={45} />
                <InputLeftElement top={'50%'} transform={'translateY(-50%)'} fontSize={20}>
                    <FiSearch />
                </InputLeftElement>
            </InputGroup>
            <Spacer />
            <ButtonGroup alignItems={'center'} w={'42%'}>
                <Button variant="icon">
                    <FontAwesomeIcon icon={faBell} />
                    <SpanBlind>알림</SpanBlind>
                </Button>
                <Button variant="icon" bg={'1px solid #ccc'}>
                    <FontAwesomeIcon icon={faCircleExclamation} />
                    <SpanBlind>전체메뉴 보기</SpanBlind>
                </Button>
                <Button variant="icon" bg={'1px solid #ccc'}>
                    <FontAwesomeIcon icon={faPalette} />
                    <SpanBlind>테마 꾸미기</SpanBlind>
                </Button>
                <Button variant="ghost">
                        <Avatar
                            name='A P'
                            src='https://bit.ly/broken-link'
                            bg={'#11047A'}
                            color={'white'}
                            w={'40px'}
                            h={'40px'}
                            borderRadius={'40px'}
                            fontSize={'13px'} />
                </Button>
            </ButtonGroup>
        </Flex>
    )
}

const SpanBlind = styled.span`
    position: absolute;
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px;
`

export default Util
