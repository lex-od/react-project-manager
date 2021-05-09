import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';

import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import css from './DatePicker.module.scss';
const locale = 'uk';
registerLocale('uk', uk);
setDefaultLocale('uk');

const CustomDatePicker = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className={css.box} spellcheck="false">
            <label>
                <span className={css.pickerTitle}>Дата початку</span>
            </label>

            <DatePicker
                className={css.datePicker}
                selected={date}
                onChange={date => setDate(date)}
                dateFormat="dd MMMM"
                locale={locale}
                // dateFormatCalendar="MMMM"
                // shouldCloseOnSelect={false}
            />
        </div>
    );
};
export default CustomDatePicker;
