import LottoResultMaker from "../src/domain/LottoResultMaker.js";

describe("lottoResultMaker 테스트", () => {
  const testCases = [
    {
      winningCombination: {
        winningNumbers: [1, 2, 3, 4, 5, 6],
        winningBonus: 7,
      },
      issuedLottoArray: [
        [1, 2, 3, 4, 5, 6],
        [2, 3, 4, 5, 6, 7],
        [11, 12, 13, 14, 15, 16],
      ],
      expectedResult: [
        { normalNumber: 6, bonusNumber: 0 },
        { normalNumber: 5, bonusNumber: 1 },
        { normalNumber: 0, bonusNumber: 0 },
      ],
    },
    {
      winningCombination: {
        winningNumbers: [40, 41, 42, 43, 44, 45],
        winningBonus: 39,
      },
      issuedLottoArray: [
        [1, 2, 3, 4, 5, 6],
        [40, 41, 42, 43, 44, 45],
        [1, 2, 3, 39, 40, 41],
      ],
      expectedResult: [
        { normalNumber: 0, bonusNumber: 0 },
        { normalNumber: 6, bonusNumber: 0 },
        { normalNumber: 2, bonusNumber: 1 },
      ],
    },
  ];

  test.each(testCases)(
    "로또 당첨 번호가 '$winningCombination' 이고 발행된 로또 번호가 '$issuedLottoArray' 일 때, lottoResult는 '$expectedResult' 이어야 한다.",
    ({ winningCombination, issuedLottoArray, expectedResult }) => {
      const result = LottoResultMaker.calculateLottoResult(issuedLottoArray, winningCombination);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});
