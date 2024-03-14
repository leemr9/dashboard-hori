import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MiniStatistics from '../../components/card/MiniStatistics'
import History from '../../components/common/History'
import IconBox from '../../components/icons/IconBox'
// import Title, { TitleH4 } from '../../components/common/Title'
// import { Section } from '../../components/layout/Container'
// import Layout from '../../components/layout/Layout'
// import MainSlide from './components/MainSlide'
// import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import { Button, SimpleGrid, VStack } from '@chakra-ui/react'
import { faChartSimple, faDollarSign, faFlagUsa, faListCheck, faSheetPlastic } from '@fortawesome/free-solid-svg-icons'
import TotalSpent from '../default/components/TotalSpent'
import WeeklyRevenue from '../default/components/WeeklyRevenue'
import CheckTable from '../default/components/CheckTable'
import DailyTraffic from '../default/components/DailyTraffic'
import PieCard from '../default/components/PieCard'
import ComplexTable from '../default/components/ComplexTable'
import Tasks from '../default/components/Tasks'
import MiniCalendar from '../../components/calendar/MiniCalendar'
import React, { useEffect, useState } from 'react'

const Home = () => {
    // const [color, setColor] = useState()
    // useEffect(함수, [의존성 배열]) > 의존성 배열: react가 의존해서 사용하는 패키지(ex> chakra-ui처럼 가져와서 사용하는 것들)
    // 함수를 넣어줘야 하니까 기본적으로 일반함수든 화살표 함수든 넣어주면 된다 > 대부분 간편하게 화살표 함수를 사용
    // 아래 Mountiong과 Unmounting은 문법과 같으므로 사용하려면 외울 것
    // component가 Mounting(마운팅 > 탄생(생겨난다)) 될 때 ~를 변경 > 여기선 배경색을 노란색으로 변경
    useEffect(() => {
        document.body.style.backgroundColor = '#cedcfd'
        document.body.id = 'intro'
        document.body.classList.add('intro')

        // component가 Unmounting(언마운팅 > 소멸(사라진다)) 될 때 ~ 변경 > 여기선 배경색을 원래대로 변경
        return () => {
            document.body.style.backgroundColor = ''
            document.body.id = ''
            document.body.classList.remove('intero')
        }
    }, [])

    // Updating(업데이팅) > 여기선 버튼 클릭시 배경색 변경
    const [color, setColor] = useState('#cedcfd')

    const toggleColor = () => {
        setColor((prevColor) => (prevColor === '#cedcfd' ? 'lightblue' : '#cedcfd'))
    }

    // Updete이므로 [의존성 배열]이 필요하다(조건이 필요하므로 필수)
    // > 여기선 color가 변경될 때마다 함수 실행
    // 데이터가 변경될 때마다 함수 실행
    // 만약 여러가지가 업데이트 된다면 [의존성 배열] 안에 해당하는 업데이트 관련 내용들을 넣어주면 된다
    useEffect(() => {
        console.log('색상이 변경됨', color)
    }, [color])

    return (
        <VStack gap={'20px'}>
            <History />
            <Button onClick={toggleColor}>배경색 변경</Button>
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
