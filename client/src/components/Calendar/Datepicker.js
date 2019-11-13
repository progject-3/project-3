/** @jsx jsx */
import { useState } from "react";
import { useDatepicker, START_DATE } from "@datepicker-react/hooks";
import { jsx } from "@emotion/core";
import Month from "./Month";
import NavButton from "./NavButton";
import DatepickerContext from "./datepickerContext";
function Datepicker() {
  const [state, setState] = useState({
    startDate: new Date(Date.now()),
    endDate: new Date(Date.now()),
    focusedInput: START_DATE
  });
  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths
  } = useDatepicker({
    startDate: state.startDate,
    endDate: state.endDate,
    focusedInput: state.focusedInput,
    onDatesChange: handleDateChange
  });
  function handleDateChange(data) {
    if (!data.focusedInput) {
      setState({ ...data, focusedInput: START_DATE });
    } else {
      setState(data);
    }
  }
  
  return (
    <DatepickerContext.Provider
      value={{
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover
      }}
    >
      <div>
        <strong>Focused input: </strong>
        {state.focusedInput}
      </div>
      <div>
        <strong>Start date: </strong>
        {state.startDate && state.startDate.toLocaleString()}
      </div>
      <div>
        <strong>End date: </strong>
        {state.endDate && state.endDate.toLocaleString()}
      </div>
      <NavButton onClick={goToPreviousMonths}>Previous</NavButton>
      <NavButton onClick={goToNextMonths}>Next</NavButton>
      <div
        css={{
          display: "grid",
          margin: "32px 0 0",
          gridTemplateColumns: `repeat(${activeMonths.length}, 300px)`,
          gridGap: "0 64px"
        }}
      >
        {activeMonths.map(month => (
          <Month
            key={`${month.year}-${month.month}`}
            year={month.year}
            month={month.month}
            firstDayOfWeek={firstDayOfWeek}
          />
        ))}
      </div>
    </DatepickerContext.Provider>
  );
}
export default Datepicker;