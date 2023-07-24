import { format } from 'date-fns';

interface DateCellProps {
  value: Date;
}

export const DateCell = ({ value }: DateCellProps) => {
  const formattedDate = format(value, 'dd/MM/yyyy | HH:mm');
  return (
    <div style={{ fontSize: '16px', color: '#464646', fontFamily: 'Roboto', opacity: 1, fontStyle: 'italic' }}>
      {formattedDate}
    </div>
  );
};
