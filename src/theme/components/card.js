import { mode } from "@chakra-ui/theme-tools"

export const cardStyles = {
    components: {
        Card: {
            baseStyle: {
                container: {
                    borderRadius: '20px',
                    bg: mode('white', 'gray.700'),
                    boxShadow: 'none',
                    padding: '15px 20px',
                },
            },
            // variants: {
            //     primary: (props) => ({
                    
            //     }),
            // },
        },
    },
}
