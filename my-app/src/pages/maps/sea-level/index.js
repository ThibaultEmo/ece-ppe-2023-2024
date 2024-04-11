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
         <p className="text-4xl text-green-700 text-center">
            Le niveau de la mer
          </p>
       <div class="h-screen flex flex-col space-y-8 items-center justify-center">
        <div class="flex flex-row items-center space-x-8">
        <Image src={`/api/map/sea-level/${selectedScenario}/${selectedYear}/${selectedMonth}?timestamp=${timestamp}`} alt="Sea-level above geoid" width={1000} height={1000} />
          <div class="flex flex-col text-green-700 text-2xl space-y-8">


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
        </div>
        <p className='text-4xl'>Le fait que le réchauffement du climat entraîne des précipitations plus violentes peut sembler contre-intuitif. Le changement climatique peut pourtant non seulement rendre les endroits plus secs, mais également intensifier les précipitations. À mesure que l’air se réchauffe, la quantité de vapeur d’eau qu’il peut contenir augmente. Ce mécanisme peut rendre les tempêtes plus violentes. Et cette intensification devrait être plus ou moins homogène spatialement dans le monde.</p>

      </div>

    </Layout>


  );
};

export default MyComponent;