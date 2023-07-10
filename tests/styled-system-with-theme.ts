import { expectAssignable } from 'tsd'
import { Token } from '../styled-system-with-theme/tokens';

expectAssignable<Token>("colors.red.100"); // From default presets
expectAssignable<Token>("colors.test.light"); // From theme