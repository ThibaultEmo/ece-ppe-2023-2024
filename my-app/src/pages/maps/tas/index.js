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
            La température
          </p>
      <div class="h-screen flex flex-col space-y-8 items-center justify-center">
        <div class="flex flex-row items-center space-x-8">
          <Image src={`/api/map/tas/${selectedScenario}/${selectedYear}/${selectedMonth}?timestamp=${timestamp}`} alt="Near-surface air tempareture map" width={1000} height={1000} />
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
        <p className='text-4xl'>Chaque année on enregistre des records de chaleur en France. Mais qu'en sera t'il dans 5, 25 ou 75 ans ? Cette carte permet de visualiser les prévisions des scientifiques européens du groupe Copernicus. Même si ses effets destructeurs sont déjà bien connus (atteinte à la biodiversité, fonte des glaces, canicules longues), qu'en sera t'il en France dans le futur ?</p>
      </div>
    </Layout>


  );
};

export default MyComponent;