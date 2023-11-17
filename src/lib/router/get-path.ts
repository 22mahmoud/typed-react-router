import { generatePath, createPath } from "react-router-dom";

import { searchParamsKey } from "../../utils/constants";

type CommonParams<T> = { _search?: T; hash?: string };

type GetPath = {
  <
    P extends Record<string, any> | undefined | null = undefined,
    T extends Record<string, any> = Record<string, any>
  >(
    path: string
  ): P extends Record<string, any>
    ? (params: P & CommonParams<T>) => string
    : (params?: CommonParams<T>) => string;
};

export const getPath: GetPath = (path) =>
  ((params: Record<string, any> = {}) => {
    const { hash, [searchParamsKey]: searchParams, ...rest } = params;

    const search = new URLSearchParams(searchParams).toString();

    const pathname = generatePath(path, { ...rest });

    return createPath({ search, pathname, hash });
  }) as any;
