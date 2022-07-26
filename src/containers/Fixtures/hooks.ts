import { QueryOptions, useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../utils/enums";
import { browseFixturesRequest } from "./api";
import { BrowseFixturesArgs, BrowseFixturesResponse } from "./types";

export const useBrowseMessages = (
  args: BrowseFixturesArgs,
  options: QueryOptions<BrowseFixturesResponse> = {}
) => {
  return useQuery(
    [QueryKeys.BROWSE_FIXTURES, args],
    () => browseFixturesRequest(args),
    options
  );
};
