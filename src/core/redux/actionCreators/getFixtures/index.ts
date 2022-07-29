import { ActionType } from "../../actionTypes";
import http from "../../../services/httpService";
import { TActionCreator } from "../../reducers/types";
import { categorizeLeague } from "./categorizePerLeague";

export interface TAction {
  type: string;
  payload: any;
}

export const getFixtures =
  (date: string): TActionCreator<void> =>
  async (dispatch) => {
    dispatch({
      type: ActionType.GET_FIXTURES_PENDING,
      payload: [],
    });

    try {
      const headers = {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "6f1e5c63a4860aa8f47b6ca31e630c8b",
      };
      const promise = http.get(
        `https://v3.football.api-sports.io/fixtures?timezone=Asia/Tehran&date=${date}`,
        {
          headers,
        }
      );
      const { data } = await promise;
      const categorizedLeague = categorizeLeague(data);
      dispatch({
        type: ActionType.GET_FIXTURES_SUCCESS,
        payload: categorizedLeague,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_FIXTURES_FAIL,
        payload: err.message,
      });
    }
  };
