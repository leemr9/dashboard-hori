import { Box, Flex, Text } from "@chakra-ui/react"
import { faCalendar, faCaretUp, faChartSimple, faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

import React, { Component } from "react";
import Chart from "react-apexcharts";

class TotalSpent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
        <Flex p={'20px'} flexDir={'column'} bg={'white'} borderRadius={'20px'}>
            <Flex justifyContent={'space-between'}>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    fontSize={'14px'}
                    px={'16px'}
                    bg={'bgDefault'}
                    borderRadius={'7px'}
                    color={'#A3AED0;'}
                >
                    <FontAwesomeIcon icon={faCalendar} />
                    <Text ml={'4px'}>This month</Text>
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
            <Box display={'flex'} mt={'20px'}>
                <Flex flexDirection={'column'} margin={'28px 20px 0 0'}>
                    <Text fontSize={'34px'} fontWeight={700} lineHeight={'100%'} color={'#1B2559;'}>
                        $37.5K
                    </Text>
                    <Flex mb={'20px'}>
                        <Text fontSize={'0.875rem'} margin={'4px 12px 0 0'} fontWeight={500} color={'#A3AED0;'}>
                            Total Spent
                        </Text>
                        <Flex alignItems={'center'} color={'#01B574;'}>
                            <FontAI icon={faCaretUp} />
                            <Text margin={'2px 0 0 2px'}>
                                +2.45%
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex fontWeight={700} fontSize={'1rem'} color={'#01B574;'} alignItems={'center'}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                        <Text ml={'7px'}>
                            On track
                        </Text>
                    </Flex>
                </Flex>
                <div className="TotalSpent" style={{flexGrow: 1}}>
                    <div className="row">
                        <div className="mixed-chart">
                            <Chart
                                options={this.state.options}
                                series={this.state.series}
                                type="line"
                                width="100%"
                            />
                        </div>
                    </div>
                </div>
            </Box>
        </Flex>
    );
  }
}

const FontAI = styled(FontAwesomeIcon)`
    width: 16px;
`

export default TotalSpent;