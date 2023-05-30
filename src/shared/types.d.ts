// Postman Echo is service you can use to test your REST clients and make sample API calls.
// It provides endpoints for `GET`, `POST`, `PUT`, various auth mechanisms and other utility
// endpoints.
//
// The documentation for the endpoints as well as example responses can be found at
// [https://postman-echo.com](https://postman-echo.com/?source=echo-collection-app-onboarding)

/**
 * DigestAuth Success
 *
 * GET https://postman-echo.com/digest-auth
 *
 * This endpoint sends a hashed Digest Authorization header to gain access to a valid `200
 * Ok` response code. In Postman, it uses the stored [global
 *
 * variables](https://www.getpostman.com/docs/environments#gloval-variables?source=echo-collection-app-onboarding),
 * `echo_digest_realm` and `echo_digest_nonce`, to generate the hashed authorisation
 * header.
 *
 * Within Postman, for this request to successfully authenticate, running the previous
 * request "DigestAuth Request" stores the relevant information within the global variables.
 */
export interface DigestAuthSuccess {
    authenticated: boolean;
}

/**
 * Basic Auth
 *
 * GET https://postman-echo.com/basic-auth
 *
 * This endpoint simulates a **basic-auth** protected endpoint.
 * The endpoint accepts a default username and password and returns a status code of `200
 * ok` only if the same is provided.
 * Otherwise it will return a status code `401 unauthorized`.
 *
 * > Username: `postman`
 * >
 * > Password: `password`
 *
 * To use this endpoint, send a request with the header `Authorization: Basic
 * cG9zdG1hbjpwYXNzd29yZA==`.
 * The cryptic latter half of the header value is a base64 encoded concatenation of the
 * default username and password.
 * Using Postman, to send this request, you can simply fill in the username and password in
 * the "Authorization" tab and Postman will do the rest for you.
 *
 * To know more about basic authentication, refer to the [Basic Access
 * Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) wikipedia
 * article.
 * The article on [authentication
 *
 * helpers](https://www.getpostman.com/docs/helpers#basic-auth?source=echo-collection-app-onboarding)
 * elaborates how to use the same within the Postman app.
 */
export interface BasicAuth {
    authenticated: boolean;
}

/**
 * OAuth1.0 Verify Signature
 *
 * GET https://postman-echo.com/oauth1
 *
 * OAuth1.0a is a specification that defines a protocol that can be used by one
 * service to access "protected" resources (endpoints) on another service. A
 * major part of OAuth1.0 is HTTP Request Signing. This endpoint allows you to
 * check whether the request calculation works properly in the client.
 *
 * The endpoint supports the HTTP ``Authorization`` header. In case the signature
 * verification fails, the endpoint provides the four debug values,
 *
 * * ``base_uri``
 * * ``normalized_param_string``
 * * ``base_string``
 * * ``signing_key``
 *
 * For more details about these parameters, check the [OAuth1.0a
 * Specification](http://oauth.net/core/1.0a/)
 *
 * In order to use this endpoint, you can set the following values:
 *
 * > Consumer Key: ``RKCGzna7bv9YD57c``
 * >
 * > Consumer Secret: ``D+EdQ-gs$-%@2Nu7``
 *
 * If you are using Postman, also check the "Add params to header" and
 * "Auto add parameters" boxes.
 */
export interface OAuth10VerifySignature {
    favorites?:               null;
    all?:                     ILeague[];
    pinned?:                  any[];
    live?:                    any[];
    status?:                  string;
    message?:                 string;
    base_uri?:                string;
    normalized_param_string?: string;
    base_string?:             string;
    signing_key?:             string;
}

export interface ILeague {
    fixtures: Fixture[];
    logo:     string;
    id:       string;
    api_id:   string;
    name:     string;
    season:   string;
}

export interface Fixture {
    home:               Away;
    away:               Away;
    id:                 string;
    api_id:             string;
    status:             Status;
    elapsed:            number;
    start_time:         Date;
    home_goals:         number;
    away_goals:         number;
    home_penalty_goals: null;
    away_penalty_goals: null;
    live_url:           null;
    archive_url:        null | string;
}

export interface Away {
    logo:   string;
    id:     number;
    api_id: number;
    name:   string;
}

export enum Status {
    Aet = "AET",
    Ft = "FT",
}

/**
 * Hawk Auth
 *
 * GET https://postman-echo.com/auth/hawk
 *
 * This endpoint is a Hawk Authentication protected endpoint. [Hawk
 * authentication](https://github.com/hueniverse/hawk) is a widely used protocol for
 * protecting API endpoints. One of Hawk's main goals is to enable HTTP authentication for
 * services that do not use TLS (although it can be used in conjunction with TLS as well).
 *
 * In order to use this endpoint, select the "Hawk Auth" helper inside Postman, and set the
 * following values:
 *
 * Hawk Auth ID: `dh37fgj492je`
 *
 * Hawk Auth Key: `werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn`
 *
 * Algorithm: `sha256`
 *
 * The rest of the values are optional, and can be left blank. Hitting send should give you
 * a response with a status code of 200 OK.
 */
export interface HawkAuth {
    status:  string;
    message: string;
}

/**
 * Set Cookies
 *
 * GET https://postman-echo.com/cookies/set?foo1=bar1&foo2=bar2
 *
 * The cookie setter endpoint accepts a list of cookies and their values as part of URL
 * parameters of a `GET` request. These cookies are saved and can be subsequently retrieved
 * or deleted. The response of this request returns a JSON with all cookies listed.
 *
 * To set your own set of cookies, simply replace the URL parameters "foo1=bar1&foo2=bar2"
 * with your own set of key-value pairs.
 */
