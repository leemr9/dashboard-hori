import { Box, Card, Flex, Stat, StatLabel, StatNumber, Text } from "@chakra-ui/react"
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconBox from "../icons/IconBox";

const MiniStatistics = (props) => {
    const { startContent, name, value, endContent, growth, value2 } = props

    return (
        <Card>
            <Flex h={'100%'} alignItems={'center'}>
                { startContent }
                <Stat ml={startContent ? '18px' : 0}>
                    <StatLabel color={'#A3AED0'}>{name}</StatLabel>
                    <Flex alignItems={'flex-end'}>
                        <StatNumber color={'#1B2559'} fontWeight={600}>{value}</StatNumber>
                        <StatLabel fontSize={'14px'} color={'#A3AED0'} ml={'6px'}>{value2}</StatLabel>
                    </Flex>
                </Stat>
                { endContent }
            </Flex>
            {/* 삼항연산자 조건 ? 참 : 거짓 */}
            {growth ? (
                <Flex>
                    <Text color={'#01B574'} fontSize={'12px'} pr={'5px'}>{growth}</Text>
                    <Text fontSize={'12px'} color={'#A3AED0'}>since last month</Text>
                </Flex>
            ) : null}
        </Card>
    )
}

export default MiniStatistics;