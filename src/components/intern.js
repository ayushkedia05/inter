import React, { useEffect, useState } from "react";

import MediaCard from "./card";

import axios from "axios";

function Showdetails(props) {
  const [extract, setextract] = useState([]);

  useEffect(() => {
    console.log(props);
    const template = {
      value: props.values,
    };

    const getback = axios.post("https://internaa.herokuapp.com/", template);
    getback.then((res) => {
      setextract(res.data.output);
      console.log();
    });
  }, []);

  return (
    <React.Fragment>
      <div className="alignbooks">
      {
          extract?.map((data,int)=>(
            <div className="cards">
            <MediaCard image={data[0]} link={data[1]}></MediaCard>
            
</div>
          ))
        }
        </div>
    </React.Fragment>
  );
}

export default Showdetails;
