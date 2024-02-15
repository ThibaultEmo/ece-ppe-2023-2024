import Image from 'next/image';
import { useState } from 'react'
import Layout from "../../../../components/Layout";

const MyComponent = () => {
    const [selectedDate, setSelectedDate] = useState('2050-08-04');
    const [timestamp, setTimestamp] = useState(new Date().getTime());
  
    const dates = ['2050-07-04', '2050-07-16', '2050-07-28', '2050-08-04', '2050-08-16', '2050-08-28'];
  
    const handleDateChange = (event) => {
      setTimestamp(new Date().getTime());
      setSelectedDate(event.target.value);
    };
  
    

  return (
    <Layout>
        <div>
        <h1>Near-surface air temperature on {selectedDate}</h1>
      
      <div>
        <Image src={`/api/map/tas/${selectedDate}?timestamp=${timestamp}`} alt="Near-surface air tempareture map" width={1000} height={1000} />
      </div>
      <select value={selectedDate} onChange={handleDateChange}>
        {dates.map(date => (
          <option key={date} value={date}>{date}</option>
        ))}
      </select>
        </div>
    </Layout>
      
    
  );
};

export default MyComponent;