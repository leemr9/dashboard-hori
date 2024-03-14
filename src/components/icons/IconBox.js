import { Box } from "@chakra-ui/react"
// import { faChartSimple } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IconBox = (props) => {
    const { icon, ...rest } = props
    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'50%'}
            fontSize={'24px'}
            {...rest}
        >
            {icon}
        </Box>
    )
}

export default IconBox