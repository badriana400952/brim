import { Box, Card, Center, Heading, Text } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import React from "react";

const Home = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [counter, setCounter] = useState<number>(0);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const handleFilter = () => {
    if (startDate && endDate) {
      console.log("Filtering data from", startDate, "to", endDate);
    } else {
      console.log("Please select both start and end dates.");
    }
  };

  return (
    <>
      <Center my={"100px"}>
        <Heading> Welcome to Dashboard Brim Coffee</Heading>
      </Center>
      <Card p={5}>
        <Center mb={3}>
          <Text fontSize="2xl" fontWeight={"bold"}>
            Penjualan
          </Text>
        </Center>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <div className="DateFilter">
            <h1>Date Filter Dashboard</h1>
            <div className="date-picker-container">
              <div className="date-picker">
                <label>Start Date:</label>
                <DatePicker
                  selected={startDate}
                  onChange={handleStartDateChange}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
              <div className="date-picker">
                <label>End Date:</label>
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
              <button onClick={handleFilter}>Filter Data</button>
            </div>
          </div>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Text fontSize={"xl"}>Total Penjualan</Text>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              Rp. 100.000
            </Text>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default Home;
