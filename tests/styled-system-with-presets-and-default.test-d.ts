import { expectAssignable } from 'tsd'
import { Token } from '../styled-system-with-presets-and-default/tokens';

expectAssignable<Token>("colors.red.100");
expectAssignable<Token>("colors.test.light");