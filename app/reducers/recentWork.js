import _ from 'lodash'

export default function RecentWork(state = {}, action) {
  console.log('Action: ' + action.type + '  Action Payload:' + action.payload);
  switch (action.type) {
    case 'RECENT_WORK': {
      if (checkValue(action.payload) &&
        checkValue(action.payload.data) &&
        checkValue(action.payload.data.data))
        return _.mapKeys(action.payload.data.data, "_id");
      else
        return null;
    }

    case 'RECENT_WORK_DETAILS':
      {
        if (checkValue(action.payload) &&
          checkValue(action.payload.data) &&
          checkValue(action.payload.data.data))
          return action.payload.data.data;
        else
          return null;
      }

  }
  return state;
};

function checkValue(key) {
  if (key == undefined || key == null) {
    return false;
  }
  return true;
}
