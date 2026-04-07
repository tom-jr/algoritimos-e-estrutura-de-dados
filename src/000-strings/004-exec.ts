
function getFormatDate(date: DateInfos): String {
    if (!date) return '';
    //@ts-ignore
    return `${date.day.padStart(2, '0')}/${date.month.padStart(2, '0')}/${date.year}`;
}

console.log(getFormatDate({day: '21', month: '7', year: '2010'}))

interface DateInfos {
    day: string,
    month: string,
    year: string;
}
