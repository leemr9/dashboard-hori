import { Box, Card, Divider, Flex, Select, Text } from "@chakra-ui/react"
import PieChart from "../../../components/charts/PieChart"
import { pieChartData, pieChartOptions } from "../../../variables/charts"
// import MiniStatistics from "../../../components/card/MiniStatistics"
// import { border, borderRadius } from "polished"

const PieCard = () => {
    return (
        <Card>
            <Flex mb={'8px'} justifyContent={'space-between'} fontWeight={600}>
                <Text fontSize={'16px'} color={'#1B2559;'} mt={'4px'}>
                    Your Pie Chart
                </Text>
                <Select
                    color={'#A3AED0'}
                    borderColor={'transparent'}
                    w={'max-content'}
                    fontWeight={700}
                    fontSize={'14px'}
                >
                    <option value='option1'>Daily</option>
                    <option value='option2'>Monthly</option>
                    <option value='option3'>Yearly</option>
                </Select>
            </Flex>
            <PieChart
                chartData={pieChartData}
                chartOptions={pieChartOptions} />
            <Flex
                w={'100%'}
                boxShadow={'rgba(112, 144, 176, 0.12) 0px 18px 40px'}
                alignItems={'center'}
                p={'15px 20px'}
                mt={'15px'}
                borderRadius={'20px'}
            >
                <Flex flexDir={'column'} alignItems={'center'}>
                    <Flex alignItems={'center'}>
                        <Box h={'8px'} w={'8px'} borderRadius={'50%'} mr={'4px'} bg={'#422AFB'}></Box>
                        <Text fontSize={'12px'} fontWeight={700} color={'#A3AED0;'}>Your files</Text>
                    </Flex>
                    <Text fontSize={'18px'} fontWeight={700}>63%</Text>
                </Flex>
                <Divider orientation='vertical' margin={'0 60px'} h={'60px'} />
                <Flex flexDir={'column'} alignItems={'center'}>
                    <Flex alignItems={'center'}>
                        <Box h={'8px'} w={'8px'} borderRadius={'50%'} mr={'4px'} bg={'rgb(106, 210, 255)'}></Box>
                        <Text fontSize={'12px'} fontWeight={700} color={'#A3AED0;'}>System</Text>
                    </Flex>
                    <Text fontSize={'18px'} fontWeight={700}>25%</Text>
                </Flex>
            </Flex>
        </Card>
    )
}

export default PieCard