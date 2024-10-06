export const MOCKED_TO_DO_LIST = [...new Array(10)].map((v, i) => ({
  id: i + 1,
  content: "안녕하세요. 반갑습니다. 긴문장 테스트입니다.",
  isChecked: (i + 1) % 2 === 0,
}));
