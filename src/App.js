import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useState } from "react";
import Component1 from "./Component1";
import Component2QueryParams from "./Component2QueryParams";
import Component2Headers from "./Component2Headers";
import Component2Body from "./Component2Body";
// import Component2 from "./Component2";
import Component3 from "./Component3";
import "./component3.css";
import "./sideComponent.css";
import SideComponent from "./SideComponent";
import "./app.css";
import Navbar from "./Navbar";
import "./navbar.css";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [method, setMethod] = useState("get");
  const [url, setUrl] = useState(null);
  const [status, setStatus] = useState(null);
  const [historyData, setHistoryData] = useState([]);
  // queary params
  const [paramKey, setParamKey] = useState(null);
  const [paramValue, setParamValue] = useState(null);
  //for header
  const [headerKey, setHeaderKey] = useState("");
  const [headerValue, setHeaderValue] = useState("");
  const [header, setHeader] = useState({});

  //body json
  const [json, setjson] = useState(null);

  const ParamData = () => {
    setError(null);
    const newUrl = `${url}${paramKey}:${paramValue}&`;
    setUrl(newUrl);
  };
  //header add
  const setHeaderData = () => {
    const newheader = { ...header, [headerKey]: headerValue };
    setHeader(newheader);
    console.log(header, headerKey, headerValue);
  };
  //header remove
  const removeHeader = () => {
    const { [headerKey]: headerValue, ...newdata } = header;
    setHeader(newdata);
  };

  // fetch data
  const datafetch = () => {
    console.log(json);
    const config = {
      method: method,
      url: url,
      headers: header,
      data: JSON.parse(json),
    };
    axios(config)
      .then(function (response) {
        console.log(response);
        setStatus(response.status);
        const newhistory = [
          ...historyData,
          `${response.status},${method.toUpperCase()},${url}`,
        ];
        setHistoryData(newhistory);

        console.log(status);
        console.log(JSON.stringify(response.data));
        setData(JSON.stringify(response.data));
      })
      .catch(function (error) {
        setStatus(
          error.message.substring(
            error.message.length - 3,
            error.message.length
          )
        );
        setError(error);
        console.log(error);
      });

    console.log(data);
    console.log(error);
  };

  return (
    <div>
      <Navbar />
      <div className="App">
        <div>
          <SideComponent historyData={historyData} />
        </div>
        <div>
          <Component1
            datafetch={datafetch}
            setMethod={setMethod}
            method={method}
            setUrl={setUrl}
            url={url}
          />
          <div>
            <Tabs
              id="controlled-tab-example"
              defaultActiveKey="Query Params"
              transition={false}
              className="mb-3"
            >
              <Tab eventKey="Query Params" title="Query Params">
                <Component2QueryParams
                  setParamKey={setParamKey}
                  paramkey={paramKey}
                  setParamValue={setParamValue}
                  paramValue={paramValue}
                  ParamData={ParamData}
                />
              </Tab>
              <Tab eventKey="Headers" title="Headers">
                <Component2Headers
                  header={header}
                  setHeaderKey={setHeaderKey}
                  setHeaderValue={setHeaderValue}
                  setHeaderData={setHeaderData}
                  removeHeader={removeHeader}
                />
              </Tab>
              <Tab eventKey="Body" title="Body">
                <Component2Body setjson={setjson} />
              </Tab>
            </Tabs>
          </div>
          <Component3 data={data} status={status} error={error} />
        </div>
      </div>
    </div>
  );
};

export default App;
