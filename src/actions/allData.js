import { persianGalf2021, azadegan2021 } from "../apis/gatData";

export const getAllData1 = () => async (dispatch) => {
  try {
    const { data } = await persianGalf2021();
    dispatch({ type: "FETCH_ALL1", payload: data.response });
  } catch (error) {
    console.log(error);
  }
};
export const getAllData2 = () => async (dispatch) => {
  try {
    const { data } = await azadegan2021();
    dispatch({ type: "FETCH_ALL2", payload: data.response });
  } catch (error) {
    console.log(error);
  }
};
