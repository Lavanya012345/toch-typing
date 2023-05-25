const keys = ["a", "s", "d", "f", "j", "k", "l", ";"];

const getRandomKey = () => {
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
};

const initialState = {
  targetKey: getRandomKey(),
  feedback: "",
  statistics: {
    keysPressed: 0,
    accuracy: 100,
    timeRemaining: 10,
    totalKeys: 0,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return {
        ...state,
        statistics: {
          ...state.statistics,
          keysPressed: action.payload.length,
          accuracy: calculateAccuracy(action.payload, state.targetKey),
        },
      };
    case "CHECK_INPUT":
      const input = action.payload;
      const targetKey = state.targetKey;
      let feedback = "";
      if (input !== targetKey) {
        feedback = "Incorrect!";
      }
      return {
        ...state,
        targetKey: getRandomKey(),
        feedback,
        statistics: {
          ...state.statistics,
          totalKeys: state.statistics.totalKeys + 1,
        },
      };
    case "RESET_PRACTICE":
      return {
        ...state,
        targetKey: getRandomKey(),
        feedback: "",
        statistics: {
          ...state.statistics,
          keysPressed: 0,
          accuracy: 100,
          totalKeys: 0,
        },
      };
    case "UPDATE_TIME_REMAINING":
      if (state.statistics.timeRemaining === 1) {
        return {
          ...state,
          statistics: {
            ...state.statistics,
            timeRemaining: 0,
          },
        };
      } else {
        return {
          ...state,
          statistics: {
            ...state.statistics,
            timeRemaining: state.statistics.timeRemaining - 1,
          },
        };
      }

    default:
      return state;
  }
};

const calculateAccuracy = (input, targetKey) => {
  let accuracy = 100;
  if (input !== targetKey) {
    accuracy = 0;
  }
  return accuracy;
};

export default reducer;
