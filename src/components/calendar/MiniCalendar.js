import { Card, Icon, Text } from "@chakra-ui/react"
import Calendar from "react-calendar"
import '../../assets/css/MiniCalendar.css';
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MiniCalendar = () => {
    const [value, onChange] = useState(new Date());

    return (
        <Card>
            <Calendar
                onChange={onChange}
                value={value}
                tileContent={<Text color='brand.500'></Text>}
                prevLabel={<Icon as={MdChevronLeft} w='24px' h='24px' mt='4px' />}
                nextLabel={<Icon as={MdChevronRight} w='24px' h='24px' mt='4px' />} />
        </Card>
    )
}

export default MiniCalendar