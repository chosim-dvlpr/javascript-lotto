export const VIEW_MESSAGE = Object.freeze({
  budget: "> 구입 금액을 입력해 주세요.",
  winningLottoNumbers: "> 당첨 번호를 입력해 주세요.",
  winningLottoBonus: "> 보너스 번호를 입력해 주세요.",
  statistics: "당첨 통계",
  symbolDash: "--------------------",
  retry: "> 다시 시작하시겠습니까? (y/n)",
  symbolSpace: "",
});

export const PRIZE = Object.freeze({
  1: "6개 일치 (2,000,000,000원)",
  2: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  3: "5개 일치 (1,500,000원)",
  4: "4개 일치 (50,000원)",
  5: "3개 일치 (5,000원)",
});

export const OUTPUT_MESSAGE = Object.freeze({
  lottoCount(lottoCount) {
    return `${lottoCount}개를 구매했습니다.`;
  },
  lottoArrayToString(lottoArray) {
    return lottoArray.map((numbers) => `[${numbers.join(", ")}]`).join("\n");
  },
  matchingResultToString(matchingResult) {
    return matchingResult.map((result, i) => result[i].normalNumbers);
  },
});
