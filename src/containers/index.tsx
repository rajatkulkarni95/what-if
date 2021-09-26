import React, { useState } from "react";
import { MinimalResult } from "../components/MinimalResult";
import { entities } from "../constants/entities";
import { FormObject } from "../types/form";
import Form from "./Form";
import { useRequest } from "../hooks/useRequest";

const Container: React.FC = () => {
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [formOptions, setFormOptions] = useState<FormObject>({
    spentValue: 1000,
    spentOn: entities[0],
  });
  const [stockData, setStockData] = useState<object>(null);

  const handleFormChange = (updatedValues: object) => {
    setFormOptions({ ...formOptions, ...updatedValues });
  };

  // Calculate this based on a condition that if Date.now() is less than 3 months from the selected date, then the
  // duration should be 'Weekly' and fetch the appropriate file
  const duration = "Monthly";
  const path = `${formOptions.spentOn.stockName}_${duration}.json`;

  const showResults = () => {
    setShouldFetch(true);
  };

  const { data, error } = useRequest(shouldFetch, path);

  return (
    <React.Fragment>
      <Form
        showResults={showResults}
        formOptions={formOptions}
        handleFormChange={handleFormChange}
      />

      <MinimalResult data={data} stopFetch={() => setShouldFetch(false)} />
    </React.Fragment>
  );
};

export default Container;
