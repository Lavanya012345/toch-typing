export const updateInput = (input) => ({
  type: "UPDATE_INPUT",
  payload: input,
});

export const checkInput = (input) => ({
  type: "CHECK_INPUT",
  payload: input,
});

export const resetPractice = () => ({
  type: "RESET_PRACTICE",
});

export const updateTimeRemaining = () => ({
  type: "UPDATE_TIME_REMAINING",
});
