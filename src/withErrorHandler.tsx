import React from "react";
import ErrorComponent from "./components/ErrorComponent";

/**
 *
 * @param WrappedComponent
 * @param shouldRenderErrorHook optional Hook function to determin error should be show or not (defaultValue is true)
 * @interface __IWithErrorHandlerProps__ import and use to component props type
 * @example withErrorHandler<IComponentProps>(MyComponent, (props) => {
 * return useSelector(state=> state.data.length === 0);
 * })
 * @returns Component with error handler
 */

type ThrowErrorType = (err?: Error) => void;

function withErrorHandler(
  WrappedComponent: (props: any) => JSX.Element,
  shouldRenderErrorHook?: (error: Error | null, props: any) => boolean
) {
  return React.memo((props: any) => {
    const [error, setError] = React.useState<Error | null>(null);
    const _shouldRenderError = shouldRenderErrorHook
      ? shouldRenderErrorHook(error, props)
      : true;

    const throwError: ThrowErrorType = React.useCallback(
      (exception = new Error()) => {
        setError(exception);
      },
      []
    );

    const tryToSolve = React.useCallback(() => {
      setError(null);
    }, []);

    return error && _shouldRenderError ? (
      <ErrorComponent error={error} tryToSolve={tryToSolve} />
    ) : (
      <WrappedComponent {...props} throwError={throwError} />
    );
  });
}

export default withErrorHandler;
