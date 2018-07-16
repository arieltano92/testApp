export const CONTENT_FETCHING = "CONTENT_FETCHING";
export const CONTENT_FETCHED = "CONTENT_FETCHED";
export const CONTENT_FETCH_FAILED = "CONTENT_FETCH_FAILED";



export function contentFetch(isLoading) {
    return {
        type: CONTENT_FETCHING,
        payload: { isLoading
        }
    };
}

export function contentFetched(content, status = 200) {
    return {
        type: CONTENT_FETCHED,
        payload: {
            content: content,
            status: status
        }
    };
}

export function contentFetchFailed(message, status = 404) {
    return {
        type: CONTENT_FETCH_FAILED,
        payload: {
            content: message,
            status: status
        }
    }
}



export function itemsFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                dispatch(contentFetch(true));
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                dispatch(contentFetched(items))}
            )
            .catch((response) => dispatch(contentFetchFailed(response.statusText,response.status)));
    };
}