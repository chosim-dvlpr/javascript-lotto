import ERROR_MESSAGE from "../constants/errorMessage.js";

/**
 * 로또 당첨 번호와 보너스 번호의 공통 유효성 검사
 */
const winningLottoValidation = {
  commonCategories: {
    outOfRangeLotto: {
      errorMessage: ERROR_MESSAGE.outOfRangeLotto,
      isValid(input) {
        return input >= 1 && input <= 45;
      },
    },
  },
};

export default winningLottoValidation;
