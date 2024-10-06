import dayjs from "dayjs";

/**
 * @description 년월일 형식 확인
 * @param date 날짜
 * @returns 형식 맞는지 여부 (true/false)
 */
export const isYYYYMMDD = (date: string) => {
  const regex = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
  return regex.test(date);
};

/**
 * @description 년월일 포맷으로 만들기
 * @param date 날짜
 * @param delim 구분자
 * @returns YYYYMMDD string
 */
export const makeYYYYMMDD = (date: string | Date = new Date(), delim = "-") =>
  dayjs(date).format(`YYYY${delim}MM${delim}DD`);
