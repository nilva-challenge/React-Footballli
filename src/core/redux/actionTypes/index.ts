export enum ActionType {
  GET_FIXTURES_PENDING = "GET_FIXTURES_PENDING",
  GET_FIXTURES_SUCCESS = "GET_FIXTURES_SUCCESS",
  GET_FIXTURES_FAIL = "GET_FIXTURES_FAIL",
}

interface actionPending {
  type: ActionType.GET_FIXTURES_PENDING;
}

interface actionSuccess {
  type: ActionType.GET_FIXTURES_SUCCESS;
  payload: any[];
}

interface actionFail {
  type: ActionType.GET_FIXTURES_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