export interface SetCookies {
    cookies: SetCookiesCookies;
}

export interface SetCookiesCookies {
    foo1: string;
    foo2: string;
}

/**
 * Get Cookies
 *
 * GET https://postman-echo.com/cookies
 *
 * Use this endpoint to get a list of all cookies that are stored with respect to this
 * domain. Whatever key-value pairs that has been previously set by calling the "Set
 * Cookies" endpoint, will be returned as response JSON.
 */
export interface GetCookies {
    cookies: GetCookiesCookies;
}

export interface GetCookiesCookies {
    foo2: string;
}

/**
 * Delete Cookies
 *
 * GET https://postman-echo.com/cookies/delete?foo1&foo2
 *
 * One or more cookies that has been set for this domain can be deleted by providing the
 * cookie names as part of the URL parameter. The response of this request is a JSON
 * containing the list of currently set cookies.
 */
export interface DeleteCookies {
    cookies: GetCookiesCookies;
}

/**
 * Request Headers
 *
 * GET https://postman-echo.com/headers
 *
 * A `GET` request to this endpoint returns the list of all request headers as part of the
 * response JSON.
 * In Postman, sending your own set of headers through the [Headers
 *
 * tab](https://www.getpostman.com/docs/requests#headers?source=echo-collection-app-onboarding)
 * will reveal the headers as part of the response.
 */
export interface RequestHeaders {
    headers: Headers;
}

export interface Headers {
    host:                string;
    accept:              string;
    "accept-encoding":   string;
    "accept-language":   string;
    "cache-control":     string;
    "my-sample-header":  string;
    "postman-token":     string;
    "user-agent":        string;
    "x-forwarded-port":  string;
    "x-forwarded-proto": string;
}

/**
 * Response Headers
 *
 * GET
 * https://postman-echo.com/response-headers?Content-Type=text/html&test=response_headers
 *
 * This endpoint causes the server to send custom set of response headers. Providing header
 * values as part of the URL parameters of a `GET` request to this endpoint returns the same
 * as part of response header.
 *
 * To send your own set of headers, simply add or replace the the URL parameters with your
 * own set.
 */
export interface ResponseHeaders {
    "Content-Type": string;
    test:           string;
}

/**
 * Response Status Code
 *
 * GET https://postman-echo.com/status/200
 *
 * This endpoint allows one to instruct the server which status code to respond with.
 *
 * Every response is accompanied by a status code. The status code provides a summary of the
 * nature of response sent by the server. For example, a status code of `200` means
 * everything is okay with the response and a code of `404` implies that the requested URL
 * does not exist on server.
 * A list of all valid HTTP status code can be found at the [List of Status
 * Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) wikipedia article. When
 * using Postman, the response status code is described for easy reference.
 *
 * Note that if an invalid status code is requested to be sent, the server returns a status
 * code of `400 Bad Request`.
 */
export interface ResponseStatusCode {
    status: number;
}

/**
 * Delay Response
 *
 * GET https://postman-echo.com/delay/3
 *
 * Using this endpoint one can configure how long it takes for the server to come back with
 * a response. Appending a number to the URL defines the time (in seconds) the server will
 * wait before responding.
 *
 * Note that a maximum delay of 10 seconds is accepted by the server.
 */
export interface DelayResponse {
    delay: string;
}

/**
 * Timestamp validity
 *
 * GET https://postman-echo.com/time/valid?timestamp=2016-10-10
 *
 * A simple `GET` request to `/time/valid` to determine the validity of the timestamp,
 * (current by default).
 * This endpoint accepts `timestamp`, `locale`, `format`, and `strict` query parameters to
 * construct the date time instance to check against.
 *
 * Responses are provided in JSON format, with a valid key to indicate the result. The
 * response code is `200`.
 *
 * ```
 * {
 * valid: true/false
 * }
 * ```
 */
export interface TimestampValidity {
    valid: boolean;
}

/**
 * Transform collection from format v1 to v2
 *
 * POST https://postman-echo.com/transform/collection?from=1&to=2
 */
export interface TransformCollectionFromFormatV1ToV2 {
    variables: any[];
    info:      Info;
    item:      Item[];
}

export interface Info {
    name:        string;
    _postman_id: string;
    description: string;
    schema:      string;
}

export interface Item {
    name:     string;
    event?:   Event[];
    request:  ItemRequest;
    response: any[];
}

export interface Event {
    listen: string;
    script: Script;
}

export interface Script {
    type: string;
    exec: string[];
}

export interface ItemRequest {
    url:    string;
    method: string;
    header: Header[];
    body:   Body;
}

export interface Body {
    mode: string;
    raw:  string;
}

export interface Header {
    key:         string;
    value:       string;
    description: string;
}

/**
 * Transform collection from format v2 to v1
 *
 * POST https://postman-echo.com/transform/collection?from=2&to=1
 */
export interface TransformCollectionFromFormatV2ToV1 {
    id:          string;
    name:        string;
    description: string;
    order:       string[];
    folders:     any[];
    requests:    RequestElement[];
}

export interface RequestElement {
    id:                string;
    name:              string;
    collectionId:      string;
    method:            string;
    headers:           string;
    data:              any[];
    rawModeData:       string;
    tests?:            string;
    preRequestScript?: string;
    url:               string;
    dataMode?:         string;
}
