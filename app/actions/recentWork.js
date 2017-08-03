import axios from 'axios';
import _ from 'lodash';

export default function recentWork() {
    const url = '/getAllWork';
    let request = axios.get(url);
    if (!request) {
        request = {
            data: {
                data: null
            }
        };
    }
    return {
        type: 'RECENT_WORK',
        payload: request,
    };
}

export function recentWorkDetails(id) {
    const url = `/getAllWork/${id}`;
    let request = axios.get(url);
    if (!request) {
        request = {
            data: {
                data: {}
            }
        };
    }
    return {
        type: 'RECENT_WORK_DETAILS',
        payload: request,
    };
}


export function recentPost() {
    const url = '/getAllPost';
    let request = axios.get(url);
    if (!request) {
        request = {
            data: {
                data: null
            }
        };
    }
    return {
        type: 'RECENT_POST',
        payload: request,
    };
}


