import config from 'config';
import EnvVariableGetter from './EnvVariableGetter';
import stringTypeCheckFunction from './typeCheckFunctions';

const envVariableGetter = new EnvVariableGetter((key) => config.get(key));

export default {
  MOD_NAME: envVariableGetter.getTypedEnvironmentVariable<string>('MOD_NAME', stringTypeCheckFunction),
  MOD_AUTHOR: envVariableGetter.getTypedEnvironmentVariable<string>('MOD_AUTHOR', stringTypeCheckFunction),
  MOD_URL: envVariableGetter.getTypedEnvironmentVariable<string>('MOD_URL', stringTypeCheckFunction),
  OPENRCT2_PATH: envVariableGetter.getTypedEnvironmentVariable<string>('OPENRCT2_PATH', stringTypeCheckFunction),
};
