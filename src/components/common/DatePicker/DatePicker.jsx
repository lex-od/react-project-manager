import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import 'react-datepicker/dist/react-datepicker.css';
import css from './DatePicker.module.scss';

const locale = 'uk';
registerLocale('uk', uk);
setDefaultLocale('uk');

// const spell = {
//     spellcheck: 'false',
// };

const CustomDatePicker = props => {
    return (
        <DatePicker
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
