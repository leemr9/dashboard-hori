import { Box, Card, Flex, Stat, StatLabel, StatNumber, Text } from "@chakra-ui/react"
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconBox from "../icons/IconBox";

const MiniStatistics = (props) => {
    const { startContent, name, value, endContent, growth } = props

    return (
        <Card>
            <Flex h={'100%'} alignItems={'center'}>
                { startContent }
                <Stat ml={startContent ? '18px' : 0}>
                    <StatLabel>{name}</StatLabel>
                    <StatNumber>{value}</StatNumber>
                </Stat>
                { endContent }

            </Flex>
            {/* 삼항연산자 조건 ? 참 : 거짓 */}
            {growth ? (
                <Flex>
                    <Text color={'#01B574'} fontSize={'12px'} pr={'5px'}>{growth}</Text>
                    <Text fontSize={'12px'}>since last month</Text>
                </Flex>
            ) : null}
        </Card>
    )
}

export default MiniStatistics;