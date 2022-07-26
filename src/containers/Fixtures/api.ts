import { BrowseFixturesArgs, BrowseFixturesResponse } from "./types";
import { apiInstance } from "./../../utils/http";
import { endpoints } from "../../utils/endpoints";

export function browseFixturesRequest(
  args: BrowseFixturesArgs
): Promise<BrowseFixturesResponse> {
  return apiInstance
    .get(endpoints.FIXTURES.BROWSE, { params: args })
    .then((payload) => {
      return payload.data;
    });
}
