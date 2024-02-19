import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MiniStatistics from '../../components/card/MiniStatistics'
import History from '../../components/common/History'
import IconBox from '../../components/icons/IconBox'
// import Title, { TitleH4 } from '../../components/common/Title'
// import { Section } from '../../components/layout/Container'
// import Layout from '../../components/layout/Layout'
// import MainSlide from './components/MainSlide'
// import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import { Box, Card, SimpleGrid, VStack } from '@chakra-ui/react'
import { faChartSimple, faDollarSign, faFlagUsa, faListCheck, faSheetPlastic } from '@fortawesome/free-solid-svg-icons'
import TotalSpent from '../default/components/TotalSpent'
import WeeklyRevenue from '../default/components/WeeklyRevenue'
import CheckTable from '../default/components/CheckTable'
import DailyTraffic from '../default/components/DailyTraffic'
import PieCard from '../default/components/PieCard'
import ComplexTable from '../default/components/ComplexTable'
import Tasks from '../default/components/Tasks'
import MiniCalendar from '../../components/calendar/MiniCalendar'

const Home = () => {
    return (
        <VStack gap={'20px'}>
            <History />
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 6 }} spacing='40px' w={'100%'}>
                <MiniStatistics
                    name='Earnings'
                    value='$350.4'
                    startContent={<IconBox w={'56px'} h={'56px'} bg={'#f4f7fe'} icon={<FontAwesomeIcon icon={faChartSimple} />} />} />
                <MiniStatistics
                    name='Spend this month'
                    value='$642.39'
                    startContent={<IconBox w={'56px'} h={'56px'} bg={'#f4f7fe'} icon={<FontAwesomeIcon icon={faDollarSign} />} />} />
                <MiniStatistics
                    name='Sales'
                    value='$574.34'
                    growth='23%' />
                <MiniStatistics
                    endContent={<IconBox w={'56px'} h={'56px'} bg={'#f4f7fe'} icon={<FontAwesomeIcon icon={faFlagUsa} />} />}
                    name='Your balance'
                    value='$1,000' />
                <MiniStatistics
                    name='New Tasks'
                    value='154'
                    startContent={<IconBox w={'56px'} h={'56px'} bg={'#f4f7fe'} icon={<FontAwesomeIcon icon={faListCheck} />} />} />
                <MiniStatistics
                    name='Total Projects'
                    value='2935'
                    startContent={<IconBox w={'56px'} h={'56px'} bg={'#f4f7fe'} icon={<FontAwesomeIcon icon={faSheetPlastic} />} />} />
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                <TotalSpent />
                <WeeklyRevenue />
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 1 }} spacing="20px" w={'100%'}>
                <CheckTable />
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                    <DailyTraffic />
                    <PieCard />
                </SimpleGrid>
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 1 }} spacing="20px" w={'100%'}>
                <ComplexTable />
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                    <Tasks />
                    <MiniCalendar />
                </SimpleGrid>
            </SimpleGrid>
        </VStack>
    )
}

export default Home
