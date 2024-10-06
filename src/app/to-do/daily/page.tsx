import { SearchParamsProperty } from "@/types/common";
import { isYYYYMMDD, makeYYYYMMDD } from "@/utils/date";
import dayjs from "dayjs";
import _ from "lodash";

interface ToDoDailyPageProps {
  searchParams: SearchParamsProperty;
}

export default function ToDoDailyPage({ searchParams }: ToDoDailyPageProps) {
  const { date = dayjs().format("YYYY-MM-DD") } = searchParams;
  let realDate = _.isArray(date) ? date[0] : date;

  if (!isYYYYMMDD(realDate)) {
    realDate = makeYYYYMMDD();
  }

  return <div className="flex w-full items-center justify-center">{realDate}</div>;
}
