import React from "react";

interface Data {
  url: string;
  date: string;
}

interface Props {
  query: string;
  apikey: any;
}

const Fetch: React.FC<Props> = async (props) => {
  const res = await fetch(`${props.query}?api_key=${props.apikey}`);
  const data: Data = await res.json();

  return (
<>
<img src={data.url} className="" width={"100vh"} />
<div>{data.date}</div>
</>
  );
};

export default Fetch;
