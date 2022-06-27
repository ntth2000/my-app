import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import moment from "moment";
import "./DatePicker.scss";
const Datepicker = ({ setChosenDate }) => {
  const currentTime = new Date();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  return (
    <div className="datePicker">
      <div className="datePickerWrapper">
        <DateRange
          editableDateInputs={true}
          onChange={(item) => {
            setState([item.selection]);
            setChosenDate(item.selection);
          }}
          moveRangeOnFirstSelection={false}
          ranges={state}
          months={2}
          direction="horizontal"
          color="#000"
        />
      </div>
    </div>
  );
};

export default Datepicker;
