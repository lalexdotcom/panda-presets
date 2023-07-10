import { expectAssignable } from 'tsd'
import { Token } from '../styled-system-with-two-presets/tokens';

expectAssignable<Token>("colors.red.100");
expectAssignable<Token>("colors.test.light");
expectAssignable<Token>("colors.test.dark");
expectAssignable<Token>("sizes.3xs");