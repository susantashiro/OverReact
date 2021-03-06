//control state for options selection
export default function handleRadioBtnChange(e, obj) {
  const target = e.target.id;
  const newState = obj;
  switch (target) {
    case 'es6':
      newState.es6 = !newState.es6;
      break;
    case 'express':
      newState.express = true;
      newState.hapi = false;
      newState.basic = false;
      newState.gulp = !newState.gulp && !newState.grunt && !newState.webpack ?  true : newState.gulp;
      break;
    case 'hapi':
      newState.express = false;
      newState.hapi = true;
      newState.basic = false;
      newState.gulp = !newState.gulp && !newState.grunt && !newState.webpack ? true : newState.gulp;
      break;
    case 'gulp':
      newState.gulp = true;
      newState.grunt = false;
      newState.webpack = false;
      newState.basic = false;
      newState.express = !newState.express && !newState.hapi ? true : newState.express;
      break;
    case 'grunt':
      newState.gulp = false;
      newState.grunt = true;
      newState.webpack = false;
      newState.basic = false;
      newState.express = !newState.express && !newState.hapi ? true : newState.express;
      break;
    case 'webpack':
      newState.gulp = false;
      newState.grunt = false;
      newState.webpack = true;
      newState.basic = false;
      newState.express = !newState.express && !newState.hapi ? true : newState.express;
      break;
    default:
      newState.basic = !newState.basic;
        newState.express = newState.basic ? false : true;
        newState.hapi = false;
        newState.gulp = newState.basic ? false : true;
        newState.grunt = false;
        newState.webpack = false;
      }
  return newState;
};
