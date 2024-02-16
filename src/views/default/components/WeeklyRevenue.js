import { Box, Card, CardBody, CardHeader, Flex, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text } from "@chakra-ui/react"
import { faChartSimple, faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LineChart from "../../../components/charts/LineChart"
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent, } from '../../../variables/charts'

const WeeklyRevenue = () => {
    return (
        <Flex p={'20px'} flexDir={'column'} bg={'white'} borderRadius={'20px'}>
            <Flex
                justifyContent={'space-between'}
                alignItems={'center'} 
                padding={'10px 15px'}
            >
                <Box
                    fontSize={'20px'}
                    fontWeight={700}
                    lineHeight={'100%'}
                    color={'#1B2559'}
                >
                    <Text>Weekly Revenue</Text>
                </Box>
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
                    <FontAwesomeIcon icon={faChartSimple} />
                </Box>
            </Flex>
            <Card display={'flex'} flexDir={'row'} justifyContent={'space-between'} p={0}>
                {/* <CardHeader p={0}>
                    <Stat flexDirection={'column'} margin={'28px 20px 0 0'}>
                        <StatLabel fontSize={'34px'} fontWeight={700} lineHeight={'100%'} color={'#1B2559;'}>
                            $37.5K
                        </StatLabel>
                        <StatNumber fontSize={'0.875rem'} fontWeight={500} color={'#A3AED0'}>
                            <StatHelpText />
                                Total Spent
                            <StatHelpText color={'#01B574'}>
                                <StatArrow type="increase" />
                                    +2.45%
                            </StatHelpText>
                        </StatNumber>
                        <StatLabel display={'flex'} alignItems={'center'} color={'#01B574;'} fontWeight={700} fontSize={'1rem'}>
                            <FontAwesomeIcon icon={faCircleCheck} />
                            <StatHelpText ml={'7px'} />
                                On track
                        </StatLabel>
                    </Stat>
                </CardHeader> */}
                <CardBody p={0} minH={'260px'}>
                    <LineChart
                        chartData={lineChartDataTotalSpent}
                        chartOptions={lineChartOptionsTotalSpent} />
                </CardBody>
            </Card>
        </Flex>
    )
}

export default WeeklyRevenue