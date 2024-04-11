import Image from 'next/image';
import { useState } from 'react'
import Layout from "../../../../components/Layout";

const MyComponent = () => {
    const [selectedYear, setSelectedYear] = useState('2030');
    const [selectedMonth, setSelectedMonth] = useState('February');
    const [selectedScenario, setSelectedScenario] = useState('SSP1-1_9');

    const [timestamp, setTimestamp] = useState(new Date().getTime());

    const years = ['2030', '2050', '2100']
    const months = ['February', 'July', 'November']
    const scenarios = ['SSP1-1_9', 'SSP2-4_5', 'SSP5-8_5'];

    const handleYearChange = (event) => {
      setTimestamp(new Date().getTime());
      setSelectedYear(event.target.value);
    }

    const handleMonthChange = (event) => {
      setTimestamp(new Date().getTime());
      setSelectedMonth(event.target.value);
    }
  
    const handleScenarioChange = (event) => {
      setTimestamp(new Date().getTime());
      setSelectedScenario(event.target.value);
    }

  return (
    <Layout>
        <div>
        <h1>Precipitation on {selectedMonth} {selectedYear} - {selectedScenario}</h1>
      
      <div class="h-screen flex items-center justify-center"> 
      <div class="flex flex-row">
        <Image src={`/api/map/precipitation/${selectedScenario}/${selectedYear}/${selectedMonth}?timestamp=${timestamp}`} alt="Precipitation" width={1000} height={1000} />
        <div class="ml-4 flex flex-col">

          <div class="mb-4">
        <select value={selectedScenario} onChange={handleScenarioChange}>
        {scenarios.map(scenario => (
         <option key={scenario} value={scenario}>{scenario}</option> 
        ))
        }
      </select>
      </div>

      <div class="mb-4">
      <select value={selectedMonth} onChange={handleMonthChange}>
        {months.map(month => (
          <option key={month} value={month}>{month}</option>
        ))

        }
      </select>
      </div>

      <div class="mb-4">
      <select value={selectedYear} onChange={handleYearChange}>
      {years.map(year => (
        <option key={year} value={year}>{year}</option>
      ))
      }
      </select>
      </div>
        </div>
      </div>
      </div>

      
      
        </div>
    </Layout>
      
    
  );
};

export default MyComponent;