import { Box, Card, Flex, Stat, StatArrow, StatHelpText } from "@chakra-ui/react"
import MiniStatistics from "../../../components/card/MiniStatistics"
import ColumnChart from "../../../components/charts/BarChart"
import { barChartDataDailyTraffic, barChartOptionsDailyTraffic } from "../../../variables/charts"
// import BarChart from "../../../components/charts/BarChart";

const DailyTraffic = () => {
    return (
        <Card p={0}>
            <Flex justifyContent={'space-between'} p={'5px 10px 0'}>
                <MiniStatistics
                    name='Daily Traffic'
                    value='2.579'
                    value2='Visitors' />
                <Stat flex={0.8} p={'15px 20px'}>
                    <StatHelpText>
                    <StatArrow type='increase' />
                    +2.45%
                    </StatHelpText>
                </Stat>
            </Flex>
            {/* <BarChart /> */}
            <Box h={'240px'}>
                <ColumnChart
                    chartData={barChartDataDailyTraffic}
                    chartOptions={barChartOptionsDailyTraffic}
                />
            </Box>
        </Card>
    )
}

export default DailyTraffic