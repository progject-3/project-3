import React, { useReducer } from "react";
// import ReactDOM from "react-dom";
import { DateRangeInput } from "@datepicker-react/styled";
import { ThemeProvider } from "styled-components";

const initialState = {
  startDate: new Date(Date.now()),
  endDate: new Date(Date.now()),
  focusedInput: null
};

function reducer(state, action) {
  switch (action.type) {
    case "focusChange":
      return { ...state, focusedInput: action.payload };
    case "dateChange":
      return action.payload;
    default:
      throw new Error();
  }
}

function New() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeProvider
      theme={{
        // breakpoints: ["32em", "48em", "64em"],
        reactDatepicker: {
          // daySize: [36, 40],
          // fontFamily: "system-ui, -apple-system",
          // colors: {
          //   accessibility: "#D80249",
          //   selectedDay: "#f7518b",
          //   selectedDayHover: "#F75D95",
          //   primaryColor: "#d8366f"
          // }
        }
      }}
    >
      <DateRangeInput
        onDatesChange={data => dispatch({ type: "dateChange", payload: data })}
        onFocusChange={focusedInput =>
          dispatch({ type: "focusChange", payload: focusedInput })
        }
        startDate={state.startDate} // Date or null
        endDate={state.endDate} // Date or null
        focusedInput={state.focusedInput} // START_DATE, END_DATE or null
        totale={`${state.endDate}-${state.startDate}`}
      />
    </ThemeProvider>
  );
}


export default New;