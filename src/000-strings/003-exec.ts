const data1 = '21/7/2010';

function getDateInfos(date: string): DateInfos {
    if (!date) return null;
    const split: string[] = date.split('/');
    // @ts-ignore
    return {day: split[0].padStart(2, '0'), month: split[1].padStart(2, '0'), year: split[2]};
}

let dateInfos = getDateInfos(data1);
console.log(`In: ${data1}\t\t Out: Day: ${dateInfos.day}, Month: ${dateInfos.month}, Year: ${dateInfos.year}`)
interface DateInfos {
    day: string,
    month: string,
    year: string;
}
