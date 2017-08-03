import _ from 'lodash'

export default function RecentPost(state = {}, action) {

  switch (action.type) {


    case 'RECENT_POST':
      {
        if (checkValue(action.payload) &&
          checkValue(action.payload.data) &&
          checkValue(action.payload.data.data))
          return _.mapKeys(action.payload.data.data, "_id");
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
