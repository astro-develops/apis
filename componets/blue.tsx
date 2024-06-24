import React, { useEffect, useState } from "react";

export default function Blue303() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      /**
       * https://www.thebluealliance.com/api/v3/team/frc303/events
       * https://www.thebluealliance.com/api/v3/team/frc303/events/keys
       * https://www.thebluealliance.com/api/v3/team/frc303/events/status
       */
      const response = await fetch(
        `https://www.thebluealliance.com/api/v3/team/frc303/events?api_key=${process.env.BLUE_KEY}`
      );
      const result = await response.json();
      setData(result);

      console.log(result);
    }

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
