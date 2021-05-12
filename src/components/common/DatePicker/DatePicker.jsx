import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import 'react-datepicker/dist/react-datepicker.css';
import css from './DatePicker.module.scss';
// import { useState } from 'react';

const locale = 'uk';
registerLocale('uk', uk);
setDefaultLocale('uk');

// const spell = {
//     spellcheck: 'false',
//     spellcheck='false',
// };

const CustomDatePicker = props => {
    // const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
            // selected={startDate}
            // onChange={date => setStartDate(date)}
            className={css.datePicker}
            dateFormat="dd MMMM"
            locale={locale}
            // dateFormatCalendar="MMMM"
            // shouldCloseOnSelect={false}
            {...props}
        />
    );
};
export default CustomDatePicker;
