import DateTimeFormatOptions from './DateTimeFormatOptions';
import NumberFormatOptions from './NumberFormatOptions';

type Formats = {
  number: Record<string, NumberFormatOptions>;
  dateTime: Record<string, DateTimeFormatOptions>;
};

export default Formats;
