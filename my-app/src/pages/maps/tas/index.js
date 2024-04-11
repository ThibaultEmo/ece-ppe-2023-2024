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
        <h1>Near-surface air temperature on {selectedMonth} {selectedYear} - {selectedScenario}</h1>
      
      <div class="h-screen flex items-center justify-center">
        <Image src={`/api/map/tas/${selectedScenario}/${selectedYear}/${selectedMonth}?timestamp=${timestamp}`} alt="Near-surface air tempareture map" width={1000} height={1000} />
      </div>

      <select value={selectedScenario} onChange={handleScenarioChange}>
        {scenarios.map(scenario => (
         <option key={scenario} value={scenario}>{scenario}</option> 
        ))
        }
      </select>

      <select value={selectedMonth} onChange={handleMonthChange}>
        {months.map(month => (
          <option key={month} value={month}>{month}</option>
        ))
        }
      </select>

      <select value={selectedYear} onChange={handleYearChange}>
      {years.map(year => (
        <option key={year} value={year}>{year}</option>
      ))
      }
      </select>
      
        </div>
    </Layout>
      
    
  );
};

export default MyComponent;